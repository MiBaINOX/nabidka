<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Metoda neni povolena']);
    exit;
}

$name = trim($_POST['name'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$email = trim($_POST['email'] ?? '');
$service = trim($_POST['service'] ?? 'Obecná poptávka');
$message = trim($_POST['message'] ?? '');

if (empty($name) || empty($phone) || empty($email) || empty($message)) {
    echo json_encode(['success' => false, 'error' => 'Vyplnte prosim vsechna pole']);
    exit;
}

$to = 'info@revizebagru.cz';
$subject = 'Poptavka z webu (REVIZE BAGRU s.r.o.) - ' . $name;
$body = "Nova poptavka z weboveho formulare:\n\n";
$body .= "Jmeno / Firma: " . $name . "\n";
$body .= "Telefon: " . $phone . "\n";
$body .= "E-mail: " . $email . "\n";
$body .= "Vybrana sluzba: " . $service . "\n\n";
$body .= "Zprava:\n" . $message . "\n";

$headers = 'From: web@' . $_SERVER['HTTP_HOST'] . "\r\n" .
           'Reply-To: ' . $email . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

$sent = @mail($to, '=?UTF-8?B?'.base64_encode($subject).'?=', $body, $headers);

echo json_encode(['success' => true]);
