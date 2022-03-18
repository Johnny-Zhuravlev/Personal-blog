<?php

    // Getting data from elements of form
    $name = $_POST['person_name'];
    $email = $_POST['person_email'];
    $message = $_POST['person_message'];


    // Processing data
    $name = htmlspecialchars($name);
    $email = htmlspecialchars($email);
    $message = htmlspecialchars($message);

    $name = urldecode($login);
    $email = urldecode($email);
    $message = urldecode($message);

    $name = trim($login);
    $email = trim($email);
    $message = trim($message);



    // Sending data to post
    if (mail("jonson.09@mail.ru",
             "Новое письмо с сайта",
             "Имя: ".$name."\n".
             "Эл.почта: ".$email."\n".
             "Сообщение: ".$message,
             "From: no-reply@personalblog.ru \r\n")
    ) {
        echo ('Письмо успешно отправлено!');
    }

    else {
        echo ('Есть ошибки! Проверьте данные...');
    }

?>