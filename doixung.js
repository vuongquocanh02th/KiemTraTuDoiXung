function isPalindrome (str) {
    //Loai bo ky tu khong phai chu cai va chuyen ve chu thuong
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    //Ham de quy kiem tra tinh doi xung
    function checkPalindrome (left, right) {
        //Neu con tro trai vuot qua con tro phai, ket thuc de quy
        if (left >= right) {
            return true;
        }
        //So sanh ky tu o hai dau
        if (str[left] !== str[right]) {
            return false;
        }
        //Tien den ky tu tiep theo
        return checkPalindrome(left+1, right-1);
    }
    return checkPalindrome(0, str.length - 1);
}
let chuoi = prompt('Nhap chuoi');
alert(isPalindrome(chuoi));