function validarNomCompleto(NomCompleto) {
    if (NomCompleto === "") {
        document.getElementById('nombreCompleto').innerHTML = "Por favor, rellene todos los campos"
        //document.getElementById('envio').setAttribute("disabled", ""), pasamos esta linea abajo para evitar la repeticion
    } else {
        //validar si el contenido de NomCompleto si tiene un formato valido
        //buscar regla para verificarlo en cualquier pag web pej: RegEx Tester y crear el patron
        let pattern = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
        return pattern.test(NomCompleto)

    }