﻿eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('C 4U(i,g,f){D h=i>=0?K.4C(i):K.1P+K.4C(i);D d=(i-f/g)/(1+i*f/g);D e=d>=0?K.4C(d):K.4C(d)+K.1P;D c=K.3n(g*g+f*f);D a=c*K.3N(e);D j=-c*K.2y(e);D b={1x:a*K.3N(h)+j*K.2y(h),1A:a*K.2y(h)-j*K.3N(h)};E b}C 55(a){u.2X=4W.2X();u.2F=C(){u.4S=H;u.3G=4W.2X()};u.7g=a;u.1S=C(){u.4S=I};u.1g=C(){E u.2X};u.56=C(){B(!u.4S){u.2X=4W.2X()}G{u.2X=u.3G}};u.2t=C(){E 69};E u}C 7h(b,a){u.2G=a;B(b){u.3R=C(c,d){E d>=u.2G(c)}}G{u.3R=C(c,d){E d<=u.2G(c)}}u.4Q=4U;E u}C 7f(e,b,d,a,c){u.k=(d-c)/(b-a);u.b=d-u.k*b;u.2G=C(f){E u.k*f+u.b};u.r=e;B(e){u.3R=C(f,g){E g>=u.2G(f)}}G{u.3R=C(f,g){E g<=u.2G(f)}}u.4Q=4U;E u}C 7e(g,e,i,h,f,b,a,d,c){u.1x=i;u.1A=h;u.x=g;u.y=e;u.2U=b;u.31=a;u.2P=c;u.2N=d;u.1h=I;u.W=f?F.2r:F.2x;u.1S=C(){u.1h=H;u.1W=u.W.1g()};u.2F=C(){u.1h=I};u.1r=C(){B(u.1h){D k=u.W.1g();B(u.1W!=k){D j=(k-u.1W)/u.W.2t();u.x+=u.1x*j;u.y+=u.1A*j;B(u.y>u.31){u.1A=-u.1A;u.y=u.31}G{B(u.y<u.2P){u.1A=-u.1A;u.y=u.2P}}B(u.x>u.2U){u.1x=-u.1x;u.x=u.2U}G{B(u.x<u.2N){u.1x=-u.1x;u.x=u.2N}}}u.1W=k}}}C 7b(h,f,j,i,b,g,c,a,e,d){u.4R=b;u.1x=j;u.1A=i;u.x=h;u.y=f;u.2U=c;u.31=a;u.2P=d;u.2N=e;u.1h=I;u.W=g?F.2r:F.2x;u.1S=C(){u.1h=H;u.1W=u.W.1g()};u.2F=C(){u.1h=I};u.1r=C(){B(u.1h){D m=u.W.1g();B(u.1W!=m){D l=(m-u.1W)/u.W.2t();u.x+=u.1x*l;u.y+=u.1A*l;B(u.31&&u.y>u.31){u.1A=-u.1A;u.y=u.31}G{B(u.2U&&u.x>u.2U){u.1x=-u.1x;u.x=u.2U}G{B(u.2N&&u.x<u.2N){u.1x=-u.1x;u.x=u.2N}G{B(u.2P&&u.y<u.2P){u.1A=-u.1A;u.y=u.2P}G{N(D n=0,o=u.4R[n];o;o=u.4R[++n]){B(o.3R(u.x,u.y)){u.y=o.2G(u.x);D k=o.2G(u.x+0.4T)-u.y;D q=o.4Q(o.r?k/0.4T:-k/0.4T,u.1x,u.1A);u.1x=q.1x;u.1A=q.1A;1G}}}}}}}u.1W=m}}}C 7m(f,e,d,a,g,b,c){u.W=b?F.2r:F.2x;u.1N=f;u.22=e;u.3L=d?d:28;u.1L=a;u.1J=g;u.4J=c?C(){u.2s()}:C(){};u.4m=c?C(){u.2s()}:C(){};u.1B=0;u.d=u.22;u.t=(u.d==1?0:1);u.18=H;u.V=u.1J;u.1S=C(){B(u.t==0){u.1B=u.W.1g();u.d=u.22;u.t=(u.d==1?0:1);u.18=I}};u.4I=C(){u.1B=u.W.1g();u.d=u.22;u.t=(u.d==1?0:1);u.18=I};u.3i=C(){B(u.t==1){u.18=I;u.d=-u.22;u.t=(u.d==1?0:1);u.1B=u.W.1g()}};u.1r=C(){B(!u.18){D h=(u.W.1g()-u.1B)/u.W.2t();B(h>0){u.t=u.d==1?h/u.1N:1-h/u.1N;B(u.t>1){u.t=1;u.18=H;u.4J()}G{B(u.t<0){u.t=0;u.18=H;u.4m()}}u.V=(u.3L(u.t)*u.1L)+u.1J}}};u.2s=C(){B(u.t==0){u.1S()}G{B(u.t==1){u.3i()}}}}C 7l(e,a,h,c,g,b,f,d){u.W=c?F.2r:F.2x;u.1N=e;u.22=1;u.6F=g?g:0;u.a=b?b*a:a;u.p=f?f*e:e*0.3;u.1L=a;u.1J=h;u.4J=d?C(){u.2s()}:C(){};u.4m=d?C(){u.2s()}:C(){};u.1B=0;u.d=u.22;u.t=(u.d==1?0:1);u.18=H;u.V=u.1J;u.1S=C(){B(u.t==0){u.1B=u.W.1g();u.d=u.22;u.t=(u.d==1?0:1);u.18=I}};u.3i=C(){B(u.t==1){u.18=I;u.d=-u.22;u.t=(u.d==1?0:1);u.1B=u.W.1g()}};u.1r=C(){B(!u.18){D i=u.d==1?(u.W.1g()-u.1B)/u.W.2t():u.1N-(u.W.1g()-u.1B)/u.W.2t();B(i>0){u.t=i/u.1N;B(u.t>=1){u.t=1;u.V=(u.t*u.1L)+u.1J;u.18=H;u.4J()}G{5W(u.6F){3y-1:D j=u.p/(2*K.1P)*K.4V(u.1L/u.a);u.V=-(u.a*K.1K(2,10*(i-=1))*K.2y((i*u.1N-j)*(2*K.1P)/u.p))+u.1J;1G;3y 0:D j=u.p/(2*K.1P)*K.4V(u.1L/u.a);B(i<1){u.V=-0.5*(u.a*K.1K(2,10*(i-=1))*K.2y((i*u.1N-j)*(2*K.1P)/u.p))+u.1J}G{u.V=u.a*K.1K(2,-10*(i-=1))*K.2y((i*u.1N-j)*(2*K.1P)/u.p)*0.5+u.1L+u.1J}1G;3y 1:D j=u.p/(2*K.1P)*K.4V(u.1L/u.a);u.V=u.a*K.1K(2,-10*i)*K.2y((i*u.1N-j)*(2*K.1P)/u.p)+u.1L+u.1J}}}G{u.t=0;u.V=(u.t*u.1L)+u.1J;u.18=H;u.4m()}}};u.2s=C(){B(u.t==0){u.1S()}G{B(u.t==1){u.3i()}}};E u}C Z(b,d,g,h,a,j,e,i,c,f){u.W=f?F.2r:F.2x;u.1N=b;u.5b=d;u.22=g;u.6V=h;u.4l=a;u.3L=j;u.1L=(e*i);u.1J=(e*c);u.4H=C(){u.1B=0;u.3G=0;u.1W=0;u.2b=u.22;u.d=u.2b;u.t=(u.2b==1?0:1);u.i=0;u.1h=I;u.18=I;u.V=0};u.4H();u.4o=J 2Q("4o");u.4F=J 2Q("4F");u.4k=J 2Q("4k");u.44=J 2Q("44");u.1S=C(){B(!u.1h&&!u.18){u.1B=u.W.1g()-(u.3G-u.1B);u.1h=H;u.4o.R(X,{4q:u.4o.3M})}};u.4I=C(){u.4H();u.1S()};u.2F=C(){B(u.1h&&!u.18){u.3G=u.W.1g();u.1h=I;u.4F.R(X,{4q:u.4F.3M})}};u.2s=C(){B(!u.18){B(u.1h){u.2F()}G{u.1S()}}};u.7X=C(){B(u.1h&&!u.18){u.3X(u.i)}};u.7L=C(){B(u.1h&&!u.18){u.3X(u.i+1)}};u.3i=C(){B(u.1h&&!u.18){u.2b=-u.2b;D k=u.i+(u.d==-1?u.t:(1-u.t));u.3X(k)}G{u.18=I;u.2b=-u.2b;D k=u.i+(u.d==-1?u.t:(1-u.t));u.3X(k);u.1h=H;u.1W=u.W.1g();u.1B=u.W.1g()}};u.3X=C(n){D m=u.W.1g();D l=u.W.2t();D k=(u.5b*l)+((n*u.1N)*l);u.1B=(m-k)};u.1r=6C;u.V=(u.3L(u.t)*u.1L)+u.1J;E u}C 6C(){B(u.1h&&!u.18){D b=u.W.1g();B(b!=u.1W){D a=(b-u.1B)/u.W.2t();D d=(a-u.5b)/u.1N;B(d<0){d=0}D c=K.3m(d);B(c!=u.i){u.4k.R(X,{4q:u.4k.3M})}u.t=d-c;B(u.4l!=0){B(c>=u.4l){c=u.4l-1;u.t=1;u.2F();u.18=H;u.44.R(X,{4q:u.44.3M})}}u.i=c;B(u.6V){B((K.3m(u.i)%2)==0){u.d=u.2b}G{u.d=-u.2b}}G{u.d=u.2b}B(u.d==-1){u.t=(1-u.t)}u.V=(u.3L(u.t)*u.1L)+u.1J;u.1W=b}}}C 2Q(){u.3M=7E[0];u.2l=J 12();u.7D=C(a){B(u.2l.36(a)==-1){u.2l.2c(a)}};u.7B=C(a){B(u.2l.36(a)!=-1){u.2l.2O(u.2l.36(a),1)}};u.R=C(c,a){B(u.2l.Q>0){N(D b=0;b<u.2l.Q;b++){u.2l[b](c,a)}}};E u}C 7P(){D A=u.7C;D k=A.V;B(k!=u.5M){B(k<0||k>(u.28.Q-1)){k=(k<0)?0:(u.28.Q-1)}D r=K.3m(k);D s=(k-r);D c=u.28[r][0];D e=c;D q=u.28[r][1];D o=q;D i=u.28[r][2];D h=i;B((r+1)<(u.28.Q)){D e=u.28[(r+1)][0];D o=u.28[(r+1)][1];D h=u.28[(r+1)][2]}D g=c;D j=0;B(c==e){j=(s*(o-q))+q}G{D b=h-i;D a=s*b;D f=(u.5f[c]-i);B((i+a)<u.5f[c]){D m=(f==0?0:a/f);j=((1-q)*m)+q}G{g=e;D l=(h-u.5f[c]);D n=a-f;D m=(l==0?0:n/l);j=m*o}}u.x=51(j,u.1q[g][0][0],u.1q[g][1][0],u.1q[g][2][0],u.1q[g][3][0]);u.y=51(j,u.1q[g][0][1],u.1q[g][1][1],u.1q[g][2][1],u.1q[g][3][1]);D w=0;D v=0;B(j==0){w=u.1q[g][1][0];v=u.1q[g][1][1];u.57=4w(u.x,u.y,w,v,A.d)}G{B(j==1){w=u.1q[g][1][0];v=u.1q[g][1][1];u.57=4w(w,v,u.x,u.y,A.d)}G{w=50(j,u.1q[g][0][0],u.1q[g][1][0],u.1q[g][2][0]);v=50(j,u.1q[g][0][1],u.1q[g][1][1],u.1q[g][2][1]);u.57=4w(w,v,u.x,u.y,A.d)}}u.5M=k}A.1r()}C 4w(b,d,a,c,e){B(e==1){E 4Z(b,d,a,c)}G{E 4Z(a,c,b,d)}}C 51(a,e,d,c,b){E K.1K(a,3)*(b+3*(d-c)-e)+3*K.1K(a,2)*(e-2*d+c)+3*a*(d-e)+e}C 50(a,d,c,b){a=K.4t(K.4x(1,a),0);E K.1K((1-a),2)*d+2*a*(1-a)*c+a*a*b}C 4Z(d,f,c,e){D b=(c-d);D a=(e-f);E K.7G(a,b)}C 28(a){E a}C 7F(a){E-K.3N(a*(K.1P/2))+1}C 7A(a){E K.2y(a*(K.1P/2))}C 7u(a){E-0.5*(K.3N(K.1P*a)-1)}C 7t(a){E a*a*a*a*a}C 7s(a){a--;E a*a*a*a*a+1}C 7v(a){a/=0.5;B(a<1){E 0.5*a*a*a*a*a}a-=2;E 0.5*(a*a*a*a*a+2)}C 7w(a){E a*a*a*a}C 7y(a){a--;E-(a*a*a*a-1)}C 6P(a){a/=0.5;B(a<1){E 0.5*a*a*a*a}a-=2;E-0.5*(a*a*a*a-2)}C 7x(a){E-(K.3n(1-(a*a))-1)}C 7H(a){a--;E K.3n(1-(a*a))}C 7I(a){a/=0.5;B(a<1){E-0.5*(K.3n(1-a*a)-1)}a-=2;E 0.5*(K.3n(1-a*a)+1)}C 7S(a){E a*a}C 7R(a){E-1*a*(a-2)}C 7T(a){a/=0.5;B(a<1){E 0.5*a*a}a--;E-0.5*(a*(a-2)-1)}C 7U(a){E a*a*a}C 7W(a){a--;E a*a*a+1}C 7V(a){a/=0.5;B(a<1){E 0.5*a*a*a}a-=2;E 0.5*(a*a*a+2)}C 4K(a){B(a<(1/2.75)){E(7.4v*a*a)}G{B(a<(2/2.75)){a-=(1.5/2.75);E(7.4v*a*a+0.75)}G{B(a<(2.5/2.75)){a-=(2.25/2.75);E(7.4v*a*a+0.7Q)}G{a-=(2.7r/2.75);E(7.4v*a*a+0.7K)}}}}C 6q(a){E 1-4K(1-a)}C 7J(a){B(a<0.5){E 6q(a*2)*0.5}G{E 4K(a*2-1)*0.5+0.5}}C 7M(a){E(a==0)?0:K.1K(2,10*(a-1))}C 7O(a){E(a==1)?1:-K.1K(2,-10*a)+1}C 7N(a){B(a==0){E 0}G{B(a==1){E 1}G{B((a/0.5)<1){a/=0.5;E 0.5*K.1K(2,10*(a-1))}G{a/=0.5;E 0.5*(-K.1K(2,-10*(a-1))+2)}}}}C 7p(a){E(a<=0?0:1)}C 76(a){E(a<0.5?0:1)}C 77(a){E(a>=1?1:0)}C 53(a){E K.53()}C 78(a){E K.53()*a}C 74(b){D a=60;E K.3m(b*a)/a}C 3s(a,b){u.x=a;u.y=b;E u}3s.13={63:C(){E K.3n(K.1K(u.x,2)+K.1K(u.y,2))},79:C(a){D b=J 3s();b.x=u.x+a.x;b.y=u.y+a.y;E b},64:C(a){D b=J 3s();b.x=u.x-a.x;b.y=u.y-a.y;E b},73:C(a){E u.x*a.x+u.y*a.y},7q:C(a){E;u.64(a)},62:C(){D a=J 3s();a.x=u.y;a.y=0-u.x;E a},5Z:C(){D b=J 3s(0,0),a=u.63();B(a!=0){b.x=u.x/a;b.y=u.y/a}E b},7k:C(){D a=u.62();E a.5Z()}};C 7n(b,a){u.4x=b;u.4t=a;u.7a=C(c){E u.4t>c.4x&&c.4t>u.4x};E u}D 1i;D U;D 1z=I;D 1T;D 1v;D 3v=J 12();D O;D 5S=40;D 1b=J 12();D 2x=J 55("7j");D 2r=J 55("7d");D 7c=J 12();D 4f=0;D 4e=0;D 6b;D 6J;C 3E(){B(F.6c){3D();F.6c(3E,F.1i)}G{B(F.6a){3D();F.6a(3E)}G{B(F.68){3D();F.68(3E,F.1i)}G{6j(3D,69/5S)}}}}C 54(c){c=2j(c);B(F.1k.3C()){E}F.5v.3Q();F.4r.3Q();B(F.O&&F.O.1s){N(D a=F.O.14.Q-1,b=F.O.14[a];b;b=F.O.14[--a]){B(b.P&&b.P.R(U,c)){E H}}}G{N(D a=F.1b.Q-1,b=F.1b[a];b;b=F.1b[--a]){B(b.P&&b.P.R(U,c)){E H}}}E I}C 42(b){B(F.1z){D a=2j(b);F.1T.1s=I;F.1T.4i(a);F.1T=X;F.1z=I}}C 8c(){F.1i.9e=C(c){c.2C();D b=c.9p;D a=b.9q[0];F.6b.9a=F.8W.8Q(a)};F.1i.8R=C(a){a.2C();E I};F.1i.2d("8T",54,H);F.1i.2d("8Z",C(d){D a=2j(d);B(d.66==0&&!F.1z){B(F.O&&F.O.1s){N(D b=F.O.14.Q-1,c=F.O.14[b];c;c=F.O.14[--b]){B(c.15&&c.15.R(U,a)){F.1z=H;E H}}}G{N(D b=F.1b.Q-1,c=F.1b[b];c;c=F.1b[--b]){B(c.15&&c.15.R(U,a)){F.1z=H;E H}}}E I}G{B(d.66==2&&F.1z){F.1T.1s=I;F.1T.4i(a);F.1T=X;F.1z=I}}E H},H);F.1i.2d("97",42,H);F.1i.2d("98",C(d){D b=2j(d);B(F.1k.3C()){E}B(1z&&1T!=X){1T.3K(b)}G{B(F.O&&F.O.1s){N(D a=0,c=F.O.3t[a];c;c=F.O.3t[++a]){B(c.R(U,b)){E H}}}G{N(D a=0,c=F.3v[a];c;c=F.3v[++a]){B(c.R(U,b)){E H}}}}},H);F.1i.2d("7Y",C(d){d.2C();D b=2j(d);B(d.4z){b.2V=d.4z>0}G{B(d.4A){b.2V=d.4A<0}}B(F.O&&F.O.1s){N(D a=F.O.14.Q-1,c=F.O.14[a];c;c=F.O.14[--a]){B(c.1c&&c.1c.R(U,b)){E H}}}G{N(D a=F.1b.Q-1,c=F.1b[a];c;c=F.1b[--a]){B(c.1c&&c.1c.R(U,b)){E H}}}},H);F.1i.2d("96",C(d){B(d.39.Q==1){d.2C();54(d.39.3e(0));B(F.1z){42(d.39.3e(0))}B(!F.1z){D a=2j(d.39.3e(0));B(F.O&&F.O.1s){N(D b=F.O.14.Q-1,c=F.O.14[b];c;c=F.O.14[--b]){B(c.15&&c.1F&&c.19){B(c.15.R(U,a)){F.1z=H;E H}}}}G{N(D b=F.1b.Q-1,c=F.1b[b];c;c=F.1b[--b]){B(c.15&&c.1F&&c.19){B(c.15.R(U,a)){F.1z=H;E H}}}}E I}}},H);F.1i.2d("92",C(a){a.2C();B(F.1z){42(a.6e.3e(0))}},H);F.1i.2d("93",C(b){b.2C();B(F.1k.3C()){E}B(b.39.Q==1&&F.1z&&1T!=X){D a=2j(b.39.3e(0));1T.3K(a)}},H);F.1i.2d("94",C(a){a.2C();B(F.1z){42(a.6e.3e(0))}},H);F.1i.2d("91",C(d){d.2C();D b=2j(d);B(d.4z){b.2V=d.4z>0}G{B(d.4A){b.2V=d.4A<0}}B(F.O&&F.O.1s){N(D a=F.O.14.Q-1,c=F.O.14[a];c;c=F.O.14[--a]){B(c.1c&&c.1c.R(U,b)){E H}}}G{N(D a=F.1b.Q-1,c=F.1b[a];c;c=F.1b[--a]){B(c.1c&&c.1c.R(U,b)){E H}}}},I);F.2x.1S();F.2r.1S();3E()}C 3D(){2r.56();B(O&&3u){F.U.8U(3u,0,0)}G{B(!F.O){F.2x.56()}N(D c=0,d=F.1b[c];d;d=F.1b[++c]){d.1r();d.2R(F.U)}}8V{B(F.O){N(D a=0,d=O.14[a];d;d=O.14[++a]){d.1r();d.2R(F.U)}}}8Y(b){}}C 8X(a){u.1E=a;u.1s=I;u.Z=X;u.6k=J 2Q("6g");u.6f=J 2Q("5Y");u.9b=C(){B(O==u&&!u.1s){u.1s=H;u.Z=2r;6Y()}};u.4n=0;u.3h=0;u.9n=C(){B(u.3h>0){u.3h--;B(u.3h==0){B(u.1s){u.6k.R(X,"6g")}G{u.Z=X;F.O=X;u.6f.R(X,"5Y")}u.3h=u.4n}}};u.9o=C(b){u.3h=b;u.4n=b};u.9g=C(){B(O==u&&u.1s){u.1s=I;F.3u=17}};u.3t=J 12();u.14=J 12();u.14.3x=u;u.14.2M=C(b,c){b.2a=I;b.p=X;B(c){b.1E=c}u.2c(b);2D(b,I,u.3x)};u.9f=I;E u}C 5a(){D d;D a=J 12();D b=J 12();D e=J 12();u.9c=C(f,g){a.2c({R:f,1E:g})};u.9d=C(){B(F.1k.4p){$1d("2W").30=F.1k.32+",欢迎你!";E}D h=$1d("32").V;D f=$1d("3d").V;B(h.Q<6){$1d("2W").30="用户名输入不正确...";E}F.1k.5V(H,"6r");$1d("2W").30="登陆中,请稍后";D g=6j(C(){D i=$1d("2W").30;B(i.Q<10){i+="."}G{i="登陆中,请稍后"}$1d("2W").30=i},9h);4N.4M.5I.6r(h,f,H,X,X,C(j,i){B(j){F.9i.9m();F.1k.4p=H;F.1k.32=$1d("32").V;F.1k.3d=$1d("3d").V;F.1k.59();F.1k.49();4Y(i)}G{4Y(i);$1d("2W").30=\'学号或者密码错误<4E/>如果您确实无法登陆系统<4E/>请发送题目为:"账号"的邮件到<4E/><b>9l@9k.6B</b>\'}F.1k.5g()},C(j,i){F.1k.5g();4Y(i);$1d("2W").30="请报告管理员<4E/>"+j.8O},g)};u.8h=C(){4N.4M.5I.8g()};u.49=C(){B(!u.58){4N.4M.5X.8f(C(f){F.1k.58=H})}};u.59=C(){B(u.5d){E}G{8d.8e(F.1k.32,F.1k.3d,C(f){B(f[0]!=-1){F.1k.5h=f[0]}B(f[1]!=-1){F.1k.5e=f[1]}})}};u.8i=C(){B(u.5d){u.5h=17;u.5e=17;u.32=17;u.3d=17}};u.8j=C(f){B(!u.58){u.49();E I}G{E 4N.4M.5X.8n(f)}};u.8m=C(f,g){b.2c({R:f,1E:g})};u.8l=C(f){e.2c(f)};D c;u.3C=C(){E d};u.5V=C(k,j){B(k!=I){k=H}B(d&&k){8k J 8P("3C!")}G{B(!d){N(D f=0,g=a[f];g;g=a[++f]){B(!g.1E||g.1E==j){g.R()}}c=j;d=H;B(F.O){D h=F.O.14.4c("5O");B(h){h.1F=H}}}}};u.5g=C(){B(d){d=I;N(D f=0,g=b[f];g;g=a[++f]){B(!g.1E||g.1E==c){g.R()}}e.8b(C(l,k,j){l()});5y e;e=J 12();c=X}B(F.O){D h=O.14.4c("5O");B(h){h.1F=I}}};u.4X=I;u.32="";u.3d="";u.5h=17;u.5e=17;u.5d=I;E u}C 82(b){D a=1w.2q;B(a.6R){a.6R()}G{B(a.6S){a.6S()}G{B(a.6Q){a.6Q()}G{E I}}}B(b){b()}E H}5a.13={1d 4p(){E u.4X},3b 4p(a){u.4X=a;B(a){u.59();u.49()}}};D 1k=J 5a();C 81(c,f){D b=F.1i.1t;D e=F.1i.2L;B(b/e>c/f){D a=c;D d=f*b/e;D h=0;D g=(f-d)/2}G{D d=f;D a=c*e/b;D g=0;D h=(c-a)/2}E{7Z:h,80:g,4n:a,3j:d}}C 84(b,a,f,d){D c=1w.2q.5c-8;D e=1w.2q.5i-8*1w.2q.5i/1w.2q.5c;B(c/e>d/f){b.2L=e;b.1t=d/f*e;F.1v=e/85;b.16.2J=(1w.2q.5c-b.1t)/2+"T";b.16.4G="6W"}G{b.1t=c;b.2L=f/d*c;F.1v=c/8a;b.16.4G=(1w.2q.5i-b.2L)/2+"T";b.16.2J="6W"}4e=b.89;4f=b.88;a.1v(F.1v,F.1v)}C 5x(a){E a*F.1v+F.4e}C 5B(a){E a*F.1v+F.4f}C 2j(d){D a=J 86();D c=1w.3p.6L+1w.2q.6L-F.4e;D b=1w.3p.6w+1w.2q.6w-F.4f;a.5z=1l((d.6u+c)/1v);a.2H=1l((d.6I+b)/1v);a.2n=d.6u+c;a.2m=d.6I+b;E a}C 6Y(){D b=F.U.8p(0,0,F.1i.1t,F.1i.2L);F.3u=b;B(F.6O){D a=J 6O("6G/8H.6G");F.6J=a;a.8G=C(c){F.3u=c.8F};a.8D(b)}}12.13.4P=C(a){B(u.36(a)==-1){N(D b=0;b<u.Q;b++){B(a.p.z>=u[b].p.z){u.2O(b,0,a);E}}u.2c(a)}};12.13.4O=C(b){D a=u.36(b);B(a!=-1){u.2O(a,1)}};1b.2M=C(a,b){a.2a=H;a.p=X;B(b){a.1E=b}u.2c(a);2D(a,H)};12.13.5A=C(c){D b;N(D a=0;a<u.Q;a++){B(u[a].1E==c){b=u[a];1G}}B(b){2S(b);u.2O(a,1);b.1Y()}E b};C 2D(d,b,a){B(b){d.2a=H;B(d.1m){F.3v.4P(d.1m)}}G{B(b==I){u.2a=I;d.3x=a;B(d.1m){d.3x.3t.4P(d.1m)}}}B(d.L){N(D c=0;c<d.L.Q;c++){2D(d.L[c],b,a)}}}C 2S(a){B(a.2a){B(a.1m){F.3v.4O(a.1m);a.1m=17}}G{B(a.1m){a.3x.3t.4O(a.1m);a.1m=17}}}12.13.4c=C(b){N(D a=0;a<u.Q;a++){B(u[a].1E&&u[a].1E==b){E u[a]}}E 17};12.13.8N=C(b){N(D a=0;a<u.Q;a++){B(u[a].6D&&u[a].6D==b){E u[a]}}E 17};C 3V(b,c,d,a){a.1R();a.2Z(d,0);a.1H(b-d,0);a.2v(b,0,b,d);a.1H(b,c-d);a.2v(b,c,b-d,c);a.1H(d,c);a.2v(0,c,0,c-d);a.1H(0,d);a.2v(0,0,d,0);a.1U()}C 3W(c,d,b,a){b.1R();B(a){b.2Z(0,0);b.1H(c,0);b.1H(c/2,d);b.1H(0,0)}G{b.2Z(0,d/2);b.1H(c,d);b.1H(c,0);b.1H(0,d/2)}b.1U()}C 8M(c,e,b){b.1R();D a=c/2;D d=e/2;b.2Z(0,d);b.2v(0,e,a,e);b.2v(c,e,c,d);b.2v(c,0,a,0);b.2v(0,0,0,d);b.1U()}C 8K(c,b,a){a.1R();a.2h(0,0,c,c);a.2Z(b,b);a.1H(c-b,c-b);a.2Z(b,c-b);a.1H(c-b,b);a.1U()}C 8C(c,a){a.1R();a.2Z(c,0);N(D b=0;b<9;b++){a.8B(K.1P/5);B(b%2==0){a.1H((c/0.8u)*0.8t,0)}G{a.1H(c,0)}}a.1U()}C 24(a,e,c,d){D b="8s@8q.8r.6B";u.8v=C(){8w(b)};u.1M=17;u.5q=C(f){f.2e(u.1n,u.1o)};u.Z=17;u.1r=C(){B(!u.19){E}B(u.Z){u.Z.1r()}};u.19=H;u.41=H;u.2R=C(f){B(!u.41){E}f.4d();B(!u.19){f.4B=0.4}u.5q(f);u.1M(f);f.4j()};u.1n=a;u.1o=e;u.w=c;u.h=d;u.3I=0;u.3U=17;u.2a=X;u.47=17;u.4a=17;u.5s=17;u.1Y=C(){B(u.P){u.P.1Y()}B(u.15){u.15.1Y()}B(u.1m){u.1m.1Y()}B(u.L){N(D f=0;f<u.L.Q;f++){u.L[f].1Y()}}B(u.Z){u.Z=X}5y u};E u}C 5r(l,j,m,e,b,f,a,i,k,g,d){u.15=J 15(u);u.2T=0;u.15.3K=C(h){D n=u.p.2T-h.2H;B(K.8A(n)>u.p.11){B(n>0){u.p.5n()}G{u.p.5k()}u.p.2T=h.2H}};u.1f=J 12();u.1C=0;u.1j=g?g:"2A(5j,5j,5j,0.7)";u.w=m;u.h=e;u.1n=l;u.1o=j;D c=d?d:1.2;u.1p=i?i:"1X";u.52=k?k:"1X";u.M=b?b:\'3w "幼圆"\';u.11=1l(4L(u.M.1Z(/\\b\\d+T/i)[0].21("T",""))*c);u.3z=a?a:\'8z "幼圆"\';u.4y=f;u.2w=1l(4L(u.3z.1Z(/\\b\\d+T/i)[0].21("T",""))*c);u.5k=C(){B(u.1C>0){u.1C--;E H}E I};u.5n=C(){D h=(u.1f.Q-u.1C)*u.11;B(u.4y&&u.1C==0){h+=u.2w-u.11}B(h>u.h){u.1C++;E H}E I};u.4s=C(h){B(h){u.1f=5G(h,U,u.w,u.M)}G{u.1f=J 12()}u.1C=0};u.8y=C(h){B(h){u.1f=u.1f.8x(5G(h,F.U,u.w,u.M))}};u.1M=C(n){n.2I="2z";n.1R();n.2h(0,0,u.w+5,u.h+5);n.1U();n.4D();n.Y=u.1j;n.2p(0,0,u.w,u.h+5);n.M=u.M;n.Y=u.1p;D q=0;D o=u.h-u.11;B(u.5D){N(D h=u.1C;q<=o&&h<u.5D;h++){B(u.4y){B(h==0){n.M=u.3z;n.Y=u.52;D r=(u.w-n.2o(u.1f[0]).1t)/2;n.1u(u.1f[0],r,0);n.M=u.M;q=u.2w;n.Y=u.1p}G{B(u.1C==0){n.1u(u.1f[h],0,(h-1)*u.11+u.2w)}G{n.1u(u.1f[h],0,(h-u.1C)*u.11)}q+=u.11}}G{n.1u(u.1f[h],0,(h-u.1C)*u.11);q+=u.11}}}G{N(D h=u.1C;q<=o&&h<u.1f.Q;h++){B(u.4y){B(h==0){n.M=u.3z;n.Y=u.52;D r=(u.w-n.2o(u.1f[0]).1t)/2;n.1u(u.1f[0],r,0);n.M=u.M;q=u.2w;n.Y=u.1p}G{B(u.1C==0){n.1u(u.1f[h],0,(h-1)*u.11+u.2w)}G{n.1u(u.1f[h],0,(h-u.1C)*u.11)}q+=u.11}}G{n.1u(u.1f[h],0,(h-u.1C)*u.11);q+=u.11}}}n.2p(u.w-4,0,4,u.h*h/u.1f.Q)};u.99=C(h){u.5D=h};u.1c=J 1c(u);u.1c.R=C(h,n){B(!u.19){E I}u.27(h);B(h.2u(n.2n,n.2m)){B(n.2V){u.3l()}G{u.3g()}E H}G{E I}};u.1c.3g=C(){E u.p.5n()};u.1c.3l=C(){E u.p.5k()};u.65=C(){u.1f.8L("")};u.8J=C(){D h=u.1f.Q;B(h==0){E 0}G{E u.2w+u.11*(h-1)}};u.8I=C(h){B(h){u.11=1l(4L(u.M.1Z(/\\b\\d+T/i)[0].21("T",""))*h);u.2w=1l(4L(u.3z.1Z(/\\b\\d+T/i)[0].21("T",""))*h)}};E u}C 6A(b,f,a,d,e,c){u.1n=b;u.1o=f;u.2f=a;u.M=d?d:\'3w "幼圆"\';U.4d();U.M=u.M;u.w=F.U.2o(u.2f).1t;U.4j();u.h=1l(u.M.1Z(/\\b\\d+T/i)[0].21("T",""));u.1p=e?e:"1X";u.1j=c?c:"2A(0,0,0,0)";u.1M=C(g){g.2I="2z";g.M=u.M;g.Y=u.1j;g.2p(0,0,u.w,u.h);g.Y=u.1p;g.1u(u.2f,0,0)};u.8E=C(g){u.2f=g;U.4d();U.M=u.M;u.w=F.U.2o(u.2f).1t;U.4j()};E u}C 6E(i,f,j,d,c,a,e,g,l,k,b){u.P=J P(u);B(b){u.1m=J 1m(u);u.1m.5o=C(){u.p.Z.4I()};u.1m.5C=C(){u.p.Z.4H();u.p.Z.2F()}}u.1j=e?e:"2A(5w,5w,5w,0.7)";u.1n=i;u.1o=f;u.w=j;a=a?a:\'3w "幼圆"\';u.11=1l(a.1Z(/\\b\\d+T/i)[0].21("T",""));u.h=u.11>d?u.11:d;u.M=a;u.2f=c;u.34=k?k:"1X";u.1p=l?l:"46";u.Z=J Z(0.7,0,1,H,0,6P,1.1,1,-0.1,g);u.1M=C(m){m.M=u.M;m.2I="2z";D h=m.2o(u.2f).1t;m.Y=u.1j;3V(u.w,u.h,5,m);m.2K();B(u.Z.V>0&&u.Z.V<1){D o=m.6t(0,0,u.w,u.h);o.3a(0,u.1p);o.3a(u.Z.V,"2A(3c, 3c, 3c,0.5)");o.3a(1,u.1p);D n=m.6t(0,0,u.w,u.h);n.3a(0,u.34);n.3a(u.Z.V,"2A(3c, 3c, 3c,0.5)");n.3a(1,u.34);m.3k=o;m.Y=n}G{m.Y=u.34}m.3k=u.1p;m.3S();m.1u(u.2f,h>u.w?0:(u.w-h)/2,(u.h-u.11)/2,u.w)};u.Z.2F();E u}C 6x(l,k,m,g,b,d,j,c,a,i,n,o){u.1n=l;u.1o=k;u.M=c?c:\'3w "幼圆"\';u.11=1l(u.M.1Z(/\\b\\d+T/i)[0].21("T",""));u.h=g>u.11?g:u.11+6;u.r=b?b:u.h/2;u.4g=d;u.4h=j;u.29=j;F.U.M=u.M;D f=F.U.2o(u.4g).1t;D e=F.U.2o(u.4h).1t;u.w=f>e?f*2+u.r*2:e*2+u.r*2;B(m>u.w){u.w=m}u.2J=I;u.34=a?a:"1X";u.1j=i?i:"6l";u.1p=o?o:"1X";u.5H=n?n:"46";u.P=J P(u);u.P.2i=C(q){D h=u.p;B((q.5z-h.1V)>h.w/2){h.2J=H;h.29=h.4g}G{h.2J=I;h.29=h.4h}};u.1M=C(h){h.M=u.M;h.2I="2z";h.3k=u.1p;h.Y=u.1j;h.6N=2;3V(u.w,u.h,u.r,h);h.2K();h.3S();h.Y=u.34;B(u.2J){h.1u(u.4g,b-2,(u.h-u.11)/2,u.w/2);h.2e(u.w/2+2,2)}G{h.1u(u.4h,u.w/2+2,(u.h-u.11)/2,u.w/2);h.2e(2,2)}3V(u.w/2-4,u.h-4,u.r,h);h.Y=u.5H;h.3B=10;h.5E=u.5H;h.8o=0;h.87=0;h.3S();h.2K()};E u}C 4b(a,e,d,b,c){u.15=J 15(u);u.P=J P(u);u.1c=J 1c(u);u.1n=a;u.1o=e;u.w=b;u.h=d;u.1j=c?c:"2A(2k,2k,2k,0.7)";u.1y=0;u.1e=10;u.L=J 12();u.2M=C(f,g){u.L.2c(f);f.p=u;B(g){f.1D=f.1D?f.1D:g}G{f.1D=f.1D?f.1D:"5Q"+u.L.Q}B(u.2a==H){2D(f,H)}G{B(u.2a==I){2D(f,I,O)}}B(f.y+f.h>u.1e){u.1e=f.y+f.h+10}};u.4c=C(g){N(D f=0;f<u.L.Q;f++){B(u.L[f].1D==g){E u.L[f]}}E X};u.5A=C(j){D f=-1;D h;N(D g=0;g<u.L.Q;g++){B(u.L[g].1D==j){f=g;h=u.L[g];1G}}B(f!=-1){u.L.2O(f,1);2S(h);B(u.1e==h.y+h.h+10){u.1e-=h.h}h.p=X;h.1Y()}};u.5N=C(){N(D f=0;f<u.L.Q;f++){2S(u.L[f]);u.L[f].1Y()}u.L=J 12();u.1e=10;u.1y=0};u.1M=C(f){f.1R();f.2h(0,0,u.w+3,u.h);f.1U();f.4D();f.Y=u.1j;f.2p(0,0,u.w,u.h)};u.2R=C(f){B(!u.1F){E}f.4d();u.5q(f);u.1M(f);B(!u.19){f.4B=0.4}N(D g=0,h=u.L[g];h;h=u.L[++g]){B(h.h+h.y>0&&h.y<=u.h){h.2R(f)}}f.4j()};u.3o=C(f){N(D g=0;g<u.L.Q;g++){u.L[g].y+=f}u.1y+=f};u.2T=0;u.15.4i=C(j){u.p.2T=0;D f=u.p.L;B(u.p.h>=u.p.1e){N(D g=0,h=f[g];h;h=f[++g]){h.y-=u.p.1y}u.p.1y=0}G{B(u.p.1y>0){N(D g=0,h=f[g];h;h=f[++g]){h.y-=u.p.1y}u.p.1y=0}G{B(u.p.h>(u.p.1y+u.p.1e)){D k=u.p.h-u.p.1e-u.p.1y;N(D g=0,h=f[g];h;h=f[++g]){h.y+=k}u.p.1y+=k}}}};u.15.3K=C(g){B(u.p.1e<=u.p.h){E}D f=g.2H-u.p.2T;B(f>20){f=20}G{B(f<-20){f=-20}}u.p.3o(f);u.p.2T=g.2H};u.P.R=C(g,k){u.27(g);B(g.2u(k.2n,k.2m)){D f=u.p.L;N(D h=f.Q-1,j=f[h];j;j=f[--h]){B(j.P&&j.P.R(F.U,k)){E H}}E u.2i(k)}G{E I}};u.P.2i=C(f){E H};u.1c.3g=C(){D f=u.p.h-u.p.1e;B(u.p.1y>f){B(f<-35){u.p.3o(-35)}G{u.p.3o(-u.p.1y)}E H}E I};u.1c.3l=C(){B(u.p.1y<0){B(u.p.1y<-35){u.p.3o(35)}G{u.p.3o(-u.p.1y)}E H}E I};u.1r=C(){B(u.Z){u.Z.1r()}N(D f=0,g=u.L[f];g;g=u.L[++f]){g.1r()}};E u}C 6z(i,g,j,d,f,b,a,c,k,l,e){u.1n=i;u.1o=g;u.w=j;u.2Y=d;u.h=d;u.3f=b;u.3r=a;u.45=c;u.48=k;u.1a=I;u.2E=17;u.1j=f;u.6U=l;u.3A=e?e:"1X";u.1M=C(m){D n=u.1a?u.1e:u.2Y;m.3k=u.6U;m.Y=u.1j;m.2p(0,0,u.w,n);m.6p(0,0,u.w,n);m.1R();m.2h(0,0,u.w,n);m.1U();m.3S();m.4D();m.6N=2;B(!u.1a&&u.1e>u.2Y){m.2e(u.3f,u.3r);3W(u.45,u.48,m,I);m.Y=u.3A;m.3B=10;m.5E=u.3A;m.2K();m.3B=0;m.2e(-u.3f,-u.3r)}G{B(u.1a){m.2e(u.3f,u.3r);3W(u.45,u.48,m,H);m.Y=u.3A;m.3B=10;m.5E=u.3A;m.2K();m.3B=0;m.2e(-u.3f,-u.3r)}}};u.2s=C(){D o=u.1a?u.2Y-u.1e:u.1e-u.2Y;B(u.p){D h=u.p.L;N(D m=0,n=h[m];n;n=h[++m]){B(n.y>u.y){n.y+=o}}u.p.1e+=o}u.1a=!u.1a;u.h=u.1a?u.1e:u.2Y;B(u.2E){u.2E()}};u.P=J P(u);u.P.27=C(h){h.1R();B(u.p.1a){h.2h(u.p.1V,u.p.1Q,u.p.w,u.p.1e)}G{h.2h(u.p.1V,u.p.1Q,u.p.w,u.p.h)}h.1U()};u.15=J 15(u);u.P.R=C(n,s){B(!(u.p.1F&&u.p.19&&u.19)){E I}u.27(n);B(n.2u(s.2n,s.2m)){B((!u.p.1a&&u.p.1e>u.p.2Y)||u.p.1a){D o=s.5z-u.p.1V-u.p.3f;D m=s.2H-u.p.1Q-u.p.3r;B(o>0&&m>0&&o<u.p.45&&m<u.p.48){u.p.2s();E H}}D h=u.p.L;N(D q=h.Q-1,r=h[q];r;r=h[--q]){B(r.P&&r.P.R(F.U,s)){E H}}E u.2i(s)}G{E I}};u.L=J 12();E u}C 6y(g,e,h,b,f,i,a,c,d){u.1n=g;u.1o=e;u.w=h;u.5p=f?f:\'83 "幼圆"\';u.5l=1l(u.5p.1Z(/\\b\\d+T/i)[0].21("T",""));u.h=u.5l*1.3;u.1O=u.h;u.1a=I;u.38=5;u.5K=b;u.5R=i?i:"2A(2k,2k,2k,0.7)";u.3F=a?a:"1X";u.1j=c?c:"2A(2k,2k,2k,0.7)";u.P=J P(u);u.2E=17;u.Z=J Z(0.7,0,1,H,1,4K,1,1,0,d);u.P.27=C(j){j.1R();B(u.p.1a){j.2h(u.p.1V,u.p.1Q,u.p.w,u.p.h)}G{j.2h(u.p.1V,u.p.1Q,u.p.w,u.p.1O)}j.1U()};u.P.2i=C(m){D l=u.p;B(l.1a){B(m.2H>l.1Q+l.1O){N(D j=l.L.Q-1,k=l.L[j];k;k=l.L[--j]){B(k.P){B(k.P.R(U,m)){1G}}}E H}G{l.1a=I;l.Z.3i();B(l.2E){l.2E()}}}G{l.1a=H;l.Z.4I();B(l.2E){l.2E()}}E H};u.2M=C(j,k){u.L.2c(j);j.p=u;j.y=u.h;j.x+=u.38;B(k){j.1D=j.1D?j.1D:k}G{j.1D=j.1D?j.1D:"5Q"+u.L.Q}B(u.2a==H){2D(j,H)}G{B(u.2a==I){2D(j,I,O)}}u.h=j.y+j.h+10};u.5A=C(n){D j=-1;D m;N(D k=0,l=u.L[k];l;l=u.L[++k]){B(l.1D==n){j=k;m=l;1G}}B(j!=-1){N(D k=0,l=u.L[k];l;l=u.L[++k]){B(l.y>m.y){l.y-=m.h}}u.L.2O(j,1);u.h-=m.h;2S(m);m.p=X}E m};u.5N=C(){N(D j=0,k=u.L[j];k;k=u.L[++j]){2S(k)}u.L=J 12();u.h=u.1O};u.1M=C(j){j.Y=u.5R;j.2p(0,0,u.w,u.1O);j.Y=u.3F;j.M=u.5p;j.2I="2z";j.1u(u.5K,3,(u.1O-u.5l)/5,u.w-u.1O);D k=u.1O*0.5;j.2e(u.w-k,k/2);3W(k,k,j,u.1a);j.2K();j.2e(k-u.w,-k/2);j.1R();j.2h(u.38,u.1O,u.w-u.38,(u.h-u.1O)*u.Z.V);j.1U();j.4D();j.Y=u.1j;j.2p(u.38,u.1O,u.w-u.38,u.h-u.1O)};u.1r=C(j){D n=u.Z.V;u.Z.1r();D m=(u.h-u.1O)*(u.Z.V-n);B(m!=0){B(u.p&&u.p.L){u.p.1e+=m;N(D k=0,l=u.p.L[k];l;l=u.p.L[++k]){B(l.y>u.y){l.y+=m}}}}N(D k=0,l=u.L[k];l;l=u.L[++k]){l.1r()}};u.L=J 12();E u}C 6Z(g,f,i,a,j,h,b,e,d){u.1n=g;u.1o=f;u.M=a?a:\'3w "幼圆"\';u.h=1l(u.M.1Z(/\\b\\d+T/i)[0].21("T",""));u.6o=e?e:"46";5W(b){3y 0:u.2B="请填写数字";u.4u=/^-?\\d+(\\.\\d+)?$/;1G;3y 1:u.2B="请填写整数";u.4u=/^-?\\d+$/;1G;9j:u.2B="请填认真填写";u.4u=/^[\\S ]+$/;1G}B(d){u.2B=d}u.2f="";u.29=X;B(i){u.w=i}G{U.M=u.M;D c=U.2o(u.2B).1t;u.w=6i>c?6i:c}u.1p=j?j:"1X";u.1j=h?h:"6l";u.6h=C(k){B(k.1Z(u.4u)){u.29=k;E H}G{u.29=X}E I};u.1r=C(){B(u.2g){u.2f=u.2g.V;u.2g.33(u)}};u.1M=C(k){B(u.2g&&u.2g.72()){E}k.2I="2z";k.3k="1X";k.4B=0.7;k.6p(-2,-2,u.w+4,u.h+4);k.M=u.M;k.Y=u.1j;k.2p(-2,-2,u.w+4,u.h+4);B(!u.29){k.Y=u.6o;k.M="8S "+u.M;k.1u(u.2B,0,4/25*u.h,u.w)}G{k.Y=u.1p;k.1u(u.29,0,0,u.w)}k.4B=1};u.P=J P(u);u.P.R=C(k,l){B(!u.p.19||!u.19){E I}u.27(k);B(k.2u(l.2n,l.2m)){B(!u.p.2g){F.5v.6s(u.p);u.p.2g.70()}E H}G{E I}}}C 6M(h,e,i,g,d,c,b,f,a){u.1n=h;u.1o=e;u.w=i;u.M=g;u.h=1l(u.M.1Z(/\\b\\d+T/i)[0].21("T",""))+5;u.1j=c?c:"90";u.3F=b?b:"1X";u.2B=f?f:"请选择";u.1p=a?a:"46";u.3H=-1;u.6m=C(j){};u.3P=d?d:J 12();u.6n=C(){E u.3H==-1?X:u.3P[u.3H]};u.1a=I;u.P=J P(u);u.1M=C(j){3V(u.w,u.h,5,j);j.Y=u.1j;j.3k=u.1p;j.2K();j.3S();j.Y=u.3F;D k=u.h/4;j.2I="2z";j.M=u.M;j.1u(u.3H==-1?u.2B:u.6n(),2,2,u.w-k*2);j.2e(u.w-k*2-2,k);3W(k*2,k*2,j,u.1a);j.Y=u.1p;j.2K()};u.5t=C(){D j;B(!u.p){B(F.O){j=F.O.14}G{j=F.1b}}G{j=u.p.L}j.2O(j.36(u.26),1);u.26.1F=I;u.1a=I};u.6d=C(){B(!u.p){B(F.O){F.O.14.2M(u.26,u.1E+"26")}G{F.1b.2M(u.26,u.1E+"26")}}G{u.p.2M(u.26,u.1E+"26")}u.26.1F=H;u.1a=H};u.P.2i=C(){B(u.p.1a){u.p.5t()}G{u.p.6d()}};u.26=J 5m(u)}C 6H(b,g,c,e,d,a,f){u.1n=b;u.1o=g;u.w=c;u.h=e;u.3q=J 5r(b,g,c,e,d,I,d,a,a,f);u.1I=1w.5J("1I");u.1I.16.5U="5L";u.1I.16.1t=1l(u.w*1v)+"T";u.1I.16.2L=1l(u.h*1v)+"T";u.1I.16.5P=a;u.1I.16.M=d;u.1I.16.5T=9;u.33=C(){D h=u.1I;u.3q.x=u.x;u.3q.y=u.y;B(u.y<0||(u.p&&u.y+u.h>u.p.h)){h.16.67="95"}G{h.16.67="7o";h.16.1t=1l(u.w*1v)+"T";h.16.2L=1l(u.h*1v)+"T";h.16.4G=1l(5B(u.1Q))+"T";h.16.2J=1l(5x(u.1V))+"T"}};u.37=I;u.2R=C(h){B(!u.37){u.3q.2R(h)}};u.47=C(h){u.33()};u.4a=C(h){u.33()};u.61=C(){B(!u.19||u.37){E}B(u.y<0||(u.p&&u.p.h<u.y+u.h)){E}u.37=H;u.33();F.4r.3Y=u;1w.3p.71(u.1I)};u.3T=C(){B(!u.37){E}u.37=I;u.3q.4s(u.1I.V);1w.3p.6T(u.1I);F.4r.3Y=X};u.P=J P(u);u.P.2i=C(){u.p.61()};u.4s=C(h){B(!h){h=""}u.3q.4s(h);u.1I.V=h};u.65=C(){E u.1I.V};E u}C 5m(a){u.23=a;u.23.26=u;u.P=J P(u);u.3j=a.h-5;u.h=u.3j*a.3P.Q;u.w=a.w;u.x=a.x;u.y=a.y+a.h;u.P=J P(u);u.P.2i=C(b){D c=b.2H-u.p.1Q;u.p.23.3H=K.3m(c/u.p.3j);u.p.23.6m(K.3m(c/u.p.3j));u.p.23.5t()};u.1M=C(b){b.Y=u.23.1j;b.2p(0,0,u.w,u.h);b.Y=u.23.3F;b.M=u.23.M;b.2I="2z";N(D c=0;c<u.23.3P.Q;c++){b.1u(u.23.3P[c],2,c*u.3j,u.23.w)}};E u}C 5u(){D b=1w.5J("2g");b.7z="H";D a=I;b.5T=3;b.16.5U="5L";u.6X=C(c){b.V=c};u.6K=C(){E b.V};u.6s=C(c){B(c&&!c.19){E}B(u.43){u.3Q()}u.43=c;c.2g=u;u.33(c);b.V=c.29?c.29:"";b.16.M=c.M.21(c.h,1l(c.h*1v*0.8));b.16.5P=c.1p};u.3Q=C(){B(u.43){D c=u.43;c.6h(b.V);c.2g=17;u.43=17;u.3T()}};u.33=C(c){B(c.y<0||(c.p&&c.y+c.h>c.p.h)){u.3T()}G{b.16.1t=c.w*1v+"T";b.16.2L=c.h*1v+"T";b.16.4G=5B(c.1Q)+"T";b.16.2J=5x(c.1V)+"T"}};u.3T=C(){B(a){1w.3p.6T(b);a=I}};u.70=C(){B(!a){1w.3p.71(b);a=H}};u.72=C(){E a}}D 4r={3Y:17,3Q:C(){B(u.3Y){u.3Y.3T()}}};D 5v=J 5u();24.13={1d 1V(){E u.3U?u.1n+u.T:u.1n},1d 1Q(){E u.3U?u.1o+u.5F:u.1o},3b p(a){u.3U=a;B(!a){u.3I=0}G{u.3I=a.z+1;u.T=a.1V;u.5F=a.1Q}3J(u)},1d p(){E u.3U},3b y(b){B(u.47){D a=u.1o;u.1o=b;u.47(a,b)}G{u.1o=b}3J(u)},3b x(b){B(u.4a){D a=u.1n;u.1n=b;u.4a(a,b)}G{u.1n=b}3J(u)},1d x(){E u.1n},1d y(){E u.1o},1d z(){E u.3I},1d 1F(){E u.41},3b 1F(a){B(a!=u.41){u.41=a;B(u.5s){u.5s()}}}};5u.13={3b V(a){u.6X(a)},1d V(){E u.6K()}};C 3Z(){u.p;u.19=H;u.27=C(a){a.1R();a.2h(u.p.1V,u.p.1Q,u.p.w,u.p.h);a.1U()}}C 1c(a){u.p=a;u.3l=C(){E H};u.3g=C(){E H};u.R=C(b,f){B(!(u.p.1F&&u.p.19&&u.19)){E I}u.27(b);B(b.2u(f.2n,f.2m)){B(u.p.L){N(D c=0,d=u.p.L[c];d;d=u.p.L[++c]){B(d.1c&&d.1c.R(b,f)){E H}}B(f.2V){E u.3l()}G{E u.3g()}}G{B(f.2V){E u.3l()}G{E u.3g()}}}G{E I}}}C P(a){u.p=a;u.2i=C(b){E H};u.R=C(b,c){B(!(u.p.1F&&u.p.19&&u.19)){E I}u.27(b);B(b.2u(c.2n,c.2m)){u.2i(c);E H}G{E I}};u.1Y=C(){B(u.p){u.p.P=X}u.p=X};E u}C 1m(a){u.p=a;u.3O=I;u.5o=C(){};u.5C=C(){};u.R=C(b,c){B(!(u.p.19&&u.19&&u.p.1F)){E I}u.27(b);B(b.2u(c.2n,c.2m)){B(!u.3O){u.3O=H;u.5o();E H}G{E I}}G{B(u.3O){u.3O=I;u.5C();E H}G{E I}}E u};u.1Y=C(){2S(u.p);5y u};E u}C 15(a){u.p=a;u.1s=I;u.3K=C(b){};u.4i=C(b){};u.R=C(c,f){B(!(u.p.1F&&u.p.19&&u.19)){E I}u.27(c);B(c.2u(f.2n,f.2m)){u.1s=H;F.1T=u;B(u.p.L){D b=u.p.L;N(D d=0;d<b.Q;d++){B(b[d].15&&b[d].15.R(c,f)){u.1s=I;1G}}}E H}G{E I}};u.1Y=C(){u.p.15=17;u.p=X};E u}15.13=J 3Z();P.13=J 3Z();1m.13=J 3Z();1c.13=J 3Z();4b.13=J 24();6E.13=J 24();6A.13=J 24();5r.13=J 24();6Z.13=J 24();6z.13=J 4b();6y.13=J 4b();6M.13=J 24();6x.13=J 24();5m.13=J 24();6H.13=J 24();C 3J(d){B(d.L){D a=d.L;N(D b=0,c=a[b];c;c=a[++b]){c.T=d.1V;c.5F=d.1Q;c.3I=d.z+1;B(c.L){3J(c)}}}}C 5G(g,c,h,d){D b=J 12();D f=0;D e=0;D a="";g=g?g:"";c.M=d;6v(f<g.Q){6v(e<h){B(g[f]=="\\n"){f++;1G}G{a+=g[f];e=c.2o(a).1t;B(e>=h){a=a.7i(0,a.Q-1);1G}G{f++}}B(f>=g.Q){1G}}b.2c(a);a="";e=0}E b};',62,585,'||||||||||||||||||||||||||||||this|||||||if|function|var|return|window|else|true|false|new|Math|controls|font|for|curTask|clicker|length|fire||px|ctx|value|timeProvider|null|fillStyle|clock||fh|Array|prototype|cmdUIComponents|drager|style|undefined|isFinished|enable|expanded|backUIComponents|wheeler|get|maxh|lines|ticks|isRunning|canvas|bc|channelMng|parseInt|spotter|_x|_y|fc|points|update|isEnter|width|fillText|scale|document|Vx|baseLine|isPress|Vy|startTime|curline|id|ID|visible|break|lineTo|textarea|offset|pow|multiplier|paintFun|duration|offsetY|PI|absY|beginPath|start|activeDrager|closePath|absX|lastTime|black|dispose|match||replace|direction|select|UIComponent||sheet|pathFun|linear|vtxt|isBackUI|baseDirection|push|addEventListener|translate|txt|input|rect|onclick|mouseArg|250|subscribers|oy|ox|measureText|fillRect|documentElement|cmdStdClock|toggle|ticksPerSecond|isPointInPath|quadraticCurveTo|flh|backStdClock|sin|hanging|rgba|waterMark|preventDefault|registerEvent|onheaderClick|stop|calculate|cy|textBaseline|left|fill|height|addCtrl|minX|splice|minY|customEvent|paint|removeEvent|mouseY|maxX|up|logStatus|now|minh|moveTo|innerHTML|maxY|userName|resetPosition|tc||indexOf|_show|offsetX|touches|addColorStop|set|249|password|item|ix|onwheelDown|wait|reverse|sh|strokeStyle|onwheelUp|floor|sqrt|moveBaseline|body|article|iy|Vector|activeSpotters|backImgData|BackSpotters|25px|task|case|flf|ac|shadowBlur|busy|rePaint|animate|hc|stopTime|selectedIndex|_z|adjustChildern|onDragMove|timingFunction|eventName|cos|mouseIn|items|unbind|isOut|stroke|conceal|_p|roundRectPath|pointTrianglePath|jumpTo|textblock|eventer||_visible|onCanvasMouseUp|textbox|finished|iw|gray|onchangeY|ih|loadRoles|onchangeX|Panel|findByID|save|cvsLeft|cvsTop|ltxt|rtxt|onDragEnd|restore|iterated|iterations|onreverse|sw|started|isLogIn|message|ta|setText|max|regExp|5625|followOrientation|min|flc|wheelDelta|detail|globalAlpha|atan|clip|br|stopped|top|reset|restart|onend|bounceEaseOut|parseFloat|Services|Sys|remove|addEventer|revise|boundaries|isStop|01|VelocityCollide|asin|Date|_isLogIn|clearInterval|slope|quadratic|bezier|flcolor|random|onCanvasClick|standardClock|move|orientation|loadedRoles|getProfile|ChannelManager|delay|clientWidth|getProfiled|advertiserNo|segmentT|endChannel|subjectNo|clientHeight|200|moveDown|hfh|SelectSheet|moveUp|onmouseIn|hf|transFun|Article|onchangeVisible|concealSheet|BoxedInput|boxInput|110|absoluteX|delete|cx|removeCtrl|absoluteY|onmouseOut|maxLine|shadowColor|py|breakText|uc|AuthenticationService|createElement|ht|absolute|lastValue|clearCtrls|loading|color|ctrl|hb|fps|zIndex|position|beginChannel|switch|RoleService|onExit|normalize||show|perpendicular|getMagnitude|subtract|getText|button|display|webkitRequestAnimationFrame|1000|msRequestAnimationFrame|backImg|requestAnimationFrame|revealSheet|changedTouches|onexit|onBegin|validate|180|setInterval|onbegin|white|onSelected|selectedItem|wmc|strokeRect|bounceEaseIn|login|bind|createLinearGradient|clientX|while|scrollTop|Switch|Drop|Expand|Label|com|updateClock|no|Button|mode|js|TextBlock|clientY|worker|getValue|scrollLeft|Select|lineWidth|Worker|quartEaseInOut|webkitRequestFullScreen|requestFullscreen|mozRequestFullScreen|removeChild|sc|reverses|0px|setValue|workOnBackImg|TextBox|reveal|appendChild|isShow|dotProduct|clockTick||halfStep|oneStep|randomLimit|add|overlaps|floatAnimation|tasks|cmd|rectFloatAniamtion|linerBoundary|name|boundary|slice|back|normal|elasticClock|simpleClock|Projection|inline|zeroStep|edge|625|quintEaseOut|quintEaseIn|sineEaseInOut|quintEaseInOut|quartEaseIn|circEaseIn|quartEaseOut|autofocus|sineEaseOut|unSubscribe|pathClock|subscribe|arguments|sineEaseIn|atan2|circEaseOut|circEaseInOut|bounceEaseInOut|984375|fastForward|expoEaseIn|expoEaseInOut|expoEaseOut|updatePath|9375|quadEaseOut|quadEaseIn|quadEaseInOut|cubicEaseIn|cubicEaseInOut|cubicEaseOut|rewind|mousewheel|sx|sy|adjustScale|fullScreen|30px|adjustCanvas|720|Object|shadowOffsetY|offsetTop|offsetLeft|1280|forEach|Init|RecruitService|GetReProfile|load|logout|logOut|clearProfile|checkRole|throw|addTempEnder|addEndHander|isUserInRole|shadowOffsetX|getImageData|vip|qq|borian|200811|525731|contactMe|alert|concat|addText|40px|abs|rotate|starPath|postMessage|changeText|data|onmessage|blurWorker|changeLineSapce|getMaxH|exitRectPath|join|ellipsePath|findByNo|_message|Error|createObjectURL|ondragover|italic|click|putImageData|try|URL|Task|catch|mousedown|ghostwhite|DOMMouseScroll|touchend|touchmove|touchcancel|none|touchstart|mouseup|mousemove|setMaxLine|src|begin|addBeginHander|logIn|ondrop|loaded|exit|500|currentModalWindow|default|163|xlbaishushu|close|decreseWait|resetWait|dataTransfer|files'.split('|'),0,{}))