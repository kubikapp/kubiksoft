/** Bonita Function **/

    // Get URL Process
    function getProcessURL(process,instantiation,isSender){
        var URL = "";
        
        if(instantiation===true){
            URL = "/bonita/API/bpm/process/"+process.id+"/instantiation";
        }
        else{
            URL = "/bonita/portal/resource/process/"+ encodeURI(process.name) +"/" + process.version + "/content/?id=" + process.id;
        }
        
        if(isSender===true){
            URL = URL +"&senderUrl="+ window.top.location.href;
        }
        
        return URL;
    }
    
    // Set Target URL
    function setURL(senderURL,application){
        
        var baseURL = "/bonita/apps/"+application;
        var URL = "";
        
        if(senderURL.length>0){URL=senderURL;}
        else{URL=baseURL;}
        
        return URL;
    }

    // Cek File
    function cekFile(docType,contentType){
    	
    	var validation = {
			"isValid":true,
			"description":""
		};
    	
    	if(contentType.length===0 || contentType===null){return true}
    	else{
    		
    		var allowedType = [];
    		var description = "";
    		
    		if(docType == "attachment"){
    		    allowedType = ["application/pdf","image/png","image/jpeg","image/gif","image/svg+xml","image/bmp","image/wbmp","image/tga"];
    		    description = "pdf, png, jpeg, gif, svg, bmp, wbmp and tga";
    		}
    		else if(docType == "data"){
    		    allowedType = ["text/csv","text/plain","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];
    		    description = "csv and txt";
    		}
    		else if(docType == "image"){
    		    allowedType = ["image/png","image/jpeg","image/gif","image/svg+xml","image/bmp","image/wbmp","image/tga"];
    		    description = "png, jpeg, gif, svg, bmp, wbmp and tga";
    		}
    		else if(docType == "pdf"){
    		    allowedType = ["application/pdf"];
    		    description = "pdf";
    		}
    		
    		if(allowedType.indexOf(contentType) < 0){
				validation.isValid = false;
				validation.description = "File only accepted " + description + ".";
			}
    	}
    	
    	return validation;
    }

    // Get Document
    function getDocumentURL(contentStorageId){
        return "/bonita/portal/formsDocumentImage?document="+contentStorageId.toString();
    }

/** Array Function **/

    // Find list map based on reference 
    function findMapObject(listMap,referenceValue,referencekey,returnKey) {
        
        var result = "";
        
        var i = 0;
        for(i=0;i<listMap.length;i++){
            if(referenceValue == listMap[i][referencekey]){
                result = listMap[i][returnKey];
                return result;
            }
        }
    }
    
    // Sum array of map based on key
    function sumListMap(listMap,key){
        
        var total = 0;
        var i = 0;
        for(i=0;i<listMap.length;i++){
            total += listMap[i][key];
        }
        
        return total;
    }
    
    // Sum array of numbers
    function sumList(listNumber){
        
        var total = 0;
        var i = 0;
        for(i=0;i<listNumber.length;i++){
            total += listNumber[i];
        }
        
        return total;
    }

    // Remove duplicates
    function removeDuplicates(arr,type,uniqueKey){
       let unique_array = [];
        if(type=="list"){
            for(let i = 0;i < arr.length; i++){
                if(unique_array.indexOf(arr[i]) == -1){
                    unique_array.push(arr[i]);
                }
            }
            return unique_array;
        }
        else if(type=="listMap"){
            var listArray = [];
            for(let i = 0;i < arr.length; i++){
                
                if(listArray.indexOf(arr[i][uniqueKey])<0){
                    unique_array.push(arr[i]);
                }
                listArray.push(arr[i][uniqueKey]);
                
            }
            return unique_array;
        }
    }

/** String Function **/

    // Repeat every string
    String.repeat = function(chr,count)
    {    
        var str = ""; 
        for(var x=0;x<count;x++) {str += chr}
        return str;
    };
    
    // Pad left string with zero
    String.prototype.padL = function(width,pad)
    {
        if (!width ||width<1)
            return this;   
     
        if (!pad) pad=" ";        
        var length = width - this.length;
        if (length < 1) return this.substr(0,width);
     
        return (String.repeat(pad,length) + this).substr(0,width);    
    };

/** Date Function **/

    // Format date
    function formatDate(date,format){
        
        if(!format){format="MM/dd/yyyy";}
     
        var month = date.getMonth() + 1;
        var year = date.getFullYear();    
     
        format = format.replace("MM",month.toString().padL(2,"0"));        
     
        if(format.indexOf("yyyy") > -1){format = format.replace("yyyy",year.toString());}
        else if (format.indexOf("yy") > -1){format = format.replace("yy",year.toString().substr(2,2));}
     
        format = format.replace("dd",date.getDate().toString().padL(2,"0"));
     
        var hours = date.getHours();       
        if (format.indexOf("t") > -1)
        {
           if (hours > 11){format = format.replace("t","pm")}
           else{format = format.replace("t","am")}
        }
        if (format.indexOf("HH") > -1){format = format.replace("HH",hours.toString().padL(2,"0"));}
        if (format.indexOf("hh") > -1) {
            if (hours > 12){hours - 12;}
            if (hours === 0){hours = 12;}
            format = format.replace("hh",hours.toString().padL(2,"0"));        
        }
        if (format.indexOf("mm") > -1){format = format.replace("mm",date.getMinutes().toString().padL(2,"0"));}
        if (format.indexOf("ss") > -1){format = format.replace("ss",date.getSeconds().toString().padL(2,"0"));}
        
        return format;
    }
    
    // Calculate days
    function calcDays(from,to){

    //  To calculate the time difference of two dates 
    var Difference_In_Time = from.getTime() - to.getTime(); 
  
    // To calculate the no. of days between two dates 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
    
    return Math.trunc(Difference_In_Days);
    
    }

/** Number Function **/

    // Format number
    function formatNumber(nStr){
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
            }
        return x1 + x2;
    }


/** Generator **/

    // Generate random password
    function randPassword(letters, numbers, either) {
      var chars = [
       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", // letters
       "0123456789", // numbers
       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" // either
      ];
    
      return [letters, numbers, either].map(function(len, i) {
        return Array(len).fill(chars[i]).map(function(x) {
          return x[Math.floor(Math.random() * x.length)];
        }).join('');
      }).concat().join('').split('').sort(function(){
        return 0.5-Math.random();
      }).join('');
    }
