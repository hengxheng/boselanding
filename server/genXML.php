<?php
    include("settings.php");

    $conn = new mysqli($db, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    
    $sql = "SELECT * FROM {$table_name}";

    $records = array();
    $result = $conn->query($sql);
    while($row = $result->fetch_assoc()) {
        $records[] = $row;
    }

    $c_date = date("Y-m-d");

    try{
        $xml=simplexml_load_file("promo.xml");
        foreach ($records as $f){

            $BusinessPartner = $xml->CustomerOrderRegistrationBulk->Customer->BusinessPartner;
            $BusinessPartner->Common->Person->Name->GivenName = $f['firstname'];
            $BusinessPartner->Common->Person->Name->FamilyName = $f['lastname'];

            $BusinessPartner->AddressInformation->Address->PostalAddress->CountryCode = $f['country'];
            $BusinessPartner->AddressInformation->Address->PostalAddress->RegionCode = $f['state'];
            $BusinessPartner->AddressInformation->Address->PostalAddress->CityName = $f['city'];
            $BusinessPartner->AddressInformation->Address->PostalAddress->StreetPostalCode = $f['postcode'];
            $BusinessPartner->AddressInformation->Address->PostalAddress->StreetName = $f['address1'];

            $TimeZoneCode = "";
            if($f['state'] == "NZ"){
                $TimeZoneCode = "NZST";
            }
            else{
                $TimeZoneCode = "AUS".$f['state'];
            }
            
            $BusinessPartner->AddressInformation->Address->PostalAddress->TimeZoneCode = $TimeZoneCode;
            $BusinessPartner->AddressInformation->Address->Telephone[0]->Number->SubscriberID = $f['phone'];
            $BusinessPartner->AddressInformation->Address->Telephone[0]->Number->CountryCode = $f['country'];
            $BusinessPartner->AddressInformation->Address->EMail->URI = $f['email'];

            $xml->CustomerOrderRegistrationBulk->Customer->MarketingPermissions->AssignedMarketingPermission[1]->ValidFrom = $f['purchased_date'];
            $xml->CustomerOrderRegistrationBulk->Customer->MarketingPermissions->AssignedMarketingPermission[1]->Permission = "002";
            $xml->CustomerOrderRegistrationBulk->Customer->MarketingPermissions->AssignedMarketingPermission[1]->Origin = "email";

            $Order =  $xml->CustomerOrderRegistrationBulk->Order;
            $Order->SalesOrder->BuyerID = $f['id'];
            $Order->SalesOrder->Date = $f['purchased_date'];
            $Order->SalesOrder->BuyerDate = $f['purchased_date'];
            $Order->SalesOrder->TextCollection->Text->TextContent->Text ="Redemption - Purchased Lifestyle® 535 home theatre system. Serial of Product: ".$f['serialNo']." Bonus product(s): SoundTouch® 20 Black. Reference: ".$f['id'];
            

            //Attachment
            $AttachmentFolder = $Order->SalesOrder->AttachmentFolder->Document;
            $AttachmentFolder->PathName = $f['upload_file'];
            
            $file_name = explode('/', $f['upload_file']);
            $ext = explode('.', $file_name[2]);
            $AttachmentFolder->Name = $file_name[2];

            $MIMECode = "image/jpeg";
            if($ext[1] == "png"){
                $MIMECode = "image/png";
            }

            $AttachmentFolder->MIMECode = $MIMECode;
            $AttachmentFolder->FileContentBinaryObject[0]['mimeCode'] = $MIMECode;
            $AttachmentFolder->FileContentBinaryObject[0]['fileName'] = $file_name[2];

            $image_data = file_get_contents($f['upload_file']);
            $encoded_image = base64_encode($image_data);
            $AttachmentFolder->FileContentBinaryObject = $encoded_image;

            // end of Attachment

            unset($Order->SalesOrder->Item->Party->InternalID);
            
            $IndividualMaterial =  $xml->CustomerOrderRegistrationBulk->Registration->IndividualMaterial;
            $IndividualMaterial->ObjectWarranties->StartDate = $c_date;
            $IndividualMaterial->InvolvedParties->ValidityStartDate = $c_date;
            $IndividualMaterial->ERPIdentification->SerialID = $f['serialNo'];

            $xml->asXml('../xml/'.$f['id'].'.xml');

            echo "done";
        }
    }
    catch (Exception $e) {
        echo 'Message: ' .$e->getMessage();
    }

    $conn->close();
?>