package sexygroup.spring.utils;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

import java.io.File;
import java.io.IOException;
import java.nio.file.FileSystems;
import java.nio.file.Path;

public class QRCodeGenerator {
    private static int width=350;
    private static int height=350;
    private static String format="png";



    /**
     * 根据text生成二维码图片，保存为filePath
     * @param text
     * @param filePath
     * @throws WriterException
     * @throws IOException
     */
    public static void generateQRCodeImage(String text,String filePath) throws WriterException, IOException {
        QRCodeWriter qrCodeWriter = new QRCodeWriter();

        BitMatrix bitMatrix = qrCodeWriter.encode(text, BarcodeFormat.QR_CODE, width, height);

        File file=new File(filePath);
        if (!file.getParentFile().exists()){
            file.getParentFile().mkdirs();
        }
        Path path = FileSystems.getDefault().getPath(filePath);

        MatrixToImageWriter.writeToPath(bitMatrix, format, path);
    }

    public static void main(String[] args) {
        try {
            generateQRCodeImage("http://192.168.137.191:8081/spring/swagger-ui.html", "app/QRCode/IPCode.png");
        } catch (WriterException e) {
            System.out.println("Could not generate QR Code, WriterException :: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("Could not generate QR Code, IOException :: " + e.getMessage());
        }

    }

}
