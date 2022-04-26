/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package app.util;

import java.net.Inet4Address;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.net.UnknownHostException;
import java.util.Enumeration;

public class NetworkCardAccess {
    
    
    public static void main(String[] args) {
     
    }

    public static String GetAddress(NcReq ncReq) {
        InetAddress ip;
        String result = "";
	try {
			
		ip = InetAddress.getLocalHost();
		//System.out.println("Current IP address : " + );
                if(ncReq == NcReq.MAC){
                    result = ip.getHostAddress();
                }
		
		NetworkInterface network = NetworkInterface.getByInetAddress(ip);
			
		byte[] mac = network.getHardwareAddress();			
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < mac.length; i++) {
			sb.append(String.format("%02X%s", mac[i], (i < mac.length - 1) ? "-" : ""));		
		}
		
                if(ncReq == NcReq.MAC){ result = sb.toString(); } 
			
	} 
        catch (UnknownHostException e) {e.printStackTrace();} 
        catch (SocketException e){e.printStackTrace();}
	    
        return result;
    }

}

enum NcReq { MAC , PIP };
