//Esta primera funcion se la pasamos como parametros al metodo sort para obtener los numeros ordenados de menor a mayor, si no pasamos nada ordenara por defecto y el output sera algo asi 1 ,20000, 3, 40000, 5  No considera el tamaño solo los numeros iniciales 
function compareNumbers(a, b) {
    return a - b;
  }
  var findMedianSortedArrays = function(nums1, nums2) {
      let arr1 = nums1.concat(nums2);
      let arr = arr1.sort(compareNumbers);
      let length = arr.length;
      if(length % 2 === 0){
          return ( (arr[length/2] + arr[length/2 -1])/2);
      }else{
          return arr[(length+1)/2 - 1];
      }
      
  };