import { Component, OnInit } from '@angular/core';
import { UsuCuaService } from '../../services/usu-cua.service'
import { LisUsoCauIn, SingleData } from 'src/app/interfaces/uso-cau-in';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public luc;
  public error;
  view: number[] = [1400,600];
  isRealtime: boolean;
  showXAxisLabel: boolean;
  showYAxisLabel: boolean;
  showLegend: boolean;
  interval: number;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  xAxisLabel = 'Number';
  yAxisLabel = 'Value';
  
  timeline = true;
  public singleData;
  constructor(private ucServ: UsuCuaService) {
    this.getAllUsCa();
    //this.getAllUsCaHea();
  }

  ngOnInit() {
    console.log("en ngOnInit");
    console.log(this.luc);

  }

  /**
   * getAllUsCa
   * Obtiene los datos del servicio uso cuadal
   */
  public getAllUsCa() {
    console.log("GetAllUsCaHea");
    this.ucServ.getUsCau().
      subscribe((resp: LisUsoCauIn) => {
        this.luc = resp;
        this.tranformData(this.luc);
      });
  }
  /**
   * getAllUsCa
   * Obtiene los datos del servicio uso cuadal
   * con las cabeceras
   */
  public getAllUsCaHea() {
    console.log("GetAllUsCaHea");

    this.ucServ.getUsCau().subscribe(
      (resp: LisUsoCauIn) => {
        this.luc = resp
        error => this.error = error
        this.tranformData(this.luc);
      }
    );
    console.log(this.luc);

  }
  public tranformData(lista: LisUsoCauIn) {
    this.singleData = new Array();
    console.log("lista desde metodo tranformData " + typeof (lista));
    var li;
    for (var obj in lista) {
      var nemaSerie = lista[obj].usoAprovechamiento;
      if (nemaSerie != null) {
        console.log(lista[obj]);
        li = { name: lista[obj].usoAprovechamiento, value: lista[obj].numapr };
        this.singleData.push(li);
      }
    }
    console.log("Single data original");
    console.log(this.singleData);

  }

  public SetOptions() {

  }

}
