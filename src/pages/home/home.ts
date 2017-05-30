import { Component } from '@angular/core';
import { NavController, Platform, NavParams, Events } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

//import * as forge from 'assets/forge.min.js';
import 'rxjs/add/operator/map';
import { Paradas } from '../../providers/paradas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  paradasConsultadas: any;
  paradas: any;
  keyword: any;
  results: any;
  information: any;
  publicKey: any;
  encrypted: any;
  encodedData: any;
  response: any;
  isSearching: any;


  constructor(public navCtrl: NavController,
              public http: Http,
              public storage: Storage,
              public paradasService: Paradas,
              public navParams: NavParams,
              protected platform: Platform,
              public events: Events) {
    this.paradasConsultadas = [];
    this.paradas = this.paradasService.loadParadas();
    this.results = [];
    this.information = [];
    this.keyword = '';
    this.response = '';
    this.getAllItems();
    this.isSearching = true;
    console.log(this.paradas);

    events.subscribe('user:created', (id) => {
      this.keyword = id;
      //   this.keyHasBeedPressed(id);
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Welcome', id);
    });
    //this.encrytedKey();
    // this.getAuthorization();
    //this.decryptedKey();

  }

  userPressedCancel() {
    this.results = this.paradas;
    this.keyword = '';
  }

  keyHasBeedPressed(e) {
    /* this.http.get('https://itunes.apple.com/search?term='
     +this.keyword
     ).subscribe((response) => {
     this.isSearching = false;
     this.results = response.json().results;
     });*/
    if (this.keyword === '') {
      this.results = [];
      this.information = [];
    } else {
      this.isSearching = false;
      this.results = this.paradas.filter((item) => item.numeroParada.toLowerCase().includes(this.keyword.toLowerCase()));
    }
  }

  getInformation(result: any) {
    this.information = result;
    console.log("this.information");
    console.log(this.information);
    this.setData(result);
    this.results = [];
  }

  setData(result: any) {
    this.storage.set(this.keyword, result.nombreParada);
    this.paradasConsultadas = [];
    this.getAllItems();
  }

  getData() {
    this.storage.get('myData').then((data) => {
      console.log(data);
      console.log(localStorage);
    });
  }

  removeData(index: any) {
    this.storage.remove(index);
    this.paradasConsultadas = [];
    this.getAllItems();
  }

  getAllItems() {
    this.storage.ready().then(() => {
      this.storage.forEach((value, key, index) => {
        this.paradasConsultadas.push({
          id: index,
          name: value,
          index: key,
        })
      });
      console.log('paradasConsultadas', this.paradasConsultadas);
    });
  }


  // encrytedKey() {
  //
  //   /*
  //    1.- Se deberá encriptar el UUID usando la clave pública del servidor (formato PEM),
  //    2.-  usando el algoritmo RSA (particularmente, RSAES PKCS#1 v1.5)
  //    3.- y codificandola en base64 (ver btoa).
  //    */
  //
  //   var pki = forge.pki;
  //   pki.cert
  //   //PEM-formatted public key
  //   var pem = '-----BEGIN PUBLIC KEY-----' +
  //     'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA+66XeCve4EAUjFcsu7VncTXhSusYh5fx55z81I' +
  //     'jMherW5ARjNfxt6maZuUevYelge+noYMevkQh2QM3qjCQs+IOSbr/15Xq5JZy4aLeoCpHcdKIA7B9zBHxG' +
  //     'TrbDnP/N1VjDkIRhkcbWjbXB550Zkn/lbWtIyVuncSIfxSS0Ge8VYx9kD33vKANE+KvWDXqFjcyh9K6MGu' +
  //     'Pz4eJ9Q31nvduOa2XaAAzDL9CnqpON0KjlR4ZB8FrNjDqrY+/000uApVzTojbZnkP6JKzcKDHjEbGDAu4k' +
  //     '9OcIoePmKJrf8nidfojKgyuHyoEOfMiN4LbyGLClMTPBlrhyHPsuCqYAZQIDAQAB' +
  //     '-----END PUBLIC KEY-----';
  //
  //   // convert a PEM-formatted public key to a Forge public key
  //   var publicKey = pki.publicKeyFromPem(pem);
  //
  //
  //   //El UUID identificador único
  //   var uuid = 'ID01';
  //
  //   // encrypt data with a public key using RSAES PKCS#1 v1.5
  //   var encrypted = publicKey.encrypt(uuid, 'RSAES-PKCS1-V1_5');
  //
  //   // codificación en base64 mediante el uso de btoa()
  //   var encodedData = window.btoa(encrypted); // encode a string
  //   console.log(encodedData);
  //
  //   return encodedData;
  //   // the result is El UUID identificador único que representa un dispositivo. (como resultado obtendremos una "key" que se usará en el firmado)
  //
  // }
}
//
// getAuthorization() {
//   var url = 'https://api.mobipalma.mobi/1.2/getsigningkey/?apikey=dc80b57e-30b4-4d62-91e6-d8e4f01d916f&uuid_enc=' + this.encrytedKey() + '';
//   this.response = this.http.get(url).subscribe(res => res.json());
//   console.log(this.response);
//
//   return this.response;
// }


/* decryptedKey(){
 // Por lo tanto, para hacer uso de dicho secreto,
 // debemos descodificar (atob) el mismo para luego desencriptar
 // mediante la clave privada del cliente.

 var pki = forge.pki;

 var pem = 'hola';

 // convert a PEM-formatted private key to a Forge private key
 var privateKey = pki.privateKeyFromPem(pem);
 console.log(privateKey);
 //var decodedData = window.atob(this.response); // decode the string

 // decrypt data with a private key using RSAES PKCS#1 v1.5
 //var decrypted = privateKey.decrypt(decodedData, 'RSAES-PKCS1-V1_5');
 } */
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

//La implementación de serialize_ordered podría ser así:


// serialize_ordered(json) {
//     var keys = [];
//     for(var k in json) {
//         keys.push(k);
//     }
//     keys.sort();
//     var strarr = [];
//     for(var i = 0; i < keys.length; i++) {
//         strarr.push( JSON.stringify(keys[i])+": "+JSON.stringify(json[keys[i]]) );
//     }
//     return "{"+strarr.join(", ")+"}";
// }

// singing(){
//
// var hmac = forge.hmac.create();
// hmac.start('sha1', keys.signingkey);
// var document = this.serialize_ordered(options.data);
// hmac.update(document);
// options.data.signature = hmac.digest().toHex();
//
// }





//Ejemplo usando la librería de javascript forge:
/*
 var hmac = forge.hmac.create();
 hmac.start('sha1', keys.signingkey);
 var document = serialize_ordered(options.data);
 hmac.update(document);
 options.data.signature = hmac.digest().toHex();
 */
