package app.util;

import java.awt.AWTException;
import java.awt.Rectangle;
import java.awt.Toolkit;
import java.awt.Robot;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.File;
import javax.imageio.ImageIO;

public class Screenshot {

    public static final long serialVersionUID = 1L;

    public static void main(String[] args) {
        int i = 1;
        try {

            while (true) {
                Robot r = new Robot();
                Rectangle screenRect = new Rectangle(Toolkit.getDefaultToolkit().getScreenSize());
                BufferedImage capture = new Robot().createScreenCapture(screenRect);

                Thread.sleep(10000);
                // It saves screenshot to desired path
                String path = "D://spring-boot//College-Sreedarsh//College_Management_System//Source//Institute Managament System//uploads//SessionDocs//";

                File theDir = new File(path+"sessionId"+i);
                if (!theDir.exists()) {
                    theDir.mkdirs();
                }
                path += "sessionId"+i+"//image"+i+".bmp";

                // Used to get ScreenSize and capture image
                ImageIO.write(capture, "bmp", new File(path));
                System.out.println("Screenshot saved");
                i++;
            }

        } catch (AWTException | IOException | InterruptedException ex) {
            System.out.println(ex);
        }
    }
}
