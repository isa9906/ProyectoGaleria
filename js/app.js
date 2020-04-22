var imagenes=['americaplaza', 'balcon', 'bar','botero','chinacota','chinacota2','chinacota3','chinacota4','chorro2','chorronovios','chorronovios2','cine', 'cine2','cine3','conjunto','cuarto','cumple','cumple2','escaleras','escaleras2','fiestalaura','halloween','jumanji','juntos','kfc','lio','luces','macarena','manos','manos2','megaland','megaland2','monserrate1','monserrate2','P_20190123_175757','P_20190123_175801', 'P_20200124_190243','parque', 'pintada', 'plazabolivar','salidaenero','salitre','silvestre','silvestre2','simon','simonv2','simonv22','skype','skype2','skype3','velitas'];
var galeria= document.getElementById('galeria');
for (imagen of imagenes) {
    galeria.innerHTML += ` <div class="card">
    <a href="" data-toggle="modal" data-target="#id${imagen}">
      <img src="imagenes/Amor y yo/${imagen}.jpg" class="card-img-top" alt="">
    </a> 
  </div>
  <!-- Modal -->
  <div class="modal fade" id="id${imagen}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <button type="button" class="close mr-2 " data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <img src="imagenes/Amor y yo/${imagen}.jpg" alt="" class="img-fluid rounded" >
    </div>
  </div>
</div>`
    
}