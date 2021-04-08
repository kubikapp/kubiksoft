/** System Information **/
function getOS(){
    return [
            { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
            { name: 'Windows', value: 'Win', version: 'NT' },
            { name: 'iPhone', value: 'iPhone', version: 'OS' },
            { name: 'iPad', value: 'iPad', version: 'OS' },
            { name: 'Kindle', value: 'Silk', version: 'Silk' },
            { name: 'Android', value: 'Android', version: 'Android' },
            { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
            { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
            { name: 'MacOS', value: 'Mac', version: 'OS X' },
            { name: 'Linux', value: 'Linux', version: 'rv' },
            { name: 'Palm', value: 'Palm', version: 'PalmOS' }
        ];
}

function getBrowser(){
    return [
            { name: 'Microsoft Edge', value: 'Edg', version : 'Edg'},
            { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
            { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
            { name: 'Safari', value: 'Safari', version: 'Version' },
            { name: 'Opera', value: 'Opera', version: 'Opera' },
            { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' },
            { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' }
        ];
}

function getSystemInfo(){
        var specs = {
        options: [],
        header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
        dataos:getOS(),
        databrowser:getBrowser(),
        init: function () {
            var agent = this.header.join(' '),
                os = this.matchItem(agent, this.dataos),
                browser = this.matchItem(agent, this.databrowser);
            
            return { os: os, browser: browser };
        },
        matchItem: function (string, data) {
            var i = 0,
                j = 0,
                html = '',
                regex,
                regexv,
                match,
                matches,
                version;
            
            for (i = 0; i < data.length; i += 1) {
                regex = new RegExp(data[i].value, 'i');
                match = regex.test(string);
                if (match) {
                    regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
                    matches = string.match(regexv);
                    version = '';
                    if (matches) { if (matches[1]) { matches = matches[1]; } }
                    if (matches) {
                        matches = matches.split(/[._]+/);
                        for (j = 0; j < matches.length; j += 1) {
                            if (j === 0) {
                                version += matches[j] + '.';
                            } else {
                                version += matches[j];
                            }
                        }
                    } else {
                        version = '0';
                    }
                    return {
                        name: data[i].name,
                        version: parseFloat(version)
                    };
                }
            }
            return { name: 'unknown', version: 0 };
        }
    };
    
    var e = specs.init(),
        displayOs = '',
        displayBrowser= '',
        osLogo = e.os.name.toLowerCase(),
        browserLogo = e.browser.name.toLowerCase(),
        imgPath = "https://raw.githubusercontent.com/kubikapp/kubiksoft/master/kubik%20custom/image/",
        osSupported = "",
        browserSupported = "";
    
    /** Check Device **/

    if(e.os.name!="unknown"){osSupported = "<p class='text-success'><i class='glyphicon glyphicon-thumbs-up'></i> Supported</p>";}
    else{osSupported = "<p class='text-danger'><i class='glyphicon glyphicon-info-sign'></i> Not supported</p>";}
    
    if(e.os.name == "iPad" || e.os.name == "iPhone"){osLogo = "apple";}
    
    /** Check Browser **/
    if(e.browser.name == "Firefox" || e.browser.name == "Mozilla"){browserLogo = "firefox";}
    else if(e.browser.name == "Internet Explorer"){browserLogo = "ie";}
    else if(e.browser.name == "Microsoft Edge"){browserLogo = "edge";}

    if(e.browser.name!="unknown"){
        if(e.browser.name == "Internet Explorer" && e.browser.version>=11){browserSupported = "<p class='text-success'><i class='glyphicon glyphicon-thumbs-up'></i> Supported</p>";}
        else if(e.browser.name == "Internet Explorer" && e.browser.version<11){browserSupported = "<p class='text-danger'><i class='glyphicon glyphicon-info-sign'></i> Not Supported</p>";}
        else if(e.browser.name == "Chrome" && e.browser.version>=61){browserSupported = "<p class='text-success'><i class='glyphicon glyphicon-thumbs-up'></i> Supported</p>";}
        else if(e.browser.name == "Firefox" && e.browser.version>=61){browserSupported = "<p class='text-success'><i class='glyphicon glyphicon-thumbs-up'></i> Supported</p>";}
        else if(e.browser.name == "Microsoft Edge" && e.browser.version>=61){browserSupported = "<p class='text-success'><i class='glyphicon glyphicon-thumbs-up'></i> Supported</p>";}
        else{browserSupported = "<p class='text-info'><i class='glyphicon glyphicon-info-sign'></i> Not supported but should be running</p>";}
    }
    
    displayOs += '<img src="'+imgPath+osLogo+'.png" width="150px"></img><br/><br/><h4>'+e.os.name + ' ' + e.os.version+ '</h4><br/>'+osSupported+'<br/>';
    displayBrowser += '<img src="'+imgPath+browserLogo+'.png" width="150px"></img><br/><br/><h4>'+e.browser.name + ' '+ e.browser.version +'</h4><br/>'+browserSupported+'<br/>';

    var info={
        os:{
            name:e.os.name,
            version:e.os.version,
            display:displayOs
        },
        browser:{
            name:e.browser.name,
            version:e.browser.version,
            display:displayBrowser
        }
    };
    
    return info;
}

function loadingImage(){
    
    return "<img src='https://raw.githubusercontent.com/kubikapp/kubiksoft/master/kubik%20custom/image/processing.gif' width=300 alt='Loading'>";
    
}

function displayImage(type){
    
    if(type=="loading"){return "<img src='https://raw.githubusercontent.com/kubikapp/kubiksoft/master/kubik_custom/image/processing.gif' width=300 alt='Loading'>";}
    else if(type=="done"){return "<img src='https://raw.githubusercontent.com/kubikapp/kubiksoft/master/kubik_custom/image/done.gif' width=300 alt='Done'>";}
}

/** Password Function **/

function checkPassword(newPassword){
    
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var description = "";

    if(newPassword.length<8){description = description + "<li><b>Password</b> minimum 8 character</li>";}
    if(!newPassword.match(upperCaseLetters)){description = description +"<li><b>Password</b> must have uppercase letter</li>";}
    if(!newPassword.match(lowerCaseLetters)){description = description +"<li><b>Password</b> must have lowercase letter</li>";}
    if(!newPassword.match(numbers)){description = description + "<li><b>Password</b> must have number</li>";}

    return description;

}

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
    function cekFile(docType,document){
    	
    	var hasDoc = false,
            validation = {
    			"isValid":true,
    			"description":""
    		};
    	
        for(var contentType in document){
            hasDoc = true;
          }

    	if(hasDoc){
    		
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
    		
    		if(allowedType.indexOf(document.contentType) < 0){
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
    
    function showBadge(number){
        var badge = '<span class="badge ArtifactSection-badge" >'+ parseInt(number) +'</span>';
        
        return badge;
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
    
    function generateMonths(lang){
        
        var i=1,
            listMonth=[],
            optionMonth=[];
        
        if(lang=="en"){listMonth=["January","February","March","April","May","June","July","August","September","October","November","December"];}
        else if(lang=="id"){listMonth=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]}
        
        for(i=1;i<=12;i++){
            optionMonth.push({"label":listMonth[i-1],"value":i});
        }
        
        return optionMonth;
    }
