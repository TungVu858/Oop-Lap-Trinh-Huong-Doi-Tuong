class Meo {
    ten;
    canNang;
    tocdo;
    constructor(ten,canNang,tocdo) {
        this.ten = ten;
        this.canNang = canNang;
        this.tocdo = tocdo;
    }
    meosay(){
        document.write(this.ten + " : Meo Meo" + "<br>")
    }
    checktrangthai(chuot){
     if (chuot.trangthai===false){
            document.write( chuot.ten + " đã chết từ trước" + "<br>");
        }
    }

    duoibat(chuot) {
        if (this.tocdo > chuot.tocdo && chuot.trangthai === true) {
            document.write(this.ten + " bắt được " + chuot.ten + "<br>");
        }
    }

    an(chuot){
        if (chuot.trangthai ==true && this.tocdo > chuot.tocdo){
            document.write(this.ten + " đang ăn " + chuot.ten +"<br>");
            document.write(meo.ten+" tăng lên "+(meo.canNang+1));
        } else if (chuot.trangthai===true && this.tocdo < chuot.tocdo) {
            document.write(this.ten +" không đuổi được " + chuot.ten);
        } else if (chuot.trangthai==false){
            document.write(this.ten + " đang ăn " + chuot.ten +"<br>");
            document.write(meo.ten+" tăng lên "+(meo.canNang+1));
        }
    }



}