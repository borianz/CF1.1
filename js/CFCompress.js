eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('v 54(a,b,c){C d=a>=0?F.4B(a):F.1J+F.4B(a),e=(a-c/b)/(1+a*c/b),f=e>=0?F.4B(e):F.4B(e)+F.1J,g=F.3k(b*b+c*c),h=g*F.3t(f),i=-g*F.2F(f),j={1v:h*F.3t(d)+i*F.2F(d),1w:h*F.2F(d)-i*F.3t(d)};B j}v 5j(a){B u.3q=55.3q(),u.2I=v(){u.4R=!0,u.3M=55.3q()},u.8N=a,u.1R=v(){u.4R=!1},u.1h=v(){B u.3q},u.5x=v(){u.3q=u.4R?u.3M:55.3q()},u.2C=v(){B 68},u}v 8n(a,b){B u.2x=b,u.5s=a?v(a,b){B b>=u.2x(a)}:v(a,b){B b<=u.2x(a)},u.5w=54,u}v 8E(a,b,c,d,e){B u.k=(c-e)/(b-d),u.b=c-u.k*b,u.2x=v(a){B u.k*a+u.b},u.r=a,u.5s=a?v(a,b){B b>=u.2x(a)}:v(a,b){B b<=u.2x(a)},u.5w=54,u}v 9g(a,b,c,d,e,f,g,h,i){u.1v=c,u.1w=d,u.x=a,u.y=b,u.2X=f,u.2P=g,u.2L=i,u.2W=h,u.1f=!1,u.Q=e?A.2f:A.2i,u.1R=v(){u.1f=!0,u.1P=u.Q.1h()},u.2I=v(){u.1f=!1},u.1q=v(){C a,b;u.1f&&(a=u.Q.1h(),u.1P!=a&&(b=(a-u.1P)/u.Q.2C(),u.x+=u.1v*b,u.y+=u.1w*b,u.y>u.2P?(u.1w=-u.1w,u.y=u.2P):u.y<u.2L&&(u.1w=-u.1w,u.y=u.2L),u.x>u.2X?(u.1v=-u.1v,u.x=u.2X):u.x<u.2W&&(u.1v=-u.1v,u.x=u.2W)),u.1P=a)}}v 7Z(a,b,c,d,e,f,g,h,i,j){u.5q=e,u.1v=c,u.1w=d,u.x=a,u.y=b,u.2X=g,u.2P=h,u.2L=j,u.2W=i,u.1f=!1,u.Q=f?A.2f:A.2i,u.1R=v(){u.1f=!0,u.1P=u.Q.1h()},u.2I=v(){u.1f=!1},u.1q=v(){C a,b,c,d,e,f;D(u.1f){D(a=u.Q.1h(),u.1P!=a)D(b=(a-u.1P)/u.Q.2C(),u.x+=u.1v*b,u.y+=u.1w*b,u.2P&&u.y>u.2P)u.1w=-u.1w,u.y=u.2P;12 D(u.2X&&u.x>u.2X)u.1v=-u.1v,u.x=u.2X;12 D(u.2W&&u.x<u.2W)u.1v=-u.1v,u.x=u.2W;12 D(u.2L&&u.y<u.2L)u.1w=-u.1w,u.y=u.2L;12 H(c=0,d=u.5q[c];d;d=u.5q[++c])D(d.5s(u.x,u.y)){u.y=d.2x(u.x),e=d.2x(u.x+.4X)-u.y,f=d.5w(d.r?e/.4X:-e/.4X,u.1v,u.1w),u.1v=f.1v,u.1w=f.1w;1N}u.1P=a}}}v 7o(a,b,c,d,e,f,g){u.Q=f?A.2f:A.2i,u.1L=a,u.22=b,u.3X=c?c:1W,u.1M=d,u.1D=e,u.4x=g?v(){u.2o()}:v(){},u.48=g?v(){u.2o()}:v(){},u.1x=0,u.d=u.22,u.t=1==u.d?0:1,u.13=!0,u.P=u.1D,u.1R=v(){0==u.t&&(u.1x=u.Q.1h(),u.d=u.22,u.t=1==u.d?0:1,u.13=!1)},u.4e=v(){u.1x=u.Q.1h(),u.d=u.22,u.t=1==u.d?0:1,u.13=!1},u.3e=v(){1==u.t&&(u.13=!1,u.d=-u.22,u.t=1==u.d?0:1,u.1x=u.Q.1h())},u.1q=v(){D(!u.13){C a=(u.Q.1h()-u.1x)/u.Q.2C();a>0&&(u.t=1==u.d?a/u.1L:1-a/u.1L,u.t>1?(u.t=1,u.13=!0,u.4x()):u.t<0&&(u.t=0,u.13=!0,u.48()),u.P=u.3X(u.t)*u.1M+u.1D)}},u.2o=v(){0==u.t?u.1R():1==u.t&&u.3e()}}v 7Y(a,b,c,d,e,f,g,h){B u.Q=d?A.2f:A.2i,u.1L=a,u.22=1,u.6A=e?e:0,u.a=f?f*b:b,u.p=g?g*a:.3*a,u.1M=b,u.1D=c,u.4x=h?v(){u.2o()}:v(){},u.48=h?v(){u.2o()}:v(){},u.1x=0,u.d=u.22,u.t=1==u.d?0:1,u.13=!0,u.P=u.1D,u.1R=v(){0==u.t&&(u.1x=u.Q.1h(),u.d=u.22,u.t=1==u.d?0:1,u.13=!1)},u.3e=v(){1==u.t&&(u.13=!1,u.d=-u.22,u.t=1==u.d?0:1,u.1x=u.Q.1h())},u.1q=v(){C a,b;D(!u.13)D(a=1==u.d?(u.Q.1h()-u.1x)/u.Q.2C():u.1L-(u.Q.1h()-u.1x)/u.Q.2C(),a>0)D(u.t=a/u.1L,u.t>=1)u.t=1,u.P=u.t*u.1M+u.1D,u.13=!0,u.4x();12 6k(u.6A){3A-1:b=u.p/(2*F.1J)*F.5k(u.1M/u.a),u.P=-(u.a*F.1G(2,10*(a-=1))*F.2F((a*u.1L-b)*2*F.1J/u.p))+u.1D;1N;3A 0:b=u.p/(2*F.1J)*F.5k(u.1M/u.a),u.P=1>a?-.5*u.a*F.1G(2,10*(a-=1))*F.2F((a*u.1L-b)*2*F.1J/u.p)+u.1D:.5*u.a*F.1G(2,-10*(a-=1))*F.2F((a*u.1L-b)*2*F.1J/u.p)+u.1M+u.1D;1N;3A 1:b=u.p/(2*F.1J)*F.5k(u.1M/u.a),u.P=u.a*F.1G(2,-10*a)*F.2F((a*u.1L-b)*2*F.1J/u.p)+u.1M+u.1D}12 u.t=0,u.P=u.t*u.1M+u.1D,u.13=!0,u.48()},u.2o=v(){0==u.t?u.1R():1==u.t&&u.3e()},u}v U(a,b,c,d,e,f,g,h,i,j){B u.Q=j?A.2f:A.2i,u.1L=a,u.5t=b,u.22=c,u.67=d,u.4y=e,u.3X=f,u.1M=g*h,u.1D=g*i,u.4d=v(){u.1x=0,u.3M=0,u.1P=0,u.2b=u.22,u.d=u.2b,u.t=1==u.2b?0:1,u.i=0,u.1f=!1,u.13=!1,u.P=0},u.4d(),u.4s=E 2J("4s"),u.4j=E 2J("4j"),u.4f=E 2J("4f"),u.4c=E 2J("4c"),u.1R=v(){u.1f||u.13||(u.1x=u.Q.1h()-(u.3M-u.1x),u.1f=!0,u.4s.M(R,{4I:u.4s.3Z}))},u.4e=v(){u.4d(),u.1R()},u.2I=v(){u.1f&&!u.13&&(u.3M=u.Q.1h(),u.1f=!1,u.4j.M(R,{4I:u.4j.3Z}))},u.2o=v(){u.13||(u.1f?u.2I():u.1R())},u.8O=v(){u.1f&&!u.13&&u.3O(u.i)},u.9e=v(){u.1f&&!u.13&&u.3O(u.i+1)},u.3e=v(){C a;u.1f&&!u.13?(u.2b=-u.2b,a=u.i+(-1==u.d?u.t:1-u.t),u.3O(a)):(u.13=!1,u.2b=-u.2b,a=u.i+(-1==u.d?u.t:1-u.t),u.3O(a),u.1f=!0,u.1P=u.Q.1h(),u.1x=u.Q.1h())},u.3O=v(a){C b=u.Q.1h(),c=u.Q.2C(),d=u.5t*c+a*u.1L*c;u.1x=b-d},u.1q=6s,u.P=u.3X(u.t)*u.1M+u.1D,u}v 6s(){C a,b,c,d;u.1f&&!u.13&&(a=u.Q.1h(),a!=u.1P&&(b=(a-u.1x)/u.Q.2C(),c=(b-u.5t)/u.1L,0>c&&(c=0),d=F.3b(c),d!=u.i&&u.4f.M(R,{4I:u.4f.3Z}),u.t=c-d,0!=u.4y&&d>=u.4y&&(d=u.4y-1,u.t=1,u.2I(),u.13=!0,u.4c.M(R,{4I:u.4c.3Z})),u.i=d,u.d=u.67?0==F.3b(u.i)%2?u.2b:-u.2b:u.2b,-1==u.d&&(u.t=1-u.t),u.P=u.3X(u.t)*u.1M+u.1D,u.1P=a))}v 2J(){B u.3Z=7z[0],u.2p=E Z,u.7y=v(a){-1==u.2p.3i(a)&&u.2p.2a(a)},u.7B=v(a){-1!=u.2p.3i(a)&&u.2p.2T(u.2p.3i(a),1)},u.M=v(a,b){D(u.2p.L>0)H(C c=0;c<u.2p.L;c++)u.2p[c](a,b)},u}v 7E(){C c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a=u.7D,b=a.P;b!=u.5Q&&((0>b||b>u.1W.L-1)&&(b=0>b?0:u.1W.L-1),c=F.3b(b),d=b-c,e=u.1W[c][0],f=e,g=u.1W[c][1],h=g,i=u.1W[c][2],j=i,c+1<u.1W.L&&(f=u.1W[c+1][0],h=u.1W[c+1][1],j=u.1W[c+1][2]),k=e,l=0,e==f?l=d*(h-g)+g:(m=j-i,n=d*m,o=u.5B[e]-i,i+n<u.5B[e]?(p=0==o?0:n/o,l=(1-g)*p+g):(k=f,q=j-u.5B[e],r=n-o,p=0==q?0:r/q,l=p*h)),u.x=5n(l,u.1j[k][0][0],u.1j[k][1][0],u.1j[k][2][0],u.1j[k][3][0]),u.y=5n(l,u.1j[k][0][1],u.1j[k][1][1],u.1j[k][2][1],u.1j[k][3][1]),s=0,t=0,0==l?(s=u.1j[k][1][0],t=u.1j[k][1][1],u.5z=4v(u.x,u.y,s,t,a.d)):1==l?(s=u.1j[k][1][0],t=u.1j[k][1][1],u.5z=4v(s,t,u.x,u.y,a.d)):(s=5m(l,u.1j[k][0][0],u.1j[k][1][0],u.1j[k][2][0]),t=5m(l,u.1j[k][0][1],u.1j[k][1][1],u.1j[k][2][1]),u.5z=4v(s,t,u.x,u.y,a.d)),u.5Q=b),a.1q()}v 4v(a,b,c,d,e){B 1==e?5p(a,b,c,d):5p(c,d,a,b)}v 5n(a,b,c,d,e){B F.1G(a,3)*(e+3*(c-d)-b)+3*F.1G(a,2)*(b-2*c+d)+3*a*(c-b)+b}v 5m(a,b,c,d){B a=F.4E(F.4D(1,a),0),F.1G(1-a,2)*b+2*a*(1-a)*c+a*a*d}v 5p(a,b,c,d){C e=c-a,f=d-b;B F.7r(f,e)}v 1W(a){B a}v 7s(a){B-F.3t(a*(F.1J/2))+1}v 7v(a){B F.2F(a*(F.1J/2))}v 7t(a){B-.5*(F.3t(F.1J*a)-1)}v 7G(a){B a*a*a*a*a}v 7T(a){B a--,a*a*a*a*a+1}v 7S(a){B a/=.5,1>a?.5*a*a*a*a*a:(a-=2,.5*(a*a*a*a*a+2))}v 7R(a){B a*a*a*a}v 7U(a){B a--,-(a*a*a*a-1)}v 6B(a){B a/=.5,1>a?.5*a*a*a*a:(a-=2,-.5*(a*a*a*a-2))}v 7V(a){B-(F.3k(1-a*a)-1)}v 7X(a){B a--,F.3k(1-a*a)}v 7W(a){B a/=.5,1>a?-.5*(F.3k(1-a*a)-1):(a-=2,.5*(F.3k(1-a*a)+1))}v 7Q(a){B a*a}v 7P(a){B-1*a*(a-2)}v 7J(a){B a/=.5,1>a?.5*a*a:(a--,-.5*(a*(a-2)-1))}v 7n(a){B a*a*a}v 7I(a){B a--,a*a*a+1}v 7H(a){B a/=.5,1>a?.5*a*a*a:(a-=2,.5*(a*a*a+2))}v 4p(a){B 1/2.75>a?7.4C*a*a:2/2.75>a?(a-=1.5/2.75,7.4C*a*a+.75):2.5/2.75>a?(a-=2.25/2.75,7.4C*a*a+.7L):(a-=2.7O/2.75,7.4C*a*a+.7N)}v 6i(a){B 1-4p(1-a)}v 7M(a){B.5>a?.5*6i(2*a):.5*4p(2*a-1)+.5}v 7l(a){B 0==a?0:F.1G(2,10*(a-1))}v 74(a){B 1==a?1:-F.1G(2,-10*a)+1}v 73(a){B 0==a?0:1==a?1:1>a/.5?(a/=.5,.5*F.1G(2,10*(a-1))):(a/=.5,.5*(-F.1G(2,-10*(a-1))+2))}v 72(a){B 0>=a?0:1}v 76(a){B.5>a?0:1}v 6Z(a){B a>=1?1:0}v 5r(){B F.5r()}v 71(a){B F.5r()*a}v 7m(a){C b=60;B F.3b(a*b)/b}v 3p(a,b){B u.x=a,u.y=b,u}v 7h(a,b){B u.4D=a,u.4E=b,u.7g=v(a){B u.4E>a.4D&&a.4E>u.4D},u}v 3s(){A.6h?(3S(),A.6h(3s,A.1e)):A.6f?(3S(),A.6f(3s)):A.69?(3S(),A.69(3s,A.1e)):5Z(3S,68/5d)}v 5c(a){C b,c;D(a=2j(a),!A.1b.3E()){D(A.4F.3R(),A.3P.3R(),A.J&&A.J.1p){H(b=A.J.X.L-1,c=A.J.X[b];c;c=A.J.X[--b])D(c.K&&c.K.M(N,a))B!0}12 H(b=A.17.L-1,c=A.17[b];c;c=A.17[--b])D(c.K&&c.K.M(N,a))B!0;B!1}}v 3z(a){D(A.1r){C b=2j(a);A.1S.1p=!1,A.1S.4b(b),A.1S=R,A.1r=!1}}v 77(){A.1e.7k=v(a){C b,c;a.2G(),b=a.7f,c=b.7e[0],A.6S.79=A.78.7a(c)},A.1e.7b=v(a){B a.2G(),!1},A.1e.2c("7d",5c,!0),A.1e.2c("7c",v(a){C c,d,b=2j(a);D(0==a.61&&!A.1r){D(A.J&&A.J.1p){H(c=A.J.X.L-1,d=A.J.X[c];d;d=A.J.X[--c])D(d.Y&&d.Y.M(N,b))B A.1r=!0,!0}12 H(c=A.17.L-1,d=A.17[c];d;d=A.17[--c])D(d.Y&&d.Y.M(N,b))B A.1r=!0,!0;B!1}B 2==a.61&&A.1r&&(A.1S.1p=!1,A.1S.4b(b),A.1S=R,A.1r=!1),!0},!0),A.1e.2c("9n",3z,!0),A.1e.2c("8W",v(a){C c,d,b=2j(a);D(!A.1b.3E())D(1r&&R!=1S)1S.3W(b);12 D(A.J&&A.J.1p){H(c=0,d=A.J.3G[c];d;d=A.J.3G[++c])D(d.M(N,b))B!0}12 H(c=0,d=A.3n[c];d;d=A.3n[++c])D(d.M(N,b))B!0},!0),A.1e.2c("8V",v(a){C b,c,d;D(a.2G(),b=2j(a),a.46?b.2M=a.46>0:a.44&&(b.2M=a.44<0),A.J&&A.J.1p){H(c=A.J.X.L-1,d=A.J.X[c];d;d=A.J.X[--c])D(d.19&&d.19.M(N,b))B!0}12 H(c=A.17.L-1,d=A.17[c];d;d=A.17[--c])D(d.19&&d.19.M(N,b))B!0},!0),A.1e.2c("8U",v(a){C b,c,d;D(1==a.36.L&&(a.2G(),5c(a.36.37(0)),A.1r&&3z(a.36.37(0)),!A.1r)){D(b=2j(a.36.37(0)),A.J&&A.J.1p){H(c=A.J.X.L-1,d=A.J.X[c];d;d=A.J.X[--c])D(d.Y&&d.1E&&d.15&&d.Y.M(N,b))B A.1r=!0,!0}12 H(c=A.17.L-1,d=A.17[c];d;d=A.17[--c])D(d.Y&&d.1E&&d.15&&d.Y.M(N,b))B A.1r=!0,!0;B!1}},!0),A.1e.2c("8T",v(a){a.2G(),A.1r&&3z(a.63.37(0))},!0),A.1e.2c("8X",v(a){D(a.2G(),!A.1b.3E()&&1==a.36.L&&A.1r&&R!=1S){C b=2j(a.36.37(0));1S.3W(b)}},!0),A.1e.2c("91",v(a){a.2G(),A.1r&&3z(a.63.37(0))},!0),A.1e.2c("8R",v(a){C b,c,d;D(a.2G(),b=2j(a),a.46?b.2M=a.46>0:a.44&&(b.2M=a.44<0),A.J&&A.J.1p){H(c=A.J.X.L-1,d=A.J.X[c];d;d=A.J.X[--c])D(d.19&&d.19.M(N,b))B!0}12 H(c=A.17.L-1,d=A.17[c];d;d=A.17[--c])D(d.19&&d.19.M(N,b))B!0},!1),A.2i.1R(),A.2f.1R(),3s()}v 3S(){C a,b,c;D(2f.5x(),J&&3I)A.N.8K(3I,0,0);12 H(A.J||A.2i.5x(),a=0,b=A.17[a];b;b=A.17[++a])b.1q(),b.2R(A.N);8J{D(A.J)H(c=0,b=J.X[c];b;b=J.X[++c])b.1q(),b.2R(A.N)}8I(d){}}v 8M(a){B u.1z=a,u.1p=!1,u.U=R,u.5I=E 2J("5T"),u.5S=E 2J("6b"),u.8Q=v(){J!=u||u.1p||(u.1p=!0,u.U=2f,6j())},u.4A=0,u.34=0,u.8P=v(){u.34>0&&(u.34--,0==u.34&&(u.1p?u.5I.M(R,"5T"):(u.U=R,A.J=R,u.5S.M(R,"6b")),u.34=u.4A))},u.9h=v(a){u.34=a,u.4A=a},u.9f=v(){J==u&&u.1p&&(u.1p=!1,A.3I=V 0)},u.3G=E Z,u.X=E Z,u.X.3H=u,u.X.2O=v(a,b){a.2d=!1,a.p=R,b&&(a.1z=b),u.2a(a),2B(a,!1,u.3H)},u.9i=!1,u}v 5D(){C a,e,b=E Z,c=E Z,d=E Z;B u.9j=v(a,c){b.2a({M:a,1z:c})},u.9m=v(){C a,b,c;B A.1b.4n?($1c("2Z").2V=A.1b.2U+",欢迎你!",V 0):(a=$1c("2U").P,b=$1c("33").P,a.L<6?($1c("2Z").2V="用户名输入不正确...",V 0):(A.1b.6g(!0,"5Y"),$1c("2Z").2V="登陆中,请稍后",c=5Z(v(){C a=$1c("2Z").2V;a.L<10?a+=".":a="登陆中,请稍后",$1c("2Z").2V=a},9k),4t.49.66.5Y(a,b,!0,R,R,v(a,b){a?(A.9d.97(),A.1b.4n=!0,A.1b.2U=$1c("2U").P,A.1b.33=$1c("33").P,A.1b.5C(),A.1b.4m(),59(b)):(59(b),$1c("2Z").2V=\'学号或者密码错误<43/>如果您确实无法登陆系统<43/>请发送题目为:"账号"的邮件到<43/><b>96@95.6t</b>\'),A.1b.51()},v(a,b){A.1b.51(),59(b),$1c("2Z").2V="请报告管理员<43/>"+a.94},c),V 0))},u.98=v(){4t.49.66.9c()},u.4m=v(){u.4V||4t.49.62.9b(v(){A.1b.4V=!0})},u.5C=v(){u.53||9a.8H(A.1b.2U,A.1b.33,v(a){-1!=a[0]&&(A.1b.58=a[0]),-1!=a[1]&&(A.1b.4U=a[1])})},u.8G=v(){u.53&&(u.58=V 0,u.4U=V 0,u.2U=V 0,u.33=V 0)},u.8e=v(a){B u.4V?4t.49.62.8g(a):(u.4m(),!1)},u.8j=v(a,b){c.2a({M:a,1z:b})},u.8i=v(a){d.2a(a)},u.3E=v(){B a},u.6g=v(c,d){C f,g,h;D(0!=c&&(c=!0),a&&c)8a E 89("3E!");D(!a){H(f=0,g=b[f];g;g=b[++f])g.1z&&g.1z!=d||g.M();e=d,a=!0,A.J&&(h=A.J.X.4h("5X"),h&&(h.1E=!0))}},u.51=v(){C f,g,h;D(a){H(a=!1,f=0,g=c[f];g;g=b[++f])g.1z&&g.1z!=e||g.M();d.81(v(a){a()}),5b d,d=E Z,e=R}A.J&&(h=J.X.4h("5X"),h&&(h.1E=!1))},u.5E=!1,u.2U="",u.33="",u.58=V 0,u.4U=V 0,u.53=!1,u}v 86(a){C b=1s.2m;D(b.5K)b.5K();12 D(b.5M)b.5M();12{D(!b.5J)B!1;b.5J()}B a&&a(),!0}v 8z(a,b){C e,f,g,h,c=A.1e.1t,d=A.1e.2y;B c/d>a/b?(e=a,f=b*c/d,g=0,h=(b-f)/2):(f=b,e=a*d/c,h=0,g=(a-e)/2),{8y:g,8x:h,4A:e,3g:f}}v 8C(a,b,c,d){C e=1s.2m.4M-8,f=1s.2m.4L-8*1s.2m.4L/1s.2m.4M;e/f>d/c?(a.2y=f,a.1t=d/c*f,A.1u=f/8F,a.14.2A=(1s.2m.4M-a.1t)/2+"O",a.14.4H="5N"):(a.1t=e,a.2y=c/d*e,A.1u=e/8D,a.14.4H=(1s.2m.4L-a.2y)/2+"O",a.14.2A="5N"),3x=a.8p,3T=a.8o,b.1u(A.1u,A.1u)}v 4T(a){B a*A.1u+A.3x}v 4O(a){B a*A.1u+A.3T}v 2j(a){C b=E 8m,c=1s.3j.5U+1s.2m.5U-A.3x,d=1s.3j.5P+1s.2m.5P-A.3T;B b.5y=1i((a.5R+c)/1u),b.2u=1i((a.5V+d)/1u),b.2l=a.5R+c,b.2h=a.5V+d,b}v 6j(){C b,a=A.N.8Y(0,0,A.1e.1t,A.1e.2y);A.3I=a,A.6d&&(b=E 6d("6P/8s.6P"),A.6q=b,b.8t=v(a){A.3I=a.8u},b.8r(a))}v 2B(a,b,c){D(b?(a.2d=!0,a.1n&&A.3n.5A(a.1n)):0==b&&(u.2d=!1,a.3H=c,a.1n&&a.3H.3G.5A(a.1n)),a.G)H(C d=0;d<a.G.L;d++)2B(a.G[d],b,c)}v 2S(a){a.2d?a.1n&&(A.3n.5e(a.1n),a.1n=V 0):a.1n&&(a.3H.3G.5e(a.1n),a.1n=V 0)}v 3B(a,b,c,d){d.1O(),d.2Y(c,0),d.1C(a-c,0),d.2r(a,0,a,c),d.1C(a,b-c),d.2r(a,b,a-c,b),d.1C(c,b),d.2r(0,b,0,b-c),d.1C(0,c),d.2r(0,0,c,0),d.1Q()}v 3v(a,b,c,d){c.1O(),d?(c.2Y(0,0),c.1C(a,0),c.1C(a/2,b),c.1C(0,0)):(c.2Y(0,b/2),c.1C(a,b),c.1C(a,0),c.1C(0,b/2)),c.1Q()}v 8q(a,b,c){C d,e;c.1O(),d=a/2,e=b/2,c.2Y(0,e),c.2r(0,b,d,b),c.2r(a,b,a,e),c.2r(a,0,d,0),c.2r(0,0,0,e),c.1Q()}v 8v(a,b,c){c.1O(),c.27(0,0,a,a),c.2Y(b,b),c.1C(a-b,a-b),c.2Y(b,a-b),c.1C(a-b,b),c.1Q()}v 8w(a,b){b.1O(),b.2Y(a,0);H(C c=0;9>c;c++)b.8B(F.1J/5),0==c%2?b.1C(.8A*(a/.8l),0):b.1C(a,0);b.1Q()}v 1V(a,b,c,d){C e="8k@87.88.6t";B u.85=v(){84(e)},u.1K=V 0,u.4S=v(a){a.28(u.1k,u.1l)},u.U=V 0,u.1q=v(){u.15&&u.U&&u.U.1q()},u.15=!0,u.3C=!0,u.2R=v(a){u.3C&&(a.4i(),u.15||(a.4K=.4),u.4S(a),u.1K(a),a.4k())},u.1k=a,u.1l=b,u.w=c,u.h=d,u.3r=0,u.3J=V 0,u.2d=R,u.4z=V 0,u.4u=V 0,u.5i=V 0,u.1U=v(){D(u.K&&u.K.1U(),u.Y&&u.Y.1U(),u.1n&&u.1n.1U(),u.G)H(C a=0;a<u.G.L;a++)u.G[a].1U();u.U&&(u.U=R),5b u},u}v 5o(a,b,c,d,e,f,g,h,i,j,k){u.Y=E Y(u),u.2N=0,u.Y.3W=v(a){C b=u.p.2N-a.2u;F.80(b)>u.p.W&&(b>0?u.p.4Z():u.p.56(),u.p.2N=a.2u)},u.1g=E Z,u.1B=0,u.1d=j?j:"2w(57,57,57,0.7)",u.w=c,u.h=d,u.1k=a,u.1l=b;C l=k?k:1.2;B u.1m=h?h:"24",u.4Y=i?i:"24",u.I=e?e:\'3w "幼圆"\',u.W=1i(47(u.I.1Z(/\\b\\d+O/i)[0].21("O",""))*l),u.3L=g?g:\'82 "幼圆"\',u.4G=f,u.2H=1i(47(u.3L.1Z(/\\b\\d+O/i)[0].21("O",""))*l),u.56=v(){B u.1B>0?(u.1B--,!0):!1},u.4Z=v(){C a=(u.1g.L-u.1B)*u.W;B u.4G&&0==u.1B&&(a+=u.2H-u.W),a>u.h?(u.1B++,!0):!1},u.4J=v(a){u.1g=a?5l(a,N,u.w,u.I):E Z},u.83=v(a){a&&(u.1g=u.1g.8h(5l(a,A.N,u.w,u.I)))},u.1K=v(a){C b,c,d,e;D(a.2E="2D",a.1O(),a.27(0,0,u.w+5,u.h+5),a.1Q(),a.45(),a.T=u.1d,a.2n(0,0,u.w,u.h+5),a.I=u.I,a.T=u.1m,b=0,c=u.h-u.W,u.50)H(d=u.1B;c>=b&&d<u.50;d++)u.4G?0==d?(a.I=u.3L,a.T=u.4Y,e=(u.w-a.2k(u.1g[0]).1t)/2,a.1o(u.1g[0],e,0),a.I=u.I,b=u.2H,a.T=u.1m):(0==u.1B?a.1o(u.1g[d],0,(d-1)*u.W+u.2H):a.1o(u.1g[d],0,(d-u.1B)*u.W),b+=u.W):(a.1o(u.1g[d],0,(d-u.1B)*u.W),b+=u.W);12 H(d=u.1B;c>=b&&d<u.1g.L;d++)u.4G?0==d?(a.I=u.3L,a.T=u.4Y,e=(u.w-a.2k(u.1g[0]).1t)/2,a.1o(u.1g[0],e,0),a.I=u.I,b=u.2H,a.T=u.1m):(0==u.1B?a.1o(u.1g[d],0,(d-1)*u.W+u.2H):a.1o(u.1g[d],0,(d-u.1B)*u.W),b+=u.W):(a.1o(u.1g[d],0,(d-u.1B)*u.W),b+=u.W);a.2n(u.w-4,0,4,u.h*d/u.1g.L)},u.8f=v(a){u.50=a},u.19=E 19(u),u.19.M=v(a,b){B u.15?(u.1X(a),a.2z(b.2l,b.2h)?(b.2M?u.3m():u.3l(),!0):!1):!1},u.19.3l=v(){B u.p.4Z()},u.19.3m=v(){B u.p.56()},u.6H=v(){u.1g.8b("")},u.8c=v(){C a=u.1g.L;B 0==a?0:u.2H+u.W*(a-1)},u.8d=v(a){a&&(u.W=1i(47(u.I.1Z(/\\b\\d+O/i)[0].21("O",""))*a),u.2H=1i(47(u.3L.1Z(/\\b\\d+O/i)[0].21("O",""))*a))},u}v 5O(a,b,c,d,e,f){B u.1k=a,u.1l=b,u.26=c,u.I=d?d:\'3w "幼圆"\',N.4i(),N.I=u.I,u.w=A.N.2k(u.26).1t,N.4k(),u.h=1i(u.I.1Z(/\\b\\d+O/i)[0].21("O","")),u.1m=e?e:"24",u.1d=f?f:"2w(0,0,0,0)",u.1K=v(a){a.2E="2D",a.I=u.I,a.T=u.1d,a.2n(0,0,u.w,u.h),a.T=u.1m,a.1o(u.26,0,0)},u.99=v(a){u.26=a,N.4i(),N.I=u.I,u.w=A.N.2k(u.26).1t,N.4k()},u}v 5H(a,b,c,d,e,f,g,h,i,j,k){B u.K=E K(u),k&&(u.1n=E 1n(u),u.1n.5F=v(){u.p.U.4e()},u.1n.5f=v(){u.p.U.4d(),u.p.U.2I()}),u.1d=g?g:"2w(4W,4W,4W,0.7)",u.1k=a,u.1l=b,u.w=c,f=f?f:\'3w "幼圆"\',u.W=1i(f.1Z(/\\b\\d+O/i)[0].21("O","")),u.h=u.W>d?u.W:d,u.I=f,u.26=e,u.38=j?j:"24",u.1m=i?i:"4w",u.U=E U(.7,0,1,!0,0,6B,1.1,1,-.1,h),u.1K=v(a){C b,c,d;a.I=u.I,a.2E="2D",b=a.2k(u.26).1t,a.T=u.1d,3B(u.w,u.h,5,a),a.2s(),u.U.P>0&&u.U.P<1?(c=a.6l(0,0,u.w,u.h),c.32(0,u.1m),c.32(u.U.P,"2w(31, 31, 31,0.5)"),c.32(1,u.1m),d=a.6l(0,0,u.w,u.h),d.32(0,u.38),d.32(u.U.P,"2w(31, 31, 31,0.5)"),d.32(1,u.38),a.3d=c,a.T=d):a.T=u.38,a.3d=u.1m,a.3y(),a.1o(u.26,b>u.w?0:(u.w-b)/2,(u.h-u.W)/2,u.w)},u.U.2I(),u}v 65(a,b,c,d,e,f,g,h,i,j,k,l){C m,n;B u.1k=a,u.1l=b,u.I=h?h:\'3w "幼圆"\',u.W=1i(u.I.1Z(/\\b\\d+O/i)[0].21("O","")),u.h=d>u.W?d:u.W+6,u.r=e?e:u.h/2,u.4q=f,u.4r=g,u.2g=g,A.N.I=u.I,m=A.N.2k(u.4q).1t,n=A.N.2k(u.4r).1t,u.w=m>n?2*m+2*u.r:2*n+2*u.r,c>u.w&&(u.w=c),u.2A=!1,u.38=i?i:"24",u.1d=j?j:"6y",u.1m=l?l:"24",u.4Q=k?k:"4w",u.K=E K(u),u.K.29=v(a){C b=u.p;a.5y-b.1T>b.w/2?(b.2A=!0,b.2g=b.4q):(b.2A=!1,b.2g=b.4r)},u.1K=v(a){a.I=u.I,a.2E="2D",a.3d=u.1m,a.T=u.1d,a.6w=2,3B(u.w,u.h,u.r,a),a.2s(),a.3y(),a.T=u.38,u.2A?(a.1o(u.4q,e-2,(u.h-u.W)/2,u.w/2),a.28(u.w/2+2,2)):(a.1o(u.4r,u.w/2+2,(u.h-u.W)/2,u.w/2),a.28(2,2)),3B(u.w/2-4,u.h-4,u.r,a),a.T=u.4Q,a.3D=10,a.5a=u.4Q,a.93=0,a.92=0,a.3y(),a.2s()},u}v 4a(a,b,c,d,e){B u.Y=E Y(u),u.K=E K(u),u.19=E 19(u),u.1k=a,u.1l=b,u.w=d,u.h=c,u.1d=e?e:"2w(2q,2q,2q,0.7)",u.1y=0,u.1a=10,u.G=E Z,u.2O=v(a,b){u.G.2a(a),a.p=u,a.1H=b?a.1H?a.1H:b:a.1H?a.1H:"6F"+u.G.L,1==u.2d?2B(a,!0):0==u.2d&&2B(a,!1,J),a.y+a.h>u.1a&&(u.1a=a.y+a.h+10)},u.4h=v(a){H(C b=0;b<u.G.L;b++)D(u.G[b].1H==a)B u.G[b];B R},u.4N=v(a){C c,d,b=-1;H(d=0;d<u.G.L;d++)D(u.G[d].1H==a){b=d,c=u.G[d];1N}-1!=b&&(u.G.2T(b,1),2S(c),u.1a==c.y+c.h+10&&(u.1a-=c.h),c.p=R,c.1U())},u.6E=v(){H(C a=0;a<u.G.L;a++)2S(u.G[a]),u.G[a].1U();u.G=E Z,u.1a=0},u.1K=v(a){a.1O(),a.27(0,0,u.w+3,u.h),a.1Q(),a.45(),a.T=u.1d,a.2n(0,0,u.w,u.h)},u.2R=v(a){D(u.1E){a.4i(),u.4S(a),u.1K(a),u.15||(a.4K=.4);H(C b=0,c=u.G[b];c;c=u.G[++b])c.h+c.y>0&&c.y<=u.h&&c.2R(a);a.4k()}},u.39=v(a){H(C b=0;b<u.G.L;b++)u.G[b].y+=a;u.1y+=a},u.2N=0,u.Y.4b=v(){C b,c,d,e;D(u.p.2N=0,b=u.p.G,u.p.h>=u.p.1a){H(c=0,d=b[c];d;d=b[++c])d.y-=u.p.1y;u.p.1y=0}12 D(u.p.1y>0){H(c=0,d=b[c];d;d=b[++c])d.y-=u.p.1y;u.p.1y=0}12 D(u.p.h>u.p.1y+u.p.1a){H(e=u.p.h-u.p.1a-u.p.1y,c=0,d=b[c];d;d=b[++c])d.y+=e;u.p.1y+=e}},u.Y.3W=v(a){D(!(u.p.1a<=u.p.h)){C b=a.2u-u.p.2N;b>20?b=20:-20>b&&(b=-20),u.p.39(b),u.p.2N=a.2u}},u.K.M=v(a,b){C c,d,e;D(u.1X(a),a.2z(b.2l,b.2h)){H(c=u.p.G,d=c.L-1,e=c[d];e;e=c[--d])D(e.K&&e.K.M(A.N,b))B!0;B u.29(b)}B!1},u.K.29=v(){B!0},u.19.3l=v(){C a=u.p.h-u.p.1a;B u.p.1y>a?(-35>a?u.p.39(-35):u.p.39(-u.p.1y),!0):!1},u.19.3m=v(){B u.p.1y<0?(u.p.1y<-35?u.p.39(35):u.p.39(-u.p.1y),!0):!1},u.1q=v(){u.U&&u.U.1q();H(C a=0,b=u.G[a];b;b=u.G[++a])b.1q()},u}v 6c(a,b,c,d,e,f,g,h,i,j,k){B u.1k=a,u.1l=b,u.w=c,u.2Q=d,u.h=d,u.30=f,u.3h=g,u.4g=h,u.4l=i,u.18=!1,u.2v=V 0,u.1d=e,u.6G=j,u.3N=k?k:"24",u.1K=v(a){C b=u.18?u.1a:u.2Q;a.3d=u.6G,a.T=u.1d,a.2n(0,0,u.w,b),a.6m(0,0,u.w,b),a.1O(),a.27(0,0,u.w,b),a.1Q(),a.3y(),a.45(),a.6w=2,!u.18&&u.1a>u.2Q?(a.28(u.30,u.3h),3v(u.4g,u.4l,a,!1),a.T=u.3N,a.3D=10,a.5a=u.3N,a.2s(),a.3D=0,a.28(-u.30,-u.3h)):u.18&&(a.28(u.30,u.3h),3v(u.4g,u.4l,a,!0),a.T=u.3N,a.3D=10,a.5a=u.3N,a.2s(),a.3D=0,a.28(-u.30,-u.3h))},u.2o=v(){C b,c,d,a=u.18?u.2Q-u.1a:u.1a-u.2Q;D(u.p){H(b=u.p.G,c=0,d=b[c];d;d=b[++c])d.y>u.y&&(d.y+=a);u.p.1a+=a}u.18=!u.18,u.h=u.18?u.1a:u.2Q,u.2v&&u.2v()},u.K=E K(u),u.K.1X=v(a){a.1O(),u.p.18?a.27(u.p.1T,u.p.1I,u.p.w,u.p.1a):a.27(u.p.1T,u.p.1I,u.p.w,u.p.h),a.1Q()},u.Y=E Y(u),u.K.M=v(a,b){C c,d,e,f,g;D(!(u.p.1E&&u.p.15&&u.15))B!1;D(u.1X(a),a.2z(b.2l,b.2h)){D((!u.p.18&&u.p.1a>u.p.2Q||u.p.18)&&(c=b.5y-u.p.1T-u.p.30,d=b.2u-u.p.1I-u.p.3h,c>0&&d>0&&c<u.p.4g&&d<u.p.4l))B u.p.2o(),!0;H(e=u.p.G,f=e.L-1,g=e[f];g;g=e[--f])D(g.K&&g.K.M(A.N,b))B!0;B u.29(b)}B!1},u.G=E Z,u}v 5G(a,b,c,d,e,f,g,h,i){B u.1k=a,u.1l=b,u.w=c,u.5u=e?e:\'8L "幼圆"\',u.5h=1i(u.5u.1Z(/\\b\\d+O/i)[0].21("O","")),u.h=1.3*u.5h,u.1F=u.h,u.18=!1,u.3f=5,u.6C=d,u.6D=f?f:"2w(2q,2q,2q,0.7)",u.3U=g?g:"24",u.1d=h?h:"2w(2q,2q,2q,0.7)",u.K=E K(u),u.2v=V 0,u.U=E U(.7,0,1,!0,1,4p,1,1,0,i),u.K.1X=v(a){a.1O(),u.p.18?a.27(u.p.1T,u.p.1I,u.p.w,u.p.h):a.27(u.p.1T,u.p.1I,u.p.w,u.p.1F),a.1Q()},u.K.29=v(a){C c,d,b=u.p;D(b.18){D(a.2u>b.1I+b.1F){H(c=b.G.L-1,d=b.G[c];d&&(!d.K||!d.K.M(N,a));d=b.G[--c]);B!0}b.18=!1,b.U.3e(),b.2v&&b.2v()}12 b.18=!0,b.U.4e(),b.2v&&b.2v();B!0},u.2O=v(a,b){u.G.2a(a),a.p=u,a.y=u.h,a.x+=u.3f,a.1H=b?a.1H?a.1H:b:a.1H?a.1H:"6F"+u.G.L,1==u.2d?2B(a,!0):0==u.2d&&2B(a,!1,J),u.h=a.y+a.h+10},u.4N=v(a){C c,d,e,b=-1;H(d=0,e=u.G[d];e;e=u.G[++d])D(e.1H==a){b=d,c=e;1N}D(-1!=b){H(d=0,e=u.G[d];e;e=u.G[++d])e.y>c.y&&(e.y-=c.h);u.G.2T(b,1),u.h-=c.h,2S(c),c.p=R}B c},u.6E=v(){H(C a=0,b=u.G[a];b;b=u.G[++a])2S(b);u.G=E Z,u.h=u.1F},u.1K=v(a){a.T=u.6D,a.2n(0,0,u.w,u.1F),a.T=u.3U,a.I=u.5u,a.2E="2D",a.1o(u.6C,3,(u.1F-u.5h)/5,u.w-u.1F);C b=.5*u.1F;a.28(u.w-b,b/2),3v(b,b,a,u.18),a.2s(),a.28(b-u.w,-b/2),a.1O(),a.27(u.3f,u.1F,u.w-u.3f,(u.h-u.1F)*u.U.P),a.1Q(),a.45(),a.T=u.1d,a.2n(u.3f,u.1F,u.w-u.3f,u.h-u.1F)},u.1q=v(){C c,d,e,b=u.U.P;D(u.U.1q(),c=(u.h-u.1F)*(u.U.P-b),0!=c&&u.p&&u.p.G)H(u.p.1a+=c,d=0,e=u.p.G[d];e;e=u.p.G[++d])e.y>u.y&&(e.y+=c);H(d=0,e=u.G[d];e;e=u.G[++d])e.1q()},u.G=E Z,u}v 5W(a,b,c,d,e,f,g,h,i){6k(u.1k=a,u.1l=b,u.I=d?d:\'3w "幼圆"\',u.h=1i(u.I.1Z(/\\b\\d+O/i)[0].21("O","")),u.6u=h?h:"4w",g){3A 0:u.2t="请填写数字",u.4o=/^-?\\d+(\\.\\d+)?$/;1N;3A 1:u.2t="请填写整数",u.4o=/^-?\\d+$/;1N;90:u.2t="请填认真填写",u.4o=/^[\\S ]+$/}D(i&&(u.2t=i),u.26="",u.2g=R,c)u.w=c;12{N.I=u.I;C j=N.2k(u.2t).1t;u.w=6W>j?6W:j}u.1m=e?e:"24",u.1d=f?f:"6y",u.6O=v(a){B a.1Z(u.4o)?(u.2g=a,!0):(u.2g=R,!1)},u.1q=v(){u.2e&&(u.26=u.2e.P,u.2e.2K(u))},u.1K=v(a){u.2e&&u.2e.6L()||(a.2E="2D",a.3d="24",a.4K=.7,a.6m(-2,-2,u.w+4,u.h+4),a.I=u.I,a.T=u.1d,a.2n(-2,-2,u.w+4,u.h+4),u.2g?(a.T=u.1m,a.1o(u.2g,0,0,u.w)):(a.T=u.6u,a.I="7j "+u.I,a.1o(u.2t,0,.16*u.h,u.w)),a.4K=1)},u.K=E K(u),u.K.M=v(a,b){B u.p.15&&u.15?(u.1X(a),a.2z(b.2l,b.2h)?(u.p.2e||(A.4F.6I(u.p),u.p.2e.6N()),!0):!1):!1}}v 64(a,b,c,d,e,f,g,h,i){u.1k=a,u.1l=b,u.w=c,u.I=d,u.h=1i(u.I.1Z(/\\b\\d+O/i)[0].21("O",""))+5,u.1d=f?f:"7i",u.3U=g?g:"24",u.2t=h?h:"请选择",u.1m=i?i:"4w",u.3V=-1,u.6U=v(){},u.42=e?e:E Z,u.6X=v(){B-1==u.3V?R:u.42[u.3V]},u.18=!1,u.K=E K(u),u.1K=v(a){3B(u.w,u.h,5,a),a.T=u.1d,a.3d=u.1m,a.2s(),a.3y(),a.T=u.3U;C b=u.h/4;a.2E="2D",a.I=u.I,a.1o(-1==u.3V?u.2t:u.6X(),2,2,u.w-2*b),a.28(u.w-2*b-2,b),3v(2*b,2*b,a,u.18),a.T=u.1m,a.2s()},u.5v=v(){C a;a=u.p?u.p.G:A.J?A.J.X:A.17,a.2T(a.3i(u.23),1),u.23.1E=!1,u.18=!1},u.6n=v(){u.p?u.p.2O(u.23,u.1z+"23"):A.J?A.J.X.2O(u.23,u.1z+"23"):A.17.2O(u.23,u.1z+"23"),u.23.1E=!0,u.18=!0},u.K.29=v(){u.p.18?u.p.5v():u.p.6n()},u.23=E 52(u)}v 6a(a,b,c,d,e,f,g){B u.1k=a,u.1l=b,u.w=c,u.h=d,u.3a=E 5o(a,b,c,d,e,!1,e,f,f,g),u.1A=1s.6V("1A"),u.1A.14.6K="6J",u.1A.14.1t=1i(u.w*1u)+"O",u.1A.14.2y=1i(u.h*1u)+"O",u.1A.14.6R=f,u.1A.14.I=e,u.1A.14.6T=9,u.2K=v(){C a=u.1A;u.3a.x=u.x,u.3a.y=u.y,u.y<0||u.p&&u.y+u.h>u.p.h?a.14.6o="7p":(a.14.6o="7q",a.14.1t=1i(u.w*1u)+"O",a.14.2y=1i(u.h*1u)+"O",a.14.4H=1i(4O(u.1I))+"O",a.14.2A=1i(4T(u.1T))+"O")},u.3c=!1,u.2R=v(a){u.3c||u.3a.2R(a)},u.4z=v(){u.2K()},u.4u=v(){u.2K()},u.6r=v(){u.15&&!u.3c&&(u.y<0||u.p&&u.p.h<u.y+u.h||(u.3c=!0,u.2K(),A.3P.3K=u,1s.3j.6M(u.1A)))},u.3F=v(){u.3c&&(u.3c=!1,u.3a.4J(u.1A.P),1s.3j.6Q(u.1A),A.3P.3K=R)},u.K=E K(u),u.K.29=v(){u.p.6r()},u.4J=v(a){a||(a=""),u.3a.4J(a),u.1A.P=a},u.6H=v(){B u.1A.P},u}v 52(a){B u.1Y=a,u.1Y.23=u,u.K=E K(u),u.3g=a.h-5,u.h=u.3g*a.42.L,u.w=a.w,u.x=a.x,u.y=a.y+a.h,u.K=E K(u),u.K.29=v(a){C b=a.2u-u.p.1I;u.p.1Y.3V=F.3b(b/u.p.3g),u.p.1Y.6U(F.3b(b/u.p.3g)),u.p.1Y.5v()},u.1K=v(a){a.T=u.1Y.1d,a.2n(0,0,u.w,u.h),a.T=u.1Y.3U,a.I=u.1Y.I,a.2E="2D";H(C b=0;b<u.1Y.42.L;b++)a.1o(u.1Y.42[b],2,b*u.3g,u.1Y.w)},u}v 5g(){C b,a=1s.6V("2e");a.7C="7A",b=!1,a.6T=3,a.14.6K="6J",u.6e=v(b){a.P=b},u.5L=v(){B a.P},u.6I=v(b){(!b||b.15)&&(u.3Y&&u.3R(),u.3Y=b,b.2e=u,u.2K(b),a.P=b.2g?b.2g:"",a.14.I=b.I.21(b.h,1i(.8*b.h*1u)),a.14.6R=b.1m)},u.3R=v(){D(u.3Y){C b=u.3Y;b.6O(a.P),b.2e=V 0,u.3Y=V 0,u.3F()}},u.2K=v(b){b.y<0||b.p&&b.y+b.h>b.p.h?u.3F():(a.14.1t=b.w*1u+"O",a.14.2y=b.h*1u+"O",a.14.4H=4O(b.1I)+"O",a.14.2A=4T(b.1T)+"O")},u.3F=v(){b&&(1s.3j.6Q(a),b=!1)},u.6N=v(){b||(1s.3j.6M(a),b=!0)},u.6L=v(){B b}}v 3u(){u.p,u.15=!0,u.1X=v(a){a.1O(),a.27(u.p.1T,u.p.1I,u.p.w,u.p.h),a.1Q()}}v 19(a){u.p=a,u.3m=v(){B!0},u.3l=v(){B!0},u.M=v(a,b){D(!(u.p.1E&&u.p.15&&u.15))B!1;D(u.1X(a),a.2z(b.2l,b.2h)){D(u.p.G){H(C c=0,d=u.p.G[c];d;d=u.p.G[++c])D(d.19&&d.19.M(a,b))B!0;B b.2M?u.3m():u.3l()}B b.2M?u.3m():u.3l()}B!1}}v K(a){B u.p=a,u.29=v(){B!0},u.M=v(a,b){B u.p.1E&&u.p.15&&u.15?(u.1X(a),a.2z(b.2l,b.2h)?(u.29(b),!0):!1):!1},u.1U=v(){u.p&&(u.p.K=R),u.p=R},u}v 1n(a){B u.p=a,u.41=!1,u.5F=v(){},u.5f=v(){},u.M=v(a,b){B u.p.15&&u.15&&u.p.1E?(u.1X(a),a.2z(b.2l,b.2h)?u.41?!1:(u.41=!0,u.5F(),!0):u.41?(u.41=!1,u.5f(),!0):!1):!1},u.1U=v(){2S(u.p),5b u},u}v Y(a){B u.p=a,u.1p=!1,u.3W=v(){},u.4b=v(){},u.M=v(a,b){C c,d;D(!(u.p.1E&&u.p.15&&u.15))B!1;D(u.1X(a),a.2z(b.2l,b.2h)){D(u.1p=!0,A.1S=u,u.p.G)H(c=u.p.G,d=0;d<c.L;d++)D(c[d].Y&&c[d].Y.M(a,b)){u.1p=!1;1N}B!0}B!1},u.1U=v(){u.p.Y=V 0,u.p=R},u}v 3Q(a){C b,c,d;D(a.G)H(b=a.G,c=0,d=b[c];d;d=b[++c])d.O=a.1T,d.4P=a.1I,d.3r=a.z+1,d.G&&3Q(d)}v 5l(a,b,c,d){C e=E Z,f=0,g=0,h="";H(a=a?a:"",b.I=d;f<a.L;){H(;c>g;){D("\\n"==a[f]){f++;1N}D(h+=a[f],g=b.2k(h).1t,g>=c){h=h.7x(0,h.L-1);1N}D(f++,f>=a.L)1N}e.2a(h),h="",g=0}B e}C 1e,N,1r,1S,1u,3n,J,5d,17,2i,2f,6v,3T,3x,6S,6q,1b,3P,4F;3p.11={6Y:v(){B F.3k(F.1G(u.x,2)+F.1G(u.y,2))},7w:v(a){C b=E 3p;B b.x=u.x+a.x,b.y=u.y+a.y,b},7u:v(a){C b=E 3p;B b.x=u.x-a.x,b.y=u.y-a.y,b},7F:v(a){B u.x*a.x+u.y*a.y},7K:v(a){},6z:v(){C a=E 3p;B a.x=u.y,a.y=0-u.x,a},6x:v(){C a=E 3p(0,0),b=u.6Y();B 0!=b&&(a.x=u.x/b,a.y=u.y/b),a},70:v(){C a=u.6z();B a.6x()}},1r=!1,3n=E Z,5d=40,17=E Z,2i=E 5j("8Z"),2f=E 5j("8S"),6v=E Z,3T=0,3x=0,5D.11={1c 4n(){B u.5E},3o 4n(a){u.5E=a,a&&(u.5C(),u.4m())}},1b=E 5D,Z.11.5A=v(a){D(-1==u.3i(a)){H(C b=0;b<u.L;b++)D(a.p.z>=u[b].p.z)B u.2T(b,0,a),V 0;u.2a(a)}},Z.11.5e=v(a){C b=u.3i(a);-1!=b&&u.2T(b,1)},17.2O=v(a,b){a.2d=!0,a.p=R,b&&(a.1z=b),u.2a(a),2B(a,!0)},Z.11.4N=v(a){C b,c;H(c=0;c<u.L;c++)D(u[c].1z==a){b=u[c];1N}B b&&(2S(b),u.2T(c,1),b.1U()),b},Z.11.4h=v(a){H(C b=0;b<u.L;b++)D(u[b].1z&&u[b].1z==a)B u[b];B V 0},Z.11.9l=v(a){H(C b=0;b<u.L;b++)D(u[b].6p&&u[b].6p==a)B u[b];B V 0},3P={3K:V 0,3R:v(){u.3K&&u.3K.3F()}},4F=E 5g,1V.11={1c 1T(){B u.3J?u.1k+u.O:u.1k},1c 1I(){B u.3J?u.1l+u.4P:u.1l},3o p(a){u.3J=a,a?(u.3r=a.z+1,u.O=a.1T,u.4P=a.1I):u.3r=0,3Q(u)},1c p(){B u.3J},3o y(a){D(u.4z){C b=u.1l;u.1l=a,u.4z(b,a)}12 u.1l=a;3Q(u)},3o x(a){D(u.4u){C b=u.1k;u.1k=a,u.4u(b,a)}12 u.1k=a;3Q(u)},1c x(){B u.1k},1c y(){B u.1l},1c z(){B u.3r},1c 1E(){B u.3C},3o 1E(a){a!=u.3C&&(u.3C=a,u.5i&&u.5i())}},5g.11={3o P(a){u.6e(a)},1c P(){B u.5L()}},Y.11=E 3u,K.11=E 3u,1n.11=E 3u,19.11=E 3u,4a.11=E 1V,5H.11=E 1V,5O.11=E 1V,5o.11=E 1V,5W.11=E 1V,6c.11=E 4a,5G.11=E 4a,64.11=E 1V,65.11=E 1V,52.11=E 1V,6a.11=E 1V;',62,582,'||||||||||||||||||||||||||||||this|function|||||window|return|var|if|new|Math|controls|for|font|curTask|clicker|length|fire|ctx|px|value|timeProvider|null||fillStyle|clock|void|fh|cmdUIComponents|drager|Array||prototype|else|isFinished|style|enable||backUIComponents|expanded|wheeler|maxh|channelMng|get|bc|canvas|isRunning|lines|ticks|parseInt|points|_x|_y|fc|spotter|fillText|isEnter|update|isPress|document|width|scale|Vx|Vy|startTime|baseLine|ID|textarea|curline|lineTo|offset|visible|offsetY|pow|id|absY|PI|paintFun|duration|multiplier|break|beginPath|lastTime|closePath|start|activeDrager|absX|dispose|UIComponent|linear|pathFun|select|match||replace|direction|sheet|black||txt|rect|translate|onclick|push|baseDirection|addEventListener|isBackUI|input|cmdStdClock|vtxt|oy|backStdClock|mouseArg|measureText|ox|documentElement|fillRect|toggle|subscribers|250|quadraticCurveTo|fill|waterMark|cy|onheaderClick|rgba|calculate|height|isPointInPath|left|registerEvent|ticksPerSecond|hanging|textBaseline|sin|preventDefault|flh|stop|customEvent|resetPosition|minY|up|mouseY|addCtrl|maxY|minh|paint|removeEvent|splice|userName|innerHTML|minX|maxX|moveTo|logStatus|ix|249|addColorStop|password|wait||touches|item|tc|moveBaseline|article|floor|_show|strokeStyle|reverse|offsetX|sh|iy|indexOf|body|sqrt|onwheelDown|onwheelUp|BackSpotters|set|Vector|now|_z|animate|cos|eventer|pointTrianglePath|25px|cvsLeft|stroke|onCanvasMouseUp|case|roundRectPath|_visible|shadowBlur|busy|conceal|activeSpotters|task|backImgData|_p|textblock|flf|stopTime|ac|jumpTo|ta|adjustChildern|unbind|rePaint|cvsTop|hc|selectedIndex|onDragMove|timingFunction|textbox|eventName||mouseIn|items|br|detail|clip|wheelDelta|parseFloat|onreverse|Services|Panel|onDragEnd|finished|reset|restart|iterated|iw|findByID|save|stopped|restore|ih|loadRoles|isLogIn|regExp|bounceEaseOut|ltxt|rtxt|started|Sys|onchangeX|followOrientation|gray|onend|iterations|onchangeY|sw|atan|5625|min|max|boxInput|flc|top|message|setText|globalAlpha|clientHeight|clientWidth|removeCtrl|absoluteY|py|uc|isStop|transFun|absoluteX|advertiserNo|loadedRoles|110|01|flcolor|moveUp|maxLine|endChannel|SelectSheet|getProfiled|VelocityCollide|Date|moveDown|200|subjectNo|clearInterval|shadowColor|delete|onCanvasClick|fps|remove|onmouseOut|BoxedInput|hfh|onchangeVisible|standardClock|asin|breakText|quadratic|bezier|Article|slope|boundaries|random|isOut|delay|hf|concealSheet|revise|move|cx|orientation|addEventer|segmentT|getProfile|ChannelManager|_isLogIn|onmouseIn|Drop|Button|onbegin|webkitRequestFullScreen|requestFullscreen|getValue|mozRequestFullScreen|0px|Label|scrollTop|lastValue|clientX|onexit|onBegin|scrollLeft|clientY|TextBox|loading|login|setInterval||button|RoleService|changedTouches|Select|Switch|AuthenticationService|reverses|1e3|webkitRequestAnimationFrame|TextBlock|onExit|Expand|Worker|setValue|msRequestAnimationFrame|beginChannel|requestAnimationFrame|bounceEaseIn|workOnBackImg|switch|createLinearGradient|strokeRect|revealSheet|display|no|worker|show|updateClock|com|wmc|tasks|lineWidth|normalize|white|perpendicular|mode|quartEaseInOut|ht|hb|clearCtrls|ctrl|sc|getText|bind|absolute|position|isShow|appendChild|reveal|validate|js|removeChild|color|backImg|zIndex|onSelected|createElement|180|selectedItem|getMagnitude|oneStep|normal|randomLimit|zeroStep|expoEaseInOut|expoEaseOut||halfStep|Init|URL|src|createObjectURL|ondragover|mousedown|click|files|dataTransfer|overlaps|Projection|ghostwhite|italic|ondrop|expoEaseIn|clockTick|cubicEaseIn|simpleClock|none|inline|atan2|sineEaseIn|sineEaseInOut|subtract|sineEaseOut|add|slice|subscribe|arguments|true|unSubscribe|autofocus|pathClock|updatePath|dotProduct|quintEaseIn|cubicEaseInOut|cubicEaseOut|quadEaseInOut|edge|9375|bounceEaseInOut|984375|625|quadEaseOut|quadEaseIn|quartEaseIn|quintEaseInOut|quintEaseOut|quartEaseOut|circEaseIn|circEaseInOut|circEaseOut|elasticClock|floatAnimation|abs|forEach|40px|addText|alert|contactMe|fullScreen|vip|qq|Error|throw|join|getMaxH|changeLineSapce|checkRole|setMaxLine|isUserInRole|concat|addTempEnder|addEndHander|borian|525731|Object|boundary|offsetTop|offsetLeft|ellipsePath|postMessage|blurWorker|onmessage|data|exitRectPath|starPath|sy|sx|adjustScale|200811|rotate|adjustCanvas|1280|linerBoundary|720|clearProfile|GetReProfile|catch|try|putImageData|30px|Task|name|rewind|decreseWait|begin|DOMMouseScroll|cmd|touchend|touchstart|mousewheel|mousemove|touchmove|getImageData|back|default|touchcancel|shadowOffsetY|shadowOffsetX|_message|163|xlbaishushu|close|logOut|changeText|RecruitService|load|logout|currentModalWindow|fastForward|exit|rectFloatAniamtion|resetWait|loaded|addBeginHander|500|findByNo|logIn|mouseup'.split('|'),0,{}))