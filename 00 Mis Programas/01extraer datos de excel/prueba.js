/* set up XMLHttpRequest */
    var url = "Datos.xlsx";
    var oReq = new XMLHttpRequest();
    var arrFinal = [];
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";
    oReq.onload = function(e) {
        
        function informacion(){
            var arraybuffer = oReq.response;
            /* convert data to binary string */
            var data = new Uint8Array(arraybuffer);
            var arr = new Array();
            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            /* Call XLSX */
            var workbook = XLSX.read(bstr, {type:"binary"});
            let datos = [];
            for(let i = 0; i < workbook.SheetNames.length; i++){
            var first_sheet_name = workbook.SheetNames[i];
            var worksheet = workbook.Sheets[first_sheet_name];
            var info = XLSX.utils.sheet_to_json(worksheet,{raw:true});
            datos.push(info);
            }
            
            return [datos];
        }
        arrFinal = informacion();
        console.log(arrFinal)
    }
    oReq.send();
    console.log(arrFinal)
    