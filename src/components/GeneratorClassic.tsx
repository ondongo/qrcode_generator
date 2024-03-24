import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
} from "@chakra-ui/react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import QRCode from "qrcode.react";
import { useEffect, useRef, useState } from "react";

//import PhoneInput from 'react-phone-number-input'
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";

import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "libphonenumber-js";
import EmptyQrCode from "./EmptyQrCode";

function GeneratorClassic() {
  const [url, setUrl] = useState<string>("");
  const qrRef = useRef<any>(null);

  const qrBoxRef = useRef(null);

  const downloadQRCodeAsPDF = async () => {
    if (qrBoxRef.current) {
      const canvas = await html2canvas(qrBoxRef.current);
      const dataUrl = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 180;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(dataUrl, "PNG", 15, 40, imgWidth, imgHeight);
      pdf.save("download.pdf");
    }
  };

  const downloadQRCodeAsImage = async () => {
    if (qrBoxRef.current) {
      // Capture le QR Code avec html2canvas
      const canvas = await html2canvas(qrBoxRef.current);

      // Convertit le canvas en Data URL (format image PNG)
      const imageUrl = canvas.toDataURL("image/png");

      // Crée un élément <a> pour déclencher le téléchargement
      const downloadLink = document.createElement("a");
      downloadLink.href = imageUrl;
      downloadLink.download = "QRCode.png"; // Nom du fichier à télécharger

      // Simule un clic sur le lien pour déclencher le téléchargement
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };
  const [value, setValue] = useState<any>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const testSubmit = (data: any, errors: any) => {
    console.log(data);
  };

  useEffect(() => {
    if (errors) {
      console.log(errors);
    }
  }, [errors]);
  return (
    <Flex
      gap={4}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      p={10}
    >
      <Heading
        fontSize={["4xl", "4xl", "xl", "3xl", "4xl"]}
        textAlign="center"
        letterSpacing="tight"
        transition="0.4s ease-in-out"
        className="stroke-effect-generateur"
      >
        Générateur QRCode
      </Heading>

      <Flex direction={"column"} width={"100%"} gap={"5px"}>
        <Input
          placeholder="Entrez l'URL ici"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          borderColor={"RGB(44, 10, 103)"}
          focusBorderColor="RGB(44, 10, 103)"
        />

        {/* <PhoneInput
    placeholder="Enter phone number"
    value={value}
    onChange={setValue}
    borderColor={"#FA8D0D"}
    focusBorderColor="#FA8D0D"
    defaultCountry="FR"/>
*/}

      </Flex>

      {/* <Button onClick={() => setUrl(url)}>Générer QR Code</Button> */}
      {url ? (
        <>
          <Box ref={qrBoxRef} p="10" borderWidth="1px" borderRadius="lg">
            <QRCode
              value={url}
              size={256}
              level="H"
              includeMargin={true}
              /*  imageSettings={{
              src: "https://dysoft-a7ea7cqc9-dysoftdeveloper.vercel.app/dark-logo.svg", 
              height: 30,
              width: 60,
              excavate: true, 
            }} */
            />
          </Box>

          <Button onClick={downloadQRCodeAsPDF} disabled={!url}>
            Télécharger le code QR au format PDF
          </Button>

          <Button
            onClick={downloadQRCodeAsImage}
            disabled={!url}
            cursor={!url ? "not-allowed" : "pointer"}
          >
            Télécharger le code QR au format Image
          </Button>
        </>
      ) : (
        <EmptyQrCode />
      )}
    </Flex>
  );
}

export default GeneratorClassic;
