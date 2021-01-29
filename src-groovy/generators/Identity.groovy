package generators

import java.time.LocalDate
import java.time.format.DateTimeFormatter

def static newId(String anggota,String kodeProvinsi) {
	
	return (anggota.substring(1) + kodeProvinsi + "000000").toInteger()
}

def static GenerateId(Integer lastId,String anggota,String kodeProvinsi) {
	
	Integer id
	
	if(lastId > 0){

		def prefix = anggota.substring(1)+kodeProvinsi
		
		if(lastId.toString().startsWith(prefix)){id = lastId +1}
		else {id = newId(anggota, kodeProvinsi)}
	}
	else{
		id = newId(anggota, kodeProvinsi)
	}
	
	return id
}

def static GenerateTrxId(String lastId){
	
	def newId = ""
	
	if(lastId){
		
		def prefix = lastId.substring(0,8)
		def seq = lastId.substring(9).toLong()
		
		
		seq = seq + 1
		
		def strSeq = seq.toString()
		
		newId = prefix + strSeq.padLeft(9, "0")
		
	}
	
	return newId

	
}