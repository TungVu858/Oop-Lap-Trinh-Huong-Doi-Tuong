class Chuot {
    ten;
    canNang;
    tocdo;
    constructor(ten,canNang,tocdo,trangthai) {
        this.ten = ten;
        this.canNang = canNang;
        this.tocdo = tocdo;
        this.trangthai = trangthai;
    }
    chuotsay(){
        if (this.trangthai == true){
            document.write(this.ten + " : Chít chít " +"<br>")
        }
    }
}