var N = null;var searchIndex = {};
searchIndex["bzip2"]={"doc":"Bzip compression for Rust","items":[[3,"Compress","bzip2","Representation of an in-memory compression stream.",N,N],[3,"Decompress","","Representation of an in-memory decompression stream.",N,N],[4,"Action","","Possible actions to take on compression.",N,N],[13,"Run","","Normal compression.",0,N],[13,"Flush","","Request that the current compression block is terminate.",0,N],[13,"Finish","","Request that the compression stream be finalized.",0,N],[4,"Status","","Result of compression or decompression",N,N],[13,"Ok","","Decompression went fine, nothing much to report.",1,N],[13,"FlushOk","","The Flush action on a compression went ok.",1,N],[13,"RunOk","","THe Run action on compression went ok.",1,N],[13,"FinishOk","","The Finish action on compression went ok.",1,N],[13,"StreamEnd","","The stream's end has been met, meaning that no more data can be input.",1,N],[13,"MemNeeded","","There was insufficient memory in the input or output buffer to complete the request, but otherwise everything went normally.",1,N],[4,"Error","","Fatal errors encountered when compressing/decompressing bytes.",N,N],[13,"Sequence","","The sequence of operations called on a decompression/compression stream were invalid. See methods for details.",2,N],[13,"Data","","The data being decompressed was invalid, or it was not a valid bz2 stream.",2,N],[13,"DataMagic","","The magic bz2 header wasn't present when decompressing.",2,N],[13,"Param","","The parameters to this function were invalid.",2,N],[4,"Compression","","When compressing data, the compression level can be specified by a value in this enum.",N,N],[13,"Fastest","","Optimize for the best speed of encoding.",3,N],[13,"Best","","Optimize for the size of data being encoded.",3,N],[13,"Default","","Choose the default compression, a balance between speed and size.",3,N],[11,"new","","Creates a new stream prepared for compression.",4,[[["compression"],["u32"]],["compress"]]],[11,"compress","","Compress a block of input into a block of output.",4,N],[11,"compress_vec","","Compress a block of input into an output vector.",4,N],[11,"total_in","","Total number of bytes processed as input",4,[[["self"]],["u64"]]],[11,"total_out","","Total number of bytes processed as output",4,[[["self"]],["u64"]]],[11,"new","","Creates a new stream prepared for decompression.",5,[[["bool"]],["decompress"]]],[11,"decompress","","Decompress a block of input into a block of output.",5,N],[11,"decompress_vec","","Decompress a block of input into an output vector.",5,N],[11,"total_in","","Total number of bytes processed as input",5,[[["self"]],["u64"]]],[11,"total_out","","Total number of bytes processed as output",5,[[["self"]],["u64"]]],[0,"bufread","","I/O streams for wrapping `BufRead` types as encoders/decoders",N,N],[3,"BzEncoder","bzip2::bufread","A bz2 encoder, or compressor.",N,N],[3,"BzDecoder","","A bz2 decoder, or decompressor.",N,N],[11,"new","","Creates a new encoder which will read uncompressed data from the given stream and emit the compressed stream.",6,[[["r"],["compression"]],["bzencoder"]]],[11,"get_ref","","Acquires a reference to the underlying stream",6,[[["self"]],["r"]]],[11,"get_mut","","Acquires a mutable reference to the underlying stream",6,[[["self"]],["r"]]],[11,"into_inner","","Consumes this encoder, returning the underlying reader.",6,[[["self"]],["r"]]],[11,"total_out","","Returns the number of bytes produced by the compressor (e.g. the number of bytes read from this stream)",6,[[["self"]],["u64"]]],[11,"total_in","","Returns the number of bytes consumed by the compressor (e.g. the number of bytes read from the underlying stream)",6,[[["self"]],["u64"]]],[11,"new","","Creates a new decoder which will decompress data read from the given stream.",7,[[["r"]],["bzdecoder"]]],[11,"get_ref","","Acquires a reference to the underlying stream",7,[[["self"]],["r"]]],[11,"get_mut","","Acquires a mutable reference to the underlying stream",7,[[["self"]],["r"]]],[11,"into_inner","","Consumes this decoder, returning the underlying reader.",7,[[["self"]],["r"]]],[11,"total_in","","Returns the number of bytes that the decompressor has consumed.",7,[[["self"]],["u64"]]],[11,"total_out","","Returns the number of bytes that the decompressor has produced.",7,[[["self"]],["u64"]]],[0,"read","bzip2","Reader-based compression/decompression streams",N,N],[3,"BzEncoder","bzip2::read","A compression stream which wraps an uncompressed stream of data. Compressed data will be read from the stream.",N,N],[3,"BzDecoder","","A decompression stream which wraps a compressed stream of data. Decompressed data will be read from the stream.",N,N],[11,"new","","Create a new compression stream which will compress at the given level to read compress output to the give output stream.",8,[[["r"],["compression"]],["bzencoder"]]],[11,"get_ref","","Acquires a reference to the underlying stream",8,[[["self"]],["r"]]],[11,"get_mut","","Acquires a mutable reference to the underlying stream",8,[[["self"]],["r"]]],[11,"into_inner","","Unwrap the underlying writer, finishing the compression stream.",8,[[["self"]],["r"]]],[11,"total_out","","Returns the number of bytes produced by the compressor (e.g. the number of bytes read from this stream)",8,[[["self"]],["u64"]]],[11,"total_in","","Returns the number of bytes consumed by the compressor (e.g. the number of bytes read from the underlying stream)",8,[[["self"]],["u64"]]],[11,"new","","Create a new decompression stream, which will read compressed data from the given input stream and decompress it.",9,[[["r"]],["bzdecoder"]]],[11,"get_ref","","Acquires a reference to the underlying stream",9,[[["self"]],["r"]]],[11,"get_mut","","Acquires a mutable reference to the underlying stream",9,[[["self"]],["r"]]],[11,"into_inner","","Unwrap the underlying writer, finishing the compression stream.",9,[[["self"]],["r"]]],[11,"total_out","","Returns the number of bytes produced by the decompressor (e.g. the number of bytes read from this stream)",9,[[["self"]],["u64"]]],[11,"total_in","","Returns the number of bytes consumed by the decompressor (e.g. the number of bytes read from the underlying stream)",9,[[["self"]],["u64"]]],[0,"write","bzip2","Writer-based compression/decompression streams",N,N],[3,"BzEncoder","bzip2::write","A compression stream which will have uncompressed data written to it and will write compressed data to an output stream.",N,N],[3,"BzDecoder","","A compression stream which will have compressed data written to it and will write uncompressed data to an output stream.",N,N],[11,"new","","Create a new compression stream which will compress at the given level to write compress output to the give output stream.",10,[[["w"],["compression"]],["bzencoder"]]],[11,"get_ref","","Acquires a reference to the underlying writer.",10,[[["self"]],["w"]]],[11,"get_mut","","Acquires a mutable reference to the underlying writer.",10,[[["self"]],["w"]]],[11,"try_finish","","Attempt to finish this output stream, writing out final chunks of data.",10,[[["self"]],["result"]]],[11,"finish","","Consumes this encoder, flushing the output stream.",10,[[["self"]],["result"]]],[11,"total_out","","Returns the number of bytes produced by the compressor",10,[[["self"]],["u64"]]],[11,"total_in","","Returns the number of bytes consumed by the compressor (e.g. the number of bytes written to this stream.)",10,[[["self"]],["u64"]]],[11,"new","","Create a new decoding stream which will decompress all data written to it into `obj`.",11,[[["w"]],["bzdecoder"]]],[11,"get_ref","","Acquires a reference to the underlying writer.",11,[[["self"]],["w"]]],[11,"get_mut","","Acquires a mutable reference to the underlying writer.",11,[[["self"]],["w"]]],[11,"try_finish","","Attempt to finish this output stream, writing out final chunks of data.",11,[[["self"]],["result"]]],[11,"finish","","Unwrap the underlying writer, finishing the compression stream.",11,[[["self"]],["result"]]],[11,"total_out","","Returns the number of bytes produced by the decompressor",11,[[["self"]],["u64"]]],[11,"total_in","","Returns the number of bytes consumed by the decompressor (e.g. the number of bytes written to this stream.)",11,[[["self"]],["u64"]]],[11,"from","bzip2","",4,[[["t"]],["t"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,N],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,N],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"to_string","","",2,[[["self"]],["string"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,N],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,N],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"from","bzip2::bufread","",6,[[["t"]],["t"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"from","","",7,[[["t"]],["t"]]],[11,"into","","",7,[[["self"]],["u"]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"get_type_id","","",7,[[["self"]],["typeid"]]],[11,"try_into","","",7,[[["self"]],["result"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"from","bzip2::read","",8,[[["t"]],["t"]]],[11,"into","","",8,[[["self"]],["u"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"get_type_id","","",8,[[["self"]],["typeid"]]],[11,"try_into","","",8,[[["self"]],["result"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"from","","",9,[[["t"]],["t"]]],[11,"into","","",9,[[["self"]],["u"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"get_type_id","","",9,[[["self"]],["typeid"]]],[11,"try_into","","",9,[[["self"]],["result"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"from","bzip2::write","",10,[[["t"]],["t"]]],[11,"into","","",10,[[["self"]],["u"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"get_type_id","","",10,[[["self"]],["typeid"]]],[11,"try_into","","",10,[[["self"]],["result"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"from","","",11,[[["t"]],["t"]]],[11,"into","","",11,[[["self"]],["u"]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"get_type_id","","",11,[[["self"]],["typeid"]]],[11,"try_into","","",11,[[["self"]],["result"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"clone","bzip2","",0,[[["self"]],["action"]]],[11,"clone","","",1,[[["self"]],["status"]]],[11,"clone","","",2,[[["self"]],["error"]]],[11,"clone","","",3,[[["self"]],["compression"]]],[11,"drop","bzip2::write","",10,[[["self"]]]],[11,"drop","","",11,[[["self"]]]],[11,"eq","bzip2","",0,[[["self"],["action"]],["bool"]]],[11,"eq","","",1,[[["self"],["status"]],["bool"]]],[11,"eq","","",2,[[["self"],["error"]],["bool"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"read","bzip2::bufread","",6,N],[11,"read","","",7,N],[11,"read","bzip2::read","",8,N],[11,"read","","",9,N],[11,"read","bzip2::write","",10,N],[11,"read","","",11,N],[11,"write","bzip2::bufread","",6,N],[11,"flush","","",6,[[["self"]],["result"]]],[11,"write","","",7,N],[11,"flush","","",7,[[["self"]],["result"]]],[11,"write","bzip2::read","",8,N],[11,"flush","","",8,[[["self"]],["result"]]],[11,"write","","",9,N],[11,"flush","","",9,[[["self"]],["result"]]],[11,"write","bzip2::write","",10,N],[11,"flush","","",10,[[["self"]],["result"]]],[11,"write","","",11,N],[11,"flush","","",11,[[["self"]],["result"]]],[11,"description","bzip2","",2,[[["self"]],["str"]]]],"paths":[[4,"Action"],[4,"Status"],[4,"Error"],[4,"Compression"],[3,"Compress"],[3,"Decompress"],[3,"BzEncoder"],[3,"BzDecoder"],[3,"BzEncoder"],[3,"BzDecoder"],[3,"BzEncoder"],[3,"BzDecoder"]]};
searchIndex["bzip2_sys"]={"doc":"","items":[[3,"bz_stream","bzip2_sys","",N,N],[12,"next_in","","",0,N],[12,"avail_in","","",0,N],[12,"total_in_lo32","","",0,N],[12,"total_in_hi32","","",0,N],[12,"next_out","","",0,N],[12,"avail_out","","",0,N],[12,"total_out_lo32","","",0,N],[12,"total_out_hi32","","",0,N],[12,"state","","",0,N],[12,"bzalloc","","",0,N],[12,"bzfree","","",0,N],[12,"opaque","","",0,N],[5,"bz_internal_error","","",N,[[["c_int"]]]],[5,"BZ2_bzCompressInit","","",N,N],[5,"BZ2_bzCompress","","",N,N],[5,"BZ2_bzCompressEnd","","",N,N],[5,"BZ2_bzDecompressInit","","",N,N],[5,"BZ2_bzDecompress","","",N,N],[5,"BZ2_bzDecompressEnd","","",N,N],[17,"BZ_RUN","","",N,N],[17,"BZ_FLUSH","","",N,N],[17,"BZ_FINISH","","",N,N],[17,"BZ_OK","","",N,N],[17,"BZ_RUN_OK","","",N,N],[17,"BZ_FLUSH_OK","","",N,N],[17,"BZ_FINISH_OK","","",N,N],[17,"BZ_STREAM_END","","",N,N],[17,"BZ_SEQUENCE_ERROR","","",N,N],[17,"BZ_PARAM_ERROR","","",N,N],[17,"BZ_MEM_ERROR","","",N,N],[17,"BZ_DATA_ERROR","","",N,N],[17,"BZ_DATA_ERROR_MAGIC","","",N,N],[17,"BZ_IO_ERROR","","",N,N],[17,"BZ_UNEXPECTED_EOF","","",N,N],[17,"BZ_OUTBUFF_FULL","","",N,N],[17,"BZ_CONFIG_ERROR","","",N,N],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]]],"paths":[[3,"bz_stream"]]};
initSearch(searchIndex);