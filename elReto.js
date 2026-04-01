for (x = 1; x <= 10; x++) {

    if (x % 4 === 0 && x % 6 === 0) {
        document.writeln("ALERTA CRÍTICA");
    } else if (x % 4 === 0) {
        document.writeln("Chequeo de seguridad");
    } else if (x % 6 === 0) {
        document.writeln("Alerta del sistema");
    } else if (x % 9 === 0) {
        document.writeln("Sistema bloqueado");
        break;
    } else{
         document.writeln("Ciclo ", x, " operativo");
    }
    document.writeln("<br><br/>")
}
