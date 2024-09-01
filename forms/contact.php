<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $name = htmlspecialchars($_POST['name']);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $message = htmlspecialchars($_POST['message']);

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "Indirizzo email non valido.";
            exit;
        }

        $to = "vannimart74@gmail.com";
        $subject = "Nuovo messaggio dal portfolio 'gpmartello.com'";
        $body = "Nome: $name\nEmail: $email\n\nMessaggio:\n$message";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) echo "Messaggio inviato con successo!";
        else echo "C'è stato un problema nell'invio del messaggio. Riprova più tardi.";

    } else echo "Richiesta non valida.";

?>