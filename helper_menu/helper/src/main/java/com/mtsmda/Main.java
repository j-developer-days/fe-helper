package com.mtsmda;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.Properties;

public class Main {
    public static void main(String[] args) throws IOException, URISyntaxException {
//        if (args.length == 0) {
//            System.out.println("settings.properties should be near current jar file");
//            System.out.println("in settings.properties:");
//            System.out.println("port properties - write int value");
//            System.out.println("destination-path properties - write folder destination");
//        } else {
        final String menuShellFileName = "menu.sh";
        final String settingsPropertiesFileName = "settings.properties";
        Properties properties = new Properties();
//        if (!args[0].isBlank()) {
//            settingsPropertiesFileName = args[0] + settingsPropertiesFileName;
//        }

        Path jarDir = Paths.get(Main.class.getProtectionDomain().getCodeSource().getLocation().toURI()).getParent();
//        System.out.println("path jarDir - " + jarDir);
        properties.load(Files.newBufferedReader(Path.of(jarDir.toFile().getAbsolutePath(), settingsPropertiesFileName)));
        String menuSh = Files.readString(Path.of(jarDir.toFile().getAbsolutePath(), menuShellFileName));
        String menuSehFormatted = String.format(menuSh, LocalDateTime.now(), properties.get("port").toString());
        File file = new File(properties.get("destination-path").toString());

        String destination = (file.isFile() ? file.getParent() : file.getAbsolutePath()) + File.separator + menuShellFileName;
        Files.writeString(Path.of(destination), menuSehFormatted);
        System.out.println("write success to - " + destination);
//        }

    }
}