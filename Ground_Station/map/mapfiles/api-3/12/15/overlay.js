google.maps.__gjsload__('overlay', '\'use strict\';function by(a){this.b=a}L(by,T);Sa(by[H],function(a){"outProjection"!=a&&(a=!(!this.get("offset")||!this.get("projectionTopLeft")||!this.get("projection")||!Yd(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.b:l))});function cy(){}function dy(){var a=this.gm_props_;if(this[al]()){if(this[jc]()){if(!a.Sf&&this.onAdd)this.onAdd();a.Sf=h;this.draw()}}else{if(a.Sf)if(this[sc])this[sc]();else this[pb]();a.Sf=m}}function ey(a){a.gm_props_=a.gm_props_||new cy;return a.gm_props_}function fy(a){Hh[Dc](this);this.aa=O(a,dy)}L(fy,Hh);function gy(){}\ngy[H].b=function(a){var b=a[Zk](),c=ey(a),d=c.fc;c.fc=b;d&&(c=ey(a),(d=c.xa)&&d[Jk](),(d=c.Ah)&&d[Jk](),a[Jk](),a.set("panes",l),a.set("projection",l),N(c.R,Q[Ck]),c.R=l,c.Lb&&(c.Lb.aa(),c.Lb.W(),c.Lb=l));if(b){c=ey(a);d=c.Lb;d||(d=c.Lb=new fy(a));N(c.R,Q[Ck]);var e=c.xa=c.xa||new fo,f=b.O();e[t]("zoom",f);e[t]("offset",f);e[t]("center",f,"projectionCenterQ");e[t]("projection",b);e[t]("projectionTopLeft",f);e=c.Ah=c.Ah||new by(e);e[t]("zoom",f);e[t]("offset",f);e[t]("projection",b);e[t]("projectionTopLeft",\nf);a[t]("projection",e,"outProjection");a[t]("panes",f);e=O(d,d.Q);c.R=[Q[B](a,"panes_changed",e),Q[B](f,"zoom_changed",e),Q[B](f,"offset_changed",e),Q[B](b,"projection_changed",e),Q[B](f,"projectioncenterq_changed",e),Q[y](b,of,d)];d.Q();b instanceof vg&&jo(b,"Ox")}};var hy=new gy;Jf.overlay=function(a){eval(a)};Nf("overlay",hy);\n')