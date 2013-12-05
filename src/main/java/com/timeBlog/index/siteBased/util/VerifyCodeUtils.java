package com.timeBlog.index.siteBased.util;
	
import java.awt.Color;  
import java.awt.Font;  
import java.awt.Graphics2D;  
import java.awt.LinearGradientPaint;  
import java.awt.Paint;  
import java.awt.geom.AffineTransform;  
import java.awt.image.BufferedImage;  
import java.io.File;  
import java.io.FileOutputStream;  
import java.io.IOException;  
import java.io.OutputStream;  
import java.util.Arrays; 
import java.util.Random;  
      




import javax.imageio.ImageIO;  
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
      
    public class VerifyCodeUtils{  
    	
          
        public static final String VERIFY_CODES = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
      
        /**
         * 次方法将得到一个验证图片，而且将验证码放入session中
         * “session.setAttribute("verifyCode", verifyCode)”
         * @param request
         * @param response
         * @param imgsize 验证图片的长度，如四个字符为4
         * @param width   验证图片的宽度，px.
         * @param height  验证图片的高度，px
         * @throws IOException 
         */
        public static void getVerifyCode(HttpServletRequest request,HttpServletResponse response
        					,int imgsize,int width,int height) throws IOException{
        	String verifyCode = generateVerifyCode(imgsize);
        	HttpSession session = request.getSession(true);
        	session.setAttribute("verifyCode", verifyCode);
        	response.setContentType("image/jpeg");  
            //禁止图像缓存。  
            response.setHeader("Pragma", "no-cache");  
            response.setHeader("Cache-Control", "no-cache");  
            response.setDateHeader("Expires", 0);  
        	outputImage(width, height, response.getOutputStream(), verifyCode);
        }
        /** 
         * 使用系统默认字符源生成验证码 
         * @param verifySize    验证码长度 
         * @return 
         */  
        public static String generateVerifyCode(int verifySize){
            return generateVerifyCode(verifySize, VERIFY_CODES);  
        }  
        /** 
         * 使用指定源生成验证码 
         * @param verifySize    验证码长度 
         * @param sources   验证码字符源 
         * @return 
         */  
        public static String generateVerifyCode(int verifySize, String sources){  
            if(sources == null || sources.length() == 0){  
                sources = VERIFY_CODES;  
            }  
            int codesLen = sources.length();  
            Random rand = new Random(System.currentTimeMillis());  
            StringBuilder verifyCode = new StringBuilder(verifySize);  
            for(int i = 0; i < verifySize; i++){  
                verifyCode.append(sources.charAt(rand.nextInt(codesLen-1)));  
            }  
            return verifyCode.toString();  
        }  
          
        /** 
         * 生成随机验证码文件,并返回验证码值 
         * @param w 
         * @param h 
         * @param outputFile 
         * @param verifySize 
         * @return 
         * @throws IOException 
         */  
        public static String outputVerifyImage(int w, int h, File outputFile, int verifySize) throws IOException{  
            String verifyCode = generateVerifyCode(verifySize);  
            outputImage(w, h, outputFile, verifyCode);  
            return verifyCode;  
        }  
          
        /** 
         * 输出随机验证码图片流,并返回验证码值 
         * @param w 
         * @param h 
         * @param os 
         * @param verifySize 
         * @return 
         * @throws IOException 
         */  
        public static String outputVerifyImage(int w, int h, OutputStream os, int verifySize) throws IOException{  
            String verifyCode = generateVerifyCode(verifySize);  
            outputImage(w, h, os, verifyCode);  
            return verifyCode;  
        }  
          
        /** 
         * 生成指定验证码图像文件 
         * @param w 
         * @param h 
         * @param outputFile 
         * @param code 
         * @throws IOException 
         */  
        public static void outputImage(int w, int h, File outputFile, String code) throws IOException{  
            if(outputFile == null){  
                return;  
            }  
            File dir = outputFile.getParentFile();  
            if(!dir.exists()){  
                dir.mkdirs();  
            }  
            try{  
                outputFile.createNewFile();  
                FileOutputStream fos = new FileOutputStream(outputFile);  
                outputImage(w, h, fos, code);  
                fos.close();  
            } catch(IOException e){  
                throw e;  
            }  
        }  
          
        /** 
         * 输出指定验证码图片流 
         * @param w 
         * @param h 
         * @param os 
         * @param code 
         * @throws IOException 
         */  
        public static void outputImage(int w,  
                                int h,  
                                OutputStream os,  
                                String code) throws IOException{  
            int verifySize = code.length();  
            BufferedImage image = new BufferedImage(w, h, BufferedImage.TYPE_INT_RGB);  
            Random rand = new Random();  
            Graphics2D g2 = image.createGraphics();  
            Color[] colors = new Color[5];  
            Color[] colorSpaces = new Color[] {
            		new Color(32, 39, 120),new Color(26, 86, 97),
            		new Color(23, 106, 88),new Color(21, 124, 79),new Color(3, 149, 68),
            		new Color(72, 169, 53),new Color(32, 39, 120 )
            				};  
            float[] fractions = new float[colors.length];  
            for(int i = 0; i < colors.length; i++){  
                colors[i] = colorSpaces[rand.nextInt(colorSpaces.length)];  
                fractions[i] = rand.nextFloat();  
            }  
            Arrays.sort(fractions);  
            Paint linearPaint = new LinearGradientPaint(0, 0, w, h, fractions, colors);  
            Paint linearPaint2 = new LinearGradientPaint(0, 0, w, h, new float[]{0.3f, .6f, .8f, .9f}, new Color[]{new Color(245, 197, 0),new Color(228, 118, 21),new Color(221, 74, 22),new Color(240, 233, 39)});  
            //设置图片背景为白色  
            g2.setPaint(Color.WHITE);  
            g2.fillRect(0, 0, w, h);  
            //设置图片渐变背景  
            g2.setPaint(linearPaint);  
            g2.fillRoundRect(0, 0, w, h, 5, 5);  
              
            g2.setPaint(linearPaint2);  
            int fontSize = (int) (Math.min(w/verifySize, h));  
            Font font = new Font("微软雅黑", Font.BOLD, fontSize);  
            g2.setFont(font);  
            char[] chars = code.toCharArray();  
            for(int i = 0; i < verifySize; i++){  
                AffineTransform affine = new AffineTransform();  
                affine.setToRotation(Math.PI / 4 * rand.nextDouble() * (rand.nextBoolean() ? 1 : -1), (w / verifySize) * i + fontSize/2, h/2);  
                g2.setTransform(affine);  
                g2.drawChars(chars, i, 1, (w / verifySize) * i, h/2 + fontSize /2);  
            }  
            g2.dispose();  
            ImageIO.write(image, "jpg", os);  
        }  
/*
        public static void main(String[] args) throws IOException{  
            File dir = new File("/home/jove");  
            int w = 400, h = 80;  
            for(int i = 0; i < 15; i++){  
                String verifyCode = generateVerifyCode(8);  
                File file = new File(dir, verifyCode + ".jpg");  
                outputImage(w, h, file, verifyCode);  
            }  
        } 
*/
    }  