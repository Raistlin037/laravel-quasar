webpackJsonp([25],{y3wm:function(n,t,e){var r;r=function(){"use strict";var n,t={name:"ka",messages:{after:function(n,t){return n+" უნდა იყოს "+t[0]+"(ი)ს შემდეგ."},alpha_dash:function(n){return n+" უნდა შესაძლებელია შეიცავდეს ციფრებს, ასოებს და პუნქტუაციის ნიშნებს."},alpha_num:function(n){return n+" უნდა შეიცავდეს მხოლოდ ციფრებს."},alpha_spaces:function(n){return n+" უნდა შეიცავდეს მხოლოდ ასოებსა და ცარიელ სივრცეებს."},alpha:function(n){return n+" უნდა შეიცავდეს მხოლოდ ასოებს."},before:function(n,t){return n+" უნდა იყოს "+t[0]+"მდე."},between:function(n,t){return n+" უნდა იყოს "+t[0]+" და "+t[1]+"ს შორის."},confirmed:function(n,t){return n+" არ ემთხვევა "+t[0]+"(ი)ს."},date_between:function(n,t){return n+" უნდა უნდა იყოს "+t[0]+" და "+t[1]+"-ს შორის."},date_format:function(n,t){return n+" უნდა იყოს "+t[0]+" ფორმატში."},decimal:function(n,t){void 0===t&&(t=[]);var e=t[0];return void 0===e&&(e="*"),n+" უნდა შეიცავდეს ციფრებსა და "+("*"===e?"":e)+" მთელ რიცხვებს."},digits:function(n,t){return n+" უნდა შეიცავდეს ციფრებს და უნდა იყოს ზუსტად "+t[0]+"-ნიშნა."},dimensions:function(n,t){return n+" უნდა იყოს "+t[0]+"x"+t[1]+" ზომის (pixel)."},email:function(n){return n+"-ს უნდა ჰქონდეს ელ-ფოსტის სწორი ფორმატი."},ext:function(n){return n+" უნდა იყოს ფაილი."},image:function(n){return n+" უნდა იყოს სურათი."},included:function(n){return n+" უნდა იყოს სწორი მნიშვნელობა."},ip:function(n){return n+" უნდა იყოს სწორი ip მისამართი."},max:function(n,t){return n+" არ უნდა იყოს "+t[0]+" სიმბოლოზე მეტი."},max_value:function(n,t){return n+" უნდა შეიცავდეს "+t[0]+" სიმბოლოს ან ნაკლებს."},mimes:function(n){return n+"ს უნდა ჰქონდეს სწორი ფაილის ფორმატი."},min:function(n,t){return n+" უნდა შეიცავდეს მინიმუმ "+t[0]+" სიმბოლოს."},min_value:function(n,t){return n+" უნდა შეიცავდეს "+t[0]+" ან მეტ სიმბოლოს."},excluded:function(n){return n+" უნდა იყოს სწორი მნიშვნელობა."},numeric:function(n){return n+" უნდა შეიცავდეს ციფრებს."},regex:function(n){return n+"-(ი)ს ფორმატი არასწორია."},required:function(n){return n+" აუცილებელია."},size:function(n,t){var e,r,u;return n+" უნდა იყოს "+(e=t[0],r=1024,u=0==(e=Number(e)*r)?0:Math.floor(Math.log(e)/Math.log(r)),1*(e/Math.pow(r,u)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][u])+"-ზე ნაკლები."},url:function(n){return n+"-(ი)ს არ აქვს სწორი მისამართის ფორმატი"}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((n={})[t.name]=t,n)),t},n.exports=r()}});