/*
🧩 Reto: Crear un objeto de tipo "Cuenta Bancaria"
Crea un objeto llamado cuentaBancaria que contenga las siguientes propiedades:

--titular: nombre del titular (string)

--saldo: cantidad actual de dinero (number)

--activa: si la cuenta está activa o no (boolean)

Y los siguientes métodos:

1. consultarSaldo(): muestra el saldo actual.

2. depositar(cantidad): suma la cantidad al saldo si la cuenta está activa.

3. retirar(cantidad): resta la cantidad del saldo si hay suficiente dinero y la cuenta está activa.

4. desactivarCuenta(): cambia el estado de la cuenta a inactiva.

5. mostrarResumen(): muestra todos los datos de la cuenta en una frase clara.

💡 Reglas:
--Si intentas depositar o retirar con la cuenta inactiva, debe mostrar un mensaje: "Cuenta inactiva. No se pueden realizar operaciones."

--Si intentas retirar más dinero del que hay, muestra: "Fondos insuficientes."
*/