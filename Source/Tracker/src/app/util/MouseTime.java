package app.util;

import java.awt.MouseInfo;
import java.io.Serializable;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JOptionPane;

public class MouseTime implements Runnable {

    int seconds = 0;
    int x_coordinate_before = 0;
    int y_coordinate_before = 0;
    int x_coordinate_after = 0;
    int y_coordinate_after = 0;


    public void run() {

        while (true) {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException ex) {
                Logger.getLogger(MouseTime.class.getName()).log(Level.SEVERE, null, ex);
            }
            x_coordinate_before = MouseInfo.getPointerInfo().getLocation().x;
            y_coordinate_before = MouseInfo.getPointerInfo().getLocation().y;
            if (x_coordinate_before == x_coordinate_after && y_coordinate_before == y_coordinate_after) {
                seconds++;
                if (seconds >= 30) {
                    JOptionPane.showMessageDialog(null,"System mouse is inactive for 30 seconds streignt. Will be reported if kept inactive for longer");
                    System.out.println("(" + MouseInfo.getPointerInfo().getLocation().x + ", " + MouseInfo.getPointerInfo().getLocation().y + ")");
                }
            } else {
                seconds = 0;
            }

            x_coordinate_after = x_coordinate_before;
            y_coordinate_after = y_coordinate_before;
        }

    }
    
    public int getSeconds(){ return this.seconds; }

}
