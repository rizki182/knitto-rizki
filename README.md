## Deploy menggunakan docker
**Clone repository**

```sh
git clone https://github.com/rizki182/knitto-rizki.git
```
**Masuk ke folder project**
```sh
cd knitto-rizki
```

**Untuk menjalankan unit test jalankan perintah berikut**
```sh
npx jest
```

**Deploy**
```sh
docker compose up -d
```

**Import database**
```sh
docker exec -i knitto-rizki-mariadb mysql -uroot -proot db_project_rizki < db_project_rizki.sql
```

Setelah proses deploy selesai API bisa di akses url http://localhost:3000 . Jika belum ada response tunggu beberapa menit karena nodejs sedang menginstall dependency.

## Endpoint
**- Tambah data produk**
```sh
(POST) http://localhost:3000/product

Body (JSON):
{
    "name": "Product 1",
    "price": 1000000
}

Response :
{
    "id": 1,
    "name": "Product 1",
    "price": "1000000.00"
}
```

**- List data produk**
```sh
(GET) http://localhost:3000/product

Response :
[
    {
        "id": 1,
        "name": "Product 1",
        "price": "500000.00"
    },
    {
        "id": 3,
        "name": "Product 3",
        "price": "1000000.00"
    },
    {
        "id": 4,
        "name": "Product 4",
        "price": "1000000.00"
    },
    {
        "id": 5,
        "name": "Product 5",
        "price": "1000000.00"
    }
]
```

**- Detail produk berdasarkan id**
```sh
(GET) http://localhost:3000/product/1

Response :
{
    "id": 1,
    "name": "Product 1",
    "price": "500000.00"
}
```

**- Update produk berdasarkan id**
```sh
(PUT) http://localhost:3000/product/1

Body (JSON):
{
    "name": "Prod 1",
    "price": 500000
}

Response :
{
    "id": 1,
    "name": "Prod 1",
    "price": "100000.00"
}
```


## Troubleshoot
Jika saat deploy terjadi timeout tambahkan atau edit file **/etc/docker/daemon.json**
```sh
{
  "dns": ["8.8.8.8", "8.8.4.4"]
}
```
Lalu restart service docker
