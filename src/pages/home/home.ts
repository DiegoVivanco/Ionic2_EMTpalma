import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import * as forge from 'node-forge';
import * as $ from 'jquery';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	keyword: any;
	results: any;
  publicKey: any;
  encrypted: any;
  encodedData: any;
  items: any;



  constructor(public navCtrl: NavController, public http: Http) {
  	  this.results = [];
  		this.keyword = '';
      this.publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA+66XeCve4EAUjFcsu7Vn' +
                       'cTXhSusYh5fx55z81IjMherW5ARjNfxt6maZuUevYelge+noYMevkQh2QM3qjCQs' +
                       '+IOSbr/15Xq5JZy4aLeoCpHcdKIA7B9zBHxGTrbDnP/N1VjDkIRhkcbWjbXB550Z' +
                       'kn/lbWtIyVuncSIfxSS0Ge8VYx9kD33vKANE+KvWDXqFjcyh9K6MGuPz4eJ9Q31n' +
                       'vduOa2XaAAzDL9CnqpON0KjlR4ZB8FrNjDqrY+/000uApVzTojbZnkP6JKzcKDHj' +
                       'EbGDAu4k9OcIoePmKJrf8nidfojKgyuHyoEOfMiN4LbyGLClMTPBlrhyHPsuCqYA' +
                       'ZQIDAQAB';
     this.encrytedKey()

  }


encrytedKey(){

  var pki = forge.pki;
  var pem = '-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA+66XeCve4EAUjFcsu7VncTXhSusYh5fx55z81IjMherW5ARjNfxt6maZuUevYelge+noYMevkQh2QM3qjCQs+IOSbr/15Xq5JZy4aLeoCpHcdKIA7B9zBHxGTrbDnP/N1VjDkIRhkcbWjbXB550Zkn/lbWtIyVuncSIfxSS0Ge8VYx9kD33vKANE+KvWDXqFjcyh9K6MGuPz4eJ9Q31nvduOa2XaAAzDL9CnqpON0KjlR4ZB8FrNjDqrY+/000uApVzTojbZnkP6JKzcKDHjEbGDAu4k9OcIoePmKJrf8nidfojKgyuHyoEOfMiN4LbyGLClMTPBlrhyHPsuCqYAZQIDAQAB-----END PUBLIC KEY-----';

// convert a PEM-formatted public key to a Forge public key
  var publicKey = pki.publicKeyFromPem(pem); 

  var bytes = 1024;
  var encrypted = publicKey.encrypt(bytes, 'RSAES-PKCS1-V1_5');

  var encodedData = window.btoa(encrypted); // encode a string
  console.log("you encryptedKey is" + encodedData);

  return encodedData;
}
/* 
1.- Se deberá encriptar el UUID usando la clave pública del servidor (formato PEM),
2.-  usando el algoritmo RSA (particularmente, RSAES PKCS#1 v1.5) 
3.- y codificandola en base64 (ver btoa).
 */

/* var publicKey = '' 
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA+66XeCve4EAUjFcsu7Vn
cTXhSusYh5fx55z81IjMherW5ARjNfxt6maZuUevYelge+noYMevkQh2QM3qjCQs
+IOSbr/15Xq5JZy4aLeoCpHcdKIA7B9zBHxGTrbDnP/N1VjDkIRhkcbWjbXB550Z
kn/lbWtIyVuncSIfxSS0Ge8VYx9kD33vKANE+KvWDXqFjcyh9K6MGuPz4eJ9Q31n
vduOa2XaAAzDL9CnqpON0KjlR4ZB8FrNjDqrY+/000uApVzTojbZnkP6JKzcKDHj
EbGDAu4k9OcIoePmKJrf8nidfojKgyuHyoEOfMiN4LbyGLClMTPBlrhyHPsuCqYA
ZQIDAQAB
-----END PUBLIC KEY-----
*/ 

// var encrypted = publicKey.encrypt(bytes, 'RSAES-PKCS1-V1_5');


// var encodedData = window.btoa(encrypted); // encode a string
 

// the result is El UUID identificador único que representa un dispositivo. (como resultado obtendremos una "key" que se usará en el firmado)



/* 
"data": {  "apikey": "1234567890", "uuid": "ID0000001", "someData": 5  }
*/ 

//Entonces la cadena que se usará para generar el hash es:

/*
{"apikey": "1234567890", "someData": 5, "uuid": "ID0000001"}
 */

// Y el hash generado se sumará a los datos a enviar, quedando así:

/*
{
  apikey: '1234567890',
  uuid: 'ID0000001',
  someData: 5,
  signature: "_________" //string hash aquí
} 
*/

//Ejemplo usando la librería de javascript forge:
/*
var hmac = forge.hmac.create();
hmac.start('sha1', keys.signingkey);
var document = serialize_ordered(options.data);
hmac.update(document);
options.data.signature = hmac.digest().toHex();
*/

//La implementación de serialize_ordered podría ser así:

/* 
function serialize_ordered(json) {
    var keys = [];
    for(var k in json) {
        keys.push(k);
    }
    keys.sort();
    var strarr = [];
    for(var i = 0; i < keys.length; i++) {
        strarr.push( JSON.stringify(keys[i])+": "+JSON.stringify(json[keys[i]]) );
    }
    return "{"+strarr.join(", ")+"}";
} 
*/ 

forge() {
  this.items = {
    apikey: 'dc80b57e-30b4-4d62-91e6-d8e4f01d916f',
    uuid: this.encrytedKey(),
    someData: 5,
  };

  //Ejemplo usando la librería de javascript forge:

  var hmac = forge.hmac.create();
  hmac.start('sha1', keys.signingkey);
  var document = serialize_ordered(options.data);
  hmac.update(document);
  options.data.signature = hmac.digest().toHex();

}
  keyHasBeedPressed(){

      this.http.get('https://itunes.apple.com/search?term='
        +this.keyword
        ).subscribe((response) => {
          this.results = response.json().results;
        });
  }

}
