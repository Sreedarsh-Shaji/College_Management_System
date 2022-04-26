package app.util;

//public class WatchdogServer extends HttpHandler
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Date;

public class WatchdogServer {

    public static void main(String args[]) throws Exception {
        ServerSocket server = new ServerSocket(8812);
        System.out.println("Watchdog Signature running");
        while (true) {
            try (Socket socket = server.accept()) {
                String httpResponse = "HTTP/1.1 200 OK\r\n\r\n" + "{'Status':'OK'}";
                socket.getOutputStream().write(httpResponse.getBytes("UTF-8"));
            }
        }

    }
}
