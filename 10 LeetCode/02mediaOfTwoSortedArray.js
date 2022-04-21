// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106


var findMedianSortedArrays = function(nums1, nums2) {
    var arr = nums1.concat(nums2);
    var i = 0;
    var j = 0;
    while(i<arr.length){
        j += i;
        
        while(j<arr.length-1){
         if(arr[i]>arr[j+1]){
            let numm = arr[i];
             arr[i] = arr[j+1];
             arr[j+1] = numm;
         }
            j++
        }
        i++;
        j=0;
    };
    if(arr.length % 2 === 1){
            return arr[(arr.length-1)/2];
    }else{
        let div = arr.length/2;
        return (arr[div] + arr[div-1])/2
    }
};