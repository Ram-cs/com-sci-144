import java.io.*;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class ComputeSHA {

    public static void main(String[] args) throws IOException, NoSuchAlgorithmException {
        
        //making sure we have right argument
        if(args.length == 0) {
            System.out.println("Provide 1 argument");
            System.exit(0);
        }
        
        if(args.length != 1) {
            System.out.println("MUST be 1 argument");
            System.exit(0);
        }
        
        
        String fname = args[0]; //get the argument
        
        File file = new File(fname);
        
        //check if the file is readable
        if(file.canRead() == false) {
            System.out.println("File is not readable");
            System.exit(1);
        }
        
        
        FileInputStream fis = null;
        try {
            fis = new FileInputStream(file);
        } catch (FileNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        
        
        byte[] b = new byte[1024];
        MessageDigest msgDigest = MessageDigest.getInstance("SHA-1");
        
        
        int check = 0;
        while((check = fis.read(b)) != -1) {
            msgDigest.update(b, 0, check);
            
        }
        
        
        byte[] digest = msgDigest.digest();
        
        
        StringBuffer hexa_conversion = new StringBuffer();
        
        for(byte byt: digest) {
            hexa_conversion.append(String.format("%02x", byt & 0xff));
        }
         
        System.out.println(hexa_conversion.toString());
        System.out.println(); //print new line at the end
    }


}
