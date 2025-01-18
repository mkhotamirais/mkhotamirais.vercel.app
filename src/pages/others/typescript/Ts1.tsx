export default function Ts1() {
  return (
    <div className="bg-gray-50">
      <div className="container">
        <div className="px-3">
          <h2 className="text-xl font-bold py-3">Typescript 1</h2>
          <p>
            syaratnya harus terinstall <a href="https://nodejs.org/en">nodejs</a> nodejs dan typescript (npm i -g
            typescript) lalu cek (node -v; npm -v; npx -v; tsx -v). buat folder bebas di mana saja lalu buat file,
            contoh index.ts. isi apa saja lalu jalankan terminal (tsc index.ts) maka akan terbentuk file index.js hasil
            kompilasi index.ts. selanjutnya coba buat yang baru dengan tsconfig.json. caranya buat folder, buka di
            terminal, jalankan (tsc --init) akan terbentuk tsconfig.json yang berisi banyak kofigurasi.{" "}
            <strong>penting:</strong> Setiap nilai memiliki tipe data tertentu, jika tipe suatu variabel telah
            ditentukan maka nilainya tidak bisa diubah dengan nilai yang memiliki tipe data lain.
          </p>
          <p>Tipe Data: string | number | boolean | array | null | undefined | object | function</p>
          <pre className="text-xs bg-slate-800 text-white px-1 overflow-y-scroll">{`
let x;
x = 'john';
x = 10;
- valid dalam js, tidak vali dalam ts;
- karena x tipe datanya tak jelas: any

> penulisan dasar
let x: string = 'a'
x: number;
x = 1
untuk persingkat, deklarasi tidak ditulis
pelajarinya tidak perlu berurutan.

-- union (|) and intersection (&)
string | number = 'a' | 1
:{id: number} & {name: string} = {id: 1 name: "a"}

-- array (let arr)
// number, string, obj, union, tuple
:string[] = ['a', 'b', 'c', '..']
:number[] = [1, 2, 3, ..]
:{id:number, name:string}[];
:[{id: 1, name: "john"}, {id:2, name: "doe"}]
:(number|string)[] = [1, "a", "b", 2, 3]
:[string, number, boolean]=['a', 1, true]

-- object (let obj)
:{id: number, name:string}: {id: 1, name: "a"}
--- readonly & optional (?) & default value
:{readonly id: number, name?:string = 'john'}: {id:1}
obj.id = 1 // tidak bisa karna readonly
obj.name; // tanpa diisi, otomatis terisi 'john'

-- function (let fn)
let fn = (y:string):void => {console.log(y)}
let fn = (msg): never => {throw new Error(msg)}
// :void artinya tidak mengembalikan apapun
// :never artika tidak pernah terjadi

-- any & unknown
:any // anything, minimalisir penggunaannya
:unknown // alternatif aman dari any

-- enum
// koleksi nilai konstan
// enum initializer default 0 (enum pertama diberi nilai)
// fully initialized (semuanya diberi nilai)
enum C1 {Red, Green, Blue}
enum C2 {Red=2, Green, Blue}
enum C3 {Red="merah", Green="hijau", Blue="biru"}
:C1=C1.Red // output 0
:C2=C2.Green // output 3

-- type aliases (type) & interfaces (interface)
// keduanya digunakan untuk menyimpan tipe
// type bisa untuk semua tipe
// interface hanya bisa untuk tipe objek
type tName = string;
let x:tName = 'ahmad';
interface Id {id: number}
interface IdName extends Id {name: string}
interface IdAge extends Id {age: number}
:IdName = {id: 1, name: "john"}
:idAge = {id: 1, age: 10}

-- casting (<> / as) fungsinya sama
// proses override tipe data tanpa mengubahnya.
:unknown = 'hello';
(x as string).length // output 5;
(<string>x).length // output 5
(x as number).length // output tidak bisa;
(5 as string).length // output tidak bisa;

`}</pre>
        </div>
      </div>
    </div>
  );
}
