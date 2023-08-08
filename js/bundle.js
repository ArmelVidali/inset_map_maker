(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (process){(function (){
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).turf={})}(this,(function(t){"use strict";var e=6371008.8,n={centimeters:637100880,centimetres:637100880,degrees:57.22891354143274,feet:20902260.511392,inches:39.37*e,kilometers:6371.0088,kilometres:6371.0088,meters:e,metres:e,miles:3958.761333810546,millimeters:6371008800,millimetres:6371008800,nauticalmiles:e/1852,radians:1,yards:6967335.223679999},r={centimeters:100,centimetres:100,degrees:1/111325,feet:3.28084,inches:39.37,kilometers:.001,kilometres:.001,meters:1,metres:1,miles:1/1609.344,millimeters:1e3,millimetres:1e3,nauticalmiles:1/1852,radians:1/e,yards:1.0936133},i={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,hectares:1e-4,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,millimeters:1e6,millimetres:1e6,yards:1.195990046};function o(t,e,n){void 0===n&&(n={});var r={type:"Feature"};return(0===n.id||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties=e||{},r.geometry=t,r}function s(t,e,n){switch(t){case"Point":return a(e).geometry;case"LineString":return h(e).geometry;case"Polygon":return l(e).geometry;case"MultiPoint":return d(e).geometry;case"MultiLineString":return g(e).geometry;case"MultiPolygon":return y(e).geometry;default:throw new Error(t+" is invalid")}}function a(t,e,n){if(void 0===n&&(n={}),!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!C(t[0])||!C(t[1]))throw new Error("coordinates must contain numbers");return o({type:"Point",coordinates:t},e,n)}function u(t,e,n){return void 0===n&&(n={}),f(t.map((function(t){return a(t,e)})),n)}function l(t,e,n){void 0===n&&(n={});for(var r=0,i=t;r<i.length;r++){var s=i[r];if(s.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var a=0;a<s[s.length-1].length;a++)if(s[s.length-1][a]!==s[0][a])throw new Error("First and last Position are not equivalent.")}return o({type:"Polygon",coordinates:t},e,n)}function c(t,e,n){return void 0===n&&(n={}),f(t.map((function(t){return l(t,e)})),n)}function h(t,e,n){if(void 0===n&&(n={}),t.length<2)throw new Error("coordinates must be an array of two or more positions");return o({type:"LineString",coordinates:t},e,n)}function p(t,e,n){return void 0===n&&(n={}),f(t.map((function(t){return h(t,e)})),n)}function f(t,e){void 0===e&&(e={});var n={type:"FeatureCollection"};return e.id&&(n.id=e.id),e.bbox&&(n.bbox=e.bbox),n.features=t,n}function g(t,e,n){return void 0===n&&(n={}),o({type:"MultiLineString",coordinates:t},e,n)}function d(t,e,n){return void 0===n&&(n={}),o({type:"MultiPoint",coordinates:t},e,n)}function y(t,e,n){return void 0===n&&(n={}),o({type:"MultiPolygon",coordinates:t},e,n)}function v(t,e,n){return void 0===n&&(n={}),o({type:"GeometryCollection",geometries:t},e,n)}function _(t,e){if(void 0===e&&(e=0),e&&!(e>=0))throw new Error("precision must be a positive number");var n=Math.pow(10,e||0);return Math.round(t*n)/n}function m(t,e){void 0===e&&(e="kilometers");var r=n[e];if(!r)throw new Error(e+" units is invalid");return t*r}function x(t,e){void 0===e&&(e="kilometers");var r=n[e];if(!r)throw new Error(e+" units is invalid");return t/r}function E(t,e){return w(x(t,e))}function b(t){var e=t%360;return e<0&&(e+=360),e}function w(t){return 180*(t%(2*Math.PI))/Math.PI}function I(t){return t%360*Math.PI/180}function N(t,e,n){if(void 0===e&&(e="kilometers"),void 0===n&&(n="kilometers"),!(t>=0))throw new Error("length must be a positive number");return m(x(t,e),n)}function S(t,e,n){if(void 0===e&&(e="meters"),void 0===n&&(n="kilometers"),!(t>=0))throw new Error("area must be a positive number");var r=i[e];if(!r)throw new Error("invalid original units");var o=i[n];if(!o)throw new Error("invalid final units");return t/r*o}function C(t){return!isNaN(t)&&null!==t&&!Array.isArray(t)}function P(t){return!!t&&t.constructor===Object}function M(t){if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be an Array");if(4!==t.length&&6!==t.length)throw new Error("bbox must be an Array of 4 or 6 numbers");t.forEach((function(t){if(!C(t))throw new Error("bbox must only contain numbers")}))}function L(t){if(!t)throw new Error("id is required");if(-1===["string","number"].indexOf(typeof t))throw new Error("id must be a number or a string")}var O=Object.freeze({__proto__:null,earthRadius:e,factors:n,unitsFactors:r,areaFactors:i,feature:o,geometry:s,point:a,points:u,polygon:l,polygons:c,lineString:h,lineStrings:p,featureCollection:f,multiLineString:g,multiPoint:d,multiPolygon:y,geometryCollection:v,round:_,radiansToLength:m,lengthToRadians:x,lengthToDegrees:E,bearingToAzimuth:b,radiansToDegrees:w,degreesToRadians:I,convertLength:N,convertArea:S,isNumber:C,isObject:P,validateBBox:M,validateId:L});function R(t,e,n){if(null!==t)for(var r,i,o,s,a,u,l,c,h=0,p=0,f=t.type,g="FeatureCollection"===f,d="Feature"===f,y=g?t.features.length:1,v=0;v<y;v++){a=(c=!!(l=g?t.features[v].geometry:d?t.geometry:t)&&"GeometryCollection"===l.type)?l.geometries.length:1;for(var _=0;_<a;_++){var m=0,x=0;if(null!==(s=c?l.geometries[_]:l)){u=s.coordinates;var E=s.type;switch(h=!n||"Polygon"!==E&&"MultiPolygon"!==E?0:1,E){case null:break;case"Point":if(!1===e(u,p,v,m,x))return!1;p++,m++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(!1===e(u[r],p,v,m,x))return!1;p++,"MultiPoint"===E&&m++}"LineString"===E&&m++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(i=0;i<u[r].length-h;i++){if(!1===e(u[r][i],p,v,m,x))return!1;p++}"MultiLineString"===E&&m++,"Polygon"===E&&x++}"Polygon"===E&&m++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(x=0,i=0;i<u[r].length;i++){for(o=0;o<u[r][i].length-h;o++){if(!1===e(u[r][i][o],p,v,m,x))return!1;p++}x++}m++}break;case"GeometryCollection":for(r=0;r<s.geometries.length;r++)if(!1===R(s.geometries[r],e,n))return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function T(t,e,n,r){var i=n;return R(t,(function(t,r,o,s,a){i=0===r&&void 0===n?t:e(i,t,r,o,s,a)}),r),i}function A(t,e){var n;switch(t.type){case"FeatureCollection":for(n=0;n<t.features.length&&!1!==e(t.features[n].properties,n);n++);break;case"Feature":e(t.properties,0)}}function D(t,e,n){var r=n;return A(t,(function(t,i){r=0===i&&void 0===n?t:e(r,t,i)})),r}function F(t,e){if("Feature"===t.type)e(t,0);else if("FeatureCollection"===t.type)for(var n=0;n<t.features.length&&!1!==e(t.features[n],n);n++);}function k(t,e,n){var r=n;return F(t,(function(t,i){r=0===i&&void 0===n?t:e(r,t,i)})),r}function G(t){var e=[];return R(t,(function(t){e.push(t)})),e}function q(t,e){var n,r,i,o,s,a,u,l,c,h,p=0,f="FeatureCollection"===t.type,g="Feature"===t.type,d=f?t.features.length:1;for(n=0;n<d;n++){for(a=f?t.features[n].geometry:g?t.geometry:t,l=f?t.features[n].properties:g?t.properties:{},c=f?t.features[n].bbox:g?t.bbox:void 0,h=f?t.features[n].id:g?t.id:void 0,s=(u=!!a&&"GeometryCollection"===a.type)?a.geometries.length:1,i=0;i<s;i++)if(null!==(o=u?a.geometries[i]:a))switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":if(!1===e(o,p,l,c,h))return!1;break;case"GeometryCollection":for(r=0;r<o.geometries.length;r++)if(!1===e(o.geometries[r],p,l,c,h))return!1;break;default:throw new Error("Unknown Geometry Type")}else if(!1===e(null,p,l,c,h))return!1;p++}}function B(t,e,n){var r=n;return q(t,(function(t,i,o,s,a){r=0===i&&void 0===n?t:e(r,t,i,o,s,a)})),r}function z(t,e){q(t,(function(t,n,r,i,s){var a,u=null===t?null:t.type;switch(u){case null:case"Point":case"LineString":case"Polygon":return!1!==e(o(t,r,{bbox:i,id:s}),n,0)&&void 0}switch(u){case"MultiPoint":a="Point";break;case"MultiLineString":a="LineString";break;case"MultiPolygon":a="Polygon"}for(var l=0;l<t.coordinates.length;l++){var c=t.coordinates[l];if(!1===e(o({type:a,coordinates:c},r),n,l))return!1}}))}function j(t,e,n){var r=n;return z(t,(function(t,i,o){r=0===i&&0===o&&void 0===n?t:e(r,t,i,o)})),r}function U(t,e){z(t,(function(t,n,r){var i=0;if(t.geometry){var o=t.geometry.type;if("Point"!==o&&"MultiPoint"!==o){var s,a=0,u=0,l=0;return!1!==R(t,(function(o,c,p,f,g){if(void 0===s||n>a||f>u||g>l)return s=o,a=n,u=f,l=g,void(i=0);var d=h([s,o],t.properties);if(!1===e(d,n,r,g,i))return!1;i++,s=o}))&&void 0}}}))}function V(t,e,n){var r=n,i=!1;return U(t,(function(t,o,s,a,u){r=!1===i&&void 0===n?t:e(r,t,o,s,a,u),i=!0})),r}function X(t,e){if(!t)throw new Error("geojson is required");z(t,(function(t,n,r){if(null!==t.geometry){var i=t.geometry.type,o=t.geometry.coordinates;switch(i){case"LineString":if(!1===e(t,n,r,0,0))return!1;break;case"Polygon":for(var s=0;s<o.length;s++)if(!1===e(h(o[s],t.properties),n,r,s))return!1}}}))}function Y(t,e,n){var r=n;return X(t,(function(t,i,o,s){r=0===i&&void 0===n?t:e(r,t,i,o,s)})),r}function H(t,e){if(!P(e=e||{}))throw new Error("options is invalid");var n,r=e.featureIndex||0,i=e.multiFeatureIndex||0,o=e.geometryIndex||0,s=e.segmentIndex||0,a=e.properties;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),a=a||t.features[r].properties,n=t.features[r].geometry;break;case"Feature":a=a||t.properties,n=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":n=t;break;default:throw new Error("geojson is invalid")}if(null===n)return null;var u=n.coordinates;switch(n.type){case"Point":case"MultiPoint":return null;case"LineString":return s<0&&(s=u.length+s-1),h([u[s],u[s+1]],a,e);case"Polygon":return o<0&&(o=u.length+o),s<0&&(s=u[o].length+s-1),h([u[o][s],u[o][s+1]],a,e);case"MultiLineString":return i<0&&(i=u.length+i),s<0&&(s=u[i].length+s-1),h([u[i][s],u[i][s+1]],a,e);case"MultiPolygon":return i<0&&(i=u.length+i),o<0&&(o=u[i].length+o),s<0&&(s=u[i][o].length-s-1),h([u[i][o][s],u[i][o][s+1]],a,e)}throw new Error("geojson is invalid")}function W(t,e){if(!P(e=e||{}))throw new Error("options is invalid");var n,r=e.featureIndex||0,i=e.multiFeatureIndex||0,o=e.geometryIndex||0,s=e.coordIndex||0,u=e.properties;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),u=u||t.features[r].properties,n=t.features[r].geometry;break;case"Feature":u=u||t.properties,n=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":n=t;break;default:throw new Error("geojson is invalid")}if(null===n)return null;var l=n.coordinates;switch(n.type){case"Point":return a(l,u,e);case"MultiPoint":return i<0&&(i=l.length+i),a(l[i],u,e);case"LineString":return s<0&&(s=l.length+s),a(l[s],u,e);case"Polygon":return o<0&&(o=l.length+o),s<0&&(s=l[o].length+s),a(l[o][s],u,e);case"MultiLineString":return i<0&&(i=l.length+i),s<0&&(s=l[i].length+s),a(l[i][s],u,e);case"MultiPolygon":return i<0&&(i=l.length+i),o<0&&(o=l[i].length+o),s<0&&(s=l[i][o].length-s),a(l[i][o][s],u,e)}throw new Error("geojson is invalid")}var J=Object.freeze({__proto__:null,coordAll:G,coordEach:R,coordReduce:T,featureEach:F,featureReduce:k,findPoint:W,findSegment:H,flattenEach:z,flattenReduce:j,geomEach:q,geomReduce:B,lineEach:X,lineReduce:Y,propEach:A,propReduce:D,segmentEach:U,segmentReduce:V});function Z(t){var e=[1/0,1/0,-1/0,-1/0];return R(t,(function(t){e[0]>t[0]&&(e[0]=t[0]),e[1]>t[1]&&(e[1]=t[1]),e[2]<t[0]&&(e[2]=t[0]),e[3]<t[1]&&(e[3]=t[1])})),e}function K(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if("Feature"===t.type&&null!==t.geometry&&"Point"===t.geometry.type)return t.geometry.coordinates;if("Point"===t.type)return t.coordinates}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Q(t){if(Array.isArray(t))return t;if("Feature"===t.type){if(null!==t.geometry)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function $(t){if(t.length>1&&C(t[0])&&C(t[1]))return!0;if(Array.isArray(t[0])&&t[0].length)return $(t[0]);throw new Error("coordinates must only contain numbers")}function tt(t,e,n){if(!e||!n)throw new Error("type and name required");if(!t||t.type!==e)throw new Error("Invalid input to "+n+": must be a "+e+", given "+t.type)}function et(t,e,n){if(!t)throw new Error("No feature passed");if(!n)throw new Error(".featureOf() requires a name");if(!t||"Feature"!==t.type||!t.geometry)throw new Error("Invalid input to "+n+", Feature with geometry required");if(!t.geometry||t.geometry.type!==e)throw new Error("Invalid input to "+n+": must be a "+e+", given "+t.geometry.type)}function nt(t,e,n){if(!t)throw new Error("No featureCollection passed");if(!n)throw new Error(".collectionOf() requires a name");if(!t||"FeatureCollection"!==t.type)throw new Error("Invalid input to "+n+", FeatureCollection required");for(var r=0,i=t.features;r<i.length;r++){var o=i[r];if(!o||"Feature"!==o.type||!o.geometry)throw new Error("Invalid input to "+n+", Feature with geometry required");if(!o.geometry||o.geometry.type!==e)throw new Error("Invalid input to "+n+": must be a "+e+", given "+o.geometry.type)}}function rt(t){return"Feature"===t.type?t.geometry:t}function it(t,e){return"FeatureCollection"===t.type?"FeatureCollection":"GeometryCollection"===t.type?"GeometryCollection":"Feature"===t.type&&null!==t.geometry?t.geometry.type:t.type}Z.default=Z;var ot=Object.freeze({__proto__:null,getCoord:K,getCoords:Q,containsNumber:$,geojsonType:tt,featureOf:et,collectionOf:nt,getGeom:rt,getType:it}),st=Object.getOwnPropertySymbols,at=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable;
/*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */function lt(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var ct=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,r,i=lt(t),o=1;o<arguments.length;o++){for(var s in n=Object(arguments[o]))at.call(n,s)&&(i[s]=n[s]);if(st){r=st(n);for(var a=0;a<r.length;a++)ut.call(n,r[a])&&(i[r[a]]=n[r[a]])}}return i},ht={successCallback:null,verbose:!1},pt={};
/**
     * @license GNU Affero General Public License.
     * Copyright (c) 2015, 2015 Ronny Lorenz <ronny@tbi.univie.ac.at>
     * v. 1.2.0
     * https://github.com/RaumZeit/MarchingSquares.js
     *
     * MarchingSquaresJS is free software: you can redistribute it and/or modify
     * it under the terms of the GNU Affero General Public License as published by
     * the Free Software Foundation, either version 3 of the License, or
     * (at your option) any later version.
     *
     * MarchingSquaresJS is distributed in the hope that it will be useful,
     * but WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
     * GNU Affero General Public License for more details.
     *
     * As additional permission under GNU Affero General Public License version 3
     * section 7, third-party projects (personal or commercial) may distribute,
     * include, or link against UNMODIFIED VERSIONS of MarchingSquaresJS without the
     * requirement that said third-party project for that reason alone becomes
     * subject to any requirement of the GNU Affero General Public License version 3.
     * Any modifications to MarchingSquaresJS, however, must be shared with the public
     * and made available.
     *
     * In summary this:
     * - allows you to use MarchingSquaresJS at no cost
     * - allows you to use MarchingSquaresJS for both personal and commercial purposes
     * - allows you to distribute UNMODIFIED VERSIONS of MarchingSquaresJS under any
     *   license as long as this license notice is included
     * - enables you to keep the source code of your program that uses MarchingSquaresJS
     *   undisclosed
     * - forces you to share any modifications you have made to MarchingSquaresJS,
     *   e.g. bug-fixes
     *
     * You should have received a copy of the GNU Affero General Public License
     * along with MarchingSquaresJS.  If not, see <http://www.gnu.org/licenses/>.
     */function ft(t,e,n){n=n||{};for(var r=Object.keys(ht),i=0;i<r.length;i++){var o=r[i],s=n[o];s=null!=s?s:ht[o],pt[o]=s}pt.verbose&&console.log("MarchingSquaresJS-isoContours: computing isocontour for "+e);var a=function(t){var e=[],n=0,r=1e-7;return t.cells.forEach((function(i,o){i.forEach((function(i,s){if(void 0!==i&&(5!==(f=i).cval&&10!==f.cval)&&!dt(i)){var a=function(t,e,n){var r,i,o=t.length,s=[],a=[0,0,1,1,0,0,0,0,-1,0,1,1,-1,0,-1,0],u=[0,-1,0,0,1,1,1,1,0,-1,0,0,0,-1,0,0],l=["none","left","bottom","left","right","none","bottom","left","top","top","none","top","right","right","bottom","none"],c=["none","bottom","right","right","top","top","top","top","left","bottom","right","right","left","bottom","left","none"],h=t[e][n],p=h.cval,f=l[p],g=vt(h,f);s.push([n+g[0],e+g[1]]),f=c[p],g=vt(h,f),s.push([n+g[0],e+g[1]]),yt(h);var d=n+a[p],y=e+u[p],v=p;for(;d>=0&&y>=0&&y<o&&(d!=n||y!=e)&&void 0!==(h=t[y][d]);){if(0===(p=h.cval)||15===p)return{path:s,info:"mergeable"};f=c[p],r=a[p],i=u[p],5!==p&&10!==p||(5===p?h.flipped?-1===u[v]?(f="left",r=-1,i=0):(f="right",r=1,i=0):-1===a[v]&&(f="bottom",r=0,i=-1):10===p&&(h.flipped?-1===a[v]?(f="top",r=0,i=1):(f="bottom",r=0,i=-1):1===u[v]&&(f="left",r=-1,i=0))),g=vt(h,f),s.push([d+g[0],y+g[1]]),yt(h),d+=r,y+=i,v=p}return{path:s,info:"closed"}}(t.cells,o,s),u=!1;if("mergeable"===a.info)for(var l=a.path[a.path.length-1][0],c=a.path[a.path.length-1][1],h=n-1;h>=0;h--)if(Math.abs(e[h][0][0]-l)<=r&&Math.abs(e[h][0][1]-c)<=r){for(var p=a.path.length-2;p>=0;--p)e[h].unshift(a.path[p]);u=!0;break}u||(e[n++]=a.path)}var f}))})),e}(function(t,e){for(var n=t.length-1,r=t[0].length-1,i={rows:n,cols:r,cells:[]},o=0;o<n;++o){i.cells[o]=[];for(var s=0;s<r;++s){var a=0,u=t[o+1][s],l=t[o+1][s+1],c=t[o][s+1],h=t[o][s];if(!(isNaN(u)||isNaN(l)||isNaN(c)||isNaN(h))){a|=u>=e?8:0,a|=l>=e?4:0,a|=c>=e?2:0;var p,f,g,d,y=!1;if(5===(a|=h>=e?1:0)||10===a){var v=(u+l+c+h)/4;5===a&&v<e?(a=10,y=!0):10===a&&v<e&&(a=5,y=!0)}if(0!==a&&15!==a)p=f=g=d=.5,1===a?(g=1-gt(e,u,h),f=1-gt(e,c,h)):2===a?(f=gt(e,h,c),d=1-gt(e,l,c)):3===a?(g=1-gt(e,u,h),d=1-gt(e,l,c)):4===a?(p=gt(e,u,l),d=gt(e,c,l)):5===a?(p=gt(e,u,l),d=gt(e,c,l),f=1-gt(e,c,h),g=1-gt(e,u,h)):6===a?(f=gt(e,h,c),p=gt(e,u,l)):7===a?(g=1-gt(e,u,h),p=gt(e,u,l)):8===a?(g=gt(e,h,u),p=1-gt(e,l,u)):9===a?(f=1-gt(e,c,h),p=1-gt(e,l,u)):10===a?(p=1-gt(e,l,u),d=1-gt(e,l,c),f=gt(e,h,c),g=gt(e,h,u)):11===a?(p=1-gt(e,l,u),d=1-gt(e,l,c)):12===a?(g=gt(e,h,u),d=gt(e,c,l)):13===a?(f=1-gt(e,c,h),d=gt(e,c,l)):14===a?(g=gt(e,h,u),f=gt(e,h,c)):console.log("MarchingSquaresJS-isoContours: Illegal cval detected: "+a),i.cells[o][s]={cval:a,flipped:y,top:p,right:d,bottom:f,left:g}}}}return i}(t,e));return"function"==typeof pt.successCallback&&pt.successCallback(a),a}function gt(t,e,n){return(t-e)/(n-e)}function dt(t){return 0===t.cval||15===t.cval}function yt(t){dt(t)||5===t.cval||10===t.cval||(t.cval=15)}function vt(t,e){return"top"===e?[t.top,1]:"bottom"===e?[t.bottom,0]:"right"===e?[1,t.right]:"left"===e?[0,t.left]:void 0}function _t(t,e){if(!P(e=e||{}))throw new Error("options is invalid");var n=e.zProperty||"elevation",r=e.flip,i=e.flags;nt(t,"Point","input must contain Points");for(var o=function(t,e){var n={};return F(t,(function(t){var e=Q(t)[1];n[e]||(n[e]=[]),n[e].push(t)})),Object.keys(n).map((function(t){return n[t].sort((function(t,e){return Q(t)[0]-Q(e)[0]}))})).sort((function(t,n){return e?Q(t[0])[1]-Q(n[0])[1]:Q(n[0])[1]-Q(t[0])[1]}))}(t,r),s=[],a=0;a<o.length;a++){for(var u=o[a],l=[],c=0;c<u.length;c++){var h=u[c];h.properties[n]?l.push(h.properties[n]):l.push(0),!0===i&&(h.properties.matrixPosition=[a,c])}s.push(l)}return s}var mt=Et,xt=Et;function Et(t,e,n,r,i){bt(t,e,n||0,r||t.length-1,i||It)}function bt(t,e,n,r,i){for(;r>n;){if(r-n>600){var o=r-n+1,s=e-n+1,a=Math.log(o),u=.5*Math.exp(2*a/3),l=.5*Math.sqrt(a*u*(o-u)/o)*(s-o/2<0?-1:1);bt(t,e,Math.max(n,Math.floor(e-s*u/o+l)),Math.min(r,Math.floor(e+(o-s)*u/o+l)),i)}var c=t[e],h=n,p=r;for(wt(t,n,e),i(t[r],c)>0&&wt(t,n,r);h<p;){for(wt(t,h,p),h++,p--;i(t[h],c)<0;)h++;for(;i(t[p],c)>0;)p--}0===i(t[n],c)?wt(t,n,p):wt(t,++p,r),p<=e&&(n=p+1),e<=p&&(r=p-1)}}function wt(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function It(t,e){return t<e?-1:t>e?1:0}mt.default=xt;var Nt=Ct,St=Ct;function Ct(t,e){if(!(this instanceof Ct))return new Ct(t,e);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&this._initFormat(e),this.clear()}function Pt(t,e,n){if(!n)return e.indexOf(t);for(var r=0;r<e.length;r++)if(n(t,e[r]))return r;return-1}function Mt(t,e){Lt(t,0,t.children.length,e,t)}function Lt(t,e,n,r,i){i||(i=Gt(null)),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(var o,s=e;s<n;s++)o=t.children[s],Ot(i,t.leaf?r(o):o);return i}function Ot(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function Rt(t,e){return t.minX-e.minX}function Tt(t,e){return t.minY-e.minY}function At(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function Dt(t){return t.maxX-t.minX+(t.maxY-t.minY)}function Ft(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function kt(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function Gt(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function qt(t,e,n,r,i){for(var o,s=[e,n];s.length;)(n=s.pop())-(e=s.pop())<=r||(o=e+Math.ceil((n-e)/r/2)*r,mt(t,o,e,n,i),s.push(e,o,o,n))}function Bt(t){var e={exports:{}};return t(e,e.exports),e.exports}Ct.prototype={all:function(){return this._all(this.data,[])},search:function(t){var e=this.data,n=[],r=this.toBBox;if(!kt(t,e))return n;for(var i,o,s,a,u=[];e;){for(i=0,o=e.children.length;i<o;i++)s=e.children[i],kt(t,a=e.leaf?r(s):s)&&(e.leaf?n.push(s):Ft(t,a)?this._all(s,n):u.push(s));e=u.pop()}return n},collides:function(t){var e=this.data,n=this.toBBox;if(!kt(t,e))return!1;for(var r,i,o,s,a=[];e;){for(r=0,i=e.children.length;r<i;r++)if(o=e.children[r],kt(t,s=e.leaf?n(o):o)){if(e.leaf||Ft(t,s))return!0;a.push(o)}e=a.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}var r=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===r.height)this._splitRoot(this.data,r);else{if(this.data.height<r.height){var i=this.data;this.data=r,r=i}this._insert(r,this.data.height-r.height-1,!0)}else this.data=r;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=Gt([]),this},remove:function(t,e){if(!t)return this;for(var n,r,i,o,s=this.data,a=this.toBBox(t),u=[],l=[];s||u.length;){if(s||(s=u.pop(),r=u[u.length-1],n=l.pop(),o=!0),s.leaf&&-1!==(i=Pt(t,s.children,e)))return s.children.splice(i,1),u.push(s),this._condense(u),this;o||s.leaf||!Ft(s,a)?r?(n++,s=r.children[n],o=!1):s=null:(u.push(s),l.push(n),n=0,r=s,s=s.children[0])}return this},toBBox:function(t){return t},compareMinX:Rt,compareMinY:Tt,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,e){for(var n=[];t;)t.leaf?e.push.apply(e,t.children):n.push.apply(n,t.children),t=n.pop();return e},_build:function(t,e,n,r){var i,o=n-e+1,s=this._maxEntries;if(o<=s)return Mt(i=Gt(t.slice(e,n+1)),this.toBBox),i;r||(r=Math.ceil(Math.log(o)/Math.log(s)),s=Math.ceil(o/Math.pow(s,r-1))),(i=Gt([])).leaf=!1,i.height=r;var a,u,l,c,h=Math.ceil(o/s),p=h*Math.ceil(Math.sqrt(s));for(qt(t,e,n,p,this.compareMinX),a=e;a<=n;a+=p)for(qt(t,a,l=Math.min(a+p-1,n),h,this.compareMinY),u=a;u<=l;u+=h)c=Math.min(u+h-1,l),i.children.push(this._build(t,u,c,r-1));return Mt(i,this.toBBox),i},_chooseSubtree:function(t,e,n,r){for(var i,o,s,a,u,l,c,h,p,f;r.push(e),!e.leaf&&r.length-1!==n;){for(c=h=1/0,i=0,o=e.children.length;i<o;i++)u=At(s=e.children[i]),p=t,f=s,(l=(Math.max(f.maxX,p.maxX)-Math.min(f.minX,p.minX))*(Math.max(f.maxY,p.maxY)-Math.min(f.minY,p.minY))-u)<h?(h=l,c=u<c?u:c,a=s):l===h&&u<c&&(c=u,a=s);e=a||e.children[0]}return e},_insert:function(t,e,n){var r=this.toBBox,i=n?t:r(t),o=[],s=this._chooseSubtree(i,this.data,e,o);for(s.children.push(t),Ot(s,i);e>=0&&o[e].children.length>this._maxEntries;)this._split(o,e),e--;this._adjustParentBBoxes(i,o,e)},_split:function(t,e){var n=t[e],r=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,r);var o=this._chooseSplitIndex(n,i,r),s=Gt(n.children.splice(o,n.children.length-o));s.height=n.height,s.leaf=n.leaf,Mt(n,this.toBBox),Mt(s,this.toBBox),e?t[e-1].children.push(s):this._splitRoot(n,s)},_splitRoot:function(t,e){this.data=Gt([t,e]),this.data.height=t.height+1,this.data.leaf=!1,Mt(this.data,this.toBBox)},_chooseSplitIndex:function(t,e,n){var r,i,o,s,a,u,l,c,h,p,f,g,d,y;for(u=l=1/0,r=e;r<=n-e;r++)i=Lt(t,0,r,this.toBBox),o=Lt(t,r,n,this.toBBox),h=i,p=o,f=void 0,g=void 0,d=void 0,y=void 0,f=Math.max(h.minX,p.minX),g=Math.max(h.minY,p.minY),d=Math.min(h.maxX,p.maxX),y=Math.min(h.maxY,p.maxY),s=Math.max(0,d-f)*Math.max(0,y-g),a=At(i)+At(o),s<u?(u=s,c=r,l=a<l?a:l):s===u&&a<l&&(l=a,c=r);return c},_chooseSplitAxis:function(t,e,n){var r=t.leaf?this.compareMinX:Rt,i=t.leaf?this.compareMinY:Tt;this._allDistMargin(t,e,n,r)<this._allDistMargin(t,e,n,i)&&t.children.sort(r)},_allDistMargin:function(t,e,n,r){t.children.sort(r);var i,o,s=this.toBBox,a=Lt(t,0,e,s),u=Lt(t,n-e,n,s),l=Dt(a)+Dt(u);for(i=e;i<n-e;i++)o=t.children[i],Ot(a,t.leaf?s(o):o),l+=Dt(a);for(i=n-e-1;i>=e;i--)o=t.children[i],Ot(u,t.leaf?s(o):o),l+=Dt(u);return l},_adjustParentBBoxes:function(t,e,n){for(var r=n;r>=0;r--)Ot(e[r],t)},_condense:function(t){for(var e,n=t.length-1;n>=0;n--)0===t[n].children.length?n>0?(e=t[n-1].children).splice(e.indexOf(t[n]),1):this.clear():Mt(t[n],this.toBBox)},_initFormat:function(t){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}},Nt.default=St;var zt=function(t,e,n){var r=t*e,i=jt*t,o=i-(i-t),s=t-o,a=jt*e,u=a-(a-e),l=e-u,c=s*l-(r-o*u-s*u-o*l);if(n)return n[0]=c,n[1]=r,n;return[c,r]},jt=+(Math.pow(2,27)+1);var Ut=function(t,e){var n=0|t.length,r=0|e.length;if(1===n&&1===r)return function(t,e){var n=t+e,r=n-t,i=t-(n-r)+(e-r);if(i)return[i,n];return[n]}(t[0],e[0]);var i,o,s=new Array(n+r),a=0,u=0,l=0,c=Math.abs,h=t[u],p=c(h),f=e[l],g=c(f);p<g?(o=h,(u+=1)<n&&(h=t[u],p=c(h))):(o=f,(l+=1)<r&&(f=e[l],g=c(f)));u<n&&p<g||l>=r?(i=h,(u+=1)<n&&(h=t[u],p=c(h))):(i=f,(l+=1)<r&&(f=e[l],g=c(f)));var d,y,v=i+o,_=v-i,m=o-_,x=m,E=v;for(;u<n&&l<r;)p<g?(i=h,(u+=1)<n&&(h=t[u],p=c(h))):(i=f,(l+=1)<r&&(f=e[l],g=c(f))),(m=(o=x)-(_=(v=i+o)-i))&&(s[a++]=m),x=E-((d=E+v)-(y=d-E))+(v-y),E=d;for(;u<n;)(m=(o=x)-(_=(v=(i=h)+o)-i))&&(s[a++]=m),x=E-((d=E+v)-(y=d-E))+(v-y),E=d,(u+=1)<n&&(h=t[u]);for(;l<r;)(m=(o=x)-(_=(v=(i=f)+o)-i))&&(s[a++]=m),x=E-((d=E+v)-(y=d-E))+(v-y),E=d,(l+=1)<r&&(f=e[l]);x&&(s[a++]=x);E&&(s[a++]=E);a||(s[a++]=0);return s.length=a,s};var Vt=function(t,e,n){var r=t+e,i=r-t,o=e-i,s=t-(r-i);if(n)return n[0]=s+o,n[1]=r,n;return[s+o,r]};var Xt=function(t,e){var n=t.length;if(1===n){var r=zt(t[0],e);return r[0]?r:[r[1]]}var i=new Array(2*n),o=[.1,.1],s=[.1,.1],a=0;zt(t[0],e,o),o[0]&&(i[a++]=o[0]);for(var u=1;u<n;++u){zt(t[u],e,s);var l=o[1];Vt(l,s[0],o),o[0]&&(i[a++]=o[0]);var c=s[1],h=o[1],p=c+h,f=h-(p-c);o[1]=p,f&&(i[a++]=f)}o[1]&&(i[a++]=o[1]);0===a&&(i[a++]=0);return i.length=a,i};var Yt=function(t,e){var n=0|t.length,r=0|e.length;if(1===n&&1===r)return function(t,e){var n=t+e,r=n-t,i=t-(n-r)+(e-r);if(i)return[i,n];return[n]}(t[0],-e[0]);var i,o,s=new Array(n+r),a=0,u=0,l=0,c=Math.abs,h=t[u],p=c(h),f=-e[l],g=c(f);p<g?(o=h,(u+=1)<n&&(h=t[u],p=c(h))):(o=f,(l+=1)<r&&(f=-e[l],g=c(f)));u<n&&p<g||l>=r?(i=h,(u+=1)<n&&(h=t[u],p=c(h))):(i=f,(l+=1)<r&&(f=-e[l],g=c(f)));var d,y,v=i+o,_=v-i,m=o-_,x=m,E=v;for(;u<n&&l<r;)p<g?(i=h,(u+=1)<n&&(h=t[u],p=c(h))):(i=f,(l+=1)<r&&(f=-e[l],g=c(f))),(m=(o=x)-(_=(v=i+o)-i))&&(s[a++]=m),x=E-((d=E+v)-(y=d-E))+(v-y),E=d;for(;u<n;)(m=(o=x)-(_=(v=(i=h)+o)-i))&&(s[a++]=m),x=E-((d=E+v)-(y=d-E))+(v-y),E=d,(u+=1)<n&&(h=t[u]);for(;l<r;)(m=(o=x)-(_=(v=(i=f)+o)-i))&&(s[a++]=m),x=E-((d=E+v)-(y=d-E))+(v-y),E=d,(l+=1)<r&&(f=-e[l]);x&&(s[a++]=x);E&&(s[a++]=E);a||(s[a++]=0);return s.length=a,s};var Ht=Bt((function(t){function e(t,e){for(var n=new Array(t.length-1),r=1;r<t.length;++r)for(var i=n[r-1]=new Array(t.length-1),o=0,s=0;o<t.length;++o)o!==e&&(i[s++]=t[r][o]);return n}function n(t){if(1===t.length)return t[0];if(2===t.length)return["sum(",t[0],",",t[1],")"].join("");var e=t.length>>1;return["sum(",n(t.slice(0,e)),",",n(t.slice(e)),")"].join("")}function r(t){if(2===t.length)return[["sum(prod(",t[0][0],",",t[1][1],"),prod(-",t[0][1],",",t[1][0],"))"].join("")];for(var i=[],o=0;o<t.length;++o)i.push(["scale(",n(r(e(t,o))),",",(s=o,1&s?"-":""),t[0][o],")"].join(""));return i;var s}function i(t){for(var i=[],o=[],s=function(t){for(var e=new Array(t),n=0;n<t;++n){e[n]=new Array(t);for(var r=0;r<t;++r)e[n][r]=["m",r,"[",t-n-1,"]"].join("")}return e}(t),a=[],u=0;u<t;++u)0==(1&u)?i.push.apply(i,r(e(s,u))):o.push.apply(o,r(e(s,u))),a.push("m"+u);var l=n(i),c=n(o),h="orientation"+t+"Exact",p=["function ",h,"(",a.join(),"){var p=",l,",n=",c,",d=sub(p,n);return d[d.length-1];};return ",h].join("");return new Function("sum","prod","scale","sub",p)(Ut,zt,Xt,Yt)}var o=i(3),s=i(4),a=[function(){return 0},function(){return 0},function(t,e){return e[0]-t[0]},function(t,e,n){var r,i=(t[1]-n[1])*(e[0]-n[0]),s=(t[0]-n[0])*(e[1]-n[1]),a=i-s;if(i>0){if(s<=0)return a;r=i+s}else{if(!(i<0))return a;if(s>=0)return a;r=-(i+s)}var u=33306690738754716e-32*r;return a>=u||a<=-u?a:o(t,e,n)},function(t,e,n,r){var i=t[0]-r[0],o=e[0]-r[0],a=n[0]-r[0],u=t[1]-r[1],l=e[1]-r[1],c=n[1]-r[1],h=t[2]-r[2],p=e[2]-r[2],f=n[2]-r[2],g=o*c,d=a*l,y=a*u,v=i*c,_=i*l,m=o*u,x=h*(g-d)+p*(y-v)+f*(_-m),E=7771561172376103e-31*((Math.abs(g)+Math.abs(d))*Math.abs(h)+(Math.abs(y)+Math.abs(v))*Math.abs(p)+(Math.abs(_)+Math.abs(m))*Math.abs(f));return x>E||-x>E?x:s(t,e,n,r)}];function u(t){var e=a[t.length];return e||(e=a[t.length]=i(t.length)),e.apply(void 0,t)}!function(){for(;a.length<=5;)a.push(i(a.length));for(var e=[],n=["slow"],r=0;r<=5;++r)e.push("a"+r),n.push("o"+r);var o=["function getOrientation(",e.join(),"){switch(arguments.length){case 0:case 1:return 0;"];for(r=2;r<=5;++r)o.push("case ",r,":return o",r,"(",e.slice(0,r).join(),");");o.push("}var s=new Array(arguments.length);for(var i=0;i<arguments.length;++i){s[i]=arguments[i]};return slow(s);}return getOrientation"),n.push(o.join(""));var s=Function.apply(void 0,n);for(t.exports=s.apply(void 0,[u].concat(a)),r=0;r<=5;++r)t.exports[r]=a[r]}()})),Wt=function(t){var e=t.length;if(e<3){for(var n=new Array(e),r=0;r<e;++r)n[r]=r;return 2===e&&t[0][0]===t[1][0]&&t[0][1]===t[1][1]?[0]:n}var i=new Array(e);for(r=0;r<e;++r)i[r]=r;i.sort((function(e,n){var r=t[e][0]-t[n][0];return r||t[e][1]-t[n][1]}));var o=[i[0],i[1]],s=[i[0],i[1]];for(r=2;r<e;++r){for(var a=i[r],u=t[a],l=o.length;l>1&&Jt(t[o[l-2]],t[o[l-1]],u)<=0;)l-=1,o.pop();for(o.push(a),l=s.length;l>1&&Jt(t[s[l-2]],t[s[l-1]],u)>=0;)l-=1,s.pop();s.push(a)}n=new Array(s.length+o.length-2);for(var c=0,h=(r=0,o.length);r<h;++r)n[c++]=o[r];for(var p=s.length-2;p>0;--p)n[c++]=s[p];return n},Jt=Ht[3];var Zt=Qt,Kt=Qt;function Qt(t,e){if(!(this instanceof Qt))return new Qt(t,e);if(this.data=t||[],this.length=this.data.length,this.compare=e||$t,this.length>0)for(var n=(this.length>>1)-1;n>=0;n--)this._down(n)}function $t(t,e){return t<e?-1:t>e?1:0}Qt.prototype={push:function(t){this.data.push(t),this.length++,this._up(this.length-1)},pop:function(){if(0!==this.length){var t=this.data[0];return this.length--,this.length>0&&(this.data[0]=this.data[this.length],this._down(0)),this.data.pop(),t}},peek:function(){return this.data[0]},_up:function(t){for(var e=this.data,n=this.compare,r=e[t];t>0;){var i=t-1>>1,o=e[i];if(n(r,o)>=0)break;e[t]=o,t=i}e[t]=r},_down:function(t){for(var e=this.data,n=this.compare,r=this.length>>1,i=e[t];t<r;){var o=1+(t<<1),s=o+1,a=e[o];if(s<this.length&&n(e[s],a)<0&&(o=s,a=e[s]),n(a,i)>=0)break;e[t]=a,t=o}e[t]=i}},Zt.default=Kt;var te=function(t,e){for(var n=t[0],r=t[1],i=!1,o=0,s=e.length-1;o<e.length;s=o++){var a=e[o][0],u=e[o][1],l=e[s][0],c=e[s][1];u>r!=c>r&&n<(l-a)*(r-u)/(c-u)+a&&(i=!i)}return i},ee=Ht[3],ne=ie,re=ie;function ie(t,e,n){e=Math.max(0,void 0===e?2:e),n=n||0;for(var r,i=function(t){for(var e=t[0],n=t[0],r=t[0],i=t[0],o=0;o<t.length;o++){var s=t[o];s[0]<e[0]&&(e=s),s[0]>r[0]&&(r=s),s[1]<n[1]&&(n=s),s[1]>i[1]&&(i=s)}var a=[e,n,r,i],u=a.slice();for(o=0;o<t.length;o++)te(t[o],a)||u.push(t[o]);var l=Wt(u),c=[];for(o=0;o<l.length;o++)c.push(u[l[o]]);return c}(t),o=Nt(16,["[0]","[1]","[0]","[1]"]).load(t),s=[],a=0;a<i.length;a++){var u=i[a];o.remove(u),r=he(u,r),s.push(r)}var l=Nt(16);for(a=0;a<s.length;a++)l.insert(ce(s[a]));for(var c=e*e,h=n*n;s.length;){var p=s.shift(),f=p.p,g=p.next.p,d=pe(f,g);if(!(d<h)){var y=d/c;(u=oe(o,p.prev.p,f,g,p.next.next.p,y,l))&&Math.min(pe(u,f),pe(u,g))<=y&&(s.push(p),s.push(he(u,p)),o.remove(u),l.remove(p),l.insert(ce(p)),l.insert(ce(p.next)))}}p=r;var v=[];do{v.push(p.p),p=p.next}while(p!==r);return v.push(p.p),v}function oe(t,e,n,r,i,o,s){for(var a=new Zt(null,se),u=t.data;u;){for(var l=0;l<u.children.length;l++){var c=u.children[l],h=u.leaf?fe(c,n,r):ae(n,r,c);h>o||a.push({node:c,dist:h})}for(;a.length&&!a.peek().node.children;){var p=a.pop(),f=p.node,g=fe(f,e,n),d=fe(f,r,i);if(p.dist<g&&p.dist<d&&le(n,f,s)&&le(r,f,s))return f}(u=a.pop())&&(u=u.node)}return null}function se(t,e){return t.dist-e.dist}function ae(t,e,n){if(ue(t,n)||ue(e,n))return 0;var r=ge(t[0],t[1],e[0],e[1],n.minX,n.minY,n.maxX,n.minY);if(0===r)return 0;var i=ge(t[0],t[1],e[0],e[1],n.minX,n.minY,n.minX,n.maxY);if(0===i)return 0;var o=ge(t[0],t[1],e[0],e[1],n.maxX,n.minY,n.maxX,n.maxY);if(0===o)return 0;var s=ge(t[0],t[1],e[0],e[1],n.minX,n.maxY,n.maxX,n.maxY);return 0===s?0:Math.min(r,i,o,s)}function ue(t,e){return t[0]>=e.minX&&t[0]<=e.maxX&&t[1]>=e.minY&&t[1]<=e.maxY}function le(t,e,n){for(var r,i,o,s,a=Math.min(t[0],e[0]),u=Math.min(t[1],e[1]),l=Math.max(t[0],e[0]),c=Math.max(t[1],e[1]),h=n.search({minX:a,minY:u,maxX:l,maxY:c}),p=0;p<h.length;p++)if(r=h[p].p,i=h[p].next.p,o=t,r!==(s=e)&&i!==o&&ee(r,i,o)>0!=ee(r,i,s)>0&&ee(o,s,r)>0!=ee(o,s,i)>0)return!1;return!0}function ce(t){var e=t.p,n=t.next.p;return t.minX=Math.min(e[0],n[0]),t.minY=Math.min(e[1],n[1]),t.maxX=Math.max(e[0],n[0]),t.maxY=Math.max(e[1],n[1]),t}function he(t,e){var n={p:t,prev:null,next:null,minX:0,minY:0,maxX:0,maxY:0};return e?(n.next=e.next,n.prev=e,e.next.prev=n,e.next=n):(n.prev=n,n.next=n),n}function pe(t,e){var n=t[0]-e[0],r=t[1]-e[1];return n*n+r*r}function fe(t,e,n){var r=e[0],i=e[1],o=n[0]-r,s=n[1]-i;if(0!==o||0!==s){var a=((t[0]-r)*o+(t[1]-i)*s)/(o*o+s*s);a>1?(r=n[0],i=n[1]):a>0&&(r+=o*a,i+=s*a)}return(o=t[0]-r)*o+(s=t[1]-i)*s}function ge(t,e,n,r,i,o,s,a){var u,l,c,h,p=n-t,f=r-e,g=s-i,d=a-o,y=t-i,v=e-o,_=p*p+f*f,m=p*g+f*d,x=g*g+d*d,E=p*y+f*v,b=g*y+d*v,w=_*x-m*m,I=w,N=w;0===w?(l=0,I=1,h=b,N=x):(h=_*b-m*E,(l=m*b-x*E)<0?(l=0,h=b,N=x):l>I&&(l=I,h=b+m,N=x)),h<0?(h=0,-E<0?l=0:-E>_?l=I:(l=-E,I=_)):h>N&&(h=N,-E+m<0?l=0:-E+m>_?l=I:(l=-E+m,I=_));var S=(1-(c=0===h?0:h/N))*i+c*s-((1-(u=0===l?0:l/I))*t+u*n),C=(1-c)*o+c*a-((1-u)*e+u*r);return S*S+C*C}function de(t,e){void 0===e&&(e={}),e.concavity=e.concavity||1/0;var n=[];if(R(t,(function(t){n.push([t[0],t[1]])})),!n.length)return null;var r=ne(n,e.concavity);return r.length>3?l([r]):null}function ye(t,e,n){if(void 0===n&&(n={}),!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");var r=K(t),i=rt(e),o=i.type,s=e.bbox,a=i.coordinates;if(s&&!1===function(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}(r,s))return!1;"Polygon"===o&&(a=[a]);for(var u=!1,l=0;l<a.length&&!u;l++)if(ve(r,a[l][0],n.ignoreBoundary)){for(var c=!1,h=1;h<a[l].length&&!c;)ve(r,a[l][h],!n.ignoreBoundary)&&(c=!0),h++;c||(u=!0)}return u}function ve(t,e,n){var r=!1;e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]&&(e=e.slice(0,e.length-1));for(var i=0,o=e.length-1;i<e.length;o=i++){var s=e[i][0],a=e[i][1],u=e[o][0],l=e[o][1];if(t[1]*(s-u)+a*(u-t[0])+l*(t[0]-s)==0&&(s-t[0])*(u-t[0])<=0&&(a-t[1])*(l-t[1])<=0)return!n;a>t[1]!=l>t[1]&&t[0]<(u-s)*(t[1]-a)/(l-a)+s&&(r=!r)}return r}function _e(t,e){var n=[];return F(t,(function(t){var r=!1;if("Point"===t.geometry.type)q(e,(function(e){ye(t,e)&&(r=!0)})),r&&n.push(t);else{if("MultiPoint"!==t.geometry.type)throw new Error("Input geometry must be a Point or MultiPoint");var i=[];q(e,(function(e){R(t,(function(t){ye(t,e)&&(r=!0,i.push(t))}))})),r&&n.push(d(i))}})),f(n)}function me(t,e,n){void 0===n&&(n={});var r=K(t),i=K(e),o=I(i[1]-r[1]),s=I(i[0]-r[0]),a=I(r[1]),u=I(i[1]),l=Math.pow(Math.sin(o/2),2)+Math.pow(Math.sin(s/2),2)*Math.cos(a)*Math.cos(u);return m(2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l)),n.units)}function xe(t,e){var n=!1;return f(function(t){if(t.length<3)return[];t.sort(be);var e,n,r,i,o,s,a=t.length-1,u=t[a].x,l=t[0].x,c=t[a].y,h=c,p=1e-12;for(;a--;)t[a].y<c&&(c=t[a].y),t[a].y>h&&(h=t[a].y);var f,g=l-u,d=h-c,y=g>d?g:d,v=.5*(l+u),_=.5*(h+c),m=[new Ee({__sentinel:!0,x:v-20*y,y:_-y},{__sentinel:!0,x:v,y:_+20*y},{__sentinel:!0,x:v+20*y,y:_-y})],x=[],E=[];a=t.length;for(;a--;){for(E.length=0,f=m.length;f--;)(g=t[a].x-m[f].x)>0&&g*g>m[f].r?(x.push(m[f]),m.splice(f,1)):g*g+(d=t[a].y-m[f].y)*d>m[f].r||(E.push(m[f].a,m[f].b,m[f].b,m[f].c,m[f].c,m[f].a),m.splice(f,1));for(we(E),f=E.length;f;)n=E[--f],e=E[--f],r=t[a],i=n.x-e.x,o=n.y-e.y,s=2*(i*(r.y-n.y)-o*(r.x-n.x)),Math.abs(s)>p&&m.push(new Ee(e,n,r))}Array.prototype.push.apply(x,m),a=x.length;for(;a--;)(x[a].a.__sentinel||x[a].b.__sentinel||x[a].c.__sentinel)&&x.splice(a,1);return x}(t.features.map((function(t){var r={x:t.geometry.coordinates[0],y:t.geometry.coordinates[1]};return e?r.z=t.properties[e]:3===t.geometry.coordinates.length&&(n=!0,r.z=t.geometry.coordinates[2]),r}))).map((function(t){var e=[t.a.x,t.a.y],r=[t.b.x,t.b.y],i=[t.c.x,t.c.y],o={};return n?(e.push(t.a.z),r.push(t.b.z),i.push(t.c.z)):o={a:t.a.z,b:t.b.z,c:t.c.z},l([[e,r,i,e]],o)})))}ne.default=re;var Ee=function(t,e,n){this.a=t,this.b=e,this.c=n;var r,i,o=e.x-t.x,s=e.y-t.y,a=n.x-t.x,u=n.y-t.y,l=o*(t.x+e.x)+s*(t.y+e.y),c=a*(t.x+n.x)+u*(t.y+n.y),h=2*(o*(n.y-e.y)-s*(n.x-e.x));this.x=(u*l-s*c)/h,this.y=(o*c-a*l)/h,r=this.x-t.x,i=this.y-t.y,this.r=r*r+i*i};function be(t,e){return e.x-t.x}function we(t){var e,n,r,i,o,s=t.length;t:for(;s;)for(n=t[--s],e=t[--s],r=s;r;)if(o=t[--r],e===(i=t[--r])&&n===o||e===o&&n===i){t.splice(s,2),t.splice(r,2),s-=2;continue t}}function Ie(t){if(!t)throw new Error("geojson is required");switch(t.type){case"Feature":return Ne(t);case"FeatureCollection":return function(t){var e={type:"FeatureCollection"};return Object.keys(t).forEach((function(n){switch(n){case"type":case"features":return;default:e[n]=t[n]}})),e.features=t.features.map((function(t){return Ne(t)})),e}(t);case"Point":case"LineString":case"Polygon":case"MultiPoint":case"MultiLineString":case"MultiPolygon":case"GeometryCollection":return Ce(t);default:throw new Error("unknown GeoJSON type")}}function Ne(t){var e={type:"Feature"};return Object.keys(t).forEach((function(n){switch(n){case"type":case"properties":case"geometry":return;default:e[n]=t[n]}})),e.properties=Se(t.properties),e.geometry=Ce(t.geometry),e}function Se(t){var e={};return t?(Object.keys(t).forEach((function(n){var r=t[n];"object"==typeof r?null===r?e[n]=null:Array.isArray(r)?e[n]=r.map((function(t){return t})):e[n]=Se(r):e[n]=r})),e):e}function Ce(t){var e={type:t.type};return t.bbox&&(e.bbox=t.bbox),"GeometryCollection"===t.type?(e.geometries=t.geometries.map((function(t){return Ce(t)})),e):(e.coordinates=Pe(t.coordinates),e)}function Pe(t){var e=t;return"object"!=typeof e[0]?e.slice():e.map((function(t){return Pe(t)}))}function Me(t,e){if(void 0===e&&(e={}),!P(e=e||{}))throw new Error("options is invalid");var n=e.mutate;if("FeatureCollection"!==it(t))throw new Error("geojson must be a FeatureCollection");if(!t.features.length)throw new Error("geojson is empty");!1!==n&&void 0!==n||(t=Ie(t));var r=[],i=Y(t,(function(t,e){var n=function(t,e){var n,r=t.geometry.coordinates,i=e.geometry.coordinates,o=Le(r[0]),s=Le(r[r.length-1]),a=Le(i[0]),u=Le(i[i.length-1]);if(o===u)n=i.concat(r.slice(1));else if(a===s)n=r.concat(i.slice(1));else if(o===a)n=r.slice(1).reverse().concat(i);else{if(s!==u)return null;n=r.concat(i.reverse().slice(1))}return h(n)}(t,e);return n||(r.push(t),e)}));return i&&r.push(i),r.length?1===r.length?r[0]:g(r.map((function(t){return t.coordinates}))):null}function Le(t){return t[0].toString()+","+t[1].toString()}function Oe(t){return t}function Re(t,e){var n=function(t){if(null==t)return Oe;var e,n,r=t.scale[0],i=t.scale[1],o=t.translate[0],s=t.translate[1];return function(t,a){a||(e=n=0);var u=2,l=t.length,c=new Array(l);for(c[0]=(e+=t[0])*r+o,c[1]=(n+=t[1])*i+s;u<l;)c[u]=t[u],++u;return c}}(t.transform),r=t.arcs;function i(t,e){e.length&&e.pop();for(var i=r[t<0?~t:t],o=0,s=i.length;o<s;++o)e.push(n(i[o],o));t<0&&function(t,e){for(var n,r=t.length,i=r-e;i<--r;)n=t[i],t[i++]=t[r],t[r]=n}(e,s)}function o(t){return n(t)}function s(t){for(var e=[],n=0,r=t.length;n<r;++n)i(t[n],e);return e.length<2&&e.push(e[0]),e}function a(t){for(var e=s(t);e.length<4;)e.push(e[0]);return e}function u(t){return t.map(a)}return function t(e){var n,r=e.type;switch(r){case"GeometryCollection":return{type:r,geometries:e.geometries.map(t)};case"Point":n=o(e.coordinates);break;case"MultiPoint":n=e.coordinates.map(o);break;case"LineString":n=s(e.arcs);break;case"MultiLineString":n=e.arcs.map(s);break;case"Polygon":n=u(e.arcs);break;case"MultiPolygon":n=e.arcs.map(u);break;default:return null}return{type:r,coordinates:n}}(e)}function Te(t,e){var n={},r={},i={},o=[],s=-1;function a(t,e){for(var r in t){var i=t[r];delete e[i.start],delete i.start,delete i.end,i.forEach((function(t){n[t<0?~t:t]=1})),o.push(i)}}return e.forEach((function(n,r){var i,o=t.arcs[n<0?~n:n];o.length<3&&!o[1][0]&&!o[1][1]&&(i=e[++s],e[s]=n,e[r]=i)})),e.forEach((function(e){var n,o,s=function(e){var n,r=t.arcs[e<0?~e:e],i=r[0];t.transform?(n=[0,0],r.forEach((function(t){n[0]+=t[0],n[1]+=t[1]}))):n=r[r.length-1];return e<0?[n,i]:[i,n]}(e),a=s[0],u=s[1];if(n=i[a])if(delete i[n.end],n.push(e),n.end=u,o=r[u]){delete r[o.start];var l=o===n?n:n.concat(o);r[l.start=n.start]=i[l.end=o.end]=l}else r[n.start]=i[n.end]=n;else if(n=r[u])if(delete r[n.start],n.unshift(e),n.start=a,o=i[a]){delete i[o.end];var c=o===n?n:o.concat(n);r[c.start=o.start]=i[c.end=n.end]=c}else r[n.start]=i[n.end]=n;else r[(n=[e]).start=a]=i[n.end=u]=n})),a(i,r),a(r,i),e.forEach((function(t){n[t<0?~t:t]||o.push([t])})),o}function Ae(t,e){var n={},r=[],i=[];function o(t){t.forEach((function(e){e.forEach((function(e){(n[e=e<0?~e:e]||(n[e]=[])).push(t)}))})),r.push(t)}function s(e){return function(t){for(var e,n=-1,r=t.length,i=t[r-1],o=0;++n<r;)e=i,i=t[n],o+=e[0]*i[1]-e[1]*i[0];return Math.abs(o)}(Re(t,{type:"Polygon",arcs:[e]}).coordinates[0])}return e.forEach((function t(e){switch(e.type){case"GeometryCollection":e.geometries.forEach(t);break;case"Polygon":o(e.arcs);break;case"MultiPolygon":e.arcs.forEach(o)}})),r.forEach((function(t){if(!t._){var e=[],r=[t];for(t._=1,i.push(e);t=r.pop();)e.push(t),t.forEach((function(t){t.forEach((function(t){n[t<0?~t:t].forEach((function(t){t._||(t._=1,r.push(t))}))}))}))}})),r.forEach((function(t){delete t._})),{type:"MultiPolygon",arcs:i.map((function(e){var r,i=[];if(e.forEach((function(t){t.forEach((function(t){t.forEach((function(t){n[t<0?~t:t].length<2&&i.push(t)}))}))})),(r=(i=Te(t,i)).length)>1)for(var o,a,u=1,l=s(i[0]);u<r;++u)(o=s(i[u]))>l&&(a=i[0],i[0]=i[u],i[u]=a,l=o);return i})).filter((function(t){return t.length>0}))}}var De=Object.prototype.hasOwnProperty;function Fe(t,e,n,r,i,o){3===arguments.length&&(r=o=Array,i=null);for(var s=new r(t=1<<Math.max(4,Math.ceil(Math.log(t)/Math.LN2))),a=new o(t),u=t-1,l=0;l<t;++l)s[l]=i;function c(r,o){for(var l=e(r)&u,c=s[l],h=0;c!=i;){if(n(c,r))return a[l]=o;if(++h>=t)throw new Error("full hashmap");c=s[l=l+1&u]}return s[l]=r,a[l]=o,o}function h(r,o){for(var l=e(r)&u,c=s[l],h=0;c!=i;){if(n(c,r))return a[l];if(++h>=t)throw new Error("full hashmap");c=s[l=l+1&u]}return s[l]=r,a[l]=o,o}function p(r,o){for(var l=e(r)&u,c=s[l],h=0;c!=i;){if(n(c,r))return a[l];if(++h>=t)break;c=s[l=l+1&u]}return o}function f(){for(var t=[],e=0,n=s.length;e<n;++e){var r=s[e];r!=i&&t.push(r)}return t}return{set:c,maybeSet:h,get:p,keys:f}}function ke(t,e){return t[0]===e[0]&&t[1]===e[1]}var Ge=new ArrayBuffer(16),qe=new Float64Array(Ge),Be=new Uint32Array(Ge);function ze(t){qe[0]=t[0],qe[1]=t[1];var e=Be[0]^Be[1];return 2147483647&(e=e<<5^e>>7^Be[2]^Be[3])}function je(t){var e,n,r,i,o=t.coordinates,s=t.lines,a=t.rings,u=function(){for(var t=Fe(1.4*o.length,E,b,Int32Array,-1,Int32Array),e=new Int32Array(o.length),n=0,r=o.length;n<r;++n)e[n]=t.maybeSet(n,n);return e}(),l=new Int32Array(o.length),c=new Int32Array(o.length),h=new Int32Array(o.length),p=new Int8Array(o.length),f=0;for(e=0,n=o.length;e<n;++e)l[e]=c[e]=h[e]=-1;for(e=0,n=s.length;e<n;++e){var g=s[e],d=g[0],y=g[1];for(r=u[d],i=u[++d],++f,p[r]=1;++d<=y;)x(e,r,r=i,i=u[d]);++f,p[i]=1}for(e=0,n=o.length;e<n;++e)l[e]=-1;for(e=0,n=a.length;e<n;++e){var v=a[e],_=v[0]+1,m=v[1];for(x(e,u[m-1],r=u[_-1],i=u[_]);++_<=m;)x(e,r,r=i,i=u[_])}function x(t,e,n,r){if(l[n]!==t){l[n]=t;var i=c[n];if(i>=0){var o=h[n];i===e&&o===r||i===r&&o===e||(++f,p[n]=1)}else c[n]=e,h[n]=r}}function E(t){return ze(o[t])}function b(t,e){return ke(o[t],o[e])}l=c=h=null;var w,I=function(t,e,n,r,i){3===arguments.length&&(r=Array,i=null);for(var o=new r(t=1<<Math.max(4,Math.ceil(Math.log(t)/Math.LN2))),s=t-1,a=0;a<t;++a)o[a]=i;function u(r){for(var a=e(r)&s,u=o[a],l=0;u!=i;){if(n(u,r))return!0;if(++l>=t)throw new Error("full hashset");u=o[a=a+1&s]}return o[a]=r,!0}function l(r){for(var a=e(r)&s,u=o[a],l=0;u!=i;){if(n(u,r))return!0;if(++l>=t)break;u=o[a=a+1&s]}return!1}function c(){for(var t=[],e=0,n=o.length;e<n;++e){var r=o[e];r!=i&&t.push(r)}return t}return{add:u,has:l,values:c}}(1.4*f,ze,ke);for(e=0,n=o.length;e<n;++e)p[w=u[e]]&&I.add(o[w]);return I}function Ue(t,e,n,r){Ve(t,e,n),Ve(t,e,e+r),Ve(t,e+r,n)}function Ve(t,e,n){for(var r,i=e+(n---e>>1);e<i;++e,--n)r=t[e],t[e]=t[n],t[n]=r}function Xe(t){var e,n,r={};for(e in t)r[e]=null==(n=t[e])?{type:null}:("FeatureCollection"===n.type?Ye:"Feature"===n.type?He:We)(n);return r}function Ye(t){var e={type:"GeometryCollection",geometries:t.features.map(He)};return null!=t.bbox&&(e.bbox=t.bbox),e}function He(t){var e,n=We(t.geometry);for(e in null!=t.id&&(n.id=t.id),null!=t.bbox&&(n.bbox=t.bbox),t.properties){n.properties=t.properties;break}return n}function We(t){if(null==t)return{type:null};var e="GeometryCollection"===t.type?{type:"GeometryCollection",geometries:t.geometries.map(We)}:"Point"===t.type||"MultiPoint"===t.type?{type:t.type,coordinates:t.coordinates}:{type:t.type,arcs:t.coordinates};return null!=t.bbox&&(e.bbox=t.bbox),e}function Je(t,e){var n=function(t){var e=1/0,n=1/0,r=-1/0,i=-1/0;function o(t){null!=t&&De.call(s,t.type)&&s[t.type](t)}var s={GeometryCollection:function(t){t.geometries.forEach(o)},Point:function(t){a(t.coordinates)},MultiPoint:function(t){t.coordinates.forEach(a)},LineString:function(t){u(t.arcs)},MultiLineString:function(t){t.arcs.forEach(u)},Polygon:function(t){t.arcs.forEach(u)},MultiPolygon:function(t){t.arcs.forEach(l)}};function a(t){var o=t[0],s=t[1];o<e&&(e=o),o>r&&(r=o),s<n&&(n=s),s>i&&(i=s)}function u(t){t.forEach(a)}function l(t){t.forEach(u)}for(var c in t)o(t[c]);return r>=e&&i>=n?[e,n,r,i]:void 0}(t=Xe(t)),r=e>0&&n&&function(t,e,n){var r=e[0],i=e[1],o=e[2],s=e[3],a=o-r?(n-1)/(o-r):1,u=s-i?(n-1)/(s-i):1;function l(t){return[Math.round((t[0]-r)*a),Math.round((t[1]-i)*u)]}function c(t,e){for(var n,o,s,l,c,h=-1,p=0,f=t.length,g=new Array(f);++h<f;)n=t[h],l=Math.round((n[0]-r)*a),c=Math.round((n[1]-i)*u),l===o&&c===s||(g[p++]=[o=l,s=c]);for(g.length=p;p<e;)p=g.push([g[0][0],g[0][1]]);return g}function h(t){return c(t,2)}function p(t){return c(t,4)}function f(t){return t.map(p)}function g(t){null!=t&&De.call(d,t.type)&&d[t.type](t)}var d={GeometryCollection:function(t){t.geometries.forEach(g)},Point:function(t){t.coordinates=l(t.coordinates)},MultiPoint:function(t){t.coordinates=t.coordinates.map(l)},LineString:function(t){t.arcs=h(t.arcs)},MultiLineString:function(t){t.arcs=t.arcs.map(h)},Polygon:function(t){t.arcs=f(t.arcs)},MultiPolygon:function(t){t.arcs=t.arcs.map(f)}};for(var y in t)g(t[y]);return{scale:[1/a,1/u],translate:[r,i]}}(t,n,e),i=function(t){var e,n,r,i,o=t.coordinates,s=t.lines,a=t.rings,u=s.length+a.length;for(delete t.lines,delete t.rings,r=0,i=s.length;r<i;++r)for(e=s[r];e=e.next;)++u;for(r=0,i=a.length;r<i;++r)for(n=a[r];n=n.next;)++u;var l=Fe(2*u*1.4,ze,ke),c=t.arcs=[];for(r=0,i=s.length;r<i;++r){e=s[r];do{h(e)}while(e=e.next)}for(r=0,i=a.length;r<i;++r)if((n=a[r]).next)do{h(n)}while(n=n.next);else p(n);function h(t){var e,n,r,i,s,a,u,h;if(r=l.get(e=o[t[0]]))for(u=0,h=r.length;u<h;++u)if(f(i=r[u],t))return t[0]=i[0],void(t[1]=i[1]);if(s=l.get(n=o[t[1]]))for(u=0,h=s.length;u<h;++u)if(g(a=s[u],t))return t[1]=a[0],void(t[0]=a[1]);r?r.push(t):l.set(e,[t]),s?s.push(t):l.set(n,[t]),c.push(t)}function p(t){var e,n,r,i,s;if(n=l.get(o[t[0]]))for(i=0,s=n.length;i<s;++i){if(d(r=n[i],t))return t[0]=r[0],void(t[1]=r[1]);if(y(r,t))return t[0]=r[1],void(t[1]=r[0])}if(n=l.get(e=o[t[0]+v(t)]))for(i=0,s=n.length;i<s;++i){if(d(r=n[i],t))return t[0]=r[0],void(t[1]=r[1]);if(y(r,t))return t[0]=r[1],void(t[1]=r[0])}n?n.push(t):l.set(e,[t]),c.push(t)}function f(t,e){var n=t[0],r=e[0],i=t[1];if(n-i!=r-e[1])return!1;for(;n<=i;++n,++r)if(!ke(o[n],o[r]))return!1;return!0}function g(t,e){var n=t[0],r=e[0],i=t[1],s=e[1];if(n-i!=r-s)return!1;for(;n<=i;++n,--s)if(!ke(o[n],o[s]))return!1;return!0}function d(t,e){var n=t[0],r=e[0],i=t[1]-n;if(i!==e[1]-r)return!1;for(var s=v(t),a=v(e),u=0;u<i;++u)if(!ke(o[n+(u+s)%i],o[r+(u+a)%i]))return!1;return!0}function y(t,e){var n=t[0],r=e[0],i=t[1],s=e[1],a=i-n;if(a!==s-r)return!1;for(var u=v(t),l=a-v(e),c=0;c<a;++c)if(!ke(o[n+(c+u)%a],o[s-(c+l)%a]))return!1;return!0}function v(t){for(var e=t[0],n=t[1],r=e,i=r,s=o[r];++r<n;){var a=o[r];(a[0]<s[0]||a[0]===s[0]&&a[1]<s[1])&&(i=r,s=a)}return i-e}return t}(function(t){var e,n,r,i=je(t),o=t.coordinates,s=t.lines,a=t.rings;for(n=0,r=s.length;n<r;++n)for(var u=s[n],l=u[0],c=u[1];++l<c;)i.has(o[l])&&(e={0:l,1:u[1]},u[1]=l,u=u.next=e);for(n=0,r=a.length;n<r;++n)for(var h=a[n],p=h[0],f=p,g=h[1],d=i.has(o[p]);++f<g;)i.has(o[f])&&(d?(e={0:f,1:h[1]},h[1]=f,h=h.next=e):(Ue(o,p,g,g-f),o[g]=o[p],d=!0,f=p));return t}(function(t){var e=-1,n=[],r=[],i=[];function o(t){t&&De.call(s,t.type)&&s[t.type](t)}var s={GeometryCollection:function(t){t.geometries.forEach(o)},LineString:function(t){t.arcs=a(t.arcs)},MultiLineString:function(t){t.arcs=t.arcs.map(a)},Polygon:function(t){t.arcs=t.arcs.map(u)},MultiPolygon:function(t){t.arcs=t.arcs.map(l)}};function a(t){for(var r=0,o=t.length;r<o;++r)i[++e]=t[r];var s={0:e-o+1,1:e};return n.push(s),s}function u(t){for(var n=0,o=t.length;n<o;++n)i[++e]=t[n];var s={0:e-o+1,1:e};return r.push(s),s}function l(t){return t.map(u)}for(var c in t)o(t[c]);return{type:"Topology",coordinates:i,lines:n,rings:r,objects:t}}(t))),o=i.coordinates,s=Fe(1.4*i.arcs.length,Ze,Ke);function a(t){t&&De.call(u,t.type)&&u[t.type](t)}t=i.objects,i.bbox=n,i.arcs=i.arcs.map((function(t,e){return s.set(t,e),o.slice(t[0],t[1]+1)})),delete i.coordinates,o=null;var u={GeometryCollection:function(t){t.geometries.forEach(a)},LineString:function(t){t.arcs=l(t.arcs)},MultiLineString:function(t){t.arcs=t.arcs.map(l)},Polygon:function(t){t.arcs=t.arcs.map(l)},MultiPolygon:function(t){t.arcs=t.arcs.map(c)}};function l(t){var e=[];do{var n=s.get(t);e.push(t[0]<t[1]?n:~n)}while(t=t.next);return e}function c(t){return t.map(l)}for(var h in t)a(t[h]);return r&&(i.transform=r,i.arcs=function(t){for(var e=-1,n=t.length;++e<n;){for(var r,i,o=t[e],s=0,a=1,u=o.length,l=o[0],c=l[0],h=l[1];++s<u;)r=(l=o[s])[0],i=l[1],r===c&&i===h||(o[a++]=[r-c,i-h],c=r,h=i);1===a&&(o[a++]=[0,0]),o.length=a}return t}(i.arcs)),i}function Ze(t){var e,n=t[0],r=t[1];return r<n&&(e=n,n=r,r=e),n+31*r}function Ke(t,e){var n,r=t[0],i=t[1],o=e[0],s=e[1];return i<r&&(n=r,r=i,i=n),s<o&&(n=o,o=s,s=n),r===o&&i===s}function Qe(t,e){if(void 0===e&&(e={}),"FeatureCollection"!==it(t))throw new Error("geojson must be a FeatureCollection");if(!t.features.length)throw new Error("geojson is empty");!1!==e.mutate&&void 0!==e.mutate||(t=Ie(t));var n=[];z(t,(function(t){n.push(t.geometry)}));var r=Je({geoms:v(n).geometry});return function(t){return Re(t,Ae.apply(this,arguments))}(r,r.objects.geoms.geometries)}function $e(t,e){if(void 0===e&&(e={}),!P(e=e||{}))throw new Error("options is invalid");var n=e.mutate;if("FeatureCollection"!==it(t))throw new Error("geojson must be a FeatureCollection");if(!t.features.length)throw new Error("geojson is empty");!1!==n&&void 0!==n||(t=Ie(t));var r=function(t){var e={};z(t,(function(t){e[t.geometry.type]=!0}));var n=Object.keys(e);if(1===n.length)return n[0];return null}(t);if(!r)throw new Error("geojson must be homogenous");var i=t;switch(r){case"LineString":return Me(i,e);case"Polygon":return Qe(i,e);default:throw new Error(r+" is not supported")}}function tn(t,e){void 0===e&&(e={});var n="object"==typeof e?e.mutate:e;if(!t)throw new Error("geojson is required");var r=it(t),i=[];switch(r){case"LineString":i=en(t);break;case"MultiLineString":case"Polygon":Q(t).forEach((function(t){i.push(en(t))}));break;case"MultiPolygon":Q(t).forEach((function(t){var e=[];t.forEach((function(t){e.push(en(t))})),i.push(e)}));break;case"Point":return t;case"MultiPoint":var s={};Q(t).forEach((function(t){var e=t.join("-");Object.prototype.hasOwnProperty.call(s,e)||(i.push(t),s[e]=!0)}));break;default:throw new Error(r+" geometry not supported")}return t.coordinates?!0===n?(t.coordinates=i,t):{type:r,coordinates:i}:!0===n?(t.geometry.coordinates=i,t):o({type:r,coordinates:i},t.properties,{bbox:t.bbox,id:t.id})}function en(t){var e=Q(t);if(2===e.length&&!nn(e[0],e[1]))return e;var n=[],r=e.length-1,i=n.length;n.push(e[0]);for(var o=1;o<r;o++){var s=n[n.length-1];e[o][0]===s[0]&&e[o][1]===s[1]||(n.push(e[o]),(i=n.length)>2&&rn(n[i-3],n[i-1],n[i-2])&&n.splice(n.length-2,1))}if(n.push(e[e.length-1]),i=n.length,nn(e[0],e[e.length-1])&&i<4)throw new Error("invalid polygon");return rn(n[i-3],n[i-1],n[i-2])&&n.splice(n.length-2,1),n}function nn(t,e){return t[0]===e[0]&&t[1]===e[1]}function rn(t,e,n){var r=n[0],i=n[1],o=t[0],s=t[1],a=e[0],u=e[1],l=a-o,c=u-s;return 0===(r-o)*c-(i-s)*l&&(Math.abs(l)>=Math.abs(c)?l>0?o<=r&&r<=a:a<=r&&r<=o:c>0?s<=i&&i<=u:u<=i&&i<=s)}function on(t,e,n){var r=e.x,i=e.y,o=n.x-r,s=n.y-i;if(0!==o||0!==s){var a=((t.x-r)*o+(t.y-i)*s)/(o*o+s*s);a>1?(r=n.x,i=n.y):a>0&&(r+=o*a,i+=s*a)}return(o=t.x-r)*o+(s=t.y-i)*s}function sn(t,e,n,r,i){for(var o,s=r,a=e+1;a<n;a++){var u=on(t[a],t[e],t[n]);u>s&&(o=a,s=u)}s>r&&(o-e>1&&sn(t,e,o,r,i),i.push(t[o]),n-o>1&&sn(t,o,n,r,i))}function an(t,e){var n=t.length-1,r=[t[0]];return sn(t,0,n,e,r),r.push(t[n]),r}function un(t,e,n){if(t.length<=2)return t;var r=void 0!==e?e*e:1;return t=an(t=n?t:function(t,e){for(var n,r,i,o,s,a=t[0],u=[a],l=1,c=t.length;l<c;l++)n=t[l],i=a,o=void 0,s=void 0,o=(r=n).x-i.x,s=r.y-i.y,o*o+s*s>e&&(u.push(n),a=n);return a!==n&&u.push(n),u}(t,r),r)}function ln(t,e,n){return un(t.map((function(t){return{x:t[0],y:t[1],z:t[2]}})),e,n).map((function(t){return t.z?[t.x,t.y,t.z]:[t.x,t.y]}))}function cn(t,e,n){return t.map((function(t){var r=t.map((function(t){return{x:t[0],y:t[1]}}));if(r.length<4)throw new Error("invalid polygon");for(var i=un(r,e,n).map((function(t){return[t.x,t.y]}));!hn(i);)i=un(r,e-=.01*e,n).map((function(t){return[t.x,t.y]}));return i[i.length-1][0]===i[0][0]&&i[i.length-1][1]===i[0][1]||i.push(i[0]),i}))}function hn(t){return!(t.length<3)&&!(3===t.length&&t[2][0]===t[0][0]&&t[2][1]===t[0][1])}var pn=function(){function t(t){this.points=t.points||[],this.duration=t.duration||1e4,this.sharpness=t.sharpness||.85,this.centers=[],this.controls=[],this.stepLength=t.stepLength||60,this.length=this.points.length,this.delay=0;for(var e=0;e<this.length;e++)this.points[e].z=this.points[e].z||0;for(e=0;e<this.length-1;e++){var n=this.points[e],r=this.points[e+1];this.centers.push({x:(n.x+r.x)/2,y:(n.y+r.y)/2,z:(n.z+r.z)/2})}this.controls.push([this.points[0],this.points[0]]);for(e=0;e<this.centers.length-1;e++){var i=this.points[e+1].x-(this.centers[e].x+this.centers[e+1].x)/2,o=this.points[e+1].y-(this.centers[e].y+this.centers[e+1].y)/2,s=this.points[e+1].z-(this.centers[e].y+this.centers[e+1].z)/2;this.controls.push([{x:(1-this.sharpness)*this.points[e+1].x+this.sharpness*(this.centers[e].x+i),y:(1-this.sharpness)*this.points[e+1].y+this.sharpness*(this.centers[e].y+o),z:(1-this.sharpness)*this.points[e+1].z+this.sharpness*(this.centers[e].z+s)},{x:(1-this.sharpness)*this.points[e+1].x+this.sharpness*(this.centers[e+1].x+i),y:(1-this.sharpness)*this.points[e+1].y+this.sharpness*(this.centers[e+1].y+o),z:(1-this.sharpness)*this.points[e+1].z+this.sharpness*(this.centers[e+1].z+s)}])}return this.controls.push([this.points[this.length-1],this.points[this.length-1]]),this.steps=this.cacheSteps(this.stepLength),this}return t.prototype.cacheSteps=function(t){var e=[],n=this.pos(0);e.push(0);for(var r=0;r<this.duration;r+=10){var i=this.pos(r);Math.sqrt((i.x-n.x)*(i.x-n.x)+(i.y-n.y)*(i.y-n.y)+(i.z-n.z)*(i.z-n.z))>t&&(e.push(r),n=i)}return e},t.prototype.vector=function(t){var e=this.pos(t+10),n=this.pos(t-10);return{angle:180*Math.atan2(e.y-n.y,e.x-n.x)/3.14,speed:Math.sqrt((n.x-e.x)*(n.x-e.x)+(n.y-e.y)*(n.y-e.y)+(n.z-e.z)*(n.z-e.z))}},t.prototype.pos=function(t){var e=t-this.delay;e<0&&(e=0),e>this.duration&&(e=this.duration-1);var n=e/this.duration;if(n>=1)return this.points[this.length-1];var r=Math.floor((this.points.length-1)*n);return function(t,e,n,r,i){var o=function(t){var e=t*t;return[e*t,3*e*(1-t),3*t*(1-t)*(1-t),(1-t)*(1-t)*(1-t)]}(t);return{x:i.x*o[0]+r.x*o[1]+n.x*o[2]+e.x*o[3],y:i.y*o[0]+r.y*o[1]+n.y*o[2]+e.y*o[3],z:i.z*o[0]+r.z*o[1]+n.z*o[2]+e.z*o[3]}}((this.length-1)*n-r,this.points[r],this.controls[r][1],this.controls[r+1][0],this.points[r+1])},t}();function fn(t,e){void 0===e&&(e={});for(var n=e.resolution||1e4,r=e.sharpness||.85,i=[],o=rt(t).coordinates.map((function(t){return{x:t[0],y:t[1]}})),s=new pn({duration:n,points:o,sharpness:r}),a=function(t){var e=s.pos(t);Math.floor(t/100)%2==0&&i.push([e.x,e.y])},u=0;u<s.duration;u+=10)a(u);return a(s.duration),h(i,e.properties)}function gn(t,e){void 0===e&&(e={});var n=Number(t[0]),r=Number(t[1]),i=Number(t[2]),o=Number(t[3]);if(6===t.length)throw new Error("@turf/bbox-polygon does not support BBox with 6 positions");var s=[n,r];return l([[s,[i,r],[i,o],[n,o],s]],e.properties,{bbox:t,id:e.id})}function dn(t){return gn(Z(t))}function yn(t){var e=t[0],n=t[1],r=t[2],i=t[3];if(me(t.slice(0,2),[r,n])>=me(t.slice(0,2),[e,i])){var o=(n+i)/2;return[e,o-(r-e)/2,r,o+(r-e)/2]}var s=(e+r)/2;return[s-(i-n)/2,n,s+(i-n)/2,i]}function vn(t,e,n,r){void 0===r&&(r={});var i=K(t),o=I(i[0]),s=I(i[1]),u=I(n),l=x(e,r.units),c=Math.asin(Math.sin(s)*Math.cos(l)+Math.cos(s)*Math.sin(l)*Math.cos(u));return a([w(o+Math.atan2(Math.sin(u)*Math.sin(l)*Math.cos(s),Math.cos(l)-Math.sin(s)*Math.sin(c))),w(c)],r.properties)}function _n(t,e,n){void 0===n&&(n={});for(var r=n.steps||64,i=n.properties?n.properties:!Array.isArray(t)&&"Feature"===t.type&&t.properties?t.properties:{},o=[],s=0;s<r;s++)o.push(vn(t,e,-360*s/r,n).geometry.coordinates);return o.push(o[0]),l([o],i)}function mn(t,e,n){if(void 0===n&&(n={}),!0===n.final)return function(t,e){var n=mn(e,t);return n=(n+180)%360}(t,e);var r=K(t),i=K(e),o=I(r[0]),s=I(i[0]),a=I(r[1]),u=I(i[1]),l=Math.sin(s-o)*Math.cos(u),c=Math.cos(a)*Math.sin(u)-Math.sin(a)*Math.cos(u)*Math.cos(s-o);return w(Math.atan2(l,c))}function xn(t,e){void 0===e&&(e={});var n=Z(t);return a([(n[0]+n[2])/2,(n[1]+n[3])/2],e.properties,e)}function En(t,e){void 0===e&&(e={});var n=0,r=0,i=0;return R(t,(function(t){n+=t[0],r+=t[1],i++}),!0),a([n/i,r/i],e.properties)}function bn(t){var e=[];return"FeatureCollection"===t.type?F(t,(function(t){R(t,(function(n){e.push(a(n,t.properties))}))})):R(t,(function(n){e.push(a(n,t.properties))})),f(e)}var wn=Nn,In=Nn;function Nn(t,e,n){n=n||2;var r,i,o,s,a,u,l,c=e&&e.length,h=c?e[0]*n:t.length,p=Sn(t,0,h,n,!0),f=[];if(!p)return f;if(c&&(p=function(t,e,n,r){var i,o,s,a=[];for(i=0,o=e.length;i<o;i++)(s=Sn(t,e[i]*r,i<o-1?e[i+1]*r:t.length,r,!1))===s.next&&(s.steiner=!0),a.push(Fn(s));for(a.sort(Tn),i=0;i<a.length;i++)An(a[i],n),n=Cn(n,n.next);return n}(t,e,p,n)),t.length>80*n){r=o=t[0],i=s=t[1];for(var g=n;g<h;g+=n)(a=t[g])<r&&(r=a),(u=t[g+1])<i&&(i=u),a>o&&(o=a),u>s&&(s=u);l=0!==(l=Math.max(o-r,s-i))?1/l:0}return Pn(p,f,n,r,i,l),f}function Sn(t,e,n,r,i){var o,s;if(i===Hn(t,e,n,r)>0)for(o=e;o<n;o+=r)s=Vn(o,t[o],t[o+1],s);else for(o=n-r;o>=e;o-=r)s=Vn(o,t[o],t[o+1],s);return s&&Bn(s,s.next)&&(Xn(s),s=s.next),s}function Cn(t,e){if(!t)return t;e||(e=t);var n,r=t;do{if(n=!1,r.steiner||!Bn(r,r.next)&&0!==qn(r.prev,r,r.next))r=r.next;else{if(Xn(r),(r=e=r.prev)===r.next)break;n=!0}}while(n||r!==e);return e}function Pn(t,e,n,r,i,o,s){if(t){!s&&o&&function(t,e,n,r){var i=t;do{null===i.z&&(i.z=Dn(i.x,i.y,e,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,function(t){var e,n,r,i,o,s,a,u,l=1;do{for(n=t,t=null,o=null,s=0;n;){for(s++,r=n,a=0,e=0;e<l&&(a++,r=r.nextZ);e++);for(u=l;a>0||u>0&&r;)0!==a&&(0===u||!r||n.z<=r.z)?(i=n,n=n.nextZ,a--):(i=r,r=r.nextZ,u--),o?o.nextZ=i:t=i,i.prevZ=o,o=i;n=r}o.nextZ=null,l*=2}while(s>1)}(i)}(t,r,i,o);for(var a,u,l=t;t.prev!==t.next;)if(a=t.prev,u=t.next,o?Ln(t,r,i,o):Mn(t))e.push(a.i/n),e.push(t.i/n),e.push(u.i/n),Xn(t),t=u.next,l=u.next;else if((t=u)===l){s?1===s?Pn(t=On(t,e,n),e,n,r,i,o,2):2===s&&Rn(t,e,n,r,i,o):Pn(Cn(t),e,n,r,i,o,1);break}}}function Mn(t){var e=t.prev,n=t,r=t.next;if(qn(e,n,r)>=0)return!1;for(var i=t.next.next;i!==t.prev;){if(kn(e.x,e.y,n.x,n.y,r.x,r.y,i.x,i.y)&&qn(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Ln(t,e,n,r){var i=t.prev,o=t,s=t.next;if(qn(i,o,s)>=0)return!1;for(var a=i.x<o.x?i.x<s.x?i.x:s.x:o.x<s.x?o.x:s.x,u=i.y<o.y?i.y<s.y?i.y:s.y:o.y<s.y?o.y:s.y,l=i.x>o.x?i.x>s.x?i.x:s.x:o.x>s.x?o.x:s.x,c=i.y>o.y?i.y>s.y?i.y:s.y:o.y>s.y?o.y:s.y,h=Dn(a,u,e,n,r),p=Dn(l,c,e,n,r),f=t.prevZ,g=t.nextZ;f&&f.z>=h&&g&&g.z<=p;){if(f!==t.prev&&f!==t.next&&kn(i.x,i.y,o.x,o.y,s.x,s.y,f.x,f.y)&&qn(f.prev,f,f.next)>=0)return!1;if(f=f.prevZ,g!==t.prev&&g!==t.next&&kn(i.x,i.y,o.x,o.y,s.x,s.y,g.x,g.y)&&qn(g.prev,g,g.next)>=0)return!1;g=g.nextZ}for(;f&&f.z>=h;){if(f!==t.prev&&f!==t.next&&kn(i.x,i.y,o.x,o.y,s.x,s.y,f.x,f.y)&&qn(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;g&&g.z<=p;){if(g!==t.prev&&g!==t.next&&kn(i.x,i.y,o.x,o.y,s.x,s.y,g.x,g.y)&&qn(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function On(t,e,n){var r=t;do{var i=r.prev,o=r.next.next;!Bn(i,o)&&zn(i,r,r.next,o)&&jn(i,o)&&jn(o,i)&&(e.push(i.i/n),e.push(r.i/n),e.push(o.i/n),Xn(r),Xn(r.next),r=t=o),r=r.next}while(r!==t);return r}function Rn(t,e,n,r,i,o){var s=t;do{for(var a=s.next.next;a!==s.prev;){if(s.i!==a.i&&Gn(s,a)){var u=Un(s,a);return s=Cn(s,s.next),u=Cn(u,u.next),Pn(s,e,n,r,i,o),void Pn(u,e,n,r,i,o)}a=a.next}s=s.next}while(s!==t)}function Tn(t,e){return t.x-e.x}function An(t,e){if(e=function(t,e){var n,r=e,i=t.x,o=t.y,s=-1/0;do{if(o<=r.y&&o>=r.next.y&&r.next.y!==r.y){var a=r.x+(o-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(a<=i&&a>s){if(s=a,a===i){if(o===r.y)return r;if(o===r.next.y)return r.next}n=r.x<r.next.x?r:r.next}}r=r.next}while(r!==e);if(!n)return null;if(i===s)return n.prev;var u,l=n,c=n.x,h=n.y,p=1/0;r=n.next;for(;r!==l;)i>=r.x&&r.x>=c&&i!==r.x&&kn(o<h?i:s,o,c,h,o<h?s:i,o,r.x,r.y)&&((u=Math.abs(o-r.y)/(i-r.x))<p||u===p&&r.x>n.x)&&jn(r,t)&&(n=r,p=u),r=r.next;return n}(t,e)){var n=Un(e,t);Cn(n,n.next)}}function Dn(t,e,n,r,i){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*i)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-r)*i)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Fn(t){var e=t,n=t;do{e.x<n.x&&(n=e),e=e.next}while(e!==t);return n}function kn(t,e,n,r,i,o,s,a){return(i-s)*(e-a)-(t-s)*(o-a)>=0&&(t-s)*(r-a)-(n-s)*(e-a)>=0&&(n-s)*(o-a)-(i-s)*(r-a)>=0}function Gn(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&zn(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}(t,e)&&jn(t,e)&&jn(e,t)&&function(t,e){var n=t,r=!1,i=(t.x+e.x)/2,o=(t.y+e.y)/2;do{n.y>o!=n.next.y>o&&n.next.y!==n.y&&i<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==t);return r}(t,e)}function qn(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Bn(t,e){return t.x===e.x&&t.y===e.y}function zn(t,e,n,r){return!!(Bn(t,e)&&Bn(n,r)||Bn(t,r)&&Bn(n,e))||qn(t,e,n)>0!=qn(t,e,r)>0&&qn(n,r,t)>0!=qn(n,r,e)>0}function jn(t,e){return qn(t.prev,t,t.next)<0?qn(t,e,t.next)>=0&&qn(t,t.prev,e)>=0:qn(t,e,t.prev)<0||qn(t,t.next,e)<0}function Un(t,e){var n=new Yn(t.i,t.x,t.y),r=new Yn(e.i,e.x,e.y),i=t.next,o=e.prev;return t.next=e,e.prev=t,n.next=i,i.prev=n,r.next=n,n.prev=r,o.next=r,r.prev=o,r}function Vn(t,e,n,r){var i=new Yn(t,e,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Xn(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Yn(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Hn(t,e,n,r){for(var i=0,o=e,s=n-r;o<n;o+=r)i+=(t[s]-t[o])*(t[o+1]+t[s+1]),s=o;return i}function Wn(t){var e=function(t){for(var e=t[0][0].length,n={vertices:[],holes:[],dimensions:e},r=0,i=0;i<t.length;i++){for(var o=0;o<t[i].length;o++)for(var s=0;s<e;s++)n.vertices.push(t[i][o][s]);i>0&&(r+=t[i-1].length,n.holes.push(r))}return n}(t),n=wn(e.vertices,e.holes,2),r=[],i=[];n.forEach((function(t,r){var o=n[r];i.push([e.vertices[2*o],e.vertices[2*o+1]])}));for(var o=0;o<i.length;o+=3){var s=i.slice(o,o+3);s.push(i[o]),r.push(l([s]))}return r}function Jn(t,e){if(!t)throw new Error("targetPoint is required");if(!e)throw new Error("points is required");var n,r=1/0,i=0;return F(e,(function(e,n){var o=me(t,e);o<r&&(i=n,r=o)})),(n=Ie(e.features[i])).properties.featureIndex=i,n.properties.distanceToPoint=r,n}function Zn(t){if(!t)throw new Error("geojson is required");var e=[];return z(t,(function(t){!function(t,e){var n=[],r=t.geometry;if(null!==r){switch(r.type){case"Polygon":n=Q(r);break;case"LineString":n=[Q(r)]}n.forEach((function(n){(function(t,e){var n=[];return t.reduce((function(t,r){var i=h([t,r],e);return i.bbox=function(t,e){var n=t[0],r=t[1],i=e[0],o=e[1];return[n<i?n:i,r<o?r:o,n>i?n:i,r>o?r:o]}(t,r),n.push(i),r})),n})(n,t.properties).forEach((function(t){t.id=e.length,e.push(t)}))}))}}(t,e)})),f(e)}Nn.deviation=function(t,e,n,r){var i=e&&e.length,o=i?e[0]*n:t.length,s=Math.abs(Hn(t,0,o,n));if(i)for(var a=0,u=e.length;a<u;a++){var l=e[a]*n,c=a<u-1?e[a+1]*n:t.length;s-=Math.abs(Hn(t,l,c,n))}var h=0;for(a=0;a<r.length;a+=3){var p=r[a]*n,f=r[a+1]*n,g=r[a+2]*n;h+=Math.abs((t[p]-t[g])*(t[f+1]-t[p+1])-(t[p]-t[f])*(t[g+1]-t[p+1]))}return 0===s&&0===h?0:Math.abs((h-s)/s)},Nn.flatten=function(t){for(var e=t[0][0].length,n={vertices:[],holes:[],dimensions:e},r=0,i=0;i<t.length;i++){for(var o=0;o<t[i].length;o++)for(var s=0;s<e;s++)n.vertices.push(t[i][o][s]);i>0&&(r+=t[i-1].length,n.holes.push(r))}return n},wn.default=In;var Kn=Bt((function(t,e){function n(t,e,n){void 0===n&&(n={});var r={type:"Feature"};return(0===n.id||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties=e||{},r.geometry=t,r}function r(t,e,r){if(void 0===r&&(r={}),!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!f(t[0])||!f(t[1]))throw new Error("coordinates must contain numbers");return n({type:"Point",coordinates:t},e,r)}function i(t,e,r){void 0===r&&(r={});for(var i=0,o=t;i<o.length;i++){var s=o[i];if(s.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var a=0;a<s[s.length-1].length;a++)if(s[s.length-1][a]!==s[0][a])throw new Error("First and last Position are not equivalent.")}return n({type:"Polygon",coordinates:t},e,r)}function o(t,e,r){if(void 0===r&&(r={}),t.length<2)throw new Error("coordinates must be an array of two or more positions");return n({type:"LineString",coordinates:t},e,r)}function s(t,e){void 0===e&&(e={});var n={type:"FeatureCollection"};return e.id&&(n.id=e.id),e.bbox&&(n.bbox=e.bbox),n.features=t,n}function a(t,e,r){return void 0===r&&(r={}),n({type:"MultiLineString",coordinates:t},e,r)}function u(t,e,r){return void 0===r&&(r={}),n({type:"MultiPoint",coordinates:t},e,r)}function l(t,e,r){return void 0===r&&(r={}),n({type:"MultiPolygon",coordinates:t},e,r)}function c(t,n){void 0===n&&(n="kilometers");var r=e.factors[n];if(!r)throw new Error(n+" units is invalid");return t*r}function h(t,n){void 0===n&&(n="kilometers");var r=e.factors[n];if(!r)throw new Error(n+" units is invalid");return t/r}function p(t){return 180*(t%(2*Math.PI))/Math.PI}function f(t){return!isNaN(t)&&null!==t&&!Array.isArray(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.earthRadius=6371008.8,e.factors={centimeters:100*e.earthRadius,centimetres:100*e.earthRadius,degrees:e.earthRadius/111325,feet:3.28084*e.earthRadius,inches:39.37*e.earthRadius,kilometers:e.earthRadius/1e3,kilometres:e.earthRadius/1e3,meters:e.earthRadius,metres:e.earthRadius,miles:e.earthRadius/1609.344,millimeters:1e3*e.earthRadius,millimetres:1e3*e.earthRadius,nauticalmiles:e.earthRadius/1852,radians:1,yards:1.0936*e.earthRadius},e.unitsFactors={centimeters:100,centimetres:100,degrees:1/111325,feet:3.28084,inches:39.37,kilometers:.001,kilometres:.001,meters:1,metres:1,miles:1/1609.344,millimeters:1e3,millimetres:1e3,nauticalmiles:1/1852,radians:1/e.earthRadius,yards:1.0936133},e.areaFactors={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,hectares:1e-4,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,millimeters:1e6,millimetres:1e6,yards:1.195990046},e.feature=n,e.geometry=function(t,e,n){switch(t){case"Point":return r(e).geometry;case"LineString":return o(e).geometry;case"Polygon":return i(e).geometry;case"MultiPoint":return u(e).geometry;case"MultiLineString":return a(e).geometry;case"MultiPolygon":return l(e).geometry;default:throw new Error(t+" is invalid")}},e.point=r,e.points=function(t,e,n){return void 0===n&&(n={}),s(t.map((function(t){return r(t,e)})),n)},e.polygon=i,e.polygons=function(t,e,n){return void 0===n&&(n={}),s(t.map((function(t){return i(t,e)})),n)},e.lineString=o,e.lineStrings=function(t,e,n){return void 0===n&&(n={}),s(t.map((function(t){return o(t,e)})),n)},e.featureCollection=s,e.multiLineString=a,e.multiPoint=u,e.multiPolygon=l,e.geometryCollection=function(t,e,r){return void 0===r&&(r={}),n({type:"GeometryCollection",geometries:t},e,r)},e.round=function(t,e){if(void 0===e&&(e=0),e&&!(e>=0))throw new Error("precision must be a positive number");var n=Math.pow(10,e||0);return Math.round(t*n)/n},e.radiansToLength=c,e.lengthToRadians=h,e.lengthToDegrees=function(t,e){return p(h(t,e))},e.bearingToAzimuth=function(t){var e=t%360;return e<0&&(e+=360),e},e.radiansToDegrees=p,e.degreesToRadians=function(t){return t%360*Math.PI/180},e.convertLength=function(t,e,n){if(void 0===e&&(e="kilometers"),void 0===n&&(n="kilometers"),!(t>=0))throw new Error("length must be a positive number");return c(h(t,e),n)},e.convertArea=function(t,n,r){if(void 0===n&&(n="meters"),void 0===r&&(r="kilometers"),!(t>=0))throw new Error("area must be a positive number");var i=e.areaFactors[n];if(!i)throw new Error("invalid original units");var o=e.areaFactors[r];if(!o)throw new Error("invalid final units");return t/i*o},e.isNumber=f,e.isObject=function(t){return!!t&&t.constructor===Object},e.validateBBox=function(t){if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be an Array");if(4!==t.length&&6!==t.length)throw new Error("bbox must be an Array of 4 or 6 numbers");t.forEach((function(t){if(!f(t))throw new Error("bbox must only contain numbers")}))},e.validateId=function(t){if(!t)throw new Error("id is required");if(-1===["string","number"].indexOf(typeof t))throw new Error("id must be a number or a string")}}));function Qn(t,e,n){if(null!==t)for(var r,i,o,s,a,u,l,c,h=0,p=0,f=t.type,g="FeatureCollection"===f,d="Feature"===f,y=g?t.features.length:1,v=0;v<y;v++){a=(c=!!(l=g?t.features[v].geometry:d?t.geometry:t)&&"GeometryCollection"===l.type)?l.geometries.length:1;for(var _=0;_<a;_++){var m=0,x=0;if(null!==(s=c?l.geometries[_]:l)){u=s.coordinates;var E=s.type;switch(h=!n||"Polygon"!==E&&"MultiPolygon"!==E?0:1,E){case null:break;case"Point":if(!1===e(u,p,v,m,x))return!1;p++,m++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(!1===e(u[r],p,v,m,x))return!1;p++,"MultiPoint"===E&&m++}"LineString"===E&&m++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(i=0;i<u[r].length-h;i++){if(!1===e(u[r][i],p,v,m,x))return!1;p++}"MultiLineString"===E&&m++,"Polygon"===E&&x++}"Polygon"===E&&m++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(x=0,i=0;i<u[r].length;i++){for(o=0;o<u[r][i].length-h;o++){if(!1===e(u[r][i][o],p,v,m,x))return!1;p++}x++}m++}break;case"GeometryCollection":for(r=0;r<s.geometries.length;r++)if(!1===Qn(s.geometries[r],e,n))return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function $n(t,e){var n;switch(t.type){case"FeatureCollection":for(n=0;n<t.features.length&&!1!==e(t.features[n].properties,n);n++);break;case"Feature":e(t.properties,0)}}function tr(t,e){if("Feature"===t.type)e(t,0);else if("FeatureCollection"===t.type)for(var n=0;n<t.features.length&&!1!==e(t.features[n],n);n++);}function er(t,e){var n,r,i,o,s,a,u,l,c,h,p=0,f="FeatureCollection"===t.type,g="Feature"===t.type,d=f?t.features.length:1;for(n=0;n<d;n++){for(a=f?t.features[n].geometry:g?t.geometry:t,l=f?t.features[n].properties:g?t.properties:{},c=f?t.features[n].bbox:g?t.bbox:void 0,h=f?t.features[n].id:g?t.id:void 0,s=(u=!!a&&"GeometryCollection"===a.type)?a.geometries.length:1,i=0;i<s;i++)if(null!==(o=u?a.geometries[i]:a))switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":if(!1===e(o,p,l,c,h))return!1;break;case"GeometryCollection":for(r=0;r<o.geometries.length;r++)if(!1===e(o.geometries[r],p,l,c,h))return!1;break;default:throw new Error("Unknown Geometry Type")}else if(!1===e(null,p,l,c,h))return!1;p++}}function nr(t,e){er(t,(function(t,n,r,i,o){var s,a=null===t?null:t.type;switch(a){case null:case"Point":case"LineString":case"Polygon":return!1!==e(Kn.feature(t,r,{bbox:i,id:o}),n,0)&&void 0}switch(a){case"MultiPoint":s="Point";break;case"MultiLineString":s="LineString";break;case"MultiPolygon":s="Polygon"}for(var u=0;u<t.coordinates.length;u++){var l={type:s,coordinates:t.coordinates[u]};if(!1===e(Kn.feature(l,r),n,u))return!1}}))}function rr(t,e){nr(t,(function(t,n,r){var i=0;if(t.geometry){var o=t.geometry.type;if("Point"!==o&&"MultiPoint"!==o){var s,a=0,u=0,l=0;return!1!==Qn(t,(function(o,c,h,p,f){if(void 0===s||n>a||p>u||f>l)return s=o,a=n,u=p,l=f,void(i=0);var g=Kn.lineString([s,o],t.properties);if(!1===e(g,n,r,f,i))return!1;i++,s=o}))&&void 0}}}))}function ir(t,e){if(!t)throw new Error("geojson is required");nr(t,(function(t,n,r){if(null!==t.geometry){var i=t.geometry.type,o=t.geometry.coordinates;switch(i){case"LineString":if(!1===e(t,n,r,0,0))return!1;break;case"Polygon":for(var s=0;s<o.length;s++)if(!1===e(Kn.lineString(o[s],t.properties),n,r,s))return!1}}}))}var or=function(t){var e=[];return Qn(t,(function(t){e.push(t)})),e},sr=Qn,ar=function(t,e,n,r){var i=n;return Qn(t,(function(t,r,o,s,a){i=0===r&&void 0===n?t:e(i,t,r,o,s,a)}),r),i},ur=tr,lr=function(t,e,n){var r=n;return tr(t,(function(t,i){r=0===i&&void 0===n?t:e(r,t,i)})),r},cr=function(t,e){if(e=e||{},!Kn.isObject(e))throw new Error("options is invalid");var n,r=e.featureIndex||0,i=e.multiFeatureIndex||0,o=e.geometryIndex||0,s=e.coordIndex||0,a=e.properties;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),a=a||t.features[r].properties,n=t.features[r].geometry;break;case"Feature":a=a||t.properties,n=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":n=t;break;default:throw new Error("geojson is invalid")}if(null===n)return null;var u=n.coordinates;switch(n.type){case"Point":return Kn.point(u,a,e);case"MultiPoint":return i<0&&(i=u.length+i),Kn.point(u[i],a,e);case"LineString":return s<0&&(s=u.length+s),Kn.point(u[s],a,e);case"Polygon":return o<0&&(o=u.length+o),s<0&&(s=u[o].length+s),Kn.point(u[o][s],a,e);case"MultiLineString":return i<0&&(i=u.length+i),s<0&&(s=u[i].length+s),Kn.point(u[i][s],a,e);case"MultiPolygon":return i<0&&(i=u.length+i),o<0&&(o=u[i].length+o),s<0&&(s=u[i][o].length-s),Kn.point(u[i][o][s],a,e)}throw new Error("geojson is invalid")},hr=function(t,e){if(e=e||{},!Kn.isObject(e))throw new Error("options is invalid");var n,r=e.featureIndex||0,i=e.multiFeatureIndex||0,o=e.geometryIndex||0,s=e.segmentIndex||0,a=e.properties;switch(t.type){case"FeatureCollection":r<0&&(r=t.features.length+r),a=a||t.features[r].properties,n=t.features[r].geometry;break;case"Feature":a=a||t.properties,n=t.geometry;break;case"Point":case"MultiPoint":return null;case"LineString":case"Polygon":case"MultiLineString":case"MultiPolygon":n=t;break;default:throw new Error("geojson is invalid")}if(null===n)return null;var u=n.coordinates;switch(n.type){case"Point":case"MultiPoint":return null;case"LineString":return s<0&&(s=u.length+s-1),Kn.lineString([u[s],u[s+1]],a,e);case"Polygon":return o<0&&(o=u.length+o),s<0&&(s=u[o].length+s-1),Kn.lineString([u[o][s],u[o][s+1]],a,e);case"MultiLineString":return i<0&&(i=u.length+i),s<0&&(s=u[i].length+s-1),Kn.lineString([u[i][s],u[i][s+1]],a,e);case"MultiPolygon":return i<0&&(i=u.length+i),o<0&&(o=u[i].length+o),s<0&&(s=u[i][o].length-s-1),Kn.lineString([u[i][o][s],u[i][o][s+1]],a,e)}throw new Error("geojson is invalid")},pr=nr,fr=function(t,e,n){var r=n;return nr(t,(function(t,i,o){r=0===i&&0===o&&void 0===n?t:e(r,t,i,o)})),r},gr=er,dr=function(t,e,n){var r=n;return er(t,(function(t,i,o,s,a){r=0===i&&void 0===n?t:e(r,t,i,o,s,a)})),r},yr=ir,vr=function(t,e,n){var r=n;return ir(t,(function(t,i,o,s){r=0===i&&void 0===n?t:e(r,t,i,o,s)})),r},_r=$n,mr=function(t,e,n){var r=n;return $n(t,(function(t,i){r=0===i&&void 0===n?t:e(r,t,i)})),r},xr=rr,Er=function(t,e,n){var r=n,i=!1;return rr(t,(function(t,o,s,a,u){r=!1===i&&void 0===n?t:e(r,t,o,s,a,u),i=!0})),r},br=Object.defineProperty({coordAll:or,coordEach:sr,coordReduce:ar,featureEach:ur,featureReduce:lr,findPoint:cr,findSegment:hr,flattenEach:pr,flattenReduce:fr,geomEach:gr,geomReduce:dr,lineEach:yr,lineReduce:vr,propEach:_r,propReduce:mr,segmentEach:xr,segmentReduce:Er},"__esModule",{value:!0});function wr(t){var e=[1/0,1/0,-1/0,-1/0];return br.coordEach(t,(function(t){e[0]>t[0]&&(e[0]=t[0]),e[1]>t[1]&&(e[1]=t[1]),e[2]<t[0]&&(e[2]=t[0]),e[3]<t[1]&&(e[3]=t[1])})),e}wr.default=wr;var Ir=wr,Nr=Object.defineProperty({default:Ir},"__esModule",{value:!0}).default,Sr=br.featureEach,Cr=(br.coordEach,Kn.polygon,Kn.featureCollection);function Pr(t){var e=Nt(t);return e.insert=function(t){if("Feature"!==t.type)throw new Error("invalid feature");return t.bbox=t.bbox?t.bbox:Nr(t),Nt.prototype.insert.call(this,t)},e.load=function(t){var e=[];return Array.isArray(t)?t.forEach((function(t){if("Feature"!==t.type)throw new Error("invalid features");t.bbox=t.bbox?t.bbox:Nr(t),e.push(t)})):Sr(t,(function(t){if("Feature"!==t.type)throw new Error("invalid features");t.bbox=t.bbox?t.bbox:Nr(t),e.push(t)})),Nt.prototype.load.call(this,e)},e.remove=function(t,e){if("Feature"!==t.type)throw new Error("invalid feature");return t.bbox=t.bbox?t.bbox:Nr(t),Nt.prototype.remove.call(this,t,e)},e.clear=function(){return Nt.prototype.clear.call(this)},e.search=function(t){var e=Nt.prototype.search.call(this,this.toBBox(t));return Cr(e)},e.collides=function(t){return Nt.prototype.collides.call(this,this.toBBox(t))},e.all=function(){var t=Nt.prototype.all.call(this);return Cr(t)},e.toJSON=function(){return Nt.prototype.toJSON.call(this)},e.fromJSON=function(t){return Nt.prototype.fromJSON.call(this,t)},e.toBBox=function(t){var e;if(t.bbox)e=t.bbox;else if(Array.isArray(t)&&4===t.length)e=t;else if(Array.isArray(t)&&6===t.length)e=[t[0],t[1],t[3],t[4]];else if("Feature"===t.type)e=Nr(t);else{if("FeatureCollection"!==t.type)throw new Error("invalid geojson");e=Nr(t)}return{minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}},e}var Mr=Pr,Lr=Pr;function Or(t,e){var n={},r=[];if("LineString"===t.type&&(t=o(t)),"LineString"===e.type&&(e=o(e)),"Feature"===t.type&&"Feature"===e.type&&null!==t.geometry&&null!==e.geometry&&"LineString"===t.geometry.type&&"LineString"===e.geometry.type&&2===t.geometry.coordinates.length&&2===e.geometry.coordinates.length){var i=Rr(t,e);return i&&r.push(i),f(r)}var s=Mr();return s.load(Zn(e)),F(Zn(t),(function(t){F(s.search(t),(function(e){var i=Rr(t,e);if(i){var o=Q(i).join(",");n[o]||(n[o]=!0,r.push(i))}}))})),f(r)}function Rr(t,e){var n=Q(t),r=Q(e);if(2!==n.length)throw new Error("<intersects> line1 must only contain 2 coordinates");if(2!==r.length)throw new Error("<intersects> line2 must only contain 2 coordinates");var i=n[0][0],o=n[0][1],s=n[1][0],u=n[1][1],l=r[0][0],c=r[0][1],h=r[1][0],p=r[1][1],f=(p-c)*(s-i)-(h-l)*(u-o),g=(h-l)*(o-c)-(p-c)*(i-l),d=(s-i)*(o-c)-(u-o)*(i-l);if(0===f)return null;var y=g/f,v=d/f;return y>=0&&y<=1&&v>=0&&v<=1?a([i+y*(s-i),o+y*(u-o)]):null}function Tr(t,e,n){void 0===n&&(n={});var r=a([1/0,1/0],{dist:1/0}),i=0;return z(t,(function(t){for(var o=Q(t),s=0;s<o.length-1;s++){var u=a(o[s]);u.properties.dist=me(e,u,n);var l=a(o[s+1]);l.properties.dist=me(e,l,n);var c=me(u,l,n),p=Math.max(u.properties.dist,l.properties.dist),f=mn(u,l),g=vn(e,p,f+90,n),d=vn(e,p,f-90,n),y=Or(h([g.geometry.coordinates,d.geometry.coordinates]),h([u.geometry.coordinates,l.geometry.coordinates])),v=null;y.features.length>0&&((v=y.features[0]).properties.dist=me(e,v,n),v.properties.location=i+me(u,v,n)),u.properties.dist<r.properties.dist&&((r=u).properties.index=s,r.properties.location=i),l.properties.dist<r.properties.dist&&((r=l).properties.index=s+1,r.properties.location=i+c),v&&v.properties.dist<r.properties.dist&&((r=v).properties.index=s),i+=c}})),r}function Ar(t,n,r){void 0===r&&(r={});var i=K(t),o=K(n);return o[0]+=o[0]-i[0]>180?-360:i[0]-o[0]>180?360:0,N(function(t,n,r){var i=r=void 0===r?e:Number(r),o=t[1]*Math.PI/180,s=n[1]*Math.PI/180,a=s-o,u=Math.abs(n[0]-t[0])*Math.PI/180;u>Math.PI&&(u-=2*Math.PI);var l=Math.log(Math.tan(s/2+Math.PI/4)/Math.tan(o/2+Math.PI/4)),c=Math.abs(l)>1e-11?a/l:Math.cos(o);return Math.sqrt(a*a+c*c*u*u)*i}(i,o),"meters",r.units)}function Dr(t,e,n){if(void 0===n&&(n={}),n.method||(n.method="geodesic"),n.units||(n.units="kilometers"),!t)throw new Error("pt is required");if(Array.isArray(t)?t=a(t):"Point"===t.type?t=o(t):et(t,"Point","point"),!e)throw new Error("line is required");Array.isArray(e)?e=h(e):"LineString"===e.type?e=o(e):et(e,"LineString","line");var r=1/0,i=t.geometry.coordinates;return U(e,(function(t){var e=t.geometry.coordinates[0],o=t.geometry.coordinates[1],s=function(t,e,n,r){var i=[n[0]-e[0],n[1]-e[1]],o=Fr([t[0]-e[0],t[1]-e[1]],i);if(o<=0)return kr(t,e,{method:r.method,units:"degrees"});var s=Fr(i,i);if(s<=o)return kr(t,n,{method:r.method,units:"degrees"});var a=o/s,u=[e[0]+a*i[0],e[1]+a*i[1]];return kr(t,u,{method:r.method,units:"degrees"})}(i,e,o,n);s<r&&(r=s)})),N(r,"degrees",n.units)}function Fr(t,e){return t[0]*e[0]+t[1]*e[1]}function kr(t,e,n){return"planar"===n.method?Ar(t,e,n):me(t,e,n)}function Gr(t,e,n,r,i,o,s,a){var u,l,c,h,p={x:null,y:null,onLine1:!1,onLine2:!1};return 0===(u=(a-o)*(n-t)-(s-i)*(r-e))?null!==p.x&&null!==p.y&&p:(h=(n-t)*(l=e-o)-(r-e)*(c=t-i),l=((s-i)*l-(a-o)*c)/u,c=h/u,p.x=t+l*(n-t),p.y=e+l*(r-e),l>=0&&l<=1&&(p.onLine1=!0),c>=0&&c<=1&&(p.onLine2=!0),!(!p.onLine1||!p.onLine2)&&[p.x,p.y])}function qr(t){for(var e=function(t){if("FeatureCollection"!==t.type)return"Feature"!==t.type?f([o(t)]):f([t]);return t}(t),n=xn(e),r=!1,i=0;!r&&i<e.features.length;){var s,u=e.features[i].geometry,l=!1;if("Point"===u.type)n.geometry.coordinates[0]===u.coordinates[0]&&n.geometry.coordinates[1]===u.coordinates[1]&&(r=!0);else if("MultiPoint"===u.type){var c=!1;for(s=0;!c&&s<u.coordinates.length;)n.geometry.coordinates[0]===u.coordinates[s][0]&&n.geometry.coordinates[1]===u.coordinates[s][1]&&(r=!0,c=!0),s++}else if("LineString"===u.type)for(s=0;!l&&s<u.coordinates.length-1;)Br(n.geometry.coordinates[0],n.geometry.coordinates[1],u.coordinates[s][0],u.coordinates[s][1],u.coordinates[s+1][0],u.coordinates[s+1][1])&&(l=!0,r=!0),s++;else if("MultiLineString"===u.type)for(var h=0;h<u.coordinates.length;){l=!1,s=0;for(var p=u.coordinates[h];!l&&s<p.length-1;)Br(n.geometry.coordinates[0],n.geometry.coordinates[1],p[s][0],p[s][1],p[s+1][0],p[s+1][1])&&(l=!0,r=!0),s++;h++}else"Polygon"!==u.type&&"MultiPolygon"!==u.type||ye(n,u)&&(r=!0);i++}if(r)return n;var g=f([]);for(i=0;i<e.features.length;i++)g.features=g.features.concat(bn(e.features[i]).features);return a(Jn(n,g).geometry.coordinates)}function Br(t,e,n,r,i,o){return Math.sqrt((i-n)*(i-n)+(o-r)*(o-r))===Math.sqrt((t-n)*(t-n)+(e-r)*(e-r))+Math.sqrt((i-t)*(i-t)+(o-e)*(o-e))}Mr.default=Lr;var zr=6378137;function jr(t){return B(t,(function(t,e){return t+function(t){var e,n=0;switch(t.type){case"Polygon":return Ur(t.coordinates);case"MultiPolygon":for(e=0;e<t.coordinates.length;e++)n+=Ur(t.coordinates[e]);return n;case"Point":case"MultiPoint":case"LineString":case"MultiLineString":return 0}return 0}(e)}),0)}function Ur(t){var e=0;if(t&&t.length>0){e+=Math.abs(Vr(t[0]));for(var n=1;n<t.length;n++)e-=Math.abs(Vr(t[n]))}return e}function Vr(t){var e,n,r,i,o,s,a=0,u=t.length;if(u>2){for(s=0;s<u;s++)s===u-2?(r=u-2,i=u-1,o=0):s===u-1?(r=u-1,i=0,o=1):(r=s,i=s+1,o=s+2),e=t[r],n=t[i],a+=(Xr(t[o][0])-Xr(e[0]))*Math.sin(Xr(n[1]));a=a*zr*zr/2}return a}function Xr(t){return t*Math.PI/180}function Yr(t,e){return void 0===e&&(e={}),V(t,(function(t,n){var r=n.geometry.coordinates;return t+me(r[0],r[1],e)}),0)}function Hr(t,e,n,r){if(!P(r=r||{}))throw new Error("options is invalid");var i,o=[];if("Feature"===t.type)i=t.geometry.coordinates;else{if("LineString"!==t.type)throw new Error("input must be a LineString Feature or Geometry");i=t.coordinates}for(var s,a,u,l=i.length,c=0,p=0;p<i.length&&!(e>=c&&p===i.length-1);p++){if(c>e&&0===o.length){if(!(s=e-c))return o.push(i[p]),h(o);a=mn(i[p],i[p-1])-180,u=vn(i[p],s,a,r),o.push(u.geometry.coordinates)}if(c>=n)return(s=n-c)?(a=mn(i[p],i[p-1])-180,u=vn(i[p],s,a,r),o.push(u.geometry.coordinates),h(o)):(o.push(i[p]),h(o));if(c>=e&&o.push(i[p]),p===i.length-1)return h(o);c+=me(i[p],i[p+1],r)}if(c<e&&i.length===l)throw new Error("Start position is beyond line");var f=i[i.length-1];return h([f,f])}function Wr(t,e,n){void 0===n&&(n={});for(var r=K(t),i=Q(e),o=0;o<i.length-1;o++){var s=!1;if(n.ignoreEndVertices&&(0===o&&(s="start"),o===i.length-2&&(s="end"),0===o&&o+1===i.length-1&&(s="both")),Jr(i[o],i[o+1],r,s,void 0===n.epsilon?null:n.epsilon))return!0}return!1}function Jr(t,e,n,r,i){var o=n[0],s=n[1],a=t[0],u=t[1],l=e[0],c=e[1],h=l-a,p=c-u,f=(n[0]-a)*p-(n[1]-u)*h;if(null!==i){if(Math.abs(f)>i)return!1}else if(0!==f)return!1;return r?"start"===r?Math.abs(h)>=Math.abs(p)?h>0?a<o&&o<=l:l<=o&&o<a:p>0?u<s&&s<=c:c<=s&&s<u:"end"===r?Math.abs(h)>=Math.abs(p)?h>0?a<=o&&o<l:l<o&&o<=a:p>0?u<=s&&s<c:c<s&&s<=u:"both"===r&&(Math.abs(h)>=Math.abs(p)?h>0?a<o&&o<l:l<o&&o<a:p>0?u<s&&s<c:c<s&&s<u):Math.abs(h)>=Math.abs(p)?h>0?a<=o&&o<=l:l<=o&&o<=a:p>0?u<=s&&s<=c:c<=s&&s<=u}function Zr(t,e){var n=rt(t),r=rt(e),i=n.type,o=r.type;switch(i){case"Point":switch(o){case"MultiPoint":return function(t,e){var n,r=!1;for(n=0;n<e.coordinates.length;n++)if(Qr(e.coordinates[n],t.coordinates)){r=!0;break}return r}(n,r);case"LineString":return Wr(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return ye(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+o+" geometry not supported")}case"MultiPoint":switch(o){case"MultiPoint":return function(t,e){for(var n=0;n<t.coordinates.length;n++){for(var r=!1,i=0;i<e.coordinates.length;i++)Qr(t.coordinates[n],e.coordinates[i])&&(r=!0);if(!r)return!1}return!0}(n,r);case"LineString":return function(t,e){for(var n=!1,r=0;r<t.coordinates.length;r++){if(!Wr(t.coordinates[r],e))return!1;n||(n=Wr(t.coordinates[r],e,{ignoreEndVertices:!0}))}return n}(n,r);case"Polygon":case"MultiPolygon":return function(t,e){for(var n=!0,r=!1,i=0;i<t.coordinates.length;i++){if(!(r=ye(t.coordinates[1],e))){n=!1;break}r=ye(t.coordinates[1],e,{ignoreBoundary:!0})}return n&&r}(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"LineString":return function(t,e){for(var n=0;n<t.coordinates.length;n++)if(!Wr(t.coordinates[n],e))return!1;return!0}(n,r);case"Polygon":case"MultiPolygon":return function(t,e){var n=Z(e),r=Z(t);if(!Kr(n,r))return!1;for(var i=!1,o=0;o<t.coordinates.length-1;o++){if(!ye(t.coordinates[o],e))return!1;if(i||(i=ye(t.coordinates[o],e,{ignoreBoundary:!0})),!i)i=ye($r(t.coordinates[o],t.coordinates[o+1]),e,{ignoreBoundary:!0})}return i}(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"Polygon":case"MultiPolygon":return function(t,e){var n=Z(t);if(!Kr(Z(e),n))return!1;for(var r=0;r<t.coordinates[0].length;r++)if(!ye(t.coordinates[0][r],e))return!1;return!0}(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function Kr(t,e){return!(t[0]>e[0])&&(!(t[2]<e[2])&&(!(t[1]>e[1])&&!(t[3]<e[3])))}function Qr(t,e){return t[0]===e[0]&&t[1]===e[1]}function $r(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}function ti(t,e,n){void 0===n&&(n={}),n.mask&&!n.units&&(n.units="kilometers");for(var r=[],i=t[0],o=t[1],s=t[2],u=t[3],l=e/me([i,o],[s,o],n)*(s-i),c=e/me([i,o],[i,u],n)*(u-o),h=s-i,p=u-o,g=Math.floor(h/l),d=(p-Math.floor(p/c)*c)/2,y=i+(h-g*l)/2;y<=s;){for(var v=o+d;v<=u;){var _=a([y,v],n.properties);n.mask?Zr(_,n.mask)&&r.push(_):r.push(_),v+=c}y+=l}return f(r)}function ei(t,e){void 0===e&&(e={});var n=e.precision,r=e.coordinates,i=e.mutate;if(n=null==n||isNaN(n)?6:n,r=null==r||isNaN(r)?3:r,!t)throw new Error("<geojson> is required");if("number"!=typeof n)throw new Error("<precision> must be a number");if("number"!=typeof r)throw new Error("<coordinates> must be a number");!1!==i&&void 0!==i||(t=JSON.parse(JSON.stringify(t)));var o=Math.pow(10,n);return R(t,(function(t){!function(t,e,n){t.length>n&&t.splice(n,t.length);for(var r=0;r<t.length;r++)t[r]=Math.round(t[r]*e)/e}(t,o,r)})),t}function ni(t){if(!t)throw new Error("geojson is required");var e=[];return z(t,(function(t){e.push(t)})),f(e)}function ri(t,e,n){if("Polygon"!==t.geometry.type)throw new Error("The input feature must be a Polygon");void 0===n&&(n=1);var r=t.geometry.coordinates,i=[],o={};if(n){for(var s=[],a=0;a<r.length;a++)for(var u=0;u<r[a].length-1;u++)s.push(d(a,u));var l=Nt();l.load(s)}for(var c=0;c<r.length;c++)for(var h=0;h<r[c].length-1;h++){if(n)l.search(d(c,h)).forEach((function(t){var e=t.ring,n=t.edge;g(c,h,e,n)}));else for(var p=0;p<r.length;p++)for(var f=0;f<r[p].length-1;f++)g(c,h,p,f)}return e||(i={type:"Feature",geometry:{type:"MultiPoint",coordinates:i}}),i;function g(t,n,s,a){var u,l,c=r[t][n],h=r[t][n+1],p=r[s][a],f=r[s][a+1],g=function(t,e,n,r){if(ii(t,n)||ii(t,r)||ii(e,n)||ii(r,n))return null;var i=t[0],o=t[1],s=e[0],a=e[1],u=n[0],l=n[1],c=r[0],h=r[1],p=(i-s)*(l-h)-(o-a)*(u-c);return 0===p?null:[((i*a-o*s)*(u-c)-(i-s)*(u*h-l*c))/p,((i*a-o*s)*(l-h)-(o-a)*(u*h-l*c))/p]}(c,h,p,f);if(null!==g&&(u=h[0]!==c[0]?(g[0]-c[0])/(h[0]-c[0]):(g[1]-c[1])/(h[1]-c[1]),l=f[0]!==p[0]?(g[0]-p[0])/(f[0]-p[0]):(g[1]-p[1])/(f[1]-p[1]),!(u>=1||u<=0||l>=1||l<=0))){var d=g,y=!o[d];y&&(o[d]=!0),e?i.push(e(g,t,n,c,h,u,s,a,p,f,l,y)):i.push(g)}}function d(t,e){var n,i,o,s,a=r[t][e],u=r[t][e+1];return a[0]<u[0]?(n=a[0],i=u[0]):(n=u[0],i=a[0]),a[1]<u[1]?(o=a[1],s=u[1]):(o=u[1],s=a[1]),{minX:n,minY:o,maxX:i,maxY:s,ring:t,edge:e}}}function ii(t,e){if(!t||!e)return!1;if(t.length!==e.length)return!1;for(var n=0,r=t.length;n<r;n++)if(t[n]instanceof Array&&e[n]instanceof Array){if(!ii(t[n],e[n]))return!1}else if(t[n]!==e[n])return!1;return!0}function oi(t){if("Feature"!=t.type)throw new Error("The input must a geojson object of type Feature");if(void 0===t.geometry||null==t.geometry)throw new Error("The input must a geojson object with a non-empty geometry");if("Polygon"!=t.geometry.type)throw new Error("The input must be a geojson Polygon");for(var e=t.geometry.coordinates.length,n=[],r=0;r<e;r++){var i=t.geometry.coordinates[r];ci(i[0],i[i.length-1])||i.push(i[0]),n.push.apply(n,i.slice(0,i.length-1))}if(!function(t){for(var e={},n=1,r=0,i=t.length;r<i;++r){if(Object.prototype.hasOwnProperty.call(e,t[r])){n=0;break}e[t[r]]=1}return n}(n))throw new Error("The input polygon may not have duplicate vertices (except for the first and last vertex of each ring)");var o=n.length,s=ri(t,(function(t,e,n,r,i,o,s,a,u,l,c,h){return[t,e,n,r,i,o,s,a,u,l,c,h]})),a=s.length;if(0==a){var u=[];for(r=0;r<e;r++)u.push(l([t.geometry.coordinates[r]],{parent:-1,winding:li(t.geometry.coordinates[r])}));var c=f(u);return G(),q(),c}var h=[],p=[];for(r=0;r<e;r++){h.push([]);for(var g=0;g<t.geometry.coordinates[r].length-1;g++)h[r].push([new si(t.geometry.coordinates[r][hi(g+1,t.geometry.coordinates[r].length-1)],1,[r,g],[r,hi(g+1,t.geometry.coordinates[r].length-1)],void 0)]),p.push(new ai(t.geometry.coordinates[r][g],[r,hi(g-1,t.geometry.coordinates[r].length-1)],[r,g],void 0,void 0,!1,!0))}for(r=0;r<a;r++)h[s[r][1]][s[r][2]].push(new si(s[r][0],s[r][5],[s[r][1],s[r][2]],[s[r][6],s[r][7]],void 0)),s[r][11]&&p.push(new ai(s[r][0],[s[r][1],s[r][2]],[s[r][6],s[r][7]],void 0,void 0,!0,!0));var d=p.length;for(r=0;r<h.length;r++)for(g=0;g<h[r].length;g++)h[r][g].sort((function(t,e){return t.param<e.param?-1:1}));var y=[];for(r=0;r<d;r++)y.push({minX:p[r].coord[0],minY:p[r].coord[1],maxX:p[r].coord[0],maxY:p[r].coord[1],index:r});var v=Nt();v.load(y);for(r=0;r<h.length;r++)for(g=0;g<h[r].length;g++)for(var _=0;_<h[r][g].length;_++){x=_==h[r][g].length-1?h[r][hi(g+1,t.geometry.coordinates[r].length-1)][0].coord:h[r][g][_+1].coord;var m=v.search({minX:x[0],minY:x[1],maxX:x[0],maxY:x[1]})[0];h[r][g][_].nxtIsectAlongEdgeIn=m.index}for(r=0;r<h.length;r++)for(g=0;g<h[r].length;g++)for(_=0;_<h[r][g].length;_++){var x=h[r][g][_].coord,E=(m=v.search({minX:x[0],minY:x[1],maxX:x[0],maxY:x[1]})[0]).index;E<o?p[E].nxtIsectAlongRingAndEdge2=h[r][g][_].nxtIsectAlongEdgeIn:ci(p[E].ringAndEdge1,h[r][g][_].ringAndEdgeIn)?p[E].nxtIsectAlongRingAndEdge1=h[r][g][_].nxtIsectAlongEdgeIn:p[E].nxtIsectAlongRingAndEdge2=h[r][g][_].nxtIsectAlongEdgeIn}var b=[];for(r=0,g=0;g<e;g++){var w=r;for(_=0;_<t.geometry.coordinates[g].length-1;_++)p[r].coord[0]<p[w].coord[0]&&(w=r),r++;var I=p[w].nxtIsectAlongRingAndEdge2;for(_=0;_<p.length;_++)if(p[_].nxtIsectAlongRingAndEdge1==w||p[_].nxtIsectAlongRingAndEdge2==w){var N=_;break}var S=ui([p[N].coord,p[w].coord,p[I].coord],!0)?1:-1;b.push({isect:w,parent:-1,winding:S})}b.sort((function(t,e){return p[t.isect].coord>p[e.isect].coord?-1:1}));for(u=[];b.length>0;){var C=b.pop(),P=C.isect,M=C.parent,L=C.winding,O=u.length,R=[p[P].coord],T=P;if(p[P].ringAndEdge1Walkable)var A=p[P].ringAndEdge1,D=p[P].nxtIsectAlongRingAndEdge1;else A=p[P].ringAndEdge2,D=p[P].nxtIsectAlongRingAndEdge2;for(;!ci(p[P].coord,p[D].coord);){R.push(p[D].coord);var F=void 0;for(r=0;r<b.length;r++)if(b[r].isect==D){F=r;break}if(null!=F&&b.splice(F,1),ci(A,p[D].ringAndEdge1)){if(A=p[D].ringAndEdge2,p[D].ringAndEdge2Walkable=!1,p[D].ringAndEdge1Walkable){var k={isect:D};ui([p[T].coord,p[D].coord,p[p[D].nxtIsectAlongRingAndEdge2].coord],1==L)?(k.parent=M,k.winding=-L):(k.parent=O,k.winding=L),b.push(k)}T=D,D=p[D].nxtIsectAlongRingAndEdge2}else{if(A=p[D].ringAndEdge1,p[D].ringAndEdge1Walkable=!1,p[D].ringAndEdge2Walkable){k={isect:D};ui([p[T].coord,p[D].coord,p[p[D].nxtIsectAlongRingAndEdge1].coord],1==L)?(k.parent=M,k.winding=-L):(k.parent=O,k.winding=L),b.push(k)}T=D,D=p[D].nxtIsectAlongRingAndEdge1}}R.push(p[D].coord),u.push(l([R],{index:O,parent:M,winding:L,netWinding:void 0}))}c=f(u);function G(){for(var t=[],e=0;e<c.features.length;e++)-1==c.features[e].properties.parent&&t.push(e);if(t.length>1)for(e=0;e<t.length;e++){for(var n=-1,r=0;r<c.features.length;r++)t[e]!=r&&ye(c.features[t[e]].geometry.coordinates[0][0],c.features[r],{ignoreBoundary:!0})&&jr(c.features[r])<Infinity&&(n=r);c.features[t[e]].properties.parent=n}}function q(){for(var t=0;t<c.features.length;t++)if(-1==c.features[t].properties.parent){var e=c.features[t].properties.winding;c.features[t].properties.netWinding=e,B(t,e)}}function B(t,e){for(var n=0;n<c.features.length;n++)if(c.features[n].properties.parent==t){var r=e+c.features[n].properties.winding;c.features[n].properties.netWinding=r,B(n,r)}}return G(),q(),c}var si=function(t,e,n,r,i){this.coord=t,this.param=e,this.ringAndEdgeIn=n,this.ringAndEdgeOut=r,this.nxtIsectAlongEdgeIn=i},ai=function(t,e,n,r,i,o,s){this.coord=t,this.ringAndEdge1=e,this.ringAndEdge2=n,this.nxtIsectAlongRingAndEdge1=r,this.nxtIsectAlongRingAndEdge2=i,this.ringAndEdge1Walkable=o,this.ringAndEdge2Walkable=s};function ui(t,e){if(void 0===e&&(e=!0),3!=t.length)throw new Error("This function requires an array of three points [x,y]");return(t[1][0]-t[0][0])*(t[2][1]-t[0][1])-(t[1][1]-t[0][1])*(t[2][0]-t[0][0])>=0==e}function li(t){for(var e=0,n=0;n<t.length-1;n++)t[n][0]<t[e][0]&&(e=n);if(ui([t[hi(e-1,t.length-1)],t[e],t[hi(e+1,t.length-1)]],!0))var r=1;else r=-1;return r}function ci(t,e){if(!t||!e)return!1;if(t.length!=e.length)return!1;for(var n=0,r=t.length;n<r;n++)if(t[n]instanceof Array&&e[n]instanceof Array){if(!ci(t[n],e[n]))return!1}else if(t[n]!=e[n])return!1;return!0}function hi(t,e){return(t%e+e)%e}var pi=Math.PI/180,fi=180/Math.PI,gi=function(t,e){this.lon=t,this.lat=e,this.x=pi*t,this.y=pi*e};gi.prototype.view=function(){return String(this.lon).slice(0,4)+","+String(this.lat).slice(0,4)},gi.prototype.antipode=function(){var t=-1*this.lat,e=this.lon<0?180+this.lon:-1*(180-this.lon);return new gi(e,t)};var di=function(){this.coords=[],this.length=0};di.prototype.move_to=function(t){this.length++,this.coords.push(t)};var yi=function(t){this.properties=t||{},this.geometries=[]};yi.prototype.json=function(){if(this.geometries.length<=0)return{geometry:{type:"LineString",coordinates:null},type:"Feature",properties:this.properties};if(1===this.geometries.length)return{geometry:{type:"LineString",coordinates:this.geometries[0].coords},type:"Feature",properties:this.properties};for(var t=[],e=0;e<this.geometries.length;e++)t.push(this.geometries[e].coords);return{geometry:{type:"MultiLineString",coordinates:t},type:"Feature",properties:this.properties}},yi.prototype.wkt=function(){for(var t="",e="LINESTRING(",n=function(t){e+=t[0]+" "+t[1]+","},r=0;r<this.geometries.length;r++){if(0===this.geometries[r].coords.length)return"LINESTRING(empty)";this.geometries[r].coords.forEach(n),t+=e.substring(0,e.length-1)+")"}return t};var vi=function(t,e,n){if(!t||void 0===t.x||void 0===t.y)throw new Error("GreatCircle constructor expects two args: start and end objects with x and y properties");if(!e||void 0===e.x||void 0===e.y)throw new Error("GreatCircle constructor expects two args: start and end objects with x and y properties");this.start=new gi(t.x,t.y),this.end=new gi(e.x,e.y),this.properties=n||{};var r=this.start.x-this.end.x,i=this.start.y-this.end.y,o=Math.pow(Math.sin(i/2),2)+Math.cos(this.start.y)*Math.cos(this.end.y)*Math.pow(Math.sin(r/2),2);if(this.g=2*Math.asin(Math.sqrt(o)),this.g===Math.PI)throw new Error("it appears "+t.view()+" and "+e.view()+" are 'antipodal', e.g diametrically opposite, thus there is no single route but rather infinite");if(isNaN(this.g))throw new Error("could not calculate great circle between "+t+" and "+e)};function _i(t,e){var n=[],r=Mr();return z(e,(function(e){if(n.forEach((function(t,e){t.id=e})),n.length){var i=r.search(e);if(i.features.length){var o=xi(e,i);n=n.filter((function(t){return t.id!==o.id})),r.remove(o),F(mi(o,e),(function(t){n.push(t),r.insert(t)}))}}else(n=mi(t,e).features).forEach((function(t){t.bbox||(t.bbox=yn(Z(t)))})),r.load(f(n))})),f(n)}function mi(t,e){var n=[],r=Q(t)[0],i=Q(t)[t.geometry.coordinates.length-1];if(Ei(r,K(e))||Ei(i,K(e)))return f([t]);var o=Mr(),s=Zn(t);o.load(s);var a=o.search(e);if(!a.features.length)return f([t]);var u=xi(e,a),l=k(s,(function(t,r,i){var o=Q(r)[1],s=K(e);return i===u.id?(t.push(s),n.push(h(t)),Ei(s,o)?[s]:[s,o]):(t.push(o),t)}),[r]);return l.length>1&&n.push(h(l)),f(n)}function xi(t,e){if(!e.features.length)throw new Error("lines must contain features");if(1===e.features.length)return e.features[0];var n,r=1/0;return F(e,(function(e){var i=Tr(e,t).properties.dist;i<r&&(n=e,r=i)})),n}function Ei(t,e){return t[0]===e[0]&&t[1]===e[1]}function bi(t,e,n,r,i){void 0===i&&(i={});var o=i.steps||64,s=wi(n),a=wi(r),u=Array.isArray(t)||"Feature"!==t.type?{}:t.properties;if(s===a)return h(_n(t,e,i).geometry.coordinates[0],u);for(var l=s,c=s<a?a:a+360,p=l,f=[],g=0;p<c;)f.push(vn(t,e,p,i).geometry.coordinates),p=l+360*++g/o;return p>c&&f.push(vn(t,e,c,i).geometry.coordinates),h(f,u)}function wi(t){var e=t%360;return e<0&&(e+=360),e}function Ii(t,e){void 0===e&&(e={});var n=rt(t);switch(e.properties||"Feature"!==t.type||(e.properties=t.properties),n.type){case"Polygon":return Ni(n,e);case"MultiPolygon":return function(t,e){void 0===e&&(e={});var n=rt(t).coordinates,r=e.properties?e.properties:"Feature"===t.type?t.properties:{},i=[];return n.forEach((function(t){i.push(Si(t,r))})),f(i)}(n,e);default:throw new Error("invalid poly")}}function Ni(t,e){return void 0===e&&(e={}),Si(rt(t).coordinates,e.properties?e.properties:"Feature"===t.type?t.properties:{})}function Si(t,e){return t.length>1?g(t,e):h(t[0],e)}function Ci(t,e){var n,r,i;void 0===e&&(e={});var o=e.properties,s=null===(n=e.autoComplete)||void 0===n||n,a=null===(r=e.orderCoords)||void 0===r||r;switch(null!==(i=e.mutate)&&void 0!==i&&i||(t=Ie(t)),t.type){case"FeatureCollection":var u=[];return t.features.forEach((function(t){u.push(Q(Pi(t,{},s,a)))})),y(u,o);default:return Pi(t,o,s,a)}}function Pi(t,e,n,r){e=e||("Feature"===t.type?t.properties:{});var i=rt(t),o=i.coordinates,s=i.type;if(!o.length)throw new Error("line must contain coordinates");switch(s){case"LineString":return n&&(o=Mi(o)),l([o],e);case"MultiLineString":var a=[],u=0;return o.forEach((function(t){if(n&&(t=Mi(t)),r){var e=function(t){var e=t[0],n=t[1],r=t[2],i=t[3];return Math.abs(e-r)*Math.abs(n-i)}(Z(h(t)));e>u?(a.unshift(t),u=e):a.push(t)}else a.push(t)})),l(a,e);default:throw new Error("geometry type "+s+" is not supported")}}function Mi(t){var e=t[0],n=e[0],r=e[1],i=t[t.length-1],o=i[0],s=i[1];return n===o&&r===s||t.push(e),t}function Li(t,e){var n,r,i,o,s,a,u;for(r=1;r<=8;r*=2){for(n=[],o=!(Ri(i=t[t.length-1],e)&r),s=0;s<t.length;s++)(u=!(Ri(a=t[s],e)&r))!==o&&n.push(Oi(i,a,r,e)),u&&n.push(a),i=a,o=u;if(!(t=n).length)break}return n}function Oi(t,e,n,r){return 8&n?[t[0]+(e[0]-t[0])*(r[3]-t[1])/(e[1]-t[1]),r[3]]:4&n?[t[0]+(e[0]-t[0])*(r[1]-t[1])/(e[1]-t[1]),r[1]]:2&n?[r[2],t[1]+(e[1]-t[1])*(r[2]-t[0])/(e[0]-t[0])]:1&n?[r[0],t[1]+(e[1]-t[1])*(r[0]-t[0])/(e[0]-t[0])]:null}function Ri(t,e){var n=0;return t[0]<e[0]?n|=1:t[0]>e[2]&&(n|=2),t[1]<e[1]?n|=4:t[1]>e[3]&&(n|=8),n}function Ti(t,e){for(var n=[],r=0,i=t;r<i.length;r++){var o=Li(i[r],e);o.length>0&&(o[0][0]===o[o.length-1][0]&&o[0][1]===o[o.length-1][1]||o.push(o[0]),o.length>=4&&n.push(o))}return n}vi.prototype.interpolate=function(t){var e=Math.sin((1-t)*this.g)/Math.sin(this.g),n=Math.sin(t*this.g)/Math.sin(this.g),r=e*Math.cos(this.start.y)*Math.cos(this.start.x)+n*Math.cos(this.end.y)*Math.cos(this.end.x),i=e*Math.cos(this.start.y)*Math.sin(this.start.x)+n*Math.cos(this.end.y)*Math.sin(this.end.x),o=e*Math.sin(this.start.y)+n*Math.sin(this.end.y),s=fi*Math.atan2(o,Math.sqrt(Math.pow(r,2)+Math.pow(i,2)));return[fi*Math.atan2(i,r),s]},vi.prototype.Arc=function(t,e){var n=[];if(!t||t<=2)n.push([this.start.lon,this.start.lat]),n.push([this.end.lon,this.end.lat]);else for(var r=1/(t-1),i=0;i<t;++i){var o=r*i,s=this.interpolate(o);n.push(s)}for(var a=!1,u=0,l=e&&e.offset?e.offset:10,c=180-l,h=-180+l,p=360-l,f=1;f<n.length;++f){var g=n[f-1][0],d=n[f][0],y=Math.abs(d-g);y>p&&(d>c&&g<h||g>c&&d<h)?a=!0:y>u&&(u=y)}var v=[];if(a&&u<l){var _=[];v.push(_);for(var m=0;m<n.length;++m){var x=parseFloat(n[m][0]);if(m>0&&Math.abs(x-n[m-1][0])>p){var E=parseFloat(n[m-1][0]),b=parseFloat(n[m-1][1]),w=parseFloat(n[m][0]),I=parseFloat(n[m][1]);if(E>-180&&E<h&&180===w&&m+1<n.length&&n[m-1][0]>-180&&n[m-1][0]<h){_.push([-180,n[m][1]]),m++,_.push([n[m][0],n[m][1]]);continue}if(E>c&&E<180&&-180===w&&m+1<n.length&&n[m-1][0]>c&&n[m-1][0]<180){_.push([180,n[m][1]]),m++,_.push([n[m][0],n[m][1]]);continue}if(E<h&&w>c){var N=E;E=w,w=N;var S=b;b=I,I=S}if(E>c&&w<h&&(w+=360),E<=180&&w>=180&&E<w){var C=(180-E)/(w-E),P=C*I+(1-C)*b;_.push([n[m-1][0]>c?180:-180,P]),(_=[]).push([n[m-1][0]>c?-180:180,P]),v.push(_)}else _=[],v.push(_);_.push([x,n[m][1]])}else _.push([n[m][0],n[m][1]])}}else{var M=[];v.push(M);for(var L=0;L<n.length;++L)M.push([n[L][0],n[L][1]])}for(var O=new yi(this.properties),R=0;R<v.length;++R){var T=new di;O.geometries.push(T);for(var A=v[R],D=0;D<A.length;++D)T.move_to(A[D])}return O};var Ai=Bt((function(t,e){function n(t){var e=[];for(var n in t)e.push(n);return e}(t.exports="function"==typeof Object.keys?Object.keys:n).shim=n})),Di=Bt((function(t,e){var n="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();function r(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function i(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}(e=t.exports=n?r:i).supported=r,e.unsupported=i})),Fi=Bt((function(t){var e=Array.prototype.slice,n=t.exports=function(t,o,s){return s||(s={}),t===o||(t instanceof Date&&o instanceof Date?t.getTime()===o.getTime():!t||!o||"object"!=typeof t&&"object"!=typeof o?s.strict?t===o:t==o:function(t,o,s){var a,u;if(r(t)||r(o))return!1;if(t.prototype!==o.prototype)return!1;if(Di(t))return!!Di(o)&&(t=e.call(t),o=e.call(o),n(t,o,s));if(i(t)){if(!i(o))return!1;if(t.length!==o.length)return!1;for(a=0;a<t.length;a++)if(t[a]!==o[a])return!1;return!0}try{var l=Ai(t),c=Ai(o)}catch(t){return!1}if(l.length!=c.length)return!1;for(l.sort(),c.sort(),a=l.length-1;a>=0;a--)if(l[a]!=c[a])return!1;for(a=l.length-1;a>=0;a--)if(u=l[a],!n(t[u],o[u],s))return!1;return typeof t==typeof o}(t,o,s))};function r(t){return null==t}function i(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}}));function ki(t,e,n){if(void 0===n&&(n={}),!P(n=n||{}))throw new Error("options is invalid");var r,i=n.tolerance||0,o=[],s=Mr(),a=Zn(t);return s.load(a),U(e,(function(t){var e=!1;t&&(F(s.search(t),(function(n){if(!1===e){var o=Q(t).sort(),s=Q(n).sort();Fi(o,s)||(0===i?Wr(o[0],n)&&Wr(o[1],n):Tr(n,o[0]).properties.dist<=i&&Tr(n,o[1]).properties.dist<=i)?(e=!0,r=r?Gi(r,t):t):(0===i?Wr(s[0],t)&&Wr(s[1],t):Tr(t,s[0]).properties.dist<=i&&Tr(t,s[1]).properties.dist<=i)&&(r=r?Gi(r,n):n)}})),!1===e&&r&&(o.push(r),r=void 0))})),r&&o.push(r),f(o)}function Gi(t,e){var n=Q(e),r=Q(t),i=r[0],o=r[r.length-1],s=t.geometry.coordinates;return Fi(n[0],i)?s.unshift(n[1]):Fi(n[0],o)?s.push(n[1]):Fi(n[1],i)?s.unshift(n[0]):Fi(n[1],o)&&s.push(n[0]),t}function qi(t){var e=t%360;return e<0&&(e+=360),e}function Bi(t,e,n){var r;return void 0===n&&(n={}),(r=n.final?zi(K(e),K(t)):zi(K(t),K(e)))>180?-(360-r):r}function zi(t,e){var n=I(t[1]),r=I(e[1]),i=I(e[0]-t[0]);i>Math.PI&&(i-=2*Math.PI),i<-Math.PI&&(i+=2*Math.PI);var o=Math.log(Math.tan(r/2+Math.PI/4)/Math.tan(n/2+Math.PI/4));return(w(Math.atan2(i,o))+360)%360}function ji(t,n,r,i){void 0===i&&(i={});var o=n<0,s=N(Math.abs(n),i.units,"meters");o&&(s=-Math.abs(s));var u=K(t),l=function(t,n,r,i){i=void 0===i?e:Number(i);var o=n/i,s=t[0]*Math.PI/180,a=I(t[1]),u=I(r),l=o*Math.cos(u),c=a+l;Math.abs(c)>Math.PI/2&&(c=c>0?Math.PI-c:-Math.PI-c);var h=Math.log(Math.tan(c/2+Math.PI/4)/Math.tan(a/2+Math.PI/4)),p=Math.abs(h)>1e-11?l/h:Math.cos(a),f=o*Math.sin(u)/p;return[(180*(s+f)/Math.PI+540)%360-180,180*c/Math.PI]}(u,s,r);return l[0]+=l[0]-u[0]>180?-360:u[0]-l[0]>180?360:0,a(l,i.properties)}function Ui(t,e,n,r,i,o){for(var s=0;s<t.length;s++){var a=t[s],u=t[s+1];s===t.length-1&&(u=t[0]),r=Xi(a,u,e),n<=0&&r>0?Xi(e,a,i)<0||(i=a):n>0&&r<=0&&(Vi(e,a,o)||(o=a)),n=r}return[i,o]}function Vi(t,e,n){return Xi(t,e,n)>0}function Xi(t,e,n){return(e[0]-t[0])*(n[1]-t[1])-(n[0]-t[0])*(e[1]-t[1])}function Yi(t){for(var e,n,r=Q(t),i=0,o=1;o<r.length;)e=n||r[0],i+=((n=r[o])[0]-e[0])*(n[1]+e[1]),o++;return i>0}function Hi(t,e){switch("Feature"===t.type?t.geometry.type:t.type){case"GeometryCollection":return q(t,(function(t){Hi(t,e)})),t;case"LineString":return Wi(Q(t),e),t;case"Polygon":return Ji(Q(t),e),t;case"MultiLineString":return Q(t).forEach((function(t){Wi(t,e)})),t;case"MultiPolygon":return Q(t).forEach((function(t){Ji(t,e)})),t;case"Point":case"MultiPoint":return t}}function Wi(t,e){Yi(t)===e&&t.reverse()}function Ji(t,e){Yi(t[0])!==e&&t[0].reverse();for(var n=1;n<t.length;n++)Yi(t[n])===e&&t[n].reverse()}function Zi(t,e){if(!P(e=e||{}))throw new Error("options is invalid");var n=e.zProperty||"elevation",r=e.flip,i=e.flags;nt(t,"Point","input must contain Points");for(var o=function(t,e){var n={};return F(t,(function(t){var e=Q(t)[1];n[e]||(n[e]=[]),n[e].push(t)})),Object.keys(n).map((function(t){return n[t].sort((function(t,e){return Q(t)[0]-Q(e)[0]}))})).sort((function(t,n){return e?Q(t[0])[1]-Q(n[0])[1]:Q(n[0])[1]-Q(t[0])[1]}))}
/*!
     * @license GNU Affero General Public License.
     * Copyright (c) 2015, 2015 Ronny Lorenz <ronny@tbi.univie.ac.at>
     * v. 1.2.0
     * https://github.com/RaumZeit/MarchingSquares.js
     *
     * MarchingSquaresJS is free software: you can redistribute it and/or modify
     * it under the terms of the GNU Affero General Public License as published by
     * the Free Software Foundation, either version 3 of the License, or
     * (at your option) any later version.
     *
     * MarchingSquaresJS is distributed in the hope that it will be useful,
     * but WITHOUT ANY WARRANTY; without even the implied warranty of
     * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
     * GNU Affero General Public License for more details.
     *
     * As additional permission under GNU Affero General Public License version 3
     * section 7, third-party projects (personal or commercial) may distribute,
     * include, or link against UNMODIFIED VERSIONS of MarchingSquaresJS without the
     * requirement that said third-party project for that reason alone becomes
     * subject to any requirement of the GNU Affero General Public License version 3.
     * Any modifications to MarchingSquaresJS, however, must be shared with the public
     * and made available.
     *
     * In summary this:
     * - allows you to use MarchingSquaresJS at no cost
     * - allows you to use MarchingSquaresJS for both personal and commercial purposes
     * - allows you to distribute UNMODIFIED VERSIONS of MarchingSquaresJS under any
     *   license as long as this license notice is included
     * - enables you to keep the source code of your program that uses MarchingSquaresJS
     *   undisclosed
     * - forces you to share any modifications you have made to MarchingSquaresJS,
     *   e.g. bug-fixes
     *
     * You should have received a copy of the GNU Affero General Public License
     * along with MarchingSquaresJS.  If not, see <http://www.gnu.org/licenses/>.
     */(t,r),s=[],a=0;a<o.length;a++){for(var u=o[a],l=[],c=0;c<u.length;c++){var h=u[c];h.properties[n]?l.push(h.properties[n]):l.push(0),!0===i&&(h.properties.matrixPosition=[a,c])}s.push(l)}return s}var Ki={successCallback:null,verbose:!1,polygons:!1},Qi={};function $i(t,e,n,r){r=r||{};for(var i=Object.keys(Ki),o=0;o<i.length;o++){var s=i[o],a=r[s];a=null!=a?a:Ki[s],Qi[s]=a}Qi.verbose&&console.log("MarchingSquaresJS-isoBands: computing isobands for ["+e+":"+(e+n)+"]");var u,l=function(t,e,n){for(var r=t.length-1,i=t[0].length-1,o={rows:r,cols:i,cells:[]},s=e+Math.abs(n),a=0;a<r;++a){o.cells[a]=[];for(var u=0;u<i;++u){var l=0,c=t[a+1][u],h=t[a+1][u+1],p=t[a][u+1],f=t[a][u];if(!(isNaN(c)||isNaN(h)||isNaN(p)||isNaN(f))){l|=c<e?0:c>s?128:64,l|=h<e?0:h>s?32:16,l|=p<e?0:p>s?8:4;var g=+(l|=f<e?0:f>s?2:1),d=0;if(17===l||18===l||33===l||34===l||38===l||68===l||72===l||98===l||102===l||132===l||136===l||137===l||152===l||153===l){var y=(c+h+p+f)/4;d=y>s?2:y<e?0:1,34===l?1===d?l=35:0===d&&(l=136):136===l?1===d?(l=35,d=4):0===d&&(l=34):17===l?1===d?(l=155,d=4):0===d&&(l=153):68===l?1===d?(l=103,d=4):0===d&&(l=102):153===l?1===d&&(l=155):102===l?1===d&&(l=103):152===l?d<2&&(l=156,d=1):137===l?d<2&&(l=139,d=1):98===l?d<2&&(l=99,d=1):38===l?d<2&&(l=39,d=1):18===l?d>0?(l=156,d=4):l=152:33===l?d>0?(l=139,d=4):l=137:72===l?d>0?(l=99,d=4):l=98:132===l&&(d>0?(l=39,d=4):l=38)}if(0!=l&&170!=l){var v,_,m,x,E,b,w,I;v=_=m=x=E=b=w=I=.5;var N=[];1===l?(m=1-Vo(e,p,f),I=1-Vo(e,c,f),N.push(Go[l])):169===l?(m=Vo(s,f,p),I=Vo(s,f,c),N.push(Go[l])):4===l?(b=1-Vo(e,h,p),x=Vo(e,f,p),N.push(Fo[l])):166===l?(b=Vo(s,p,h),x=1-Vo(s,p,f),N.push(Fo[l])):16===l?(E=Vo(e,p,h),_=Vo(e,c,h),N.push(Do[l])):154===l?(E=1-Vo(s,h,p),_=1-Vo(s,h,c),N.push(Do[l])):64===l?(w=Vo(e,f,c),v=1-Vo(e,h,c),N.push(Bo[l])):106===l?(w=1-Vo(s,c,f),v=Vo(s,c,h),N.push(Bo[l])):168===l?(x=Vo(s,f,p),m=Vo(e,f,p),I=Vo(e,f,c),w=Vo(s,f,c),N.push(ko[l]),N.push(Go[l])):2===l?(x=1-Vo(e,p,f),m=1-Vo(s,p,f),I=1-Vo(s,c,f),w=1-Vo(e,c,f),N.push(ko[l]),N.push(Go[l])):162===l?(E=Vo(s,p,h),b=Vo(e,p,h),x=1-Vo(e,p,f),m=1-Vo(s,p,f),N.push(ko[l]),N.push(Go[l])):8===l?(E=1-Vo(e,h,p),b=1-Vo(s,h,p),x=Vo(s,f,p),m=Vo(e,f,p),N.push(Do[l]),N.push(Fo[l])):138===l?(E=1-Vo(e,h,p),b=1-Vo(s,h,p),v=1-Vo(s,h,c),_=1-Vo(e,h,c),N.push(Do[l]),N.push(Fo[l])):32===l?(E=Vo(s,p,h),b=Vo(e,p,h),v=Vo(e,c,h),_=Vo(s,c,h),N.push(Do[l]),N.push(Fo[l])):42===l?(I=1-Vo(s,c,f),w=1-Vo(e,c,f),v=Vo(e,c,h),_=Vo(s,c,h),N.push(qo[l]),N.push(Bo[l])):128===l&&(I=Vo(e,f,c),w=Vo(s,f,c),v=1-Vo(s,h,c),_=1-Vo(e,h,c),N.push(qo[l]),N.push(Bo[l])),5===l?(b=1-Vo(e,h,p),I=1-Vo(e,c,f),N.push(Fo[l])):165===l?(b=Vo(s,p,h),I=Vo(s,f,c),N.push(Fo[l])):20===l?(x=Vo(e,f,p),_=Vo(e,c,h),N.push(ko[l])):150===l?(x=1-Vo(s,p,f),_=1-Vo(s,h,c),N.push(ko[l])):80===l?(E=Vo(e,p,h),w=Vo(e,f,c),N.push(Do[l])):90===l?(E=1-Vo(s,h,p),w=1-Vo(s,c,f),N.push(Do[l])):65===l?(m=1-Vo(e,p,f),v=1-Vo(e,h,c),N.push(Go[l])):105===l?(m=Vo(s,f,p),v=Vo(s,c,h),N.push(Go[l])):160===l?(E=Vo(s,p,h),b=Vo(e,p,h),I=Vo(e,f,c),w=Vo(s,f,c),N.push(Do[l]),N.push(Fo[l])):10===l?(E=1-Vo(e,h,p),b=1-Vo(s,h,p),I=1-Vo(s,c,f),w=1-Vo(e,c,f),N.push(Do[l]),N.push(Fo[l])):130===l?(x=1-Vo(e,p,f),m=1-Vo(s,p,f),v=1-Vo(s,h,c),_=1-Vo(e,h,c),N.push(ko[l]),N.push(Go[l])):40===l?(x=Vo(s,f,p),m=Vo(e,f,p),v=Vo(e,c,h),_=Vo(s,c,h),N.push(ko[l]),N.push(Go[l])):101===l?(b=Vo(s,p,h),v=Vo(s,c,h),N.push(Fo[l])):69===l?(b=1-Vo(e,h,p),v=1-Vo(e,h,c),N.push(Fo[l])):149===l?(I=Vo(s,f,c),_=1-Vo(s,h,c),N.push(qo[l])):21===l?(I=1-Vo(e,c,f),_=Vo(e,c,h),N.push(qo[l])):86===l?(x=1-Vo(s,p,f),w=1-Vo(s,c,f),N.push(ko[l])):84===l?(x=Vo(e,f,p),w=Vo(e,f,c),N.push(ko[l])):89===l?(E=1-Vo(s,h,p),m=Vo(s,f,p),N.push(Go[l])):81===l?(E=Vo(e,p,h),m=1-Vo(e,p,f),N.push(Go[l])):96===l?(E=Vo(s,p,h),b=Vo(e,p,h),w=Vo(e,f,c),v=Vo(s,c,h),N.push(Do[l]),N.push(Fo[l])):74===l?(E=1-Vo(e,h,p),b=1-Vo(s,h,p),w=1-Vo(s,c,f),v=1-Vo(e,h,c),N.push(Do[l]),N.push(Fo[l])):24===l?(E=1-Vo(s,h,p),x=Vo(s,f,p),m=Vo(e,f,p),_=Vo(e,c,h),N.push(Do[l]),N.push(Go[l])):146===l?(E=Vo(e,p,h),x=1-Vo(e,p,f),m=1-Vo(s,p,f),_=1-Vo(s,h,c),N.push(Do[l]),N.push(Go[l])):6===l?(b=1-Vo(e,h,p),x=1-Vo(s,p,f),I=1-Vo(s,c,f),w=1-Vo(e,c,f),N.push(Fo[l]),N.push(ko[l])):164===l?(b=Vo(s,p,h),x=Vo(e,f,p),I=Vo(e,f,c),w=Vo(s,f,c),N.push(Fo[l]),N.push(ko[l])):129===l?(m=1-Vo(e,p,f),I=Vo(s,f,c),v=1-Vo(s,h,c),_=1-Vo(e,h,c),N.push(Go[l]),N.push(qo[l])):41===l?(m=Vo(s,f,p),I=1-Vo(e,c,f),v=Vo(e,c,h),_=Vo(s,c,h),N.push(Go[l]),N.push(qo[l])):66===l?(x=1-Vo(e,p,f),m=1-Vo(s,p,f),w=1-Vo(s,c,f),v=1-Vo(e,h,c),N.push(ko[l]),N.push(Go[l])):104===l?(x=Vo(s,f,p),m=Vo(e,f,p),w=Vo(e,f,c),v=Vo(s,c,h),N.push(Go[l]),N.push(zo[l])):144===l?(E=Vo(e,p,h),I=Vo(e,f,c),w=Vo(s,f,c),_=1-Vo(s,h,c),N.push(Do[l]),N.push(Bo[l])):26===l?(E=1-Vo(s,h,p),I=1-Vo(s,c,f),w=1-Vo(e,c,f),_=Vo(e,c,h),N.push(Do[l]),N.push(Bo[l])):36===l?(b=Vo(s,p,h),x=Vo(e,f,p),v=Vo(e,c,h),_=Vo(s,c,h),N.push(Fo[l]),N.push(ko[l])):134===l?(b=1-Vo(e,h,p),x=1-Vo(s,p,f),v=1-Vo(s,h,c),_=1-Vo(e,h,c),N.push(Fo[l]),N.push(ko[l])):9===l?(E=1-Vo(e,h,p),b=1-Vo(s,h,p),m=Vo(s,f,p),I=1-Vo(e,c,f),N.push(Do[l]),N.push(Fo[l])):161===l?(E=Vo(s,p,h),b=Vo(e,p,h),m=1-Vo(e,p,f),I=Vo(s,f,c),N.push(Do[l]),N.push(Fo[l])):37===l?(b=Vo(s,p,h),I=1-Vo(e,c,f),v=Vo(e,c,h),_=Vo(s,c,h),N.push(Fo[l]),N.push(qo[l])):133===l?(b=1-Vo(e,h,p),I=Vo(s,f,c),v=1-Vo(s,h,c),_=1-Vo(e,h,c),N.push(Fo[l]),N.push(qo[l])):148===l?(x=Vo(e,f,p),I=Vo(e,f,c),w=Vo(s,f,c),_=1-Vo(s,h,c),N.push(ko[l]),N.push(Bo[l])):22===l?(x=1-Vo(s,p,f),I=1-Vo(s,c,f),w=1-Vo(e,c,f),_=Vo(e,c,h),N.push(ko[l]),N.push(Bo[l])):82===l?(E=Vo(e,p,h),x=1-Vo(e,p,f),m=1-Vo(s,p,f),w=1-Vo(s,c,f),N.push(Do[l]),N.push(Go[l])):88===l?(E=1-Vo(s,h,p),x=Vo(s,f,p),m=Vo(e,f,p),w=Vo(e,f,c),N.push(Do[l]),N.push(Go[l])):73===l?(E=1-Vo(e,h,p),b=1-Vo(s,h,p),m=Vo(s,f,p),v=1-Vo(e,h,c),N.push(Do[l]),N.push(Fo[l])):97===l?(E=Vo(s,p,h),b=Vo(e,p,h),m=1-Vo(e,p,f),v=Vo(s,c,h),N.push(Do[l]),N.push(Fo[l])):145===l?(E=Vo(e,p,h),m=1-Vo(e,p,f),I=Vo(s,f,c),_=1-Vo(s,h,c),N.push(Do[l]),N.push(qo[l])):25===l?(E=1-Vo(s,h,p),m=Vo(s,f,p),I=1-Vo(e,c,f),_=Vo(e,c,h),N.push(Do[l]),N.push(qo[l])):70===l?(b=1-Vo(e,h,p),x=1-Vo(s,p,f),w=1-Vo(s,c,f),v=1-Vo(e,h,c),N.push(Fo[l]),N.push(ko[l])):100===l?(b=Vo(s,p,h),x=Vo(e,f,p),w=Vo(e,f,c),v=Vo(s,c,h),N.push(Fo[l]),N.push(ko[l])):34===l?(0===d?(E=1-Vo(e,h,p),b=1-Vo(s,h,p),x=Vo(s,f,p),m=Vo(e,f,p),I=Vo(e,f,c),w=Vo(s,f,c),v=1-Vo(s,h,c),_=1-Vo(e,h,c)):(E=Vo(s,p,h),b=Vo(e,p,h),x=1-Vo(e,p,f),m=1-Vo(s,p,f),I=1-Vo(s,c,f),w=1-Vo(e,c,f),v=Vo(e,c,h),_=Vo(s,c,h)),N.push(Do[l]),N.push(Fo[l]),N.push(qo[l]),N.push(Bo[l])):35===l?(4===d?(E=1-Vo(e,h,p),b=1-Vo(s,h,p),x=Vo(s,f,p),m=Vo(e,f,p),I=Vo(e,f,c),w=Vo(s,f,c),v=1-Vo(s,h,c),_=1-Vo(e,h,c)):(E=Vo(s,p,h),b=Vo(e,p,h),x=1-Vo(e,p,f),m=1-Vo(s,p,f),I=1-Vo(s,c,f),w=1-Vo(e,c,f),v=Vo(e,c,h),_=Vo(s,c,h)),N.push(Do[l]),N.push(Fo[l]),N.push(Go[l]),N.push(Bo[l])):136===l?(0===d?(E=Vo(s,p,h),b=Vo(e,p,h),x=1-Vo(e,p,f),m=1-Vo(s,p,f),I=1-Vo(s,c,f),w=1-Vo(e,c,f),v=Vo(e,c,h),_=Vo(s,c,h)):(E=1-Vo(e,h,p),b=1-Vo(s,h,p),x=Vo(s,f,p),m=Vo(e,f,p),I=Vo(e,f,c),w=Vo(s,f,c),v=1-Vo(s,h,c),_=1-Vo(e,h,c)),N.push(Do[l]),N.push(Fo[l]),N.push(qo[l]),N.push(Bo[l])):153===l?(0===d?(E=Vo(e,p,h),m=1-Vo(e,p,f),I=1-Vo(e,c,f),_=Vo(e,c,h)):(E=1-Vo(s,h,p),m=Vo(s,f,p),I=Vo(s,f,c),_=1-Vo(s,h,c)),N.push(Do[l]),N.push(Go[l])):102===l?(0===d?(b=1-Vo(e,h,p),x=Vo(e,f,p),w=Vo(e,f,c),v=1-Vo(e,h,c)):(b=Vo(s,p,h),x=1-Vo(s,p,f),w=1-Vo(s,c,f),v=Vo(s,c,h)),N.push(Fo[l]),N.push(Bo[l])):155===l?(4===d?(E=Vo(e,p,h),m=1-Vo(e,p,f),I=1-Vo(e,c,f),_=Vo(e,c,h)):(E=1-Vo(s,h,p),m=Vo(s,f,p),I=Vo(s,f,c),_=1-Vo(s,h,c)),N.push(Do[l]),N.push(qo[l])):103===l?(4===d?(b=1-Vo(e,h,p),x=Vo(e,f,p),w=Vo(e,f,c),v=1-Vo(e,h,c)):(b=Vo(s,p,h),x=1-Vo(s,p,f),w=1-Vo(s,c,f),v=Vo(s,c,h)),N.push(Fo[l]),N.push(ko[l])):152===l?(0===d?(E=Vo(e,p,h),x=1-Vo(e,p,f),m=1-Vo(s,p,f),I=1-Vo(s,c,f),w=1-Vo(e,c,f),_=Vo(e,c,h)):(E=1-Vo(s,h,p),x=Vo(s,f,p),m=Vo(e,f,p),I=Vo(e,f,c),w=Vo(s,f,c),_=1-Vo(s,h,c)),N.push(Do[l]),N.push(ko[l]),N.push(Go[l])):156===l?(4===d?(E=Vo(e,p,h),x=1-Vo(e,p,f),m=1-Vo(s,p,f),I=1-Vo(s,c,f),w=1-Vo(e,c,f),_=Vo(e,c,h)):(E=1-Vo(s,h,p),x=Vo(s,f,p),m=Vo(e,f,p),I=Vo(e,f,c),w=Vo(s,f,c),_=1-Vo(s,h,c)),N.push(Do[l]),N.push(Go[l]),N.push(Bo[l])):137===l?(0===d?(E=Vo(s,p,h),b=Vo(e,p,h),m=1-Vo(e,p,f),I=1-Vo(e,c,f),v=Vo(e,c,h),_=Vo(s,c,h)):(E=1-Vo(e,h,p),b=1-Vo(s,h,p),m=Vo(s,f,p),I=Vo(s,f,c),v=1-Vo(s,h,c),_=1-Vo(e,h,c)),N.push(Do[l]),N.push(Fo[l]),N.push(Go[l])):139===l?(4===d?(E=Vo(s,p,h),b=Vo(e,p,h),m=1-Vo(e,p,f),I=1-Vo(e,c,f),v=Vo(e,c,h),_=Vo(s,c,h)):(E=1-Vo(e,h,p),b=1-Vo(s,h,p),m=Vo(s,f,p),I=Vo(s,f,c),v=1-Vo(s,h,c),_=1-Vo(e,h,c)),N.push(Do[l]),N.push(Fo[l]),N.push(qo[l])):98===l?(0===d?(E=1-Vo(e,h,p),b=1-Vo(s,h,p),x=Vo(s,f,p),m=Vo(e,f,p),w=Vo(e,f,c),v=1-Vo(e,h,c)):(E=Vo(s,p,h),b=Vo(e,p,h),x=1-Vo(e,p,f),m=1-Vo(s,p,f),w=1-Vo(s,c,f),v=Vo(s,c,h)),N.push(Do[l]),N.push(Fo[l]),N.push(Bo[l])):99===l?(4===d?(E=1-Vo(e,h,p),b=1-Vo(s,h,p),x=Vo(s,f,p),m=Vo(e,f,p),w=Vo(e,f,c),v=1-Vo(e,h,c)):(E=Vo(s,p,h),b=Vo(e,p,h),x=1-Vo(e,p,f),m=1-Vo(s,p,f),w=1-Vo(s,c,f),v=Vo(s,c,h)),N.push(Do[l]),N.push(Fo[l]),N.push(Go[l])):38===l?(0===d?(b=1-Vo(e,h,p),x=Vo(e,f,p),I=Vo(e,f,c),w=Vo(s,f,c),v=1-Vo(s,h,c),_=1-Vo(e,h,c)):(b=Vo(s,p,h),x=1-Vo(s,p,f),I=1-Vo(s,c,f),w=1-Vo(e,c,f),v=Vo(e,c,h),_=Vo(s,c,h)),N.push(Fo[l]),N.push(qo[l]),N.push(Bo[l])):39===l?(4===d?(b=1-Vo(e,h,p),x=Vo(e,f,p),I=Vo(e,f,c),w=Vo(s,f,c),v=1-Vo(s,h,c),_=1-Vo(e,h,c)):(b=Vo(s,p,h),x=1-Vo(s,p,f),I=1-Vo(s,c,f),w=1-Vo(e,c,f),v=Vo(e,c,h),_=Vo(s,c,h)),N.push(Fo[l]),N.push(ko[l]),N.push(Bo[l])):85===l&&(E=1,b=0,x=1,m=0,I=0,w=1,v=0,_=1),(v<0||v>1||_<0||_>1||E<0||E>1||x<0||x>1||I<0||I>1||w<0||w>1)&&console.log("MarchingSquaresJS-isoBands: "+l+" "+g+" "+c+","+h+","+p+","+f+" "+d+" "+v+" "+_+" "+E+" "+b+" "+x+" "+m+" "+I+" "+w),o.cells[a][u]={cval:l,cval_real:g,flipped:d,topleft:v,topright:_,righttop:E,rightbottom:b,bottomright:x,bottomleft:m,leftbottom:I,lefttop:w,edges:N}}}}}return o}(t,e,n);return Qi.polygons?(Qi.verbose&&console.log("MarchingSquaresJS-isoBands: returning single polygons for each grid cell"),u=function(t){var e=[],n=0;return t.cells.forEach((function(t,r){t.forEach((function(t,i){if(void 0!==t){var o=Uo[t.cval](t);"object"==typeof o&&Xo(o)?"object"==typeof o[0]&&Xo(o[0])?"object"==typeof o[0][0]&&Xo(o[0][0])?o.forEach((function(t){t.forEach((function(t){t[0]+=i,t[1]+=r})),e[n++]=t})):(o.forEach((function(t){t[0]+=i,t[1]+=r})),e[n++]=o):console.log("MarchingSquaresJS-isoBands: bandcell polygon with malformed coordinates"):console.log("MarchingSquaresJS-isoBands: bandcell polygon with null coordinates")}}))})),e}(l)):(Qi.verbose&&console.log("MarchingSquaresJS-isoBands: returning polygon paths for entire data grid"),u=function(t){for(var e=[],n=t.rows,r=t.cols,i=[],o=0;o<n;o++)for(var s=0;s<r;s++)if(void 0!==t.cells[o][s]&&t.cells[o][s].edges.length>0){var a=Ho(t.cells[o][s]),u=null,l=s,c=o;null!==a&&i.push([a.p[0]+l,a.p[1]+c]);do{if(null===(u=Wo(t.cells[c][l],a.x,a.y,a.o)))break;if(i.push([u.p[0]+l,u.p[1]+c]),l+=u.x,a=u,(c+=u.y)<0||c>=n||l<0||l>=r||void 0===t.cells[c][l]){var h=Yo(t,l-=u.x,c-=u.y,u.x,u.y,u.o);if(null===h)break;h.path.forEach((function(t){i.push(t)})),l=h.i,c=h.j,a=h}}while(void 0!==t.cells[c][l]&&t.cells[c][l].edges.length>0);e.push(i),i=[],t.cells[o][s].edges.length>0&&s--}return e}(l)),"function"==typeof Qi.successCallback&&Qi.successCallback(u),u}var to=64,eo=16,no=[],ro=[],io=[],oo=[],so=[],ao=[],uo=[],lo=[],co=[],ho=[],po=[],fo=[],go=[],yo=[],vo=[],_o=[],mo=[],xo=[],Eo=[],bo=[],wo=[],Io=[],No=[],So=[];uo[85]=ho[85]=-1,lo[85]=po[85]=0,co[85]=fo[85]=1,Eo[85]=Io[85]=1,bo[85]=No[85]=0,wo[85]=So[85]=1,no[85]=oo[85]=0,ro[85]=so[85]=-1,io[85]=vo[85]=0,_o[85]=go[85]=0,mo[85]=yo[85]=1,ao[85]=xo[85]=1,Io[1]=Io[169]=0,No[1]=No[169]=-1,So[1]=So[169]=0,go[1]=go[169]=-1,yo[1]=yo[169]=0,vo[1]=vo[169]=0,ho[4]=ho[166]=0,po[4]=po[166]=-1,fo[4]=fo[166]=1,_o[4]=_o[166]=1,mo[4]=mo[166]=0,xo[4]=xo[166]=0,uo[16]=uo[154]=0,lo[16]=lo[154]=1,co[16]=co[154]=1,oo[16]=oo[154]=1,so[16]=so[154]=0,ao[16]=ao[154]=1,Eo[64]=Eo[106]=0,bo[64]=bo[106]=1,wo[64]=wo[106]=0,no[64]=no[106]=-1,ro[64]=ro[106]=0,io[64]=io[106]=1,Eo[2]=Eo[168]=0,bo[2]=bo[168]=-1,wo[2]=wo[168]=1,Io[2]=Io[168]=0,No[2]=No[168]=-1,So[2]=So[168]=0,go[2]=go[168]=-1,yo[2]=yo[168]=0,vo[2]=vo[168]=0,_o[2]=_o[168]=-1,mo[2]=mo[168]=0,xo[2]=xo[168]=1,uo[8]=uo[162]=0,lo[8]=lo[162]=-1,co[8]=co[162]=0,ho[8]=ho[162]=0,po[8]=po[162]=-1,fo[8]=fo[162]=1,go[8]=go[162]=1,yo[8]=yo[162]=0,vo[8]=vo[162]=1,_o[8]=_o[162]=1,mo[8]=mo[162]=0,xo[8]=xo[162]=0,uo[32]=uo[138]=0,lo[32]=lo[138]=1,co[32]=co[138]=1,ho[32]=ho[138]=0,po[32]=po[138]=1,fo[32]=fo[138]=0,no[32]=no[138]=1,ro[32]=ro[138]=0,io[32]=io[138]=0,oo[32]=oo[138]=1,so[32]=so[138]=0,ao[32]=ao[138]=1,Io[128]=Io[42]=0,No[128]=No[42]=1,So[128]=So[42]=1,Eo[128]=Eo[42]=0,bo[128]=bo[42]=1,wo[128]=wo[42]=0,no[128]=no[42]=-1,ro[128]=ro[42]=0,io[128]=io[42]=1,oo[128]=oo[42]=-1,so[128]=so[42]=0,ao[128]=ao[42]=0,ho[5]=ho[165]=-1,po[5]=po[165]=0,fo[5]=fo[165]=0,Io[5]=Io[165]=1,No[5]=No[165]=0,So[5]=So[165]=0,_o[20]=_o[150]=0,mo[20]=mo[150]=1,xo[20]=xo[150]=1,oo[20]=oo[150]=0,so[20]=so[150]=-1,ao[20]=ao[150]=1,uo[80]=uo[90]=-1,lo[80]=lo[90]=0,co[80]=co[90]=1,Eo[80]=Eo[90]=1,bo[80]=bo[90]=0,wo[80]=wo[90]=1,go[65]=go[105]=0,yo[65]=yo[105]=1,vo[65]=vo[105]=0,no[65]=no[105]=0,ro[65]=ro[105]=-1,io[65]=io[105]=0,uo[160]=uo[10]=-1,lo[160]=lo[10]=0,co[160]=co[10]=1,ho[160]=ho[10]=-1,po[160]=po[10]=0,fo[160]=fo[10]=0,Io[160]=Io[10]=1,No[160]=No[10]=0,So[160]=So[10]=0,Eo[160]=Eo[10]=1,bo[160]=bo[10]=0,wo[160]=wo[10]=1,_o[130]=_o[40]=0,mo[130]=mo[40]=1,xo[130]=xo[40]=1,go[130]=go[40]=0,yo[130]=yo[40]=1,vo[130]=vo[40]=0,no[130]=no[40]=0,ro[130]=ro[40]=-1,io[130]=io[40]=0,oo[130]=oo[40]=0,so[130]=so[40]=-1,ao[130]=ao[40]=1,ho[37]=ho[133]=0,po[37]=po[133]=1,fo[37]=fo[133]=1,Io[37]=Io[133]=0,No[37]=No[133]=1,So[37]=So[133]=0,no[37]=no[133]=-1,ro[37]=ro[133]=0,io[37]=io[133]=0,oo[37]=oo[133]=1,so[37]=so[133]=0,ao[37]=ao[133]=0,_o[148]=_o[22]=-1,mo[148]=mo[22]=0,xo[148]=xo[22]=0,Io[148]=Io[22]=0,No[148]=No[22]=-1,So[148]=So[22]=1,Eo[148]=Eo[22]=0,bo[148]=bo[22]=1,wo[148]=wo[22]=1,oo[148]=oo[22]=-1,so[148]=so[22]=0,ao[148]=ao[22]=1,uo[82]=uo[88]=0,lo[82]=lo[88]=-1,co[82]=co[88]=1,_o[82]=_o[88]=1,mo[82]=mo[88]=0,xo[82]=xo[88]=1,go[82]=go[88]=-1,yo[82]=yo[88]=0,vo[82]=vo[88]=1,Eo[82]=Eo[88]=0,bo[82]=bo[88]=-1,wo[82]=wo[88]=0,uo[73]=uo[97]=0,lo[73]=lo[97]=1,co[73]=co[97]=0,ho[73]=ho[97]=0,po[73]=po[97]=-1,fo[73]=fo[97]=0,go[73]=go[97]=1,yo[73]=yo[97]=0,vo[73]=vo[97]=0,no[73]=no[97]=1,ro[73]=ro[97]=0,io[73]=io[97]=1,uo[145]=uo[25]=0,lo[145]=lo[25]=-1,co[145]=co[25]=0,go[145]=go[25]=1,yo[145]=yo[25]=0,vo[145]=vo[25]=1,Io[145]=Io[25]=0,No[145]=No[25]=1,So[145]=So[25]=1,oo[145]=oo[25]=-1,so[145]=so[25]=0,ao[145]=ao[25]=0,ho[70]=ho[100]=0,po[70]=po[100]=1,fo[70]=fo[100]=0,_o[70]=_o[100]=-1,mo[70]=mo[100]=0,xo[70]=xo[100]=1,Eo[70]=Eo[100]=0,bo[70]=bo[100]=-1,wo[70]=wo[100]=1,no[70]=no[100]=1,ro[70]=ro[100]=0,io[70]=io[100]=0,ho[101]=ho[69]=0,po[101]=po[69]=1,fo[101]=fo[69]=0,no[101]=no[69]=1,ro[101]=ro[69]=0,io[101]=io[69]=0,Io[149]=Io[21]=0,No[149]=No[21]=1,So[149]=So[21]=1,oo[149]=oo[21]=-1,so[149]=so[21]=0,ao[149]=ao[21]=0,_o[86]=_o[84]=-1,mo[86]=mo[84]=0,xo[86]=xo[84]=1,Eo[86]=Eo[84]=0,bo[86]=bo[84]=-1,wo[86]=wo[84]=1,uo[89]=uo[81]=0,lo[89]=lo[81]=-1,co[89]=co[81]=0,go[89]=go[81]=1,yo[89]=yo[81]=0,vo[89]=vo[81]=1,uo[96]=uo[74]=0,lo[96]=lo[74]=1,co[96]=co[74]=0,ho[96]=ho[74]=-1,po[96]=po[74]=0,fo[96]=fo[74]=1,Eo[96]=Eo[74]=1,bo[96]=bo[74]=0,wo[96]=wo[74]=0,no[96]=no[74]=1,ro[96]=ro[74]=0,io[96]=io[74]=1,uo[24]=uo[146]=0,lo[24]=lo[146]=-1,co[24]=co[146]=1,_o[24]=_o[146]=1,mo[24]=mo[146]=0,xo[24]=xo[146]=1,go[24]=go[146]=0,yo[24]=yo[146]=1,vo[24]=vo[146]=1,oo[24]=oo[146]=0,so[24]=so[146]=-1,ao[24]=ao[146]=0,ho[6]=ho[164]=-1,po[6]=po[164]=0,fo[6]=fo[164]=1,_o[6]=_o[164]=-1,mo[6]=mo[164]=0,xo[6]=xo[164]=0,Io[6]=Io[164]=0,No[6]=No[164]=-1,So[6]=So[164]=1,Eo[6]=Eo[164]=1,bo[6]=bo[164]=0,wo[6]=wo[164]=0,go[129]=go[41]=0,yo[129]=yo[41]=1,vo[129]=vo[41]=1,Io[129]=Io[41]=0,No[129]=No[41]=1,So[129]=So[41]=0,no[129]=no[41]=-1,ro[129]=ro[41]=0,io[129]=io[41]=0,oo[129]=oo[41]=0,so[129]=so[41]=-1,ao[129]=ao[41]=0,_o[66]=_o[104]=0,mo[66]=mo[104]=1,xo[66]=xo[104]=0,go[66]=go[104]=-1,yo[66]=yo[104]=0,vo[66]=vo[104]=1,Eo[66]=Eo[104]=0,bo[66]=bo[104]=-1,wo[66]=wo[104]=0,no[66]=no[104]=0,ro[66]=ro[104]=-1,io[66]=io[104]=1,uo[144]=uo[26]=-1,lo[144]=lo[26]=0,co[144]=co[26]=0,Io[144]=Io[26]=1,No[144]=No[26]=0,So[144]=So[26]=1,Eo[144]=Eo[26]=0,bo[144]=bo[26]=1,wo[144]=wo[26]=1,oo[144]=oo[26]=-1,so[144]=so[26]=0,ao[144]=ao[26]=1,ho[36]=ho[134]=0,po[36]=po[134]=1,fo[36]=fo[134]=1,_o[36]=_o[134]=0,mo[36]=mo[134]=1,xo[36]=xo[134]=0,no[36]=no[134]=0,ro[36]=ro[134]=-1,io[36]=io[134]=1,oo[36]=oo[134]=1,so[36]=so[134]=0,ao[36]=ao[134]=0,uo[9]=uo[161]=-1,lo[9]=lo[161]=0,co[9]=co[161]=0,ho[9]=ho[161]=0,po[9]=po[161]=-1,fo[9]=fo[161]=0,go[9]=go[161]=1,yo[9]=yo[161]=0,vo[9]=vo[161]=0,Io[9]=Io[161]=1,No[9]=No[161]=0,So[9]=So[161]=1,uo[136]=0,lo[136]=1,co[136]=1,ho[136]=0,po[136]=1,fo[136]=0,_o[136]=-1,mo[136]=0,xo[136]=1,go[136]=-1,yo[136]=0,vo[136]=0,Io[136]=0,No[136]=-1,So[136]=0,Eo[136]=0,bo[136]=-1,wo[136]=1,no[136]=1,ro[136]=0,io[136]=0,oo[136]=1,so[136]=0,ao[136]=1,uo[34]=0,lo[34]=-1,co[34]=0,ho[34]=0,po[34]=-1,fo[34]=1,_o[34]=1,mo[34]=0,xo[34]=0,go[34]=1,yo[34]=0,vo[34]=1,Io[34]=0,No[34]=1,So[34]=1,Eo[34]=0,bo[34]=1,wo[34]=0,no[34]=-1,ro[34]=0,io[34]=1,oo[34]=-1,so[34]=0,ao[34]=0,uo[35]=0,lo[35]=1,co[35]=1,ho[35]=0,po[35]=-1,fo[35]=1,_o[35]=1,mo[35]=0,xo[35]=0,go[35]=-1,yo[35]=0,vo[35]=0,Io[35]=0,No[35]=-1,So[35]=0,Eo[35]=0,bo[35]=1,wo[35]=0,no[35]=-1,ro[35]=0,io[35]=1,oo[35]=1,so[35]=0,ao[35]=1,uo[153]=0,lo[153]=1,co[153]=1,go[153]=-1,yo[153]=0,vo[153]=0,Io[153]=0,No[153]=-1,So[153]=0,oo[153]=1,so[153]=0,ao[153]=1,ho[102]=0,po[102]=-1,fo[102]=1,_o[102]=1,mo[102]=0,xo[102]=0,Eo[102]=0,bo[102]=1,wo[102]=0,no[102]=-1,ro[102]=0,io[102]=1,uo[155]=0,lo[155]=-1,co[155]=0,go[155]=1,yo[155]=0,vo[155]=1,Io[155]=0,No[155]=1,So[155]=1,oo[155]=-1,so[155]=0,ao[155]=0,ho[103]=0,po[103]=1,fo[103]=0,_o[103]=-1,mo[103]=0,xo[103]=1,Eo[103]=0,bo[103]=-1,wo[103]=1,no[103]=1,ro[103]=0,io[103]=0,uo[152]=0,lo[152]=1,co[152]=1,_o[152]=-1,mo[152]=0,xo[152]=1,go[152]=-1,yo[152]=0,vo[152]=0,Io[152]=0,No[152]=-1,So[152]=0,Eo[152]=0,bo[152]=-1,wo[152]=1,oo[152]=1,so[152]=0,ao[152]=1,uo[156]=0,lo[156]=-1,co[156]=1,_o[156]=1,mo[156]=0,xo[156]=1,go[156]=-1,yo[156]=0,vo[156]=0,Io[156]=0,No[156]=-1,So[156]=0,Eo[156]=0,bo[156]=1,wo[156]=1,oo[156]=-1,so[156]=0,ao[156]=1,uo[137]=0,lo[137]=1,co[137]=1,ho[137]=0,po[137]=1,fo[137]=0,go[137]=-1,yo[137]=0,vo[137]=0,Io[137]=0,No[137]=-1,So[137]=0,no[137]=1,ro[137]=0,io[137]=0,oo[137]=1,so[137]=0,ao[137]=1,uo[139]=0,lo[139]=1,co[139]=1,ho[139]=0,po[139]=-1,fo[139]=0,go[139]=1,yo[139]=0,vo[139]=0,Io[139]=0,No[139]=1,So[139]=0,no[139]=-1,ro[139]=0,io[139]=0,oo[139]=1,so[139]=0,ao[139]=1,uo[98]=0,lo[98]=-1,co[98]=0,ho[98]=0,po[98]=-1,fo[98]=1,_o[98]=1,mo[98]=0,xo[98]=0,go[98]=1,yo[98]=0,vo[98]=1,Eo[98]=0,bo[98]=1,wo[98]=0,no[98]=-1,ro[98]=0,io[98]=1,uo[99]=0,lo[99]=1,co[99]=0,ho[99]=0,po[99]=-1,fo[99]=1,_o[99]=1,mo[99]=0,xo[99]=0,go[99]=-1,yo[99]=0,vo[99]=1,Eo[99]=0,bo[99]=-1,wo[99]=0,no[99]=1,ro[99]=0,io[99]=1,ho[38]=0,po[38]=-1,fo[38]=1,_o[38]=1,mo[38]=0,xo[38]=0,Io[38]=0,No[38]=1,So[38]=1,Eo[38]=0,bo[38]=1,wo[38]=0,no[38]=-1,ro[38]=0,io[38]=1,oo[38]=-1,so[38]=0,ao[38]=0,ho[39]=0,po[39]=1,fo[39]=1,_o[39]=-1,mo[39]=0,xo[39]=0,Io[39]=0,No[39]=-1,So[39]=1,Eo[39]=0,bo[39]=1,wo[39]=0,no[39]=-1,ro[39]=0,io[39]=1,oo[39]=1,so[39]=0,ao[39]=0;var Co=function(t){return[[t.bottomleft,0],[0,0],[0,t.leftbottom]]},Po=function(t){return[[1,t.rightbottom],[1,0],[t.bottomright,0]]},Mo=function(t){return[[t.topright,1],[1,1],[1,t.righttop]]},Lo=function(t){return[[0,t.lefttop],[0,1],[t.topleft,1]]},Oo=function(t){return[[t.bottomright,0],[t.bottomleft,0],[0,t.leftbottom],[0,t.lefttop]]},Ro=function(t){return[[t.bottomright,0],[t.bottomleft,0],[1,t.righttop],[1,t.rightbottom]]},To=function(t){return[[1,t.righttop],[1,t.rightbottom],[t.topleft,1],[t.topright,1]]},Ao=function(t){return[[0,t.leftbottom],[0,t.lefttop],[t.topleft,1],[t.topright,1]]},Do=[],Fo=[],ko=[],Go=[],qo=[],Bo=[],zo=[],jo=[];Go[1]=qo[1]=18,Go[169]=qo[169]=18,ko[4]=Fo[4]=12,ko[166]=Fo[166]=12,Do[16]=jo[16]=4,Do[154]=jo[154]=4,Bo[64]=zo[64]=22,Bo[106]=zo[106]=22,ko[2]=Bo[2]=17,Go[2]=qo[2]=18,ko[168]=Bo[168]=17,Go[168]=qo[168]=18,Do[8]=Go[8]=9,Fo[8]=ko[8]=12,Do[162]=Go[162]=9,Fo[162]=ko[162]=12,Do[32]=jo[32]=4,Fo[32]=zo[32]=1,Do[138]=jo[138]=4,Fo[138]=zo[138]=1,qo[128]=jo[128]=21,Bo[128]=zo[128]=22,qo[42]=jo[42]=21,Bo[42]=zo[42]=22,Fo[5]=qo[5]=14,Fo[165]=qo[165]=14,ko[20]=jo[20]=6,ko[150]=jo[150]=6,Do[80]=Bo[80]=11,Do[90]=Bo[90]=11,Go[65]=zo[65]=3,Go[105]=zo[105]=3,Do[160]=Bo[160]=11,Fo[160]=qo[160]=14,Do[10]=Bo[10]=11,Fo[10]=qo[10]=14,ko[130]=jo[130]=6,Go[130]=zo[130]=3,ko[40]=jo[40]=6,Go[40]=zo[40]=3,Fo[101]=zo[101]=1,Fo[69]=zo[69]=1,qo[149]=jo[149]=21,qo[21]=jo[21]=21,ko[86]=Bo[86]=17,ko[84]=Bo[84]=17,Do[89]=Go[89]=9,Do[81]=Go[81]=9,Do[96]=zo[96]=0,Fo[96]=Bo[96]=15,Do[74]=zo[74]=0,Fo[74]=Bo[74]=15,Do[24]=ko[24]=8,Go[24]=jo[24]=7,Do[146]=ko[146]=8,Go[146]=jo[146]=7,Fo[6]=Bo[6]=15,ko[6]=qo[6]=16,Fo[164]=Bo[164]=15,ko[164]=qo[164]=16,Go[129]=jo[129]=7,qo[129]=zo[129]=20,Go[41]=jo[41]=7,qo[41]=zo[41]=20,ko[66]=zo[66]=2,Go[66]=Bo[66]=19,ko[104]=zo[104]=2,Go[104]=Bo[104]=19,Do[144]=qo[144]=10,Bo[144]=jo[144]=23,Do[26]=qo[26]=10,Bo[26]=jo[26]=23,Fo[36]=jo[36]=5,ko[36]=zo[36]=2,Fo[134]=jo[134]=5,ko[134]=zo[134]=2,Do[9]=qo[9]=10,Fo[9]=Go[9]=13,Do[161]=qo[161]=10,Fo[161]=Go[161]=13,Fo[37]=jo[37]=5,qo[37]=zo[37]=20,Fo[133]=jo[133]=5,qo[133]=zo[133]=20,ko[148]=qo[148]=16,Bo[148]=jo[148]=23,ko[22]=qo[22]=16,Bo[22]=jo[22]=23,Do[82]=ko[82]=8,Go[82]=Bo[82]=19,Do[88]=ko[88]=8,Go[88]=Bo[88]=19,Do[73]=zo[73]=0,Fo[73]=Go[73]=13,Do[97]=zo[97]=0,Fo[97]=Go[97]=13,Do[145]=Go[145]=9,qo[145]=jo[145]=21,Do[25]=Go[25]=9,qo[25]=jo[25]=21,Fo[70]=zo[70]=1,ko[70]=Bo[70]=17,Fo[100]=zo[100]=1,ko[100]=Bo[100]=17,Do[34]=Go[34]=9,Fo[34]=ko[34]=12,qo[34]=jo[34]=21,Bo[34]=zo[34]=22,Do[136]=jo[136]=4,Fo[136]=zo[136]=1,ko[136]=Bo[136]=17,Go[136]=qo[136]=18,Do[35]=jo[35]=4,Fo[35]=ko[35]=12,Go[35]=qo[35]=18,Bo[35]=zo[35]=22,Do[153]=jo[153]=4,Go[153]=qo[153]=18,Fo[102]=ko[102]=12,Bo[102]=zo[102]=22,Do[155]=Go[155]=9,qo[155]=jo[155]=23,Fo[103]=zo[103]=1,ko[103]=Bo[103]=17,Do[152]=jo[152]=4,ko[152]=Bo[152]=17,Go[152]=qo[152]=18,Do[156]=ko[156]=8,Go[156]=qo[156]=18,Bo[156]=jo[156]=23,Do[137]=jo[137]=4,Fo[137]=zo[137]=1,Go[137]=qo[137]=18,Do[139]=jo[139]=4,Fo[139]=Go[139]=13,qo[139]=zo[139]=20,Do[98]=Go[98]=9,Fo[98]=ko[98]=12,Bo[98]=zo[98]=22,Do[99]=zo[99]=0,Fo[99]=ko[99]=12,Go[99]=Bo[99]=19,Fo[38]=ko[38]=12,qo[38]=jo[38]=21,Bo[38]=zo[38]=22,Fo[39]=jo[39]=5,ko[39]=qo[39]=16,Bo[39]=zo[39]=22;var Uo=[];function Vo(t,e,n){return(t-e)/(n-e)}function Xo(t){return t.constructor.toString().indexOf("Array")>-1}function Yo(t,e,n,r,i,o){for(var s=t.cells[n][e],a=s.cval_real,u=e+r,l=n+i,c=[],h=!1;!h;){if(void 0===t.cells[l]||void 0===t.cells[l][u])if(l-=i,u-=r,a=(s=t.cells[l][u]).cval_real,-1===i)if(0===o)if(1&a)c.push([u,l]),r=-1,i=0,o=0;else{if(!(4&a)){c.push([u+s.bottomright,l]),r=0,i=1,o=1,h=!0;break}c.push([u+1,l]),r=1,i=0,o=0}else{if(!(1&a)){if(4&a){c.push([u+s.bottomright,l]),r=0,i=1,o=1,h=!0;break}c.push([u+s.bottomleft,l]),r=0,i=1,o=0,h=!0;break}c.push([u,l]),r=-1,i=0,o=0}else if(1===i)if(0===o){if(!(a&eo)){if(a&to){c.push([u+s.topleft,l+1]),r=0,i=-1,o=0,h=!0;break}c.push([u+s.topright,l+1]),r=0,i=-1,o=1,h=!0;break}c.push([u+1,l+1]),r=1,i=0,o=1}else c.push([u+1,l+1]),r=1,i=0,o=1;else if(-1===r)if(0===o){if(!(a&to)){if(1&a){c.push([u,l+s.leftbottom]),r=1,i=0,o=0,h=!0;break}c.push([u,l+s.lefttop]),r=1,i=0,o=1,h=!0;break}c.push([u,l+1]),r=0,i=1,o=0}else{if(!(a&to)){console.log("MarchingSquaresJS-isoBands: wtf");break}c.push([u,l+1]),r=0,i=1,o=0}else{if(1!==r){console.log("MarchingSquaresJS-isoBands: we came from nowhere!");break}if(0===o){if(!(4&a)){c.push([u+1,l+s.rightbottom]),r=-1,i=0,o=0,h=!0;break}c.push([u+1,l]),r=0,i=-1,o=1}else{if(!(4&a)){if(a&eo){c.push([u+1,l+s.righttop]),r=-1,i=0,o=1;break}c.push([u+1,l+s.rightbottom]),r=-1,i=0,o=0,h=!0;break}c.push([u+1,l]),r=0,i=-1,o=1}}else if(a=(s=t.cells[l][u]).cval_real,-1===r)if(0===o)if(void 0!==t.cells[l-1]&&void 0!==t.cells[l-1][u])r=0,i=-1,o=1;else{if(!(1&a)){c.push([u+s.bottomright,l]),r=0,i=1,o=1,h=!0;break}c.push([u,l])}else{if(!(a&to)){console.log("MarchingSquaresJS-isoBands: found entry from top at "+u+","+l);break}console.log("MarchingSquaresJS-isoBands: proceeding in x-direction!")}else if(1===r){if(0===o){console.log("MarchingSquaresJS-isoBands: wtf");break}if(void 0!==t.cells[l+1]&&void 0!==t.cells[l+1][u])r=0,i=1,o=0;else{if(!(a&eo)){c.push([u+s.topleft,l+1]),r=0,i=-1,o=0,h=!0;break}c.push([u+1,l+1]),r=1,i=0,o=1}}else if(-1===i){if(1!==o){console.log("MarchingSquaresJS-isoBands: wtf");break}if(void 0!==t.cells[l][u+1])r=1,i=0,o=1;else{if(!(4&a)){c.push([u+1,l+s.righttop]),r=-1,i=0,o=1,h=!0;break}c.push([u+1,l]),r=0,i=-1,o=1}}else{if(1!==i){console.log("MarchingSquaresJS-isoBands: where did we came from???");break}if(0!==o){console.log("MarchingSquaresJS-isoBands: wtf");break}if(void 0!==t.cells[l][u-1])r=-1,i=0,o=0;else{if(!(a&to)){c.push([u,l+s.leftbottom]),r=1,i=0,o=0,h=!0;break}c.push([u,l+1]),r=0,i=1,o=0}}if(l+=i,(u+=r)===e&&l===n)break}return{path:c,i:u,j:l,x:r,y:i,o:o}}function Ho(t){if(t.edges.length>0){var e=t.edges[t.edges.length-1],n=t.cval_real;switch(e){case 0:return n&eo?{p:[1,t.righttop],x:-1,y:0,o:1}:{p:[t.topleft,1],x:0,y:-1,o:0};case 1:return 4&n?{p:[t.topleft,1],x:0,y:-1,o:0}:{p:[1,t.rightbottom],x:-1,y:0,o:0};case 2:return 4&n?{p:[t.bottomright,0],x:0,y:1,o:1}:{p:[t.topleft,1],x:0,y:-1,o:0};case 3:return 1&n?{p:[t.topleft,1],x:0,y:-1,o:0}:{p:[t.bottomleft,0],x:0,y:1,o:0};case 4:return n&eo?{p:[1,t.righttop],x:-1,y:0,o:1}:{p:[t.topright,1],x:0,y:-1,o:1};case 5:return 4&n?{p:[t.topright,1],x:0,y:-1,o:1}:{p:[1,t.rightbottom],x:-1,y:0,o:0};case 6:return 4&n?{p:[t.bottomright,0],x:0,y:1,o:1}:{p:[t.topright,1],x:0,y:-1,o:1};case 7:return 1&n?{p:[t.topright,1],x:0,y:-1,o:1}:{p:[t.bottomleft,0],x:0,y:1,o:0};case 8:return 4&n?{p:[t.bottomright,0],x:0,y:1,o:1}:{p:[1,t.righttop],x:-1,y:0,o:1};case 9:return 1&n?{p:[1,t.righttop],x:-1,y:0,o:1}:{p:[t.bottomleft,0],x:0,y:1,o:0};case 10:return 1&n?{p:[0,t.leftbottom],x:1,y:0,o:0}:{p:[1,t.righttop],x:-1,y:0,o:1};case 11:return n&to?{p:[1,t.righttop],x:-1,y:0,o:1}:{p:[0,t.lefttop],x:1,y:0,o:1};case 12:return 4&n?{p:[t.bottomright,0],x:0,y:1,o:1}:{p:[1,t.rightbottom],x:-1,y:0,o:0};case 13:return 1&n?{p:[1,t.rightbottom],x:-1,y:0,o:0}:{p:[t.bottomleft,0],x:0,y:1,o:0};case 14:return 1&n?{p:[0,t.leftbottom],x:1,y:0,o:0}:{p:[1,t.rightbottom],x:-1,y:0,o:0};case 15:return n&to?{p:[1,t.rightbottom],x:-1,y:0,o:0}:{p:[0,t.lefttop],x:1,y:0,o:1};case 16:return 4&n?{p:[t.bottomright,0],x:0,y:1,o:1}:{p:[0,t.leftbottom],x:1,y:0,o:0};case 17:return n&to?{p:[t.bottomright,0],x:0,y:1,o:1}:{p:[0,t.lefttop],x:1,y:0,o:1};case 18:return 1&n?{p:[0,t.leftbottom],x:1,y:0,o:0}:{p:[t.bottomleft,0],x:0,y:1,o:0};case 19:return n&to?{p:[t.bottomleft,0],x:0,y:1,o:0}:{p:[0,t.lefttop],x:1,y:0,o:1};case 20:return n&to?{p:[t.topleft,1],x:0,y:-1,o:0}:{p:[0,t.leftbottom],x:1,y:0,o:0};case 21:return n&eo?{p:[0,t.leftbottom],x:1,y:0,o:0}:{p:[t.topright,1],x:0,y:-1,o:1};case 22:return n&to?{p:[t.topleft,1],x:0,y:-1,o:0}:{p:[0,t.lefttop],x:1,y:0,o:1};case 23:return n&eo?{p:[0,t.lefttop],x:1,y:0,o:1}:{p:[t.topright,1],x:0,y:-1,o:1};default:console.log("MarchingSquaresJS-isoBands: edge index out of range!"),console.log(t)}}return null}function Wo(t,e,n,r){var i,o,s,a,u,l=t.cval;switch(e){case-1:switch(r){case 0:i=Fo[l],s=ho[l],a=po[l],u=fo[l];break;default:i=Do[l],s=uo[l],a=lo[l],u=co[l]}break;case 1:switch(r){case 0:i=qo[l],s=Io[l],a=No[l],u=So[l];break;default:i=Bo[l],s=Eo[l],a=bo[l],u=wo[l]}break;default:switch(n){case-1:switch(r){case 0:i=zo[l],s=no[l],a=ro[l],u=io[l];break;default:i=jo[l],s=oo[l],a=so[l],u=ao[l]}break;case 1:switch(r){case 0:i=Go[l],s=go[l],a=yo[l],u=vo[l];break;default:i=ko[l],s=_o[l],a=mo[l],u=xo[l]}}}if(o=t.edges.indexOf(i),void 0===t.edges[o])return null;switch(function(t,e){delete t.edges[e];for(var n=e+1;n<t.edges.length;n++)t.edges[n-1]=t.edges[n];t.edges.pop()}(t,o),l=t.cval_real,i){case 0:l&eo?(e=t.topleft,n=1):(e=1,n=t.righttop);break;case 1:4&l?(e=1,n=t.rightbottom):(e=t.topleft,n=1);break;case 2:4&l?(e=t.topleft,n=1):(e=t.bottomright,n=0);break;case 3:1&l?(e=t.bottomleft,n=0):(e=t.topleft,n=1);break;case 4:l&eo?(e=t.topright,n=1):(e=1,n=t.righttop);break;case 5:4&l?(e=1,n=t.rightbottom):(e=t.topright,n=1);break;case 6:4&l?(e=t.topright,n=1):(e=t.bottomright,n=0);break;case 7:1&l?(e=t.bottomleft,n=0):(e=t.topright,n=1);break;case 8:4&l?(e=1,n=t.righttop):(e=t.bottomright,n=0);break;case 9:1&l?(e=t.bottomleft,n=0):(e=1,n=t.righttop);break;case 10:1&l?(e=1,n=t.righttop):(e=0,n=t.leftbottom);break;case 11:l&to?(e=0,n=t.lefttop):(e=1,n=t.righttop);break;case 12:4&l?(e=1,n=t.rightbottom):(e=t.bottomright,n=0);break;case 13:1&l?(e=t.bottomleft,n=0):(e=1,n=t.rightbottom);break;case 14:1&l?(e=1,n=t.rightbottom):(e=0,n=t.leftbottom);break;case 15:l&to?(e=0,n=t.lefttop):(e=1,n=t.rightbottom);break;case 16:4&l?(e=0,n=t.leftbottom):(e=t.bottomright,n=0);break;case 17:l&to?(e=0,n=t.lefttop):(e=t.bottomright,n=0);break;case 18:1&l?(e=t.bottomleft,n=0):(e=0,n=t.leftbottom);break;case 19:l&to?(e=0,n=t.lefttop):(e=t.bottomleft,n=0);break;case 20:l&to?(e=0,n=t.leftbottom):(e=t.topleft,n=1);break;case 21:l&eo?(e=t.topright,n=1):(e=0,n=t.leftbottom);break;case 22:l&to?(e=0,n=t.lefttop):(e=t.topleft,n=1);break;case 23:l&eo?(e=t.topright,n=1):(e=0,n=t.lefttop);break;default:return console.log("MarchingSquaresJS-isoBands: edge index out of range!"),console.log(t),null}return void 0!==e&&void 0!==n&&void 0!==s&&void 0!==a&&void 0!==u||(console.log("MarchingSquaresJS-isoBands: undefined value!"),console.log(t),console.log(e+" "+n+" "+s+" "+a+" "+u)),{p:[e,n],x:s,y:a,o:u}}function Jo(t){var e=[],n=[];t.forEach((function(t){var r=jr(l([t]));n.push(r),e.push({ring:t,area:r})})),n.sort((function(t,e){return e-t}));var r=[];return n.forEach((function(t){for(var n=0;n<e.length;n++)if(e[n].area===t){r.push(e[n].ring),e.splice(n,1);break}})),r}function Zo(t){for(var e=t.map((function(t){return{lrCoordinates:t,grouped:!1}})),n=[];!Qo(e);)for(var r=0;r<e.length;r++)if(!e[r].grouped){var i=[];i.push(e[r].lrCoordinates),e[r].grouped=!0;for(var o=l([e[r].lrCoordinates]),s=r+1;s<e.length;s++){if(!e[s].grouped)Ko(l([e[s].lrCoordinates]),o)&&(i.push(e[s].lrCoordinates),e[s].grouped=!0)}n.push(i)}return n}function Ko(t,e){for(var n=bn(t),r=0;r<n.features.length;r++)if(!ye(n.features[r],e))return!1;return!0}function Qo(t){for(var e=0;e<t.length;e++)if(!1===t[e].grouped)return!1;return!0}function $o(t,e,n){if(!P(n=n||{}))throw new Error("options is invalid");var r=n.pivot,i=n.mutate;if(!t)throw new Error("geojson is required");if(null==e||isNaN(e))throw new Error("angle is required");return 0===e||(r||(r=En(t)),!1!==i&&void 0!==i||(t=Ie(t)),R(t,(function(t){var n=Bi(r,t)+e,i=Ar(r,t),o=Q(ji(r,i,n));t[0]=o[0],t[1]=o[1]}))),t}function ts(t,e,n){if(!P(n=n||{}))throw new Error("options is invalid");var r=n.origin,i=n.mutate;if(!t)throw new Error("geojson required");if("number"!=typeof e||0===e)throw new Error("invalid factor");var o=Array.isArray(r)||"object"==typeof r;return!0!==i&&(t=Ie(t)),"FeatureCollection"!==t.type||o?es(t,e,r):(F(t,(function(n,i){t.features[i]=es(n,e,r)})),t)}function es(t,e,n){var r="Point"===it(t);return n=function(t,e){null==e&&(e="centroid");if(Array.isArray(e)||"object"==typeof e)return K(e);var n=t.bbox?t.bbox:Z(t),r=n[0],i=n[1],o=n[2],s=n[3];switch(e){case"sw":case"southwest":case"westsouth":case"bottomleft":return a([r,i]);case"se":case"southeast":case"eastsouth":case"bottomright":return a([o,i]);case"nw":case"northwest":case"westnorth":case"topleft":return a([r,s]);case"ne":case"northeast":case"eastnorth":case"topright":return a([o,s]);case"center":return xn(t);case void 0:case null:case"centroid":return En(t);default:throw new Error("invalid origin")}}(t,n),1===e||r||R(t,(function(t){var r=Ar(n,t),i=Bi(n,t),o=Q(ji(n,r*e,i));t[0]=o[0],t[1]=o[1],3===t.length&&(t[2]*=e)})),t}function ns(t){var e=t[0],n=t[1];return[n[0]-e[0],n[1]-e[1]]}function rs(t,e){return t[0]*e[1]-e[0]*t[1]}function is(t,e){return!function(t,e){return 0===rs(ns(t),ns(e))}(t,e)&&function(t,e){var n,r,i=t[0],o=ns(t),s=e[0],a=ns(e),u=rs(o,a);return function(t,e){return[t[0]+e[0],t[1]+e[1]]}(i,function(t,e){return[t*e[0],t*e[1]]}(rs((r=i,[(n=s)[0]-r[0],n[1]-r[1]]),a)/u,o))}(t,e)}function os(t,e,n){var r=[],i=E(e,n),o=Q(t),s=[];return o.forEach((function(t,e){if(e!==o.length-1){var n=(l=t,c=o[e+1],h=i,p=Math.sqrt((l[0]-c[0])*(l[0]-c[0])+(l[1]-c[1])*(l[1]-c[1])),f=l[0]+h*(c[1]-l[1])/p,g=c[0]+h*(c[1]-l[1])/p,d=l[1]+h*(l[0]-c[0])/p,y=c[1]+h*(l[0]-c[0])/p,[[f,d],[g,y]]);if(r.push(n),e>0){var a=r[e-1],u=is(n,a);!1!==u&&(a[1]=u,n[0]=u),s.push(a[0]),e===o.length-2&&(s.push(n[0]),s.push(n[1]))}2===o.length&&(s.push(n[0]),s.push(n[1]))}var l,c,h,p,f,g,d,y})),h(s,t.properties)}function ss(t,e,n){var r=e[0]-t[0],i=e[1]-t[1],o=n[0]-e[0];return function(t){return(t>0)-(t<0)||+t}(r*(n[1]-e[1])-o*i)}function as(t,e){return e.geometry.coordinates[0].every((function(e){return ye(a(e),t)}))}Uo[1]=Uo[169]=Co,Uo[4]=Uo[166]=Po,Uo[16]=Uo[154]=Mo,Uo[64]=Uo[106]=Lo,Uo[168]=Uo[2]=Oo,Uo[162]=Uo[8]=Ro,Uo[138]=Uo[32]=To,Uo[42]=Uo[128]=Ao,Uo[5]=Uo[165]=function(t){return[[0,0],[0,t.leftbottom],[1,t.rightbottom],[1,0]]},Uo[20]=Uo[150]=function(t){return[[1,0],[t.bottomright,0],[t.topright,1],[1,1]]},Uo[80]=Uo[90]=function(t){return[[1,1],[1,t.righttop],[0,t.lefttop],[0,1]]},Uo[65]=Uo[105]=function(t){return[[t.bottomleft,0],[0,0],[0,1],[t.topleft,1]]},Uo[160]=Uo[10]=function(t){return[[1,t.righttop],[1,t.rightbottom],[0,t.leftbottom],[0,t.lefttop]]},Uo[130]=Uo[40]=function(t){return[[t.topleft,1],[t.topright,1],[t.bottomright,0],[t.bottomleft,0]]},Uo[85]=function(){return[[0,0],[0,1],[1,1],[1,0]]},Uo[101]=Uo[69]=function(t){return[[1,t.rightbottom],[1,0],[0,0],[0,1],[t.topleft,1]]},Uo[149]=Uo[21]=function(t){return[[t.topright,1],[1,1],[1,0],[0,0],[0,t.leftbottom]]},Uo[86]=Uo[84]=function(t){return[[1,0],[t.bottomright,0],[0,t.lefttop],[0,1],[1,1]]},Uo[89]=Uo[81]=function(t){return[[1,1],[1,t.righttop],[t.bottomleft,0],[0,0],[0,1]]},Uo[96]=Uo[74]=function(t){return[[1,t.righttop],[1,t.rightbottom],[0,t.lefttop],[0,1],[t.topleft,1]]},Uo[24]=Uo[146]=function(t){return[[1,1],[1,t.righttop],[t.bottomright,0],[t.bottomleft,0],[t.topright,1]]},Uo[6]=Uo[164]=function(t){return[[1,t.rightbottom],[1,0],[t.bottomright,0],[0,t.leftbottom],[0,t.lefttop]]},Uo[129]=Uo[41]=function(t){return[[t.topright,1],[t.bottomleft,0],[0,0],[0,t.leftbottom],[t.topleft,1]]},Uo[66]=Uo[104]=function(t){return[[t.bottomright,0],[t.bottomleft,0],[0,t.lefttop],[0,1],[t.topleft,1]]},Uo[144]=Uo[26]=function(t){return[[1,1],[1,t.righttop],[0,t.leftbottom],[0,t.lefttop],[t.topright,1]]},Uo[36]=Uo[134]=function(t){return[[1,t.rightbottom],[1,0],[t.bottomright,0],[t.topleft,1],[t.topright,1]]},Uo[9]=Uo[161]=function(t){return[[1,t.righttop],[1,t.rightbottom],[t.bottomleft,0],[0,0],[0,t.leftbottom]]},Uo[37]=Uo[133]=function(t){return[[1,t.rightbottom],[1,0],[0,0],[0,t.leftbottom],[t.topleft,1],[t.topright,1]]},Uo[148]=Uo[22]=function(t){return[[1,1],[1,0],[t.bottomright,0],[0,t.leftbottom],[0,t.lefttop],[t.topright,1]]},Uo[82]=Uo[88]=function(t){return[[1,1],[1,t.righttop],[t.bottomright,0],[t.bottomleft,0],[0,t.lefttop],[0,1]]},Uo[73]=Uo[97]=function(t){return[[1,t.righttop],[1,t.rightbottom],[t.bottomleft,0],[0,0],[0,1],[t.topleft,1]]},Uo[145]=Uo[25]=function(t){return[[1,1],[1,t.righttop],[t.bottomleft,0],[0,0],[0,t.leftbottom],[t.topright,1]]},Uo[70]=Uo[100]=function(t){return[[1,t.rightbottom],[1,0],[t.bottomright,0],[0,t.lefttop],[0,1],[t.topleft,1]]},Uo[34]=function(t){return[Ao(t),Ro(t)]},Uo[35]=function(t){return[[1,t.righttop],[1,t.rightbottom],[t.bottomright,0],[t.bottomleft,0],[0,t.leftbottom],[0,t.lefttop],[t.topleft,1],[t.topright,1]]},Uo[136]=function(t){return[To(t),Oo(t)]},Uo[153]=function(t){return[Mo(t),Co(t)]},Uo[102]=function(t){return[Po(t),Lo(t)]},Uo[155]=function(t){return[[1,1],[1,t.righttop],[t.bottomleft,0],[0,0],[0,t.leftbottom],[t.topright,1]]},Uo[103]=function(t){return[[1,t.rightbottom],[1,0],[t.bottomright,0],[0,t.lefttop],[0,1],[t.topleft,1]]},Uo[152]=function(t){return[Mo(t),Oo(t)]},Uo[156]=function(t){return[[1,1],[1,t.righttop],[t.bottomright,0],[t.bottomleft,0],[0,t.leftbottom],[0,t.lefttop],[t.topright,1]]},Uo[137]=function(t){return[To(t),Co(t)]},Uo[139]=function(t){return[[1,t.righttop],[1,t.rightbottom],[t.bottomleft,0],[0,0],[0,t.leftbottom],[t.topleft,1],[t.topright,1]]},Uo[98]=function(t){return[Ro(t),Lo(t)]},Uo[99]=function(t){return[[1,t.righttop],[1,t.rightbottom],[t.bottomright,0],[t.bottomleft,0],[0,t.lefttop],[0,1],[t.topleft,1]]},Uo[38]=function(t){return[Po(t),Ao(t)]},Uo[39]=function(t){return[[1,t.rightbottom],[1,0],[t.bottomright,0],[0,t.leftbottom],[0,t.lefttop],[t.topleft,1],[t.topright,1]]};var us=function(){function t(e){this.id=t.buildId(e),this.coordinates=e,this.innerEdges=[],this.outerEdges=[],this.outerEdgesSorted=!1}return t.buildId=function(t){return t.join(",")},t.prototype.removeInnerEdge=function(t){this.innerEdges=this.innerEdges.filter((function(e){return e.from.id!==t.from.id}))},t.prototype.removeOuterEdge=function(t){this.outerEdges=this.outerEdges.filter((function(e){return e.to.id!==t.to.id}))},t.prototype.addOuterEdge=function(t){this.outerEdges.push(t),this.outerEdgesSorted=!1},t.prototype.sortOuterEdges=function(){var t=this;this.outerEdgesSorted||(this.outerEdges.sort((function(e,n){var r=e.to,i=n.to;if(r.coordinates[0]-t.coordinates[0]>=0&&i.coordinates[0]-t.coordinates[0]<0)return 1;if(r.coordinates[0]-t.coordinates[0]<0&&i.coordinates[0]-t.coordinates[0]>=0)return-1;if(r.coordinates[0]-t.coordinates[0]==0&&i.coordinates[0]-t.coordinates[0]==0)return r.coordinates[1]-t.coordinates[1]>=0||i.coordinates[1]-t.coordinates[1]>=0?r.coordinates[1]-i.coordinates[1]:i.coordinates[1]-r.coordinates[1];var o=ss(t.coordinates,r.coordinates,i.coordinates);return o<0?1:o>0?-1:Math.pow(r.coordinates[0]-t.coordinates[0],2)+Math.pow(r.coordinates[1]-t.coordinates[1],2)-(Math.pow(i.coordinates[0]-t.coordinates[0],2)+Math.pow(i.coordinates[1]-t.coordinates[1],2))})),this.outerEdgesSorted=!0)},t.prototype.getOuterEdges=function(){return this.sortOuterEdges(),this.outerEdges},t.prototype.getOuterEdge=function(t){return this.sortOuterEdges(),this.outerEdges[t]},t.prototype.addInnerEdge=function(t){this.innerEdges.push(t)},t}(),ls=function(){function t(t,e){this.from=t,this.to=e,this.next=void 0,this.label=void 0,this.symetric=void 0,this.ring=void 0,this.from.addOuterEdge(this),this.to.addInnerEdge(this)}return t.prototype.getSymetric=function(){return this.symetric||(this.symetric=new t(this.to,this.from),this.symetric.symetric=this),this.symetric},t.prototype.deleteEdge=function(){this.from.removeOuterEdge(this),this.to.removeInnerEdge(this)},t.prototype.isEqual=function(t){return this.from.id===t.from.id&&this.to.id===t.to.id},t.prototype.toString=function(){return"Edge { "+this.from.id+" -> "+this.to.id+" }"},t.prototype.toLineString=function(){return h([this.from.coordinates,this.to.coordinates])},t.prototype.compareTo=function(t){return ss(t.from.coordinates,t.to.coordinates,this.to.coordinates)},t}(),cs=function(){function t(){this.edges=[],this.polygon=void 0,this.envelope=void 0}return t.prototype.push=function(t){this.edges.push(t),this.polygon=this.envelope=void 0},t.prototype.get=function(t){return this.edges[t]},Object.defineProperty(t.prototype,"length",{get:function(){return this.edges.length},enumerable:!0,configurable:!0}),t.prototype.forEach=function(t){this.edges.forEach(t)},t.prototype.map=function(t){return this.edges.map(t)},t.prototype.some=function(t){return this.edges.some(t)},t.prototype.isValid=function(){return!0},t.prototype.isHole=function(){var t=this,e=this.edges.reduce((function(e,n,r){return n.from.coordinates[1]>t.edges[e].from.coordinates[1]&&(e=r),e}),0),n=(0===e?this.length:e)-1,r=(e+1)%this.length,i=ss(this.edges[n].from.coordinates,this.edges[e].from.coordinates,this.edges[r].from.coordinates);return 0===i?this.edges[n].from.coordinates[0]>this.edges[r].from.coordinates[0]:i>0},t.prototype.toMultiPoint=function(){return d(this.edges.map((function(t){return t.from.coordinates})))},t.prototype.toPolygon=function(){if(this.polygon)return this.polygon;var t=this.edges.map((function(t){return t.from.coordinates}));return t.push(this.edges[0].from.coordinates),this.polygon=l([t])},t.prototype.getEnvelope=function(){return this.envelope?this.envelope:this.envelope=dn(this.toPolygon())},t.findEdgeRingContaining=function(t,e){var n,r,i=t.getEnvelope();return e.forEach((function(e){var o,s,u,l,c,h,p=e.getEnvelope();if((r&&(n=r.getEnvelope()),s=i,u=(o=p).geometry.coordinates[0].map((function(t){return t[0]})),l=o.geometry.coordinates[0].map((function(t){return t[1]})),c=s.geometry.coordinates[0].map((function(t){return t[0]})),h=s.geometry.coordinates[0].map((function(t){return t[1]})),Math.max.apply(null,u)!==Math.max.apply(null,c)||Math.max.apply(null,l)!==Math.max.apply(null,h)||Math.min.apply(null,u)!==Math.min.apply(null,c)||Math.min.apply(null,l)!==Math.min.apply(null,h))&&as(p,i)){for(var f=t.map((function(t){return t.from.coordinates})),g=void 0,d=function(t){e.some((function(e){return n=t,r=e.from.coordinates,n[0]===r[0]&&n[1]===r[1];var n,r}))||(g=t)},y=0,v=f;y<v.length;y++){d(v[y])}g&&e.inside(a(g))&&(r&&!as(n,p)||(r=e))}})),r},t.prototype.inside=function(t){return ye(t,this.toPolygon())},t}();var hs=function(){function t(){this.edges=[],this.nodes={}}return t.fromGeoJson=function(e){!function(t){if(!t)throw new Error("No geojson passed");if("FeatureCollection"!==t.type&&"GeometryCollection"!==t.type&&"MultiLineString"!==t.type&&"LineString"!==t.type&&"Feature"!==t.type)throw new Error("Invalid input type '"+t.type+"'. Geojson must be FeatureCollection, GeometryCollection, LineString, MultiLineString or Feature")}(e);var n=new t;return z(e,(function(t){et(t,"LineString","Graph::fromGeoJson"),T(t,(function(t,e){if(t){var r=n.getNode(t),i=n.getNode(e);n.addEdge(r,i)}return e}))})),n},t.prototype.getNode=function(t){var e=us.buildId(t),n=this.nodes[e];return n||(n=this.nodes[e]=new us(t)),n},t.prototype.addEdge=function(t,e){var n=new ls(t,e),r=n.getSymetric();this.edges.push(n),this.edges.push(r)},t.prototype.deleteDangles=function(){var t=this;Object.keys(this.nodes).map((function(e){return t.nodes[e]})).forEach((function(e){return t._removeIfDangle(e)}))},t.prototype._removeIfDangle=function(t){var e=this;if(t.innerEdges.length<=1){var n=t.getOuterEdges().map((function(t){return t.to}));this.removeNode(t),n.forEach((function(t){return e._removeIfDangle(t)}))}},t.prototype.deleteCutEdges=function(){var t=this;this._computeNextCWEdges(),this._findLabeledEdgeRings(),this.edges.forEach((function(e){e.label===e.symetric.label&&(t.removeEdge(e.symetric),t.removeEdge(e))}))},t.prototype._computeNextCWEdges=function(t){var e=this;void 0===t?Object.keys(this.nodes).forEach((function(t){return e._computeNextCWEdges(e.nodes[t])})):t.getOuterEdges().forEach((function(e,n){t.getOuterEdge((0===n?t.getOuterEdges().length:n)-1).symetric.next=e}))},t.prototype._computeNextCCWEdges=function(t,e){for(var n,r,i=t.getOuterEdges(),o=i.length-1;o>=0;--o){var s=i[o],a=s.symetric,u=void 0,l=void 0;s.label===e&&(u=s),a.label===e&&(l=a),u&&l&&(l&&(r=l),u&&(r&&(r.next=u,r=void 0),n||(n=u)))}r&&(r.next=n)},t.prototype._findLabeledEdgeRings=function(){var t=[],e=0;return this.edges.forEach((function(n){if(!(n.label>=0)){t.push(n);var r=n;do{r.label=e,r=r.next}while(!n.isEqual(r));e++}})),t},t.prototype.getEdgeRings=function(){var t=this;this._computeNextCWEdges(),this.edges.forEach((function(t){t.label=void 0})),this._findLabeledEdgeRings().forEach((function(e){t._findIntersectionNodes(e).forEach((function(n){t._computeNextCCWEdges(n,e.label)}))}));var e=[];return this.edges.forEach((function(n){n.ring||e.push(t._findEdgeRing(n))})),e},t.prototype._findIntersectionNodes=function(t){var e=[],n=t,r=function(){var r=0;n.from.getOuterEdges().forEach((function(e){e.label===t.label&&++r})),r>1&&e.push(n.from),n=n.next};do{r()}while(!t.isEqual(n));return e},t.prototype._findEdgeRing=function(t){var e=t,n=new cs;do{n.push(e),e.ring=n,e=e.next}while(!t.isEqual(e));return n},t.prototype.removeNode=function(t){var e=this;t.getOuterEdges().forEach((function(t){return e.removeEdge(t)})),t.innerEdges.forEach((function(t){return e.removeEdge(t)})),delete this.nodes[t.id]},t.prototype.removeEdge=function(t){this.edges=this.edges.filter((function(e){return!e.isEqual(t)})),t.deleteEdge()},t}();function ps(t,e){var n=!0;return z(t,(function(t){z(e,(function(e){if(!1===n)return!1;n=function(t,e){switch(t.type){case"Point":switch(e.type){case"Point":return n=t.coordinates,r=e.coordinates,!(n[0]===r[0]&&n[1]===r[1]);case"LineString":return!fs(e,t);case"Polygon":return!ye(t,e)}break;case"LineString":switch(e.type){case"Point":return!fs(t,e);case"LineString":return!function(t,e){if(Or(t,e).features.length>0)return!0;return!1}(t,e);case"Polygon":return!gs(e,t)}break;case"Polygon":switch(e.type){case"Point":return!ye(e,t);case"LineString":return!gs(t,e);case"Polygon":return!function(t,e){for(var n=0,r=t.coordinates[0];n<r.length;n++){if(ye(r[n],e))return!0}for(var i=0,o=e.coordinates[0];i<o.length;i++){if(ye(o[i],t))return!0}if(Or(Ii(t),Ii(e)).features.length>0)return!0;return!1}(e,t)}}var n,r;return!1}(t.geometry,e.geometry)}))})),n}function fs(t,e){for(var n=0;n<t.coordinates.length-1;n++)if(ds(t.coordinates[n],t.coordinates[n+1],e.coordinates))return!0;return!1}function gs(t,e){for(var n=0,r=e.coordinates;n<r.length;n++){if(ye(r[n],t))return!0}return Or(e,Ii(t)).features.length>0}function ds(t,e,n){var r=n[0]-t[0],i=n[1]-t[1],o=e[0]-t[0],s=e[1]-t[1];return 0==r*s-i*o&&(Math.abs(o)>=Math.abs(s)?o>0?t[0]<=n[0]&&n[0]<=e[0]:e[0]<=n[0]&&n[0]<=t[0]:s>0?t[1]<=n[1]&&n[1]<=e[1]:e[1]<=n[1]&&n[1]<=t[1])}function ys(t,e){return!(t[0]>e[0])&&(!(t[2]<e[2])&&(!(t[1]>e[1])&&!(t[3]<e[3])))}function vs(t,e){return t[0]===e[0]&&t[1]===e[1]}function _s(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}function ms(t,e){for(var n=!1,r=!1,i=t.coordinates.length,o=0;o<i&&!n&&!r;){for(var s=0;s<e.coordinates.length-1;s++){var a=!0;0!==s&&s!==e.coordinates.length-2||(a=!1),bs(e.coordinates[s],e.coordinates[s+1],t.coordinates[o],a)?n=!0:r=!0}o++}return n&&r}function xs(t,e){return Or(t,Ni(e)).features.length>0}function Es(t,e){for(var n=!1,r=!1,i=t.coordinates.length,o=0;o<i&&(!n||!r);o++)ye(a(t.coordinates[o]),e)?n=!0:r=!0;return r&&n}function bs(t,e,n,r){var i=n[0]-t[0],o=n[1]-t[1],s=e[0]-t[0],a=e[1]-t[1];return 0==i*a-o*s&&(r?Math.abs(s)>=Math.abs(a)?s>0?t[0]<=n[0]&&n[0]<=e[0]:e[0]<=n[0]&&n[0]<=t[0]:a>0?t[1]<=n[1]&&n[1]<=e[1]:e[1]<=n[1]&&n[1]<=t[1]:Math.abs(s)>=Math.abs(a)?s>0?t[0]<n[0]&&n[0]<e[0]:e[0]<n[0]&&n[0]<t[0]:a>0?t[1]<n[1]&&n[1]<e[1]:e[1]<n[1]&&n[1]<t[1])}var ws=function(t){this.precision=t&&t.precision?t.precision:17,this.direction=!(!t||!t.direction)&&t.direction,this.pseudoNode=!(!t||!t.pseudoNode)&&t.pseudoNode,this.objectComparator=t&&t.objectComparator?t.objectComparator:Ss};function Is(t){return t.coordinates.map((function(e){return{type:t.type.replace("Multi",""),coordinates:e}}))}function Ns(t,e){return t.hasOwnProperty("coordinates")?t.coordinates.length===e.coordinates.length:t.length===e.length}function Ss(t,e){return Fi(t,e,{strict:!0})}ws.prototype.compare=function(t,e){if(t.type!==e.type||!Ns(t,e))return!1;switch(t.type){case"Point":return this.compareCoord(t.coordinates,e.coordinates);case"LineString":return this.compareLine(t.coordinates,e.coordinates,0,!1);case"Polygon":return this.comparePolygon(t,e);case"Feature":return this.compareFeature(t,e);default:if(0===t.type.indexOf("Multi")){var n=this,r=Is(t),i=Is(e);return r.every((function(t){return this.some((function(e){return n.compare(t,e)}))}),i)}}return!1},ws.prototype.compareCoord=function(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n].toFixed(this.precision)!==e[n].toFixed(this.precision))return!1;return!0},ws.prototype.compareLine=function(t,e,n,r){if(!Ns(t,e))return!1;var i=this.pseudoNode?t:this.removePseudo(t),o=this.pseudoNode?e:this.removePseudo(e);if(!r||this.compareCoord(i[0],o[0])||(o=this.fixStartIndex(o,i))){var s=this.compareCoord(i[n],o[n]);return this.direction||s?this.comparePath(i,o):!!this.compareCoord(i[n],o[o.length-(1+n)])&&this.comparePath(i.slice().reverse(),o)}},ws.prototype.fixStartIndex=function(t,e){for(var n,r=-1,i=0;i<t.length;i++)if(this.compareCoord(t[i],e[0])){r=i;break}return r>=0&&(n=[].concat(t.slice(r,t.length),t.slice(1,r+1))),n},ws.prototype.comparePath=function(t,e){var n=this;return t.every((function(t,e){return n.compareCoord(t,this[e])}),e)},ws.prototype.comparePolygon=function(t,e){if(this.compareLine(t.coordinates[0],e.coordinates[0],1,!0)){var n=t.coordinates.slice(1,t.coordinates.length),r=e.coordinates.slice(1,e.coordinates.length),i=this;return n.every((function(t){return this.some((function(e){return i.compareLine(t,e,1,!0)}))}),r)}return!1},ws.prototype.compareFeature=function(t,e){return!(t.id!==e.id||!this.objectComparator(t.properties,e.properties)||!this.compareBBox(t,e))&&this.compare(t.geometry,e.geometry)},ws.prototype.compareBBox=function(t,e){return!!(!t.bbox&&!e.bbox||t.bbox&&e.bbox&&this.compareCoord(t.bbox,e.bbox))},ws.prototype.removePseudo=function(t){return t};var Cs=ws;function Ps(t,e){var n=!1;return z(t,(function(t){z(e,(function(e){if(!0===n)return!0;n=!ps(t.geometry,e.geometry)}))})),n}var Ms=Bt((function(t){function e(t,e,n,r){this.dataset=[],this.epsilon=1,this.minPts=2,this.distance=this._euclideanDistance,this.clusters=[],this.noise=[],this._visited=[],this._assigned=[],this._datasetLength=0,this._init(t,e,n,r)}e.prototype.run=function(t,e,n,r){this._init(t,e,n,r);for(var i=0;i<this._datasetLength;i++)if(1!==this._visited[i]){this._visited[i]=1;var o=this._regionQuery(i);if(o.length<this.minPts)this.noise.push(i);else{var s=this.clusters.length;this.clusters.push([]),this._addToCluster(i,s),this._expandCluster(s,o)}}return this.clusters},e.prototype._init=function(t,e,n,r){if(t){if(!(t instanceof Array))throw Error("Dataset must be of type array, "+typeof t+" given");this.dataset=t,this.clusters=[],this.noise=[],this._datasetLength=t.length,this._visited=new Array(this._datasetLength),this._assigned=new Array(this._datasetLength)}e&&(this.epsilon=e),n&&(this.minPts=n),r&&(this.distance=r)},e.prototype._expandCluster=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];if(1!==this._visited[r]){this._visited[r]=1;var i=this._regionQuery(r);i.length>=this.minPts&&(e=this._mergeArrays(e,i))}1!==this._assigned[r]&&this._addToCluster(r,t)}},e.prototype._addToCluster=function(t,e){this.clusters[e].push(t),this._assigned[t]=1},e.prototype._regionQuery=function(t){for(var e=[],n=0;n<this._datasetLength;n++){this.distance(this.dataset[t],this.dataset[n])<this.epsilon&&e.push(n)}return e},e.prototype._mergeArrays=function(t,e){for(var n=e.length,r=0;r<n;r++){var i=e[r];t.indexOf(i)<0&&t.push(i)}return t},e.prototype._euclideanDistance=function(t,e){for(var n=0,r=Math.min(t.length,e.length);r--;)n+=(t[r]-e[r])*(t[r]-e[r]);return Math.sqrt(n)},t.exports&&(t.exports=e)})),Ls=Bt((function(t){function e(t,e,n){this.k=3,this.dataset=[],this.assignments=[],this.centroids=[],this.init(t,e,n)}e.prototype.init=function(t,e,n){this.assignments=[],this.centroids=[],void 0!==t&&(this.dataset=t),void 0!==e&&(this.k=e),void 0!==n&&(this.distance=n)},e.prototype.run=function(t,e){this.init(t,e);for(var n=this.dataset.length,r=0;r<this.k;r++)this.centroids[r]=this.randomCentroid();for(var i=!0;i;){i=this.assign();for(var o=0;o<this.k;o++){for(var s=new Array(c),a=0,u=0;u<c;u++)s[u]=0;for(var l=0;l<n;l++){var c=this.dataset[l].length;if(o===this.assignments[l]){for(u=0;u<c;u++)s[u]+=this.dataset[l][u];a++}}if(a>0){for(u=0;u<c;u++)s[u]/=a;this.centroids[o]=s}else this.centroids[o]=this.randomCentroid(),i=!0}}return this.getClusters()},e.prototype.randomCentroid=function(){var t,e,n=this.dataset.length-1;do{e=Math.round(Math.random()*n),t=this.dataset[e]}while(this.centroids.indexOf(t)>=0);return t},e.prototype.assign=function(){for(var t,e=!1,n=this.dataset.length,r=0;r<n;r++)(t=this.argmin(this.dataset[r],this.centroids,this.distance))!=this.assignments[r]&&(this.assignments[r]=t,e=!0);return e},e.prototype.getClusters=function(){for(var t,e=new Array(this.k),n=0;n<this.assignments.length;n++)void 0===e[t=this.assignments[n]]&&(e[t]=[]),e[t].push(n);return e},e.prototype.argmin=function(t,e,n){for(var r,i=Number.MAX_VALUE,o=0,s=e.length,a=0;a<s;a++)(r=n(t,e[a]))<i&&(i=r,o=a);return o},e.prototype.distance=function(t,e){for(var n=0,r=Math.min(t.length,e.length);r--;){var i=t[r]-e[r];n+=i*i}return Math.sqrt(n)},t.exports&&(t.exports=e)})),Os=Bt((function(t){function e(t,e,n){this._queue=[],this._priorities=[],this._sorting="desc",this._init(t,e,n)}e.prototype.insert=function(t,e){for(var n=this._queue.length,r=n;r--;){var i=this._priorities[r];"desc"===this._sorting?e>i&&(n=r):e<i&&(n=r)}this._insertAt(t,e,n)},e.prototype.remove=function(t){for(var e=this._queue.length;e--;){if(t===this._queue[e]){this._queue.splice(e,1),this._priorities.splice(e,1);break}}},e.prototype.forEach=function(t){this._queue.forEach(t)},e.prototype.getElements=function(){return this._queue},e.prototype.getElementPriority=function(t){return this._priorities[t]},e.prototype.getPriorities=function(){return this._priorities},e.prototype.getElementsWithPriorities=function(){for(var t=[],e=0,n=this._queue.length;e<n;e++)t.push([this._queue[e],this._priorities[e]]);return t},e.prototype._init=function(t,e,n){if(t&&e){if(this._queue=[],this._priorities=[],t.length!==e.length)throw new Error("Arrays must have the same length");for(var r=0;r<t.length;r++)this.insert(t[r],e[r])}n&&(this._sorting=n)},e.prototype._insertAt=function(t,e,n){this._queue.length===n?(this._queue.push(t),this._priorities.push(e)):(this._queue.splice(n,0,t),this._priorities.splice(n,0,e))},t.exports&&(t.exports=e)})),Rs=Bt((function(t){if(t.exports)var e=Os;function n(t,e,n,r){this.epsilon=1,this.minPts=1,this.distance=this._euclideanDistance,this._reachability=[],this._processed=[],this._coreDistance=0,this._orderedList=[],this._init(t,e,n,r)}n.prototype.run=function(t,n,r,i){this._init(t,n,r,i);for(var o=0,s=this.dataset.length;o<s;o++)if(1!==this._processed[o]){this._processed[o]=1,this.clusters.push([o]);var a=this.clusters.length-1;this._orderedList.push(o);var u=new e(null,null,"asc"),l=this._regionQuery(o);void 0!==this._distanceToCore(o)&&(this._updateQueue(o,l,u),this._expandCluster(a,u))}return this.clusters},n.prototype.getReachabilityPlot=function(){for(var t=[],e=0,n=this._orderedList.length;e<n;e++){var r=this._orderedList[e],i=this._reachability[r];t.push([r,i])}return t},n.prototype._init=function(t,e,n,r){if(t){if(!(t instanceof Array))throw Error("Dataset must be of type array, "+typeof t+" given");this.dataset=t,this.clusters=[],this._reachability=new Array(this.dataset.length),this._processed=new Array(this.dataset.length),this._coreDistance=0,this._orderedList=[]}e&&(this.epsilon=e),n&&(this.minPts=n),r&&(this.distance=r)},n.prototype._updateQueue=function(t,e,n){var r=this;this._coreDistance=this._distanceToCore(t),e.forEach((function(e){if(void 0===r._processed[e]){var i=r.distance(r.dataset[t],r.dataset[e]),o=Math.max(r._coreDistance,i);void 0===r._reachability[e]?(r._reachability[e]=o,n.insert(e,o)):o<r._reachability[e]&&(r._reachability[e]=o,n.remove(e),n.insert(e,o))}}))},n.prototype._expandCluster=function(t,e){for(var n=e.getElements(),r=0,i=n.length;r<i;r++){var o=n[r];if(void 0===this._processed[o]){var s=this._regionQuery(o);this._processed[o]=1,this.clusters[t].push(o),this._orderedList.push(o),void 0!==this._distanceToCore(o)&&(this._updateQueue(o,s,e),this._expandCluster(t,e))}}},n.prototype._distanceToCore=function(t){for(var e=this.epsilon,n=0;n<e;n++){if(this._regionQuery(t,n).length>=this.minPts)return n}},n.prototype._regionQuery=function(t,e){e=e||this.epsilon;for(var n=[],r=0,i=this.dataset.length;r<i;r++)this.distance(this.dataset[t],this.dataset[r])<e&&n.push(r);return n},n.prototype._euclideanDistance=function(t,e){for(var n=0,r=Math.min(t.length,e.length);r--;)n+=(t[r]-e[r])*(t[r]-e[r]);return Math.sqrt(n)},t.exports&&(t.exports=n)})),Ts=Bt((function(t){t.exports&&(t.exports={DBSCAN:Ms,KMEANS:Ls,OPTICS:Rs,PriorityQueue:Os})}));var As=function(t,e,n){for(var r=t.length,i=0,o=0;o<r;o++){var s=(t[o]||0)-(e[o]||0);i+=s*s}return n?Math.sqrt(i):i},Ds=As,Fs=function(t,e,n){var r=Math.abs(t-e);return n?r:r*r},ks=As,Gs=function(t,e){for(var n={},r=[],i=e<<2,o=t.length,s=t[0].length>0;r.length<e&&i-- >0;){var a=t[Math.floor(Math.random()*o)],u=s?a.join("_"):""+a;n[u]||(n[u]=!0,r.push(a))}if(r.length<e)throw new Error("Error initializating clusters");return r},qs=function(t,e){var n=t[0].length?Ds:Fs,r=[],i=t.length,o=t[0].length>0,s=t[Math.floor(Math.random()*i)];o&&s.join("_");for(r.push(s);r.length<e;){for(var a=[],u=r.length,l=0,c=[],h=0;h<i;h++){for(var p=1/0,f=0;f<u;f++){var g=n(t[h],r[f]);g<=p&&(p=g)}a[h]=p}for(var d=0;d<i;d++)l+=a[d];for(var y=0;y<i;y++)c[y]={i:y,v:t[y],pr:a[y]/l,cs:0};c.sort((function(t,e){return t.pr-e.pr})),c[0].cs=c[0].pr;for(var v=1;v<i;v++)c[v].cs=c[v-1].cs+c[v].pr;for(var _=Math.random(),m=0;m<i-1&&c[m++].cs<_;);r.push(c[m-1].v)}return r};function Bs(t,e,n){n=n||[];for(var r=0;r<t;r++)n[r]=e;return n}var zs=function(t,e,n,r){var i=[],o=[],s=[],a=[],u=!1,l=r||1e4,c=t.length,h=t[0].length,p=h>0,f=[];if(n)i="kmrand"==n?Gs(t,e):"kmpp"==n?qs(t,e):n;else for(var g={};i.length<e;){var d=Math.floor(Math.random()*c);g[d]||(g[d]=!0,i.push(t[d]))}do{Bs(e,0,f);for(var y=0;y<c;y++){for(var v=1/0,_=0,m=0;m<e;m++){(a=p?ks(t[y],i[m]):Math.abs(t[y]-i[m]))<=v&&(v=a,_=m)}s[y]=_,f[_]++}for(var x=[],E=(o=[],0);E<e;E++)x[E]=p?Bs(h,0,x[E]):0,o[E]=i[E];if(p){for(var b=0;b<e;b++)i[b]=[];for(var w=0;w<c;w++)for(var I=x[s[w]],N=t[w],S=0;S<h;S++)I[S]+=N[S];u=!0;for(var C=0;C<e;C++){for(var P=i[C],M=x[C],L=o[C],O=f[C],R=0;R<h;R++)P[R]=M[R]/O||0;if(u)for(var T=0;T<h;T++)if(L[T]!=P[T]){u=!1;break}}}else{for(var A=0;A<c;A++){x[s[A]]+=t[A]}for(var D=0;D<e;D++)i[D]=x[D]/f[D]||0;u=!0;for(var F=0;F<e;F++)if(o[F]!=i[F]){u=!1;break}}u=u||--l<=0}while(!u);return{it:1e4-l,k:e,idxs:s,centroids:i}};function js(t,e){return b(Bi(t[0],t[1]))===b(Bi(e[0],e[1]))}function Us(t,e){if(t.geometry&&t.geometry.type)return t.geometry.type;if(t.type)return t.type;throw new Error("Invalid GeoJSON object for "+e)}function Vs(t){for(var e=t,n=[];e.parent;)n.unshift(e),e=e.parent;return n}var Xs={search:function(t,e,n,r){t.cleanDirty();var i=(r=r||{}).heuristic||Xs.heuristics.manhattan,o=r.closest||!1,s=new Ws((function(t){return t.f})),a=e;for(e.h=i(e,n),s.push(e);s.size()>0;){var u=s.pop();if(u===n)return Vs(u);u.closed=!0;for(var l=t.neighbors(u),c=0,h=l.length;c<h;++c){var p=l[c];if(!p.closed&&!p.isWall()){var f=u.g+p.getCost(u),g=p.visited;(!g||f<p.g)&&(p.visited=!0,p.parent=u,p.h=p.h||i(p,n),p.g=f,p.f=p.g+p.h,t.markDirty(p),o&&(p.h<a.h||p.h===a.h&&p.g<a.g)&&(a=p),g?s.rescoreElement(p):s.push(p))}}}return o?Vs(a):[]},heuristics:{manhattan:function(t,e){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)},diagonal:function(t,e){var n=Math.sqrt(2),r=Math.abs(e.x-t.x),i=Math.abs(e.y-t.y);return 1*(r+i)+(n-2)*Math.min(r,i)}},cleanNode:function(t){t.f=0,t.g=0,t.h=0,t.visited=!1,t.closed=!1,t.parent=null}};function Ys(t,e){e=e||{},this.nodes=[],this.diagonal=!!e.diagonal,this.grid=[];for(var n=0;n<t.length;n++){this.grid[n]=[];for(var r=0,i=t[n];r<i.length;r++){var o=new Hs(n,r,i[r]);this.grid[n][r]=o,this.nodes.push(o)}}this.init()}function Hs(t,e,n){this.x=t,this.y=e,this.weight=n}function Ws(t){this.content=[],this.scoreFunction=t}function Js(t,e){for(var n=0;n<e.features.length;n++)if(ye(t,e.features[n]))return!0;return!1}function Zs(t){return function(){return t}}function Ks(t){return t[0]}function Qs(t){return t[1]}function $s(){this._=null}function ta(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function ea(t,e){var n=e,r=e.R,i=n.U;i?i.L===n?i.L=r:i.R=r:t._=r,r.U=i,n.U=r,n.R=r.L,n.R&&(n.R.U=n),r.L=n}function na(t,e){var n=e,r=e.L,i=n.U;i?i.L===n?i.L=r:i.R=r:t._=r,r.U=i,n.U=r,n.L=r.R,n.L&&(n.L.U=n),r.R=n}function ra(t){for(;t.L;)t=t.L;return t}function ia(t,e,n,r){var i=[null,null],o=Pa.push(i)-1;return i.left=t,i.right=e,n&&sa(i,t,e,n),r&&sa(i,e,t,r),Sa[t.index].halfedges.push(o),Sa[e.index].halfedges.push(o),i}function oa(t,e,n){var r=[e,n];return r.left=t,r}function sa(t,e,n,r){t[0]||t[1]?t.left===n?t[1]=r:t[0]=r:(t[0]=r,t.left=e,t.right=n)}function aa(t,e,n,r,i){var o,s=t[0],a=t[1],u=s[0],l=s[1],c=0,h=1,p=a[0]-u,f=a[1]-l;if(o=e-u,p||!(o>0)){if(o/=p,p<0){if(o<c)return;o<h&&(h=o)}else if(p>0){if(o>h)return;o>c&&(c=o)}if(o=r-u,p||!(o<0)){if(o/=p,p<0){if(o>h)return;o>c&&(c=o)}else if(p>0){if(o<c)return;o<h&&(h=o)}if(o=n-l,f||!(o>0)){if(o/=f,f<0){if(o<c)return;o<h&&(h=o)}else if(f>0){if(o>h)return;o>c&&(c=o)}if(o=i-l,f||!(o<0)){if(o/=f,f<0){if(o>h)return;o>c&&(c=o)}else if(f>0){if(o<c)return;o<h&&(h=o)}return!(c>0||h<1)||(c>0&&(t[0]=[u+c*p,l+c*f]),h<1&&(t[1]=[u+h*p,l+h*f]),!0)}}}}}function ua(t,e,n,r,i){var o=t[1];if(o)return!0;var s,a,u=t[0],l=t.left,c=t.right,h=l[0],p=l[1],f=c[0],g=c[1],d=(h+f)/2,y=(p+g)/2;if(g===p){if(d<e||d>=r)return;if(h>f){if(u){if(u[1]>=i)return}else u=[d,n];o=[d,i]}else{if(u){if(u[1]<n)return}else u=[d,i];o=[d,n]}}else if(a=y-(s=(h-f)/(g-p))*d,s<-1||s>1)if(h>f){if(u){if(u[1]>=i)return}else u=[(n-a)/s,n];o=[(i-a)/s,i]}else{if(u){if(u[1]<n)return}else u=[(i-a)/s,i];o=[(n-a)/s,n]}else if(p<g){if(u){if(u[0]>=r)return}else u=[e,s*e+a];o=[r,s*r+a]}else{if(u){if(u[0]<e)return}else u=[r,s*r+a];o=[e,s*e+a]}return t[0]=u,t[1]=o,!0}function la(t,e){var n=t.site,r=e.left,i=e.right;return n===i&&(i=r,r=n),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(n===r?(r=e[1],i=e[0]):(r=e[0],i=e[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function ca(t,e){return e[+(e.left!==t.site)]}function ha(t,e){return e[+(e.left===t.site)]}Ys.prototype.init=function(){this.dirtyNodes=[];for(var t=0;t<this.nodes.length;t++)Xs.cleanNode(this.nodes[t])},Ys.prototype.cleanDirty=function(){for(var t=0;t<this.dirtyNodes.length;t++)Xs.cleanNode(this.dirtyNodes[t]);this.dirtyNodes=[]},Ys.prototype.markDirty=function(t){this.dirtyNodes.push(t)},Ys.prototype.neighbors=function(t){var e=[],n=t.x,r=t.y,i=this.grid;return i[n-1]&&i[n-1][r]&&e.push(i[n-1][r]),i[n+1]&&i[n+1][r]&&e.push(i[n+1][r]),i[n]&&i[n][r-1]&&e.push(i[n][r-1]),i[n]&&i[n][r+1]&&e.push(i[n][r+1]),this.diagonal&&(i[n-1]&&i[n-1][r-1]&&e.push(i[n-1][r-1]),i[n+1]&&i[n+1][r-1]&&e.push(i[n+1][r-1]),i[n-1]&&i[n-1][r+1]&&e.push(i[n-1][r+1]),i[n+1]&&i[n+1][r+1]&&e.push(i[n+1][r+1])),e},Ys.prototype.toString=function(){for(var t,e,n,r,i=[],o=this.grid,s=0,a=o.length;s<a;s++){for(t=[],n=0,r=(e=o[s]).length;n<r;n++)t.push(e[n].weight);i.push(t.join(" "))}return i.join("\n")},Hs.prototype.toString=function(){return"["+this.x+" "+this.y+"]"},Hs.prototype.getCost=function(t){return t&&t.x!==this.x&&t.y!==this.y?1.41421*this.weight:this.weight},Hs.prototype.isWall=function(){return 0===this.weight},Ws.prototype={push:function(t){this.content.push(t),this.sinkDown(this.content.length-1)},pop:function(){var t=this.content[0],e=this.content.pop();return this.content.length>0&&(this.content[0]=e,this.bubbleUp(0)),t},remove:function(t){var e=this.content.indexOf(t),n=this.content.pop();e!==this.content.length-1&&(this.content[e]=n,this.scoreFunction(n)<this.scoreFunction(t)?this.sinkDown(e):this.bubbleUp(e))},size:function(){return this.content.length},rescoreElement:function(t){this.sinkDown(this.content.indexOf(t))},sinkDown:function(t){for(var e=this.content[t];t>0;){var n=(t+1>>1)-1,r=this.content[n];if(!(this.scoreFunction(e)<this.scoreFunction(r)))break;this.content[n]=e,this.content[t]=r,t=n}},bubbleUp:function(t){for(var e=this.content.length,n=this.content[t],r=this.scoreFunction(n);;){var i,o=t+1<<1,s=o-1,a=null;if(s<e){var u=this.content[s];(i=this.scoreFunction(u))<r&&(a=s)}if(o<e){var l=this.content[o];this.scoreFunction(l)<(null===a?r:i)&&(a=o)}if(null===a)break;this.content[t]=this.content[a],this.content[a]=n,t=a}}},$s.prototype={constructor:$s,insert:function(t,e){var n,r,i;if(t){if(e.P=t,e.N=t.N,t.N&&(t.N.P=e),t.N=e,t.R){for(t=t.R;t.L;)t=t.L;t.L=e}else t.R=e;n=t}else this._?(t=ra(this._),e.P=null,e.N=t,t.P=t.L=e,n=t):(e.P=e.N=null,this._=e,n=null);for(e.L=e.R=null,e.U=n,e.C=!0,t=e;n&&n.C;)n===(r=n.U).L?(i=r.R)&&i.C?(n.C=i.C=!1,r.C=!0,t=r):(t===n.R&&(ea(this,n),n=(t=n).U),n.C=!1,r.C=!0,na(this,r)):(i=r.L)&&i.C?(n.C=i.C=!1,r.C=!0,t=r):(t===n.L&&(na(this,n),n=(t=n).U),n.C=!1,r.C=!0,ea(this,r)),n=t.U;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var e,n,r,i=t.U,o=t.L,s=t.R;if(n=o?s?ra(s):o:s,i?i.L===t?i.L=n:i.R=n:this._=n,o&&s?(r=n.C,n.C=t.C,n.L=o,o.U=n,n!==s?(i=n.U,n.U=t.U,t=n.R,i.L=t,n.R=s,s.U=n):(n.U=i,i=n,t=n.R)):(r=t.C,t=n),t&&(t.U=i),!r)if(t&&t.C)t.C=!1;else{do{if(t===this._)break;if(t===i.L){if((e=i.R).C&&(e.C=!1,i.C=!0,ea(this,i),e=i.R),e.L&&e.L.C||e.R&&e.R.C){e.R&&e.R.C||(e.L.C=!1,e.C=!0,na(this,e),e=i.R),e.C=i.C,i.C=e.R.C=!1,ea(this,i),t=this._;break}}else if((e=i.L).C&&(e.C=!1,i.C=!0,na(this,i),e=i.L),e.L&&e.L.C||e.R&&e.R.C){e.L&&e.L.C||(e.R.C=!1,e.C=!0,ea(this,e),e=i.L),e.C=i.C,i.C=e.L.C=!1,na(this,i),t=this._;break}e.C=!0,t=i,i=i.U}while(!t.C);t&&(t.C=!1)}}};var pa,fa=[];function ga(){ta(this),this.x=this.y=this.arc=this.site=this.cy=null}function da(t){var e=t.P,n=t.N;if(e&&n){var r=e.site,i=t.site,o=n.site;if(r!==o){var s=i[0],a=i[1],u=r[0]-s,l=r[1]-a,c=o[0]-s,h=o[1]-a,p=2*(u*h-l*c);if(!(p>=-La)){var f=u*u+l*l,g=c*c+h*h,d=(h*f-l*g)/p,y=(u*g-c*f)/p,v=fa.pop()||new ga;v.arc=t,v.site=i,v.x=d+s,v.y=(v.cy=y+a)+Math.sqrt(d*d+y*y),t.circle=v;for(var _=null,m=Ca._;m;)if(v.y<m.y||v.y===m.y&&v.x<=m.x){if(!m.L){_=m.P;break}m=m.L}else{if(!m.R){_=m;break}m=m.R}Ca.insert(_,v),_||(pa=v)}}}}function ya(t){var e=t.circle;e&&(e.P||(pa=e.N),Ca.remove(e),fa.push(e),ta(e),t.circle=null)}var va=[];function _a(){ta(this),this.edge=this.site=this.circle=null}function ma(t){var e=va.pop()||new _a;return e.site=t,e}function xa(t){ya(t),Na.remove(t),va.push(t),ta(t)}function Ea(t){var e=t.circle,n=e.x,r=e.cy,i=[n,r],o=t.P,s=t.N,a=[t];xa(t);for(var u=o;u.circle&&Math.abs(n-u.circle.x)<Ma&&Math.abs(r-u.circle.cy)<Ma;)o=u.P,a.unshift(u),xa(u),u=o;a.unshift(u),ya(u);for(var l=s;l.circle&&Math.abs(n-l.circle.x)<Ma&&Math.abs(r-l.circle.cy)<Ma;)s=l.N,a.push(l),xa(l),l=s;a.push(l),ya(l);var c,h=a.length;for(c=1;c<h;++c)l=a[c],u=a[c-1],sa(l.edge,u.site,l.site,i);u=a[0],(l=a[h-1]).edge=ia(u.site,l.site,null,i),da(u),da(l)}function ba(t){for(var e,n,r,i,o=t[0],s=t[1],a=Na._;a;)if((r=wa(a,s)-o)>Ma)a=a.L;else{if(!((i=o-Ia(a,s))>Ma)){r>-Ma?(e=a.P,n=a):i>-Ma?(e=a,n=a.N):e=n=a;break}if(!a.R){e=a;break}a=a.R}!function(t){Sa[t.index]={site:t,halfedges:[]}}(t);var u=ma(t);if(Na.insert(e,u),e||n){if(e===n)return ya(e),n=ma(e.site),Na.insert(u,n),u.edge=n.edge=ia(e.site,u.site),da(e),void da(n);if(n){ya(e),ya(n);var l=e.site,c=l[0],h=l[1],p=t[0]-c,f=t[1]-h,g=n.site,d=g[0]-c,y=g[1]-h,v=2*(p*y-f*d),_=p*p+f*f,m=d*d+y*y,x=[(y*_-f*m)/v+c,(p*m-d*_)/v+h];sa(n.edge,l,g,x),u.edge=ia(l,t,null,x),n.edge=ia(t,g,null,x),da(e),da(n)}else u.edge=ia(e.site,u.site)}}function wa(t,e){var n=t.site,r=n[0],i=n[1],o=i-e;if(!o)return r;var s=t.P;if(!s)return-1/0;var a=(n=s.site)[0],u=n[1],l=u-e;if(!l)return a;var c=a-r,h=1/o-1/l,p=c/l;return h?(-p+Math.sqrt(p*p-2*h*(c*c/(-2*l)-u+l/2+i-o/2)))/h+r:(r+a)/2}function Ia(t,e){var n=t.N;if(n)return wa(n,e);var r=t.site;return r[1]===e?r[0]:1/0}var Na,Sa,Ca,Pa,Ma=1e-6,La=1e-12;function Oa(t,e){return e[1]-t[1]||e[0]-t[0]}function Ra(t,e){var n,r,i,o=t.sort(Oa).pop();for(Pa=[],Sa=new Array(t.length),Na=new $s,Ca=new $s;;)if(i=pa,o&&(!i||o[1]<i.y||o[1]===i.y&&o[0]<i.x))o[0]===n&&o[1]===r||(ba(o),n=o[0],r=o[1]),o=t.pop();else{if(!i)break;Ea(i.arc)}if(function(){for(var t,e,n,r,i=0,o=Sa.length;i<o;++i)if((t=Sa[i])&&(r=(e=t.halfedges).length)){var s=new Array(r),a=new Array(r);for(n=0;n<r;++n)s[n]=n,a[n]=la(t,Pa[e[n]]);for(s.sort((function(t,e){return a[e]-a[t]})),n=0;n<r;++n)a[n]=e[s[n]];for(n=0;n<r;++n)e[n]=a[n]}}(),e){var s=+e[0][0],a=+e[0][1],u=+e[1][0],l=+e[1][1];!function(t,e,n,r){for(var i,o=Pa.length;o--;)ua(i=Pa[o],t,e,n,r)&&aa(i,t,e,n,r)&&(Math.abs(i[0][0]-i[1][0])>Ma||Math.abs(i[0][1]-i[1][1])>Ma)||delete Pa[o]}(s,a,u,l),function(t,e,n,r){var i,o,s,a,u,l,c,h,p,f,g,d,y=Sa.length,v=!0;for(i=0;i<y;++i)if(o=Sa[i]){for(s=o.site,a=(u=o.halfedges).length;a--;)Pa[u[a]]||u.splice(a,1);for(a=0,l=u.length;a<l;)g=(f=ha(o,Pa[u[a]]))[0],d=f[1],h=(c=ca(o,Pa[u[++a%l]]))[0],p=c[1],(Math.abs(g-h)>Ma||Math.abs(d-p)>Ma)&&(u.splice(a,0,Pa.push(oa(s,f,Math.abs(g-t)<Ma&&r-d>Ma?[t,Math.abs(h-t)<Ma?p:r]:Math.abs(d-r)<Ma&&n-g>Ma?[Math.abs(p-r)<Ma?h:n,r]:Math.abs(g-n)<Ma&&d-e>Ma?[n,Math.abs(h-n)<Ma?p:e]:Math.abs(d-e)<Ma&&g-t>Ma?[Math.abs(p-e)<Ma?h:t,e]:null))-1),++l);l&&(v=!1)}if(v){var _,m,x,E=1/0;for(i=0,v=null;i<y;++i)(o=Sa[i])&&(x=(_=(s=o.site)[0]-t)*_+(m=s[1]-e)*m)<E&&(E=x,v=o);if(v){var b=[t,e],w=[t,r],I=[n,r],N=[n,e];v.halfedges.push(Pa.push(oa(s=v.site,b,w))-1,Pa.push(oa(s,w,I))-1,Pa.push(oa(s,I,N))-1,Pa.push(oa(s,N,b))-1)}}for(i=0;i<y;++i)(o=Sa[i])&&(o.halfedges.length||delete Sa[i])}(s,a,u,l)}this.edges=Pa,this.cells=Sa,Na=Ca=Pa=Sa=null}function Ta(t){return(t=t.slice()).push(t[0]),l([t])}function Aa(t,e,n,r){var i=(r=r||{}).steps||64,o=r.units||"kilometers",s=r.angle||0,a=r.pivot||t,u=r.properties||t.properties||{};if(!t)throw new Error("center is required");if(!e)throw new Error("xSemiAxis is required");if(!n)throw new Error("ySemiAxis is required");if(!P(r))throw new Error("options must be an object");if(!C(i))throw new Error("steps must be a number");if(!C(s))throw new Error("angle must be a number");var c=K(t);if("degrees"===o)var h=I(s);else e=ji(t,e,90,{units:o}),n=ji(t,n,0,{units:o}),e=K(e)[0]-c[0],n=K(n)[1]-c[1];for(var p=[],f=0;f<i;f+=1){var g=-360*f/i,d=e*n/Math.sqrt(Math.pow(n,2)+Math.pow(e,2)*Math.pow(Da(g),2)),y=e*n/Math.sqrt(Math.pow(e,2)+Math.pow(n,2)/Math.pow(Da(g),2));if(g<-90&&g>=-270&&(d=-d),g<-180&&g>=-360&&(y=-y),"degrees"===o){var v=d*Math.cos(h)+y*Math.sin(h),_=y*Math.cos(h)-d*Math.sin(h);d=v,y=_}p.push([d+c[0],y+c[1]])}return p.push(p[0]),"degrees"===o?l([p],u):$o(l([p],u),s,{pivot:a})}function Da(t){var e=t*Math.PI/180;return Math.tan(e)}function Fa(t,e){void 0===e&&(e={});var n=0,r=0,i=0;return q(t,(function(t,o,s){var a=e.weight?null==s?void 0:s[e.weight]:void 0;if(!C(a=null==a?1:a))throw new Error("weight value must be a number for feature index "+o);(a=Number(a))>0&&R(t,(function(t){n+=t[0]*a,r+=t[1]*a,i+=a}))})),a([n/i,r/i],e.properties,e)}function ka(t,e,n,r,i){var o=r.tolerance||.001,s=0,u=0,l=0,c=0;if(F(n,(function(e){var n,r=null===(n=e.properties)||void 0===n?void 0:n.weight,i=null==r?1:r;if(!C(i=Number(i)))throw new Error("weight value must be a number");if(i>0){c+=1;var o=i*me(e,t);0===o&&(o=1);var a=i/o;s+=e.geometry.coordinates[0]*a,u+=e.geometry.coordinates[1]*a,l+=a}})),c<1)throw new Error("no features to measure");var h=s/l,p=u/l;return 1===c||0===i||Math.abs(h-e[0])<o&&Math.abs(p-e[1])<o?a([h,p],{medianCandidates:r.medianCandidates}):(r.medianCandidates.push([h,p]),ka([h,p],t,n,r,i-1))}function Ga(t,e){return{x:t[0]-e[0],y:t[1]-e[1]}}function qa(t,e){var n=0,r=0;R(t,(function(i,o,s,a,u){u>n&&(n=u,r=o,e.push([]));var l=o-r,c=t.coordinates[u][l+1],h=i[0],p=i[1],f=c[0],g=c[1];e[u].push([.75*h+.25*f,.75*p+.25*g]),e[u].push([.25*h+.75*f,.25*p+.75*g])}),!0),e.forEach((function(t){t.push(t[0])}))}function Ba(t,e){var n=0,r=0,i=0;R(t,(function(o,s,a,u,l){u>i&&(i=u,r=s,e.push([[]])),l>n&&(n=l,r=s,e[u].push([]));var c=s-r,h=t.coordinates[u][l][c+1],p=o[0],f=o[1],g=h[0],d=h[1];e[u][l].push([.75*p+.25*g,.75*f+.25*d]),e[u][l].push([.25*p+.75*g,.25*f+.75*d])}),!0),e.forEach((function(t){t.forEach((function(t){t.push(t[0])}))}))}function za(t,e,n){void 0===n&&(n=2);var r=K(t),i=K(e),o=r[0]-i[0],s=r[1]-i[1];return 1===n?Math.abs(o)+Math.abs(s):Math.pow(Math.pow(o,n)+Math.pow(s,n),1/n)}function ja(t,e){var n=(e=e||{}).threshold||1e4,r=e.p||2,i=e.binary||!1,o=e.alpha||-1,s=e.standardization||!1,a=[];F(t,(function(t){a.push(En(t))}));for(var u=[],l=0;l<a.length;l++)u[l]=[];for(l=0;l<a.length;l++)for(var c=l;c<a.length;c++){l===c&&(u[l][c]=0);var h=za(a[l],a[c],r);u[l][c]=h,u[c][l]=h}for(l=0;l<a.length;l++)for(c=0;c<a.length;c++){0!==(h=u[l][c])&&(u[l][c]=i?h<=n?1:0:h<=n?Math.pow(h,o):0)}if(s)for(l=0;l<a.length;l++){var p=u[l].reduce((function(t,e){return t+e}),0);for(c=0;c<a.length;c++)u[l][c]=u[l][c]/p}return u}function Ua(t){for(var e=0,n=0,r=t;n<r.length;n++){e+=r[n]}return e/t.length}function Va(t,e){return void 0===e&&(e={}),Ya(t,"mercator",e)}function Xa(t,e){return void 0===e&&(e={}),Ya(t,"wgs84",e)}function Ya(t,e,n){void 0===n&&(n={});var r=(n=n||{}).mutate;if(!t)throw new Error("geojson is required");return Array.isArray(t)&&C(t[0])?t="mercator"===e?Ha(t):Wa(t):(!0!==r&&(t=Ie(t)),R(t,(function(t){var n="mercator"===e?Ha(t):Wa(t);t[0]=n[0],t[1]=n[1]}))),t}function Ha(t){var e=Math.PI/180,n=6378137,r=20037508.342789244,i=[n*(Math.abs(t[0])<=180?t[0]:t[0]-360*function(t){return t<0?-1:t>0?1:0}(t[0]))*e,n*Math.log(Math.tan(.25*Math.PI+.5*t[1]*e))];return i[0]>r&&(i[0]=r),i[0]<-r&&(i[0]=-r),i[1]>r&&(i[1]=r),i[1]<-r&&(i[1]=-r),i}function Wa(t){var e=180/Math.PI,n=6378137;return[t[0]*e/n,(.5*Math.PI-2*Math.atan(Math.exp(-t[1]/n)))*e]}Ra.prototype={constructor:Ra,polygons:function(){var t=this.edges;return this.cells.map((function(e){var n=e.halfedges.map((function(n){return ca(e,t[n])}));return n.data=e.site.data,n}))},triangles:function(){var t=[],e=this.edges;return this.cells.forEach((function(n,r){if(o=(i=n.halfedges).length)for(var i,o,s,a,u,l,c=n.site,h=-1,p=e[i[o-1]],f=p.left===c?p.right:p.left;++h<o;)s=f,f=(p=e[i[h]]).left===c?p.right:p.left,s&&f&&r<s.index&&r<f.index&&(u=s,l=f,((a=c)[0]-l[0])*(u[1]-a[1])-(a[0]-u[0])*(l[1]-a[1])<0)&&t.push([c.data,s.data,f.data])})),t},links:function(){return this.edges.filter((function(t){return t.right})).map((function(t){return{source:t.left.data,target:t.right.data}}))},find:function(t,e,n){for(var r,i,o=this,s=o._found||0,a=o.cells.length;!(i=o.cells[s]);)if(++s>=a)return null;var u=t-i.site[0],l=e-i.site[1],c=u*u+l*l;do{i=o.cells[r=s],s=null,i.halfedges.forEach((function(n){var r=o.edges[n],a=r.left;if(a!==i.site&&a||(a=r.right)){var u=t-a[0],l=e-a[1],h=u*u+l*l;h<c&&(c=h,s=a.index)}}))}while(null!==s);return o._found=r,null==n||c<=n*n?i.site:null}};var Ja=Object.freeze({__proto__:null,toMercator:Va,toWgs84:Xa}),Za=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r};function Ka(t){return Array.isArray(t)?nu(t):t&&t.bbox?nu(t.bbox):[360*eu(),180*eu()]}function Qa(t,e){void 0===e&&(e={}),null==t&&(t=1);for(var n=[],r=0;r<t;r++)n.push(a(Ka(e.bbox)));return f(n)}function $a(t,e){void 0===e&&(e={}),null==t&&(t=1),C(e.num_vertices)&&void 0!==e.num_vertices||(e.num_vertices=10),C(e.max_radial_length)&&void 0!==e.max_radial_length||(e.max_radial_length=10);for(var n=[],r=function(t){var r,i=[],o=Za(Array(e.num_vertices+1)).map(Math.random);o.forEach((function(t,e,n){n[e]=e>0?t+n[e-1]:t})),o.forEach((function(t){t=2*t*Math.PI/o[o.length-1];var n=Math.random();i.push([n*(e.max_radial_length||10)*Math.sin(t),n*(e.max_radial_length||10)*Math.cos(t)])})),i[i.length-1]=i[0],i=i.map((r=Ka(e.bbox),function(t){return[t[0]+r[0],t[1]+r[1]]})),n.push(l([i]))},i=0;i<t;i++)r();return f(n)}function tu(t,e){if(void 0===e&&(e={}),!P(e=e||{}))throw new Error("options is invalid");var n=e.bbox,r=e.num_vertices,i=e.max_length,o=e.max_rotation;null==t&&(t=1),(!C(r)||void 0===r||r<2)&&(r=10),C(i)&&void 0!==i||(i=1e-4),C(o)&&void 0!==o||(o=Math.PI/8);for(var s=[],a=0;a<t;a++){for(var u=[Ka(n)],l=0;l<r-1;l++){var c=(0===l?2*Math.random()*Math.PI:Math.tan((u[l][1]-u[l-1][1])/(u[l][0]-u[l-1][0])))+(Math.random()-.5)*o*2,p=Math.random()*i;u.push([u[l][0]+p*Math.cos(c),u[l][1]+p*Math.sin(c)])}s.push(h(u))}return f(s)}function eu(){return Math.random()-.5}function nu(t){return[Math.random()*(t[2]-t[0])+t[0],Math.random()*(t[3]-t[1])+t[1]]}var ru=Object.freeze({__proto__:null,randomPosition:Ka,randomPoint:Qa,randomPolygon:$a,randomLineString:tu});function iu(t,e){if(!t)throw new Error("geojson is required");if("FeatureCollection"!==t.type)throw new Error("geojson must be a FeatureCollection");if(null==e)throw new Error("filter is required");var n=[];return F(t,(function(t){uu(t.properties,e)&&n.push(t)})),f(n)}function ou(t,e,n){if(!t)throw new Error("geojson is required");if("FeatureCollection"!==t.type)throw new Error("geojson must be a FeatureCollection");if(null==e)throw new Error("property is required");for(var r=au(t,e),i=Object.keys(r),o=0;o<i.length;o++){for(var s=i[o],a=r[s],u=[],l=0;l<a.length;l++)u.push(t.features[a[l]]);n(f(u),s,o)}}function su(t,e,n,r){var i=r;return ou(t,e,(function(t,e,o){i=0===o&&void 0===r?t:n(i,t,e,o)})),i}function au(t,e){var n={};return F(t,(function(t,r){var i=t.properties||{};if(Object.prototype.hasOwnProperty.call(i,String(e))){var o=i[e];Object.prototype.hasOwnProperty.call(n,o)?n[o].push(r):n[o]=[r]}})),n}function uu(t,e){if(void 0===t)return!1;var n=typeof e;if("number"===n||"string"===n)return Object.prototype.hasOwnProperty.call(t,e);if(Array.isArray(e)){for(var r=0;r<e.length;r++)if(!uu(t,e[r]))return!1;return!0}return lu(t,e)}function lu(t,e){for(var n=Object.keys(e),r=0;r<n.length;r++){var i=n[r];if(t[i]!==e[i])return!1}return!0}function cu(t,e){if(!e)return{};if(!e.length)return{};for(var n={},r=0;r<e.length;r++){var i=e[r];Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n}var hu=Object.freeze({__proto__:null,getCluster:iu,clusterEach:ou,clusterReduce:su,createBins:au,applyFilter:uu,propertiesContainsFilter:lu,filterProperties:cu}),pu=function(t,e){this.next=null,this.key=t,this.data=e,this.left=null,this.right=null};
/**
     * splaytree v3.1.0
     * Fast Splay tree for Node and browser
     *
     * @author Alexander Milevski <info@w8r.name>
     * @license MIT
     * @preserve
     */function fu(t,e){return t>e?1:t<e?-1:0}function gu(t,e,n){for(var r=new pu(null,null),i=r,o=r;;){var s=n(t,e.key);if(s<0){if(null===e.left)break;if(n(t,e.left.key)<0){var a=e.left;if(e.left=a.right,a.right=e,null===(e=a).left)break}o.left=e,o=e,e=e.left}else{if(!(s>0))break;if(null===e.right)break;if(n(t,e.right.key)>0){a=e.right;if(e.right=a.left,a.left=e,null===(e=a).right)break}i.right=e,i=e,e=e.right}}return i.right=e.left,o.left=e.right,e.left=r.right,e.right=r.left,e}function du(t,e,n,r){var i=new pu(t,e);if(null===n)return i.left=i.right=null,i;var o=r(t,(n=gu(t,n,r)).key);return o<0?(i.left=n.left,i.right=n,n.left=null):o>=0&&(i.right=n.right,i.left=n,n.right=null),i}function yu(t,e,n){var r=null,i=null;if(e){var o=n((e=gu(t,e,n)).key,t);0===o?(r=e.left,i=e.right):o<0?(i=e.right,e.right=null,r=e):(r=e.left,e.left=null,i=e)}return{left:r,right:i}}function vu(t,e,n,r,i){if(t){r(e+(n?"└── ":"├── ")+i(t)+"\n");var o=e+(n?"    ":"│   ");t.left&&vu(t.left,o,!1,r,i),t.right&&vu(t.right,o,!0,r,i)}}var _u=function(){function t(t){void 0===t&&(t=fu),this._root=null,this._size=0,this._comparator=t}return t.prototype.insert=function(t,e){return this._size++,this._root=du(t,e,this._root,this._comparator)},t.prototype.add=function(t,e){var n=new pu(t,e);null===this._root&&(n.left=n.right=null,this._size++,this._root=n);var r=this._comparator,i=gu(t,this._root,r),o=r(t,i.key);return 0===o?this._root=i:(o<0?(n.left=i.left,n.right=i,i.left=null):o>0&&(n.right=i.right,n.left=i,i.right=null),this._size++,this._root=n),this._root},t.prototype.remove=function(t){this._root=this._remove(t,this._root,this._comparator)},t.prototype._remove=function(t,e,n){var r;return null===e?null:0===n(t,(e=gu(t,e,n)).key)?(null===e.left?r=e.right:(r=gu(t,e.left,n)).right=e.right,this._size--,r):e},t.prototype.pop=function(){var t=this._root;if(t){for(;t.left;)t=t.left;return this._root=gu(t.key,this._root,this._comparator),this._root=this._remove(t.key,this._root,this._comparator),{key:t.key,data:t.data}}return null},t.prototype.findStatic=function(t){for(var e=this._root,n=this._comparator;e;){var r=n(t,e.key);if(0===r)return e;e=r<0?e.left:e.right}return null},t.prototype.find=function(t){return this._root&&(this._root=gu(t,this._root,this._comparator),0!==this._comparator(t,this._root.key))?null:this._root},t.prototype.contains=function(t){for(var e=this._root,n=this._comparator;e;){var r=n(t,e.key);if(0===r)return!0;e=r<0?e.left:e.right}return!1},t.prototype.forEach=function(t,e){for(var n=this._root,r=[],i=!1;!i;)null!==n?(r.push(n),n=n.left):0!==r.length?(n=r.pop(),t.call(e,n),n=n.right):i=!0;return this},t.prototype.range=function(t,e,n,r){for(var i=[],o=this._comparator,s=this._root;0!==i.length||s;)if(s)i.push(s),s=s.left;else{if(o((s=i.pop()).key,e)>0)break;if(o(s.key,t)>=0&&n.call(r,s))return this;s=s.right}return this},t.prototype.keys=function(){var t=[];return this.forEach((function(e){var n=e.key;return t.push(n)})),t},t.prototype.values=function(){var t=[];return this.forEach((function(e){var n=e.data;return t.push(n)})),t},t.prototype.min=function(){return this._root?this.minNode(this._root).key:null},t.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},t.prototype.minNode=function(t){if(void 0===t&&(t=this._root),t)for(;t.left;)t=t.left;return t},t.prototype.maxNode=function(t){if(void 0===t&&(t=this._root),t)for(;t.right;)t=t.right;return t},t.prototype.at=function(t){for(var e=this._root,n=!1,r=0,i=[];!n;)if(e)i.push(e),e=e.left;else if(i.length>0){if(e=i.pop(),r===t)return e;r++,e=e.right}else n=!0;return null},t.prototype.next=function(t){var e=this._root,n=null;if(t.right){for(n=t.right;n.left;)n=n.left;return n}for(var r=this._comparator;e;){var i=r(t.key,e.key);if(0===i)break;i<0?(n=e,e=e.left):e=e.right}return n},t.prototype.prev=function(t){var e=this._root,n=null;if(null!==t.left){for(n=t.left;n.right;)n=n.right;return n}for(var r=this._comparator;e;){var i=r(t.key,e.key);if(0===i)break;i<0?e=e.left:(n=e,e=e.right)}return n},t.prototype.clear=function(){return this._root=null,this._size=0,this},t.prototype.toList=function(){return function(t){var e=t,n=[],r=!1,i=new pu(null,null),o=i;for(;!r;)e?(n.push(e),e=e.left):n.length>0?e=(e=o=o.next=n.pop()).right:r=!0;return o.next=null,i.next}(this._root)},t.prototype.load=function(t,e,n){void 0===e&&(e=[]),void 0===n&&(n=!1);var r=t.length,i=this._comparator;if(n&&Eu(t,e,0,r-1,i),null===this._root)this._root=mu(t,e,0,r),this._size=r;else{var o=function(t,e,n){var r=new pu(null,null),i=r,o=t,s=e;for(;null!==o&&null!==s;)n(o.key,s.key)<0?(i.next=o,o=o.next):(i.next=s,s=s.next),i=i.next;null!==o?i.next=o:null!==s&&(i.next=s);return r.next}(this.toList(),function(t,e){for(var n=new pu(null,null),r=n,i=0;i<t.length;i++)r=r.next=new pu(t[i],e[i]);return r.next=null,n.next}(t,e),i);r=this._size+r,this._root=xu({head:o},0,r)}return this},t.prototype.isEmpty=function(){return null===this._root},Object.defineProperty(t.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),t.prototype.toString=function(t){void 0===t&&(t=function(t){return String(t.key)});var e=[];return vu(this._root,"",!0,(function(t){return e.push(t)}),t),e.join("")},t.prototype.update=function(t,e,n){var r=this._comparator,i=yu(t,this._root,r),o=i.left,s=i.right;r(t,e)<0?s=du(e,n,s,r):o=du(e,n,o,r),this._root=function(t,e,n){return null===e?t:(null===t||((e=gu(t.key,e,n)).left=t),e)}(o,s,r)},t.prototype.split=function(t){return yu(t,this._root,this._comparator)},t}();function mu(t,e,n,r){var i=r-n;if(i>0){var o=n+Math.floor(i/2),s=t[o],a=e[o],u=new pu(s,a);return u.left=mu(t,e,n,o),u.right=mu(t,e,o+1,r),u}return null}function xu(t,e,n){var r=n-e;if(r>0){var i=e+Math.floor(r/2),o=xu(t,e,i),s=t.head;return s.left=o,t.head=t.head.next,s.right=xu(t,i+1,n),s}return null}function Eu(t,e,n,r,i){if(!(n>=r)){for(var o=t[n+r>>1],s=n-1,a=r+1;;){do{s++}while(i(t[s],o)<0);do{a--}while(i(t[a],o)>0);if(s>=a)break;var u=t[s];t[s]=t[a],t[a]=u,u=e[s],e[s]=e[a],e[a]=u}Eu(t,e,n,a,i),Eu(t,e,a+1,r,i)}}function bu(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function wu(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Iu(t,e,n){return e&&wu(t.prototype,e),n&&wu(t,n),t}var Nu=function(t,e){return t.ll.x<=e.x&&e.x<=t.ur.x&&t.ll.y<=e.y&&e.y<=t.ur.y},Su=function(t,e){if(e.ur.x<t.ll.x||t.ur.x<e.ll.x||e.ur.y<t.ll.y||t.ur.y<e.ll.y)return null;var n=t.ll.x<e.ll.x?e.ll.x:t.ll.x,r=t.ur.x<e.ur.x?t.ur.x:e.ur.x;return{ll:{x:n,y:t.ll.y<e.ll.y?e.ll.y:t.ll.y},ur:{x:r,y:t.ur.y<e.ur.y?t.ur.y:e.ur.y}}},Cu=Number.EPSILON;void 0===Cu&&(Cu=Math.pow(2,-52));var Pu=Cu*Cu,Mu=function(t,e){if(-Cu<t&&t<Cu&&-Cu<e&&e<Cu)return 0;var n=t-e;return n*n<Pu*t*e?0:t<e?-1:1},Lu=function(){function t(){bu(this,t),this.reset()}return Iu(t,[{key:"reset",value:function(){this.xRounder=new Ou,this.yRounder=new Ou}},{key:"round",value:function(t,e){return{x:this.xRounder.round(t),y:this.yRounder.round(e)}}}]),t}(),Ou=function(){function t(){bu(this,t),this.tree=new _u,this.round(0)}return Iu(t,[{key:"round",value:function(t){var e=this.tree.add(t),n=this.tree.prev(e);if(null!==n&&0===Mu(e.key,n.key))return this.tree.remove(t),n.key;var r=this.tree.next(e);return null!==r&&0===Mu(e.key,r.key)?(this.tree.remove(t),r.key):t}}]),t}(),Ru=new Lu,Tu=function(t,e){return t.x*e.y-t.y*e.x},Au=function(t,e){return t.x*e.x+t.y*e.y},Du=function(t,e,n){var r={x:e.x-t.x,y:e.y-t.y},i={x:n.x-t.x,y:n.y-t.y},o=Tu(r,i);return Mu(o,0)},Fu=function(t){return Math.sqrt(Au(t,t))},ku=function(t,e,n){var r={x:e.x-t.x,y:e.y-t.y},i={x:n.x-t.x,y:n.y-t.y};return Au(i,r)/Fu(i)/Fu(r)},Gu=function(t,e,n){return 0===e.y?null:{x:t.x+e.x/e.y*(n-t.y),y:n}},qu=function(t,e,n){return 0===e.x?null:{x:n,y:t.y+e.y/e.x*(n-t.x)}},Bu=function(){function t(e,n){bu(this,t),void 0===e.events?e.events=[this]:e.events.push(this),this.point=e,this.isLeft=n}return Iu(t,null,[{key:"compare",value:function(e,n){var r=t.comparePoints(e.point,n.point);return 0!==r?r:(e.point!==n.point&&e.link(n),e.isLeft!==n.isLeft?e.isLeft?1:-1:ju.compare(e.segment,n.segment))}},{key:"comparePoints",value:function(t,e){return t.x<e.x?-1:t.x>e.x?1:t.y<e.y?-1:t.y>e.y?1:0}}]),Iu(t,[{key:"link",value:function(t){if(t.point===this.point)throw new Error("Tried to link already linked events");for(var e=t.point.events,n=0,r=e.length;n<r;n++){var i=e[n];this.point.events.push(i),i.point=this.point}this.checkForConsuming()}},{key:"checkForConsuming",value:function(){for(var t=this.point.events.length,e=0;e<t;e++){var n=this.point.events[e];if(void 0===n.segment.consumedBy)for(var r=e+1;r<t;r++){var i=this.point.events[r];void 0===i.consumedBy&&(n.otherSE.point.events===i.otherSE.point.events&&n.segment.consume(i.segment))}}}},{key:"getAvailableLinkedEvents",value:function(){for(var t=[],e=0,n=this.point.events.length;e<n;e++){var r=this.point.events[e];r!==this&&!r.segment.ringOut&&r.segment.isInResult()&&t.push(r)}return t}},{key:"getLeftmostComparator",value:function(t){var e=this,n=new Map,r=function(r){var i,o,s,a,u,l=r.otherSE;n.set(r,{sine:(i=e.point,o=t.point,s=l.point,a={x:o.x-i.x,y:o.y-i.y},u={x:s.x-i.x,y:s.y-i.y},Tu(u,a)/Fu(u)/Fu(a)),cosine:ku(e.point,t.point,l.point)})};return function(t,e){n.has(t)||r(t),n.has(e)||r(e);var i=n.get(t),o=i.sine,s=i.cosine,a=n.get(e),u=a.sine,l=a.cosine;return o>=0&&u>=0?s<l?1:s>l?-1:0:o<0&&u<0?s<l?-1:s>l?1:0:u<o?-1:u>o?1:0}}}]),t}(),zu=0,ju=function(){function t(e,n,r,i){bu(this,t),this.id=++zu,this.leftSE=e,e.segment=this,e.otherSE=n,this.rightSE=n,n.segment=this,n.otherSE=e,this.rings=r,this.windings=i}return Iu(t,null,[{key:"compare",value:function(t,e){var n=t.leftSE.point.x,r=e.leftSE.point.x,i=t.rightSE.point.x,o=e.rightSE.point.x;if(o<n)return 1;if(i<r)return-1;var s=t.leftSE.point.y,a=e.leftSE.point.y,u=t.rightSE.point.y,l=e.rightSE.point.y;if(n<r){if(a<s&&a<u)return 1;if(a>s&&a>u)return-1;var c=t.comparePoint(e.leftSE.point);if(c<0)return 1;if(c>0)return-1;var h=e.comparePoint(t.rightSE.point);return 0!==h?h:-1}if(n>r){if(s<a&&s<l)return-1;if(s>a&&s>l)return 1;var p=e.comparePoint(t.leftSE.point);if(0!==p)return p;var f=t.comparePoint(e.rightSE.point);return f<0?1:f>0?-1:1}if(s<a)return-1;if(s>a)return 1;if(i<o){var g=e.comparePoint(t.rightSE.point);if(0!==g)return g}if(i>o){var d=t.comparePoint(e.rightSE.point);if(d<0)return 1;if(d>0)return-1}if(i!==o){var y=u-s,v=i-n,_=l-a,m=o-r;if(y>v&&_<m)return 1;if(y<v&&_>m)return-1}return i>o?1:i<o||u<l?-1:u>l?1:t.id<e.id?-1:t.id>e.id?1:0}}]),Iu(t,[{key:"replaceRightSE",value:function(t){this.rightSE=t,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}},{key:"bbox",value:function(){var t=this.leftSE.point.y,e=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:t<e?t:e},ur:{x:this.rightSE.point.x,y:t>e?t:e}}}},{key:"vector",value:function(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}},{key:"isAnEndpoint",value:function(t){return t.x===this.leftSE.point.x&&t.y===this.leftSE.point.y||t.x===this.rightSE.point.x&&t.y===this.rightSE.point.y}},{key:"comparePoint",value:function(t){if(this.isAnEndpoint(t))return 0;var e=this.leftSE.point,n=this.rightSE.point,r=this.vector();if(e.x===n.x)return t.x===e.x?0:t.x<e.x?1:-1;var i=(t.y-e.y)/r.y,o=e.x+i*r.x;if(t.x===o)return 0;var s=(t.x-e.x)/r.x,a=e.y+s*r.y;return t.y===a?0:t.y<a?-1:1}},{key:"getIntersection",value:function(t){var e=this.bbox(),n=t.bbox(),r=Su(e,n);if(null===r)return null;var i=this.leftSE.point,o=this.rightSE.point,s=t.leftSE.point,a=t.rightSE.point,u=Nu(e,s)&&0===this.comparePoint(s),l=Nu(n,i)&&0===t.comparePoint(i),c=Nu(e,a)&&0===this.comparePoint(a),h=Nu(n,o)&&0===t.comparePoint(o);if(l&&u)return h&&!c?o:!h&&c?a:null;if(l)return c&&i.x===a.x&&i.y===a.y?null:i;if(u)return h&&o.x===s.x&&o.y===s.y?null:s;if(h&&c)return null;if(h)return o;if(c)return a;var p=function(t,e,n,r){if(0===e.x)return qu(n,r,t.x);if(0===r.x)return qu(t,e,n.x);if(0===e.y)return Gu(n,r,t.y);if(0===r.y)return Gu(t,e,n.y);var i=Tu(e,r);if(0==i)return null;var o={x:n.x-t.x,y:n.y-t.y},s=Tu(o,e)/i,a=Tu(o,r)/i;return{x:(t.x+a*e.x+(n.x+s*r.x))/2,y:(t.y+a*e.y+(n.y+s*r.y))/2}}(i,this.vector(),s,t.vector());return null===p?null:Nu(r,p)?Ru.round(p.x,p.y):null}},{key:"split",value:function(e){var n=[],r=void 0!==e.events,i=new Bu(e,!0),o=new Bu(e,!1),s=this.rightSE;this.replaceRightSE(o),n.push(o),n.push(i);var a=new t(i,s,this.rings.slice(),this.windings.slice());return Bu.comparePoints(a.leftSE.point,a.rightSE.point)>0&&a.swapEvents(),Bu.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),r&&(i.checkForConsuming(),o.checkForConsuming()),n}},{key:"swapEvents",value:function(){var t=this.rightSE;this.rightSE=this.leftSE,this.leftSE=t,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(var e=0,n=this.windings.length;e<n;e++)this.windings[e]*=-1}},{key:"consume",value:function(e){for(var n=this,r=e;n.consumedBy;)n=n.consumedBy;for(;r.consumedBy;)r=r.consumedBy;var i=t.compare(n,r);if(0!==i){if(i>0){var o=n;n=r,r=o}if(n.prev===r){var s=n;n=r,r=s}for(var a=0,u=r.rings.length;a<u;a++){var l=r.rings[a],c=r.windings[a],h=n.rings.indexOf(l);-1===h?(n.rings.push(l),n.windings.push(c)):n.windings[h]+=c}r.rings=null,r.windings=null,r.consumedBy=n,r.leftSE.consumedBy=n.leftSE,r.rightSE.consumedBy=n.rightSE}}},{key:"prevInResult",value:function(){return void 0!==this._prevInResult||(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null),this._prevInResult}},{key:"beforeState",value:function(){if(void 0!==this._beforeState)return this._beforeState;if(this.prev){var t=this.prev.consumedBy||this.prev;this._beforeState=t.afterState()}else this._beforeState={rings:[],windings:[],multiPolys:[]};return this._beforeState}},{key:"afterState",value:function(){if(void 0!==this._afterState)return this._afterState;var t=this.beforeState();this._afterState={rings:t.rings.slice(0),windings:t.windings.slice(0),multiPolys:[]};for(var e=this._afterState.rings,n=this._afterState.windings,r=this._afterState.multiPolys,i=0,o=this.rings.length;i<o;i++){var s=this.rings[i],a=this.windings[i],u=e.indexOf(s);-1===u?(e.push(s),n.push(a)):n[u]+=a}for(var l=[],c=[],h=0,p=e.length;h<p;h++)if(0!==n[h]){var f=e[h],g=f.poly;if(-1===c.indexOf(g))if(f.isExterior)l.push(g);else{-1===c.indexOf(g)&&c.push(g);var d=l.indexOf(f.poly);-1!==d&&l.splice(d,1)}}for(var y=0,v=l.length;y<v;y++){var _=l[y].multiPoly;-1===r.indexOf(_)&&r.push(_)}return this._afterState}},{key:"isInResult",value:function(){if(this.consumedBy)return!1;if(void 0!==this._isInResult)return this._isInResult;var t=this.beforeState().multiPolys,e=this.afterState().multiPolys;switch(Qu.type){case"union":var n=0===t.length,r=0===e.length;this._isInResult=n!==r;break;case"intersection":var i,o;t.length<e.length?(i=t.length,o=e.length):(i=e.length,o=t.length),this._isInResult=o===Qu.numMultiPolys&&i<o;break;case"xor":var s=Math.abs(t.length-e.length);this._isInResult=s%2==1;break;case"difference":var a=function(t){return 1===t.length&&t[0].isSubject};this._isInResult=a(t)!==a(e);break;default:throw new Error("Unrecognized operation type found ".concat(Qu.type))}return this._isInResult}}],[{key:"fromRing",value:function(e,n,r){var i,o,s,a=Bu.comparePoints(e,n);if(a<0)i=e,o=n,s=1;else{if(!(a>0))throw new Error("Tried to create degenerate segment at [".concat(e.x,", ").concat(e.y,"]"));i=n,o=e,s=-1}return new t(new Bu(i,!0),new Bu(o,!1),[r],[s])}}]),t}(),Uu=function(){function t(e,n,r){if(bu(this,t),!Array.isArray(e)||0===e.length)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=n,this.isExterior=r,this.segments=[],"number"!=typeof e[0][0]||"number"!=typeof e[0][1])throw new Error("Input geometry is not a valid Polygon or MultiPolygon");var i=Ru.round(e[0][0],e[0][1]);this.bbox={ll:{x:i.x,y:i.y},ur:{x:i.x,y:i.y}};for(var o=i,s=1,a=e.length;s<a;s++){if("number"!=typeof e[s][0]||"number"!=typeof e[s][1])throw new Error("Input geometry is not a valid Polygon or MultiPolygon");var u=Ru.round(e[s][0],e[s][1]);u.x===o.x&&u.y===o.y||(this.segments.push(ju.fromRing(o,u,this)),u.x<this.bbox.ll.x&&(this.bbox.ll.x=u.x),u.y<this.bbox.ll.y&&(this.bbox.ll.y=u.y),u.x>this.bbox.ur.x&&(this.bbox.ur.x=u.x),u.y>this.bbox.ur.y&&(this.bbox.ur.y=u.y),o=u)}i.x===o.x&&i.y===o.y||this.segments.push(ju.fromRing(o,i,this))}return Iu(t,[{key:"getSweepEvents",value:function(){for(var t=[],e=0,n=this.segments.length;e<n;e++){var r=this.segments[e];t.push(r.leftSE),t.push(r.rightSE)}return t}}]),t}(),Vu=function(){function t(e,n){if(bu(this,t),!Array.isArray(e))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new Uu(e[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(var r=1,i=e.length;r<i;r++){var o=new Uu(e[r],this,!1);o.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=o.bbox.ll.x),o.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=o.bbox.ll.y),o.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=o.bbox.ur.x),o.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=o.bbox.ur.y),this.interiorRings.push(o)}this.multiPoly=n}return Iu(t,[{key:"getSweepEvents",value:function(){for(var t=this.exteriorRing.getSweepEvents(),e=0,n=this.interiorRings.length;e<n;e++)for(var r=this.interiorRings[e].getSweepEvents(),i=0,o=r.length;i<o;i++)t.push(r[i]);return t}}]),t}(),Xu=function(){function t(e,n){if(bu(this,t),!Array.isArray(e))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{"number"==typeof e[0][0][0]&&(e=[e])}catch(t){}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(var r=0,i=e.length;r<i;r++){var o=new Vu(e[r],this);o.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=o.bbox.ll.x),o.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=o.bbox.ll.y),o.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=o.bbox.ur.x),o.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=o.bbox.ur.y),this.polys.push(o)}this.isSubject=n}return Iu(t,[{key:"getSweepEvents",value:function(){for(var t=[],e=0,n=this.polys.length;e<n;e++)for(var r=this.polys[e].getSweepEvents(),i=0,o=r.length;i<o;i++)t.push(r[i]);return t}}]),t}(),Yu=function(){function t(e){bu(this,t),this.events=e;for(var n=0,r=e.length;n<r;n++)e[n].segment.ringOut=this;this.poly=null}return Iu(t,null,[{key:"factory",value:function(e){for(var n=[],r=0,i=e.length;r<i;r++){var o=e[r];if(o.isInResult()&&!o.ringOut){for(var s=null,a=o.leftSE,u=o.rightSE,l=[a],c=a.point,h=[];s=a,a=u,l.push(a),a.point!==c;)for(;;){var p=a.getAvailableLinkedEvents();if(0===p.length){var f=l[0].point,g=l[l.length-1].point;throw new Error("Unable to complete output ring starting at [".concat(f.x,",")+" ".concat(f.y,"]. Last matching segment found ends at")+" [".concat(g.x,", ").concat(g.y,"]."))}if(1===p.length){u=p[0].otherSE;break}for(var d=null,y=0,v=h.length;y<v;y++)if(h[y].point===a.point){d=y;break}if(null===d){h.push({index:l.length,point:a.point});var _=a.getLeftmostComparator(s);u=p.sort(_)[0].otherSE;break}var m=h.splice(d)[0],x=l.splice(m.index);x.unshift(x[0].otherSE),n.push(new t(x.reverse()))}n.push(new t(l))}}return n}}]),Iu(t,[{key:"getGeom",value:function(){for(var t=this.events[0].point,e=[t],n=1,r=this.events.length-1;n<r;n++){var i=this.events[n].point,o=this.events[n+1].point;0!==Du(i,t,o)&&(e.push(i),t=i)}if(1===e.length)return null;var s=e[0],a=e[1];0===Du(s,t,a)&&e.shift(),e.push(e[0]);for(var u=this.isExteriorRing()?1:-1,l=this.isExteriorRing()?0:e.length-1,c=this.isExteriorRing()?e.length:-1,h=[],p=l;p!=c;p+=u)h.push([e[p].x,e[p].y]);return h}},{key:"isExteriorRing",value:function(){if(void 0===this._isExteriorRing){var t=this.enclosingRing();this._isExteriorRing=!t||!t.isExteriorRing()}return this._isExteriorRing}},{key:"enclosingRing",value:function(){return void 0===this._enclosingRing&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}},{key:"_calcEnclosingRing",value:function(){for(var t=this.events[0],e=1,n=this.events.length;e<n;e++){var r=this.events[e];Bu.compare(t,r)>0&&(t=r)}for(var i=t.segment.prevInResult(),o=i?i.prevInResult():null;;){if(!i)return null;if(!o)return i.ringOut;if(o.ringOut!==i.ringOut)return o.ringOut.enclosingRing()!==i.ringOut?i.ringOut:i.ringOut.enclosingRing();i=o.prevInResult(),o=i?i.prevInResult():null}}}]),t}(),Hu=function(){function t(e){bu(this,t),this.exteriorRing=e,e.poly=this,this.interiorRings=[]}return Iu(t,[{key:"addInterior",value:function(t){this.interiorRings.push(t),t.poly=this}},{key:"getGeom",value:function(){var t=[this.exteriorRing.getGeom()];if(null===t[0])return null;for(var e=0,n=this.interiorRings.length;e<n;e++){var r=this.interiorRings[e].getGeom();null!==r&&t.push(r)}return t}}]),t}(),Wu=function(){function t(e){bu(this,t),this.rings=e,this.polys=this._composePolys(e)}return Iu(t,[{key:"getGeom",value:function(){for(var t=[],e=0,n=this.polys.length;e<n;e++){var r=this.polys[e].getGeom();null!==r&&t.push(r)}return t}},{key:"_composePolys",value:function(t){for(var e=[],n=0,r=t.length;n<r;n++){var i=t[n];if(!i.poly)if(i.isExteriorRing())e.push(new Hu(i));else{var o=i.enclosingRing();o.poly||e.push(new Hu(o)),o.poly.addInterior(i)}}return e}}]),t}(),Ju=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ju.compare;bu(this,t),this.queue=e,this.tree=new _u(n),this.segments=[]}return Iu(t,[{key:"process",value:function(t){var e=t.segment,n=[];if(t.consumedBy)return t.isLeft?this.queue.remove(t.otherSE):this.tree.remove(e),n;var r=t.isLeft?this.tree.insert(e):this.tree.find(e);if(!r)throw new Error("Unable to find segment #".concat(e.id," ")+"[".concat(e.leftSE.point.x,", ").concat(e.leftSE.point.y,"] -> ")+"[".concat(e.rightSE.point.x,", ").concat(e.rightSE.point.y,"] ")+"in SweepLine tree. Please submit a bug report.");for(var i=r,o=r,s=void 0,a=void 0;void 0===s;)null===(i=this.tree.prev(i))?s=null:void 0===i.key.consumedBy&&(s=i.key);for(;void 0===a;)null===(o=this.tree.next(o))?a=null:void 0===o.key.consumedBy&&(a=o.key);if(t.isLeft){var u=null;if(s){var l=s.getIntersection(e);if(null!==l&&(e.isAnEndpoint(l)||(u=l),!s.isAnEndpoint(l)))for(var c=this._splitSafely(s,l),h=0,p=c.length;h<p;h++)n.push(c[h])}var f=null;if(a){var g=a.getIntersection(e);if(null!==g&&(e.isAnEndpoint(g)||(f=g),!a.isAnEndpoint(g)))for(var d=this._splitSafely(a,g),y=0,v=d.length;y<v;y++)n.push(d[y])}if(null!==u||null!==f){var _=null;if(null===u)_=f;else if(null===f)_=u;else{_=Bu.comparePoints(u,f)<=0?u:f}this.queue.remove(e.rightSE),n.push(e.rightSE);for(var m=e.split(_),x=0,E=m.length;x<E;x++)n.push(m[x])}n.length>0?(this.tree.remove(e),n.push(t)):(this.segments.push(e),e.prev=s)}else{if(s&&a){var b=s.getIntersection(a);if(null!==b){if(!s.isAnEndpoint(b))for(var w=this._splitSafely(s,b),I=0,N=w.length;I<N;I++)n.push(w[I]);if(!a.isAnEndpoint(b))for(var S=this._splitSafely(a,b),C=0,P=S.length;C<P;C++)n.push(S[C])}}this.tree.remove(e)}return n}},{key:"_splitSafely",value:function(t,e){this.tree.remove(t);var n=t.rightSE;this.queue.remove(n);var r=t.split(e);return r.push(n),void 0===t.consumedBy&&this.tree.insert(t),r}}]),t}(),Zu="undefined"!=typeof process&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,Ku="undefined"!=typeof process&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6,Qu=new(function(){function t(){bu(this,t)}return Iu(t,[{key:"run",value:function(t,e,n){Qu.type=t,Ru.reset();for(var r=[new Xu(e,!0)],i=0,o=n.length;i<o;i++)r.push(new Xu(n[i],!1));if(Qu.numMultiPolys=r.length,"difference"===Qu.type)for(var s=r[0],a=1;a<r.length;)null!==Su(r[a].bbox,s.bbox)?a++:r.splice(a,1);if("intersection"===Qu.type)for(var u=0,l=r.length;u<l;u++)for(var c=r[u],h=u+1,p=r.length;h<p;h++)if(null===Su(c.bbox,r[h].bbox))return[];for(var f=new _u(Bu.compare),g=0,d=r.length;g<d;g++)for(var y=r[g].getSweepEvents(),v=0,_=y.length;v<_;v++)if(f.insert(y[v]),f.size>Zu)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big). Please file a bug report.");for(var m=new Ju(f),x=f.size,E=f.pop();E;){var b=E.key;if(f.size===x){var w=b.segment;throw new Error("Unable to pop() ".concat(b.isLeft?"left":"right"," SweepEvent ")+"[".concat(b.point.x,", ").concat(b.point.y,"] from segment #").concat(w.id," ")+"[".concat(w.leftSE.point.x,", ").concat(w.leftSE.point.y,"] -> ")+"[".concat(w.rightSE.point.x,", ").concat(w.rightSE.point.y,"] from queue. ")+"Please file a bug report.")}if(f.size>Zu)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big). Please file a bug report.");if(m.segments.length>Ku)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments). Please file a bug report.");for(var I=m.process(b),N=0,S=I.length;N<S;N++){var C=I[N];void 0===C.consumedBy&&f.insert(C)}x=f.size,E=f.pop()}Ru.reset();var P=Yu.factory(m.segments);return new Wu(P).getGeom()}}]),t}()),$u={union:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Qu.run("union",t,n)},intersection:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Qu.run("intersection",t,n)},xor:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Qu.run("xor",t,n)},difference:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Qu.run("difference",t,n)}};"fill"in Array.prototype||Object.defineProperty(Array.prototype,"fill",{configurable:!0,value:function(t){if(null==this)throw new TypeError(this+" is not an object");var e=Object(this),n=Math.max(Math.min(e.length,9007199254740991),0)||0,r=1 in arguments&&parseInt(Number(arguments[1]),10)||0;r=r<0?Math.max(n+r,0):Math.min(r,n);var i=2 in arguments&&void 0!==arguments[2]?parseInt(Number(arguments[2]),10)||0:n;for(i=i<0?Math.max(n+arguments[2],0):Math.min(i,n);r<i;)e[r]=t,++r;return e},writable:!0}),Number.isFinite=Number.isFinite||function(t){return"number"==typeof t&&isFinite(t)},Number.isInteger=Number.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t},Number.parseFloat=Number.parseFloat||parseFloat,Number.isNaN=Number.isNaN||function(t){return t!=t},Math.trunc=Math.trunc||function(t){return t<0?Math.ceil(t):Math.floor(t)};var tl=function(){};tl.prototype.interfaces_=function(){return[]},tl.prototype.getClass=function(){return tl},tl.prototype.equalsWithTolerance=function(t,e,n){return Math.abs(t-e)<=n};var el=function(t){function e(e){t.call(this,e),this.name="IllegalArgumentException",this.message=e,this.stack=(new t).stack}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Error),nl=function(){},rl={MAX_VALUE:{configurable:!0}};nl.isNaN=function(t){return Number.isNaN(t)},nl.doubleToLongBits=function(t){return t},nl.longBitsToDouble=function(t){return t},nl.isInfinite=function(t){return!Number.isFinite(t)},rl.MAX_VALUE.get=function(){return Number.MAX_VALUE},Object.defineProperties(nl,rl);var il=function(){},ol=function(){},sl=function(){};function al(){}var ul=function t(){if(this.x=null,this.y=null,this.z=null,0===arguments.length)this.x=0,this.y=0,this.z=t.NULL_ORDINATE;else if(1===arguments.length){var e=arguments[0];this.x=e.x,this.y=e.y,this.z=e.z}else 2===arguments.length?(this.x=arguments[0],this.y=arguments[1],this.z=t.NULL_ORDINATE):3===arguments.length&&(this.x=arguments[0],this.y=arguments[1],this.z=arguments[2])},ll={DimensionalComparator:{configurable:!0},serialVersionUID:{configurable:!0},NULL_ORDINATE:{configurable:!0},X:{configurable:!0},Y:{configurable:!0},Z:{configurable:!0}};ul.prototype.setOrdinate=function(t,e){switch(t){case ul.X:this.x=e;break;case ul.Y:this.y=e;break;case ul.Z:this.z=e;break;default:throw new el("Invalid ordinate index: "+t)}},ul.prototype.equals2D=function(){if(1===arguments.length){var t=arguments[0];return this.x===t.x&&this.y===t.y}if(2===arguments.length){var e=arguments[0],n=arguments[1];return!!tl.equalsWithTolerance(this.x,e.x,n)&&!!tl.equalsWithTolerance(this.y,e.y,n)}},ul.prototype.getOrdinate=function(t){switch(t){case ul.X:return this.x;case ul.Y:return this.y;case ul.Z:return this.z}throw new el("Invalid ordinate index: "+t)},ul.prototype.equals3D=function(t){return this.x===t.x&&this.y===t.y&&(this.z===t.z||nl.isNaN(this.z))&&nl.isNaN(t.z)},ul.prototype.equals=function(t){return t instanceof ul&&this.equals2D(t)},ul.prototype.equalInZ=function(t,e){return tl.equalsWithTolerance(this.z,t.z,e)},ul.prototype.compareTo=function(t){var e=t;return this.x<e.x?-1:this.x>e.x?1:this.y<e.y?-1:this.y>e.y?1:0},ul.prototype.clone=function(){},ul.prototype.copy=function(){return new ul(this)},ul.prototype.toString=function(){return"("+this.x+", "+this.y+", "+this.z+")"},ul.prototype.distance3D=function(t){var e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return Math.sqrt(e*e+n*n+r*r)},ul.prototype.distance=function(t){var e=this.x-t.x,n=this.y-t.y;return Math.sqrt(e*e+n*n)},ul.prototype.hashCode=function(){var t=17;return t=37*(t=37*t+ul.hashCode(this.x))+ul.hashCode(this.y)},ul.prototype.setCoordinate=function(t){this.x=t.x,this.y=t.y,this.z=t.z},ul.prototype.interfaces_=function(){return[il,ol,al]},ul.prototype.getClass=function(){return ul},ul.hashCode=function(){if(1===arguments.length){var t=arguments[0],e=nl.doubleToLongBits(t);return Math.trunc((e^e)>>>32)}},ll.DimensionalComparator.get=function(){return cl},ll.serialVersionUID.get=function(){return 0x5cbf2c235c7e5800},ll.NULL_ORDINATE.get=function(){return nl.NaN},ll.X.get=function(){return 0},ll.Y.get=function(){return 1},ll.Z.get=function(){return 2},Object.defineProperties(ul,ll);var cl=function(t){if(this._dimensionsToTest=2,0===arguments.length);else if(1===arguments.length){var e=arguments[0];if(2!==e&&3!==e)throw new el("only 2 or 3 dimensions may be specified");this._dimensionsToTest=e}};cl.prototype.compare=function(t,e){var n=t,r=e,i=cl.compare(n.x,r.x);if(0!==i)return i;var o=cl.compare(n.y,r.y);return 0!==o?o:this._dimensionsToTest<=2?0:cl.compare(n.z,r.z)},cl.prototype.interfaces_=function(){return[sl]},cl.prototype.getClass=function(){return cl},cl.compare=function(t,e){return t<e?-1:t>e?1:nl.isNaN(t)?nl.isNaN(e)?0:-1:nl.isNaN(e)?1:0};var hl=function(){};hl.prototype.create=function(){},hl.prototype.interfaces_=function(){return[]},hl.prototype.getClass=function(){return hl};var pl=function(){},fl={INTERIOR:{configurable:!0},BOUNDARY:{configurable:!0},EXTERIOR:{configurable:!0},NONE:{configurable:!0}};pl.prototype.interfaces_=function(){return[]},pl.prototype.getClass=function(){return pl},pl.toLocationSymbol=function(t){switch(t){case pl.EXTERIOR:return"e";case pl.BOUNDARY:return"b";case pl.INTERIOR:return"i";case pl.NONE:return"-"}throw new el("Unknown location value: "+t)},fl.INTERIOR.get=function(){return 0},fl.BOUNDARY.get=function(){return 1},fl.EXTERIOR.get=function(){return 2},fl.NONE.get=function(){return-1},Object.defineProperties(pl,fl);var gl=function(t,e){return t.interfaces_&&t.interfaces_().indexOf(e)>-1},dl=function(){},yl={LOG_10:{configurable:!0}};dl.prototype.interfaces_=function(){return[]},dl.prototype.getClass=function(){return dl},dl.log10=function(t){var e=Math.log(t);return nl.isInfinite(e)||nl.isNaN(e)?e:e/dl.LOG_10},dl.min=function(t,e,n,r){var i=t;return e<i&&(i=e),n<i&&(i=n),r<i&&(i=r),i},dl.clamp=function(){if("number"==typeof arguments[2]&&"number"==typeof arguments[0]&&"number"==typeof arguments[1]){var t=arguments[0],e=arguments[1],n=arguments[2];return t<e?e:t>n?n:t}if(Number.isInteger(arguments[2])&&Number.isInteger(arguments[0])&&Number.isInteger(arguments[1])){var r=arguments[0],i=arguments[1],o=arguments[2];return r<i?i:r>o?o:r}},dl.wrap=function(t,e){return t<0?e- -t%e:t%e},dl.max=function(){if(3===arguments.length){var t=arguments[0],e=arguments[1],n=arguments[2],r=t;return e>r&&(r=e),n>r&&(r=n),r}if(4===arguments.length){var i=arguments[0],o=arguments[1],s=arguments[2],a=arguments[3],u=i;return o>u&&(u=o),s>u&&(u=s),a>u&&(u=a),u}},dl.average=function(t,e){return(t+e)/2},yl.LOG_10.get=function(){return Math.log(10)},Object.defineProperties(dl,yl);var vl=function(t){this.str=t};vl.prototype.append=function(t){this.str+=t},vl.prototype.setCharAt=function(t,e){this.str=this.str.substr(0,t)+e+this.str.substr(t+1)},vl.prototype.toString=function(t){return this.str};var _l=function(t){this.value=t};_l.prototype.intValue=function(){return this.value},_l.prototype.compareTo=function(t){return this.value<t?-1:this.value>t?1:0},_l.isNaN=function(t){return Number.isNaN(t)};var ml=function(){};ml.isWhitespace=function(t){return t<=32&&t>=0||127===t},ml.toUpperCase=function(t){return t.toUpperCase()};var xl=function t(){if(this._hi=0,this._lo=0,0===arguments.length)this.init(0);else if(1===arguments.length){if("number"==typeof arguments[0]){var e=arguments[0];this.init(e)}else if(arguments[0]instanceof t){var n=arguments[0];this.init(n)}else if("string"==typeof arguments[0]){var r=arguments[0];t.call(this,t.parse(r))}}else if(2===arguments.length){var i=arguments[0],o=arguments[1];this.init(i,o)}},El={PI:{configurable:!0},TWO_PI:{configurable:!0},PI_2:{configurable:!0},E:{configurable:!0},NaN:{configurable:!0},EPS:{configurable:!0},SPLIT:{configurable:!0},MAX_PRINT_DIGITS:{configurable:!0},TEN:{configurable:!0},ONE:{configurable:!0},SCI_NOT_EXPONENT_CHAR:{configurable:!0},SCI_NOT_ZERO:{configurable:!0}};xl.prototype.le=function(t){return(this._hi<t._hi||this._hi===t._hi)&&this._lo<=t._lo},xl.prototype.extractSignificantDigits=function(t,e){var n=this.abs(),r=xl.magnitude(n._hi),i=xl.TEN.pow(r);(n=n.divide(i)).gt(xl.TEN)?(n=n.divide(xl.TEN),r+=1):n.lt(xl.ONE)&&(n=n.multiply(xl.TEN),r-=1);for(var o=r+1,s=new vl,a=xl.MAX_PRINT_DIGITS-1,u=0;u<=a;u++){t&&u===o&&s.append(".");var l=Math.trunc(n._hi);if(l<0)break;var c=!1,h=0;l>9?(c=!0,h="9"):h="0"+l,s.append(h),n=n.subtract(xl.valueOf(l)).multiply(xl.TEN),c&&n.selfAdd(xl.TEN);var p=!0,f=xl.magnitude(n._hi);if(f<0&&Math.abs(f)>=a-u&&(p=!1),!p)break}return e[0]=r,s.toString()},xl.prototype.sqr=function(){return this.multiply(this)},xl.prototype.doubleValue=function(){return this._hi+this._lo},xl.prototype.subtract=function(){if(arguments[0]instanceof xl){var t=arguments[0];return this.add(t.negate())}if("number"==typeof arguments[0]){var e=arguments[0];return this.add(-e)}},xl.prototype.equals=function(){if(1===arguments.length){var t=arguments[0];return this._hi===t._hi&&this._lo===t._lo}},xl.prototype.isZero=function(){return 0===this._hi&&0===this._lo},xl.prototype.selfSubtract=function(){if(arguments[0]instanceof xl){var t=arguments[0];return this.isNaN()?this:this.selfAdd(-t._hi,-t._lo)}if("number"==typeof arguments[0]){var e=arguments[0];return this.isNaN()?this:this.selfAdd(-e,0)}},xl.prototype.getSpecialNumberString=function(){return this.isZero()?"0.0":this.isNaN()?"NaN ":null},xl.prototype.min=function(t){return this.le(t)?this:t},xl.prototype.selfDivide=function(){if(1===arguments.length){if(arguments[0]instanceof xl){var t=arguments[0];return this.selfDivide(t._hi,t._lo)}if("number"==typeof arguments[0]){var e=arguments[0];return this.selfDivide(e,0)}}else if(2===arguments.length){var n=arguments[0],r=arguments[1],i=null,o=null,s=null,a=null,u=null,l=null,c=null,h=null;return u=this._hi/n,h=(i=(l=xl.SPLIT*u)-(i=l-u))*(s=(h=xl.SPLIT*n)-(s=h-n))-(c=u*n)+i*(a=n-s)+(o=u-i)*s+o*a,h=u+(l=(this._hi-c-h+this._lo-u*r)/n),this._hi=h,this._lo=u-h+l,this}},xl.prototype.dump=function(){return"DD<"+this._hi+", "+this._lo+">"},xl.prototype.divide=function(){if(arguments[0]instanceof xl){var t=arguments[0],e=null,n=null,r=null,i=null,o=null,s=null,a=null,u=null;n=(o=this._hi/t._hi)-(e=(s=xl.SPLIT*o)-(e=s-o)),u=e*(r=(u=xl.SPLIT*t._hi)-(r=u-t._hi))-(a=o*t._hi)+e*(i=t._hi-r)+n*r+n*i;var l=u=o+(s=(this._hi-a-u+this._lo-o*t._lo)/t._hi),c=o-u+s;return new xl(l,c)}if("number"==typeof arguments[0]){var h=arguments[0];return nl.isNaN(h)?xl.createNaN():xl.copy(this).selfDivide(h,0)}},xl.prototype.ge=function(t){return(this._hi>t._hi||this._hi===t._hi)&&this._lo>=t._lo},xl.prototype.pow=function(t){if(0===t)return xl.valueOf(1);var e=new xl(this),n=xl.valueOf(1),r=Math.abs(t);if(r>1)for(;r>0;)r%2==1&&n.selfMultiply(e),(r/=2)>0&&(e=e.sqr());else n=e;return t<0?n.reciprocal():n},xl.prototype.ceil=function(){if(this.isNaN())return xl.NaN;var t=Math.ceil(this._hi),e=0;return t===this._hi&&(e=Math.ceil(this._lo)),new xl(t,e)},xl.prototype.compareTo=function(t){var e=t;return this._hi<e._hi?-1:this._hi>e._hi?1:this._lo<e._lo?-1:this._lo>e._lo?1:0},xl.prototype.rint=function(){return this.isNaN()?this:this.add(.5).floor()},xl.prototype.setValue=function(){if(arguments[0]instanceof xl){var t=arguments[0];return this.init(t),this}if("number"==typeof arguments[0]){var e=arguments[0];return this.init(e),this}},xl.prototype.max=function(t){return this.ge(t)?this:t},xl.prototype.sqrt=function(){if(this.isZero())return xl.valueOf(0);if(this.isNegative())return xl.NaN;var t=1/Math.sqrt(this._hi),e=this._hi*t,n=xl.valueOf(e),r=this.subtract(n.sqr())._hi*(.5*t);return n.add(r)},xl.prototype.selfAdd=function(){if(1===arguments.length){if(arguments[0]instanceof xl){var t=arguments[0];return this.selfAdd(t._hi,t._lo)}if("number"==typeof arguments[0]){var e=arguments[0],n=null,r=null,i=null,o=null,s=null,a=null;return o=(i=this._hi+e)-(s=i-this._hi),r=(a=(o=e-s+(this._hi-o))+this._lo)+(i-(n=i+a)),this._hi=n+r,this._lo=r+(n-this._hi),this}}else if(2===arguments.length){var u=arguments[0],l=arguments[1],c=null,h=null,p=null,f=null,g=null,d=null,y=null;f=this._hi+u,h=this._lo+l,g=f-(d=f-this._hi),p=h-(y=h-this._lo);var v=(c=f+(d=(g=u-d+(this._hi-g))+h))+(d=(p=l-y+(this._lo-p))+(d+(f-c))),_=d+(c-v);return this._hi=v,this._lo=_,this}},xl.prototype.selfMultiply=function(){if(1===arguments.length){if(arguments[0]instanceof xl){var t=arguments[0];return this.selfMultiply(t._hi,t._lo)}if("number"==typeof arguments[0]){var e=arguments[0];return this.selfMultiply(e,0)}}else if(2===arguments.length){var n=arguments[0],r=arguments[1],i=null,o=null,s=null,a=null,u=null,l=null;i=(u=xl.SPLIT*this._hi)-this._hi,l=xl.SPLIT*n,i=u-i,o=this._hi-i,s=l-n;var c=(u=this._hi*n)+(l=i*(s=l-s)-u+i*(a=n-s)+o*s+o*a+(this._hi*r+this._lo*n)),h=l+(i=u-c);return this._hi=c,this._lo=h,this}},xl.prototype.selfSqr=function(){return this.selfMultiply(this)},xl.prototype.floor=function(){if(this.isNaN())return xl.NaN;var t=Math.floor(this._hi),e=0;return t===this._hi&&(e=Math.floor(this._lo)),new xl(t,e)},xl.prototype.negate=function(){return this.isNaN()?this:new xl(-this._hi,-this._lo)},xl.prototype.clone=function(){},xl.prototype.multiply=function(){if(arguments[0]instanceof xl){var t=arguments[0];return t.isNaN()?xl.createNaN():xl.copy(this).selfMultiply(t)}if("number"==typeof arguments[0]){var e=arguments[0];return nl.isNaN(e)?xl.createNaN():xl.copy(this).selfMultiply(e,0)}},xl.prototype.isNaN=function(){return nl.isNaN(this._hi)},xl.prototype.intValue=function(){return Math.trunc(this._hi)},xl.prototype.toString=function(){var t=xl.magnitude(this._hi);return t>=-3&&t<=20?this.toStandardNotation():this.toSciNotation()},xl.prototype.toStandardNotation=function(){var t=this.getSpecialNumberString();if(null!==t)return t;var e=new Array(1).fill(null),n=this.extractSignificantDigits(!0,e),r=e[0]+1,i=n;if("."===n.charAt(0))i="0"+n;else if(r<0)i="0."+xl.stringOfChar("0",-r)+n;else if(-1===n.indexOf(".")){var o=r-n.length;i=n+xl.stringOfChar("0",o)+".0"}return this.isNegative()?"-"+i:i},xl.prototype.reciprocal=function(){var t,e,n,r,i=null,o=null,s=null,a=null;t=(n=1/this._hi)-(i=(s=xl.SPLIT*n)-(i=s-n)),o=(a=xl.SPLIT*this._hi)-this._hi;var u=n+(s=(1-(r=n*this._hi)-(a=i*(o=a-o)-r+i*(e=this._hi-o)+t*o+t*e)-n*this._lo)/this._hi);return new xl(u,n-u+s)},xl.prototype.toSciNotation=function(){if(this.isZero())return xl.SCI_NOT_ZERO;var t=this.getSpecialNumberString();if(null!==t)return t;var e=new Array(1).fill(null),n=this.extractSignificantDigits(!1,e),r=xl.SCI_NOT_EXPONENT_CHAR+e[0];if("0"===n.charAt(0))throw new Error("Found leading zero: "+n);var i="";n.length>1&&(i=n.substring(1));var o=n.charAt(0)+"."+i;return this.isNegative()?"-"+o+r:o+r},xl.prototype.abs=function(){return this.isNaN()?xl.NaN:this.isNegative()?this.negate():new xl(this)},xl.prototype.isPositive=function(){return(this._hi>0||0===this._hi)&&this._lo>0},xl.prototype.lt=function(t){return(this._hi<t._hi||this._hi===t._hi)&&this._lo<t._lo},xl.prototype.add=function(){if(arguments[0]instanceof xl){var t=arguments[0];return xl.copy(this).selfAdd(t)}if("number"==typeof arguments[0]){var e=arguments[0];return xl.copy(this).selfAdd(e)}},xl.prototype.init=function(){if(1===arguments.length){if("number"==typeof arguments[0]){var t=arguments[0];this._hi=t,this._lo=0}else if(arguments[0]instanceof xl){var e=arguments[0];this._hi=e._hi,this._lo=e._lo}}else if(2===arguments.length){var n=arguments[0],r=arguments[1];this._hi=n,this._lo=r}},xl.prototype.gt=function(t){return(this._hi>t._hi||this._hi===t._hi)&&this._lo>t._lo},xl.prototype.isNegative=function(){return(this._hi<0||0===this._hi)&&this._lo<0},xl.prototype.trunc=function(){return this.isNaN()?xl.NaN:this.isPositive()?this.floor():this.ceil()},xl.prototype.signum=function(){return this._hi>0?1:this._hi<0?-1:this._lo>0?1:this._lo<0?-1:0},xl.prototype.interfaces_=function(){return[al,il,ol]},xl.prototype.getClass=function(){return xl},xl.sqr=function(t){return xl.valueOf(t).selfMultiply(t)},xl.valueOf=function(){if("string"==typeof arguments[0]){var t=arguments[0];return xl.parse(t)}if("number"==typeof arguments[0]){var e=arguments[0];return new xl(e)}},xl.sqrt=function(t){return xl.valueOf(t).sqrt()},xl.parse=function(t){for(var e=0,n=t.length;ml.isWhitespace(t.charAt(e));)e++;var r=!1;if(e<n){var i=t.charAt(e);"-"!==i&&"+"!==i||(e++,"-"===i&&(r=!0))}for(var o=new xl,s=0,a=0,u=0;!(e>=n);){var l=t.charAt(e);if(e++,ml.isDigit(l)){var c=l-"0";o.selfMultiply(xl.TEN),o.selfAdd(c),s++}else{if("."!==l){if("e"===l||"E"===l){var h=t.substring(e);try{u=_l.parseInt(h)}catch(e){throw e instanceof Error?new Error("Invalid exponent "+h+" in string "+t):e}break}throw new Error("Unexpected character '"+l+"' at position "+e+" in string "+t)}a=s}}var p=o,f=s-a-u;if(0===f)p=o;else if(f>0){var g=xl.TEN.pow(f);p=o.divide(g)}else if(f<0){var d=xl.TEN.pow(-f);p=o.multiply(d)}return r?p.negate():p},xl.createNaN=function(){return new xl(nl.NaN,nl.NaN)},xl.copy=function(t){return new xl(t)},xl.magnitude=function(t){var e=Math.abs(t),n=Math.log(e)/Math.log(10),r=Math.trunc(Math.floor(n));return 10*Math.pow(10,r)<=e&&(r+=1),r},xl.stringOfChar=function(t,e){for(var n=new vl,r=0;r<e;r++)n.append(t);return n.toString()},El.PI.get=function(){return new xl(3.141592653589793,12246467991473532e-32)},El.TWO_PI.get=function(){return new xl(6.283185307179586,24492935982947064e-32)},El.PI_2.get=function(){return new xl(1.5707963267948966,6123233995736766e-32)},El.E.get=function(){return new xl(2.718281828459045,14456468917292502e-32)},El.NaN.get=function(){return new xl(nl.NaN,nl.NaN)},El.EPS.get=function(){return 123259516440783e-46},El.SPLIT.get=function(){return 134217729},El.MAX_PRINT_DIGITS.get=function(){return 32},El.TEN.get=function(){return xl.valueOf(10)},El.ONE.get=function(){return xl.valueOf(1)},El.SCI_NOT_EXPONENT_CHAR.get=function(){return"E"},El.SCI_NOT_ZERO.get=function(){return"0.0E0"},Object.defineProperties(xl,El);var bl=function(){},wl={DP_SAFE_EPSILON:{configurable:!0}};bl.prototype.interfaces_=function(){return[]},bl.prototype.getClass=function(){return bl},bl.orientationIndex=function(t,e,n){var r=bl.orientationIndexFilter(t,e,n);if(r<=1)return r;var i=xl.valueOf(e.x).selfAdd(-t.x),o=xl.valueOf(e.y).selfAdd(-t.y),s=xl.valueOf(n.x).selfAdd(-e.x),a=xl.valueOf(n.y).selfAdd(-e.y);return i.selfMultiply(a).selfSubtract(o.selfMultiply(s)).signum()},bl.signOfDet2x2=function(t,e,n,r){return t.multiply(r).selfSubtract(e.multiply(n)).signum()},bl.intersection=function(t,e,n,r){var i=xl.valueOf(r.y).selfSubtract(n.y).selfMultiply(xl.valueOf(e.x).selfSubtract(t.x)),o=xl.valueOf(r.x).selfSubtract(n.x).selfMultiply(xl.valueOf(e.y).selfSubtract(t.y)),s=i.subtract(o),a=xl.valueOf(r.x).selfSubtract(n.x).selfMultiply(xl.valueOf(t.y).selfSubtract(n.y)),u=xl.valueOf(r.y).selfSubtract(n.y).selfMultiply(xl.valueOf(t.x).selfSubtract(n.x)),l=a.subtract(u).selfDivide(s).doubleValue(),c=xl.valueOf(t.x).selfAdd(xl.valueOf(e.x).selfSubtract(t.x).selfMultiply(l)).doubleValue(),h=xl.valueOf(e.x).selfSubtract(t.x).selfMultiply(xl.valueOf(t.y).selfSubtract(n.y)),p=xl.valueOf(e.y).selfSubtract(t.y).selfMultiply(xl.valueOf(t.x).selfSubtract(n.x)),f=h.subtract(p).selfDivide(s).doubleValue(),g=xl.valueOf(n.y).selfAdd(xl.valueOf(r.y).selfSubtract(n.y).selfMultiply(f)).doubleValue();return new ul(c,g)},bl.orientationIndexFilter=function(t,e,n){var r=null,i=(t.x-n.x)*(e.y-n.y),o=(t.y-n.y)*(e.x-n.x),s=i-o;if(i>0){if(o<=0)return bl.signum(s);r=i+o}else{if(!(i<0))return bl.signum(s);if(o>=0)return bl.signum(s);r=-i-o}var a=bl.DP_SAFE_EPSILON*r;return s>=a||-s>=a?bl.signum(s):2},bl.signum=function(t){return t>0?1:t<0?-1:0},wl.DP_SAFE_EPSILON.get=function(){return 1e-15},Object.defineProperties(bl,wl);var Il=function(){},Nl={X:{configurable:!0},Y:{configurable:!0},Z:{configurable:!0},M:{configurable:!0}};Nl.X.get=function(){return 0},Nl.Y.get=function(){return 1},Nl.Z.get=function(){return 2},Nl.M.get=function(){return 3},Il.prototype.setOrdinate=function(t,e,n){},Il.prototype.size=function(){},Il.prototype.getOrdinate=function(t,e){},Il.prototype.getCoordinate=function(){},Il.prototype.getCoordinateCopy=function(t){},Il.prototype.getDimension=function(){},Il.prototype.getX=function(t){},Il.prototype.clone=function(){},Il.prototype.expandEnvelope=function(t){},Il.prototype.copy=function(){},Il.prototype.getY=function(t){},Il.prototype.toCoordinateArray=function(){},Il.prototype.interfaces_=function(){return[ol]},Il.prototype.getClass=function(){return Il},Object.defineProperties(Il,Nl);var Sl=function(){},Cl=function(t){function e(){t.call(this,"Projective point not representable on the Cartesian plane.")}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(Sl),Pl=function(){};Pl.arraycopy=function(t,e,n,r,i){for(var o=0,s=e;s<e+i;s++)n[r+o]=t[s],o++},Pl.getProperty=function(t){return{"line.separator":"\n"}[t]};var Ml=function t(){if(this.x=null,this.y=null,this.w=null,0===arguments.length)this.x=0,this.y=0,this.w=1;else if(1===arguments.length){var e=arguments[0];this.x=e.x,this.y=e.y,this.w=1}else if(2===arguments.length){if("number"==typeof arguments[0]&&"number"==typeof arguments[1]){var n=arguments[0],r=arguments[1];this.x=n,this.y=r,this.w=1}else if(arguments[0]instanceof t&&arguments[1]instanceof t){var i=arguments[0],o=arguments[1];this.x=i.y*o.w-o.y*i.w,this.y=o.x*i.w-i.x*o.w,this.w=i.x*o.y-o.x*i.y}else if(arguments[0]instanceof ul&&arguments[1]instanceof ul){var s=arguments[0],a=arguments[1];this.x=s.y-a.y,this.y=a.x-s.x,this.w=s.x*a.y-a.x*s.y}}else if(3===arguments.length){var u=arguments[0],l=arguments[1],c=arguments[2];this.x=u,this.y=l,this.w=c}else if(4===arguments.length){var h=arguments[0],p=arguments[1],f=arguments[2],g=arguments[3],d=h.y-p.y,y=p.x-h.x,v=h.x*p.y-p.x*h.y,_=f.y-g.y,m=g.x-f.x,x=f.x*g.y-g.x*f.y;this.x=y*x-m*v,this.y=_*v-d*x,this.w=d*m-_*y}};Ml.prototype.getY=function(){var t=this.y/this.w;if(nl.isNaN(t)||nl.isInfinite(t))throw new Cl;return t},Ml.prototype.getX=function(){var t=this.x/this.w;if(nl.isNaN(t)||nl.isInfinite(t))throw new Cl;return t},Ml.prototype.getCoordinate=function(){var t=new ul;return t.x=this.getX(),t.y=this.getY(),t},Ml.prototype.interfaces_=function(){return[]},Ml.prototype.getClass=function(){return Ml},Ml.intersection=function(t,e,n,r){var i=t.y-e.y,o=e.x-t.x,s=t.x*e.y-e.x*t.y,a=n.y-r.y,u=r.x-n.x,l=n.x*r.y-r.x*n.y,c=i*u-a*o,h=(o*l-u*s)/c,p=(a*s-i*l)/c;if(nl.isNaN(h)||nl.isInfinite(h)||nl.isNaN(p)||nl.isInfinite(p))throw new Cl;return new ul(h,p)};var Ll=function t(){if(this._minx=null,this._maxx=null,this._miny=null,this._maxy=null,0===arguments.length)this.init();else if(1===arguments.length){if(arguments[0]instanceof ul){var e=arguments[0];this.init(e.x,e.x,e.y,e.y)}else if(arguments[0]instanceof t){var n=arguments[0];this.init(n)}}else if(2===arguments.length){var r=arguments[0],i=arguments[1];this.init(r.x,i.x,r.y,i.y)}else if(4===arguments.length){var o=arguments[0],s=arguments[1],a=arguments[2],u=arguments[3];this.init(o,s,a,u)}},Ol={serialVersionUID:{configurable:!0}};Ll.prototype.getArea=function(){return this.getWidth()*this.getHeight()},Ll.prototype.equals=function(t){if(!(t instanceof Ll))return!1;var e=t;return this.isNull()?e.isNull():this._maxx===e.getMaxX()&&this._maxy===e.getMaxY()&&this._minx===e.getMinX()&&this._miny===e.getMinY()},Ll.prototype.intersection=function(t){if(this.isNull()||t.isNull()||!this.intersects(t))return new Ll;var e=this._minx>t._minx?this._minx:t._minx,n=this._miny>t._miny?this._miny:t._miny,r=this._maxx<t._maxx?this._maxx:t._maxx,i=this._maxy<t._maxy?this._maxy:t._maxy;return new Ll(e,r,n,i)},Ll.prototype.isNull=function(){return this._maxx<this._minx},Ll.prototype.getMaxX=function(){return this._maxx},Ll.prototype.covers=function(){if(1===arguments.length){if(arguments[0]instanceof ul){var t=arguments[0];return this.covers(t.x,t.y)}if(arguments[0]instanceof Ll){var e=arguments[0];return!this.isNull()&&!e.isNull()&&(e.getMinX()>=this._minx&&e.getMaxX()<=this._maxx&&e.getMinY()>=this._miny&&e.getMaxY()<=this._maxy)}}else if(2===arguments.length){var n=arguments[0],r=arguments[1];return!this.isNull()&&(n>=this._minx&&n<=this._maxx&&r>=this._miny&&r<=this._maxy)}},Ll.prototype.intersects=function(){if(1===arguments.length){if(arguments[0]instanceof Ll){var t=arguments[0];return!this.isNull()&&!t.isNull()&&!(t._minx>this._maxx||t._maxx<this._minx||t._miny>this._maxy||t._maxy<this._miny)}if(arguments[0]instanceof ul){var e=arguments[0];return this.intersects(e.x,e.y)}}else if(2===arguments.length){var n=arguments[0],r=arguments[1];return!this.isNull()&&!(n>this._maxx||n<this._minx||r>this._maxy||r<this._miny)}},Ll.prototype.getMinY=function(){return this._miny},Ll.prototype.getMinX=function(){return this._minx},Ll.prototype.expandToInclude=function(){if(1===arguments.length){if(arguments[0]instanceof ul){var t=arguments[0];this.expandToInclude(t.x,t.y)}else if(arguments[0]instanceof Ll){var e=arguments[0];if(e.isNull())return null;this.isNull()?(this._minx=e.getMinX(),this._maxx=e.getMaxX(),this._miny=e.getMinY(),this._maxy=e.getMaxY()):(e._minx<this._minx&&(this._minx=e._minx),e._maxx>this._maxx&&(this._maxx=e._maxx),e._miny<this._miny&&(this._miny=e._miny),e._maxy>this._maxy&&(this._maxy=e._maxy))}}else if(2===arguments.length){var n=arguments[0],r=arguments[1];this.isNull()?(this._minx=n,this._maxx=n,this._miny=r,this._maxy=r):(n<this._minx&&(this._minx=n),n>this._maxx&&(this._maxx=n),r<this._miny&&(this._miny=r),r>this._maxy&&(this._maxy=r))}},Ll.prototype.minExtent=function(){if(this.isNull())return 0;var t=this.getWidth(),e=this.getHeight();return t<e?t:e},Ll.prototype.getWidth=function(){return this.isNull()?0:this._maxx-this._minx},Ll.prototype.compareTo=function(t){var e=t;return this.isNull()?e.isNull()?0:-1:e.isNull()?1:this._minx<e._minx?-1:this._minx>e._minx?1:this._miny<e._miny?-1:this._miny>e._miny?1:this._maxx<e._maxx?-1:this._maxx>e._maxx?1:this._maxy<e._maxy?-1:this._maxy>e._maxy?1:0},Ll.prototype.translate=function(t,e){if(this.isNull())return null;this.init(this.getMinX()+t,this.getMaxX()+t,this.getMinY()+e,this.getMaxY()+e)},Ll.prototype.toString=function(){return"Env["+this._minx+" : "+this._maxx+", "+this._miny+" : "+this._maxy+"]"},Ll.prototype.setToNull=function(){this._minx=0,this._maxx=-1,this._miny=0,this._maxy=-1},Ll.prototype.getHeight=function(){return this.isNull()?0:this._maxy-this._miny},Ll.prototype.maxExtent=function(){if(this.isNull())return 0;var t=this.getWidth(),e=this.getHeight();return t>e?t:e},Ll.prototype.expandBy=function(){if(1===arguments.length){var t=arguments[0];this.expandBy(t,t)}else if(2===arguments.length){var e=arguments[0],n=arguments[1];if(this.isNull())return null;this._minx-=e,this._maxx+=e,this._miny-=n,this._maxy+=n,(this._minx>this._maxx||this._miny>this._maxy)&&this.setToNull()}},Ll.prototype.contains=function(){if(1===arguments.length){if(arguments[0]instanceof Ll){var t=arguments[0];return this.covers(t)}if(arguments[0]instanceof ul){var e=arguments[0];return this.covers(e)}}else if(2===arguments.length){var n=arguments[0],r=arguments[1];return this.covers(n,r)}},Ll.prototype.centre=function(){return this.isNull()?null:new ul((this.getMinX()+this.getMaxX())/2,(this.getMinY()+this.getMaxY())/2)},Ll.prototype.init=function(){if(0===arguments.length)this.setToNull();else if(1===arguments.length){if(arguments[0]instanceof ul){var t=arguments[0];this.init(t.x,t.x,t.y,t.y)}else if(arguments[0]instanceof Ll){var e=arguments[0];this._minx=e._minx,this._maxx=e._maxx,this._miny=e._miny,this._maxy=e._maxy}}else if(2===arguments.length){var n=arguments[0],r=arguments[1];this.init(n.x,r.x,n.y,r.y)}else if(4===arguments.length){var i=arguments[0],o=arguments[1],s=arguments[2],a=arguments[3];i<o?(this._minx=i,this._maxx=o):(this._minx=o,this._maxx=i),s<a?(this._miny=s,this._maxy=a):(this._miny=a,this._maxy=s)}},Ll.prototype.getMaxY=function(){return this._maxy},Ll.prototype.distance=function(t){if(this.intersects(t))return 0;var e=0;this._maxx<t._minx?e=t._minx-this._maxx:this._minx>t._maxx&&(e=this._minx-t._maxx);var n=0;return this._maxy<t._miny?n=t._miny-this._maxy:this._miny>t._maxy&&(n=this._miny-t._maxy),0===e?n:0===n?e:Math.sqrt(e*e+n*n)},Ll.prototype.hashCode=function(){var t=17;return t=37*(t=37*(t=37*(t=37*t+ul.hashCode(this._minx))+ul.hashCode(this._maxx))+ul.hashCode(this._miny))+ul.hashCode(this._maxy)},Ll.prototype.interfaces_=function(){return[il,al]},Ll.prototype.getClass=function(){return Ll},Ll.intersects=function(){if(3===arguments.length){var t=arguments[0],e=arguments[1],n=arguments[2];return n.x>=(t.x<e.x?t.x:e.x)&&n.x<=(t.x>e.x?t.x:e.x)&&n.y>=(t.y<e.y?t.y:e.y)&&n.y<=(t.y>e.y?t.y:e.y)}if(4===arguments.length){var r=arguments[0],i=arguments[1],o=arguments[2],s=arguments[3],a=Math.min(o.x,s.x),u=Math.max(o.x,s.x),l=Math.min(r.x,i.x),c=Math.max(r.x,i.x);return!(l>u)&&(!(c<a)&&(a=Math.min(o.y,s.y),u=Math.max(o.y,s.y),l=Math.min(r.y,i.y),c=Math.max(r.y,i.y),!(l>u)&&!(c<a)))}},Ol.serialVersionUID.get=function(){return 0x51845cd552189800},Object.defineProperties(Ll,Ol);var Rl={typeStr:/^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,emptyTypeStr:/^\s*(\w+)\s*EMPTY\s*$/,spaces:/\s+/,parenComma:/\)\s*,\s*\(/,doubleParenComma:/\)\s*\)\s*,\s*\(\s*\(/,trimParens:/^\s*\(?(.*?)\)?\s*$/},Tl=function(t){this.geometryFactory=t||new _h};Tl.prototype.read=function(t){var e,n,r;t=t.replace(/[\n\r]/g," ");var i=Rl.typeStr.exec(t);if(-1!==t.search("EMPTY")&&((i=Rl.emptyTypeStr.exec(t))[2]=void 0),i&&(n=i[1].toLowerCase(),r=i[2],Dl[n]&&(e=Dl[n].apply(this,[r]))),void 0===e)throw new Error("Could not parse WKT "+t);return e},Tl.prototype.write=function(t){return this.extractGeometry(t)},Tl.prototype.extractGeometry=function(t){var e=t.getGeometryType().toLowerCase();if(!Al[e])return null;var n=e.toUpperCase();return t.isEmpty()?n+" EMPTY":n+"("+Al[e].apply(this,[t])+")"};var Al={coordinate:function(t){return t.x+" "+t.y},point:function(t){return Al.coordinate.call(this,t._coordinates._coordinates[0])},multipoint:function(t){for(var e=[],n=0,r=t._geometries.length;n<r;++n)e.push("("+Al.point.apply(this,[t._geometries[n]])+")");return e.join(",")},linestring:function(t){for(var e=[],n=0,r=t._points._coordinates.length;n<r;++n)e.push(Al.coordinate.apply(this,[t._points._coordinates[n]]));return e.join(",")},linearring:function(t){for(var e=[],n=0,r=t._points._coordinates.length;n<r;++n)e.push(Al.coordinate.apply(this,[t._points._coordinates[n]]));return e.join(",")},multilinestring:function(t){for(var e=[],n=0,r=t._geometries.length;n<r;++n)e.push("("+Al.linestring.apply(this,[t._geometries[n]])+")");return e.join(",")},polygon:function(t){var e=[];e.push("("+Al.linestring.apply(this,[t._shell])+")");for(var n=0,r=t._holes.length;n<r;++n)e.push("("+Al.linestring.apply(this,[t._holes[n]])+")");return e.join(",")},multipolygon:function(t){for(var e=[],n=0,r=t._geometries.length;n<r;++n)e.push("("+Al.polygon.apply(this,[t._geometries[n]])+")");return e.join(",")},geometrycollection:function(t){for(var e=[],n=0,r=t._geometries.length;n<r;++n)e.push(this.extractGeometry(t._geometries[n]));return e.join(",")}},Dl={point:function(t){if(void 0===t)return this.geometryFactory.createPoint();var e=t.trim().split(Rl.spaces);return this.geometryFactory.createPoint(new ul(Number.parseFloat(e[0]),Number.parseFloat(e[1])))},multipoint:function(t){var e;if(void 0===t)return this.geometryFactory.createMultiPoint();for(var n=t.trim().split(","),r=[],i=0,o=n.length;i<o;++i)e=n[i].replace(Rl.trimParens,"$1"),r.push(Dl.point.apply(this,[e]));return this.geometryFactory.createMultiPoint(r)},linestring:function(t){if(void 0===t)return this.geometryFactory.createLineString();for(var e,n=t.trim().split(","),r=[],i=0,o=n.length;i<o;++i)e=n[i].trim().split(Rl.spaces),r.push(new ul(Number.parseFloat(e[0]),Number.parseFloat(e[1])));return this.geometryFactory.createLineString(r)},linearring:function(t){if(void 0===t)return this.geometryFactory.createLinearRing();for(var e,n=t.trim().split(","),r=[],i=0,o=n.length;i<o;++i)e=n[i].trim().split(Rl.spaces),r.push(new ul(Number.parseFloat(e[0]),Number.parseFloat(e[1])));return this.geometryFactory.createLinearRing(r)},multilinestring:function(t){var e;if(void 0===t)return this.geometryFactory.createMultiLineString();for(var n=t.trim().split(Rl.parenComma),r=[],i=0,o=n.length;i<o;++i)e=n[i].replace(Rl.trimParens,"$1"),r.push(Dl.linestring.apply(this,[e]));return this.geometryFactory.createMultiLineString(r)},polygon:function(t){var e,n,r;if(void 0===t)return this.geometryFactory.createPolygon();for(var i,o=t.trim().split(Rl.parenComma),s=[],a=0,u=o.length;a<u;++a)e=o[a].replace(Rl.trimParens,"$1"),n=Dl.linestring.apply(this,[e]),r=this.geometryFactory.createLinearRing(n._points),0===a?i=r:s.push(r);return this.geometryFactory.createPolygon(i,s)},multipolygon:function(t){var e;if(void 0===t)return this.geometryFactory.createMultiPolygon();for(var n=t.trim().split(Rl.doubleParenComma),r=[],i=0,o=n.length;i<o;++i)e=n[i].replace(Rl.trimParens,"$1"),r.push(Dl.polygon.apply(this,[e]));return this.geometryFactory.createMultiPolygon(r)},geometrycollection:function(t){if(void 0===t)return this.geometryFactory.createGeometryCollection();for(var e=(t=t.replace(/,\s*([A-Za-z])/g,"|$1")).trim().split("|"),n=[],r=0,i=e.length;r<i;++r)n.push(this.read(e[r]));return this.geometryFactory.createGeometryCollection(n)}},Fl=function(t){this.parser=new Tl(t)};Fl.prototype.write=function(t){return this.parser.write(t)},Fl.toLineString=function(t,e){if(2!==arguments.length)throw new Error("Not implemented");return"LINESTRING ( "+t.x+" "+t.y+", "+e.x+" "+e.y+" )"};var kl=function(t){function e(e){t.call(this,e),this.name="RuntimeException",this.message=e,this.stack=(new t).stack}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Error),Gl=function(t){function e(){if(t.call(this),0===arguments.length)t.call(this);else if(1===arguments.length){var e=arguments[0];t.call(this,e)}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(kl),ql=function(){};ql.prototype.interfaces_=function(){return[]},ql.prototype.getClass=function(){return ql},ql.shouldNeverReachHere=function(){if(0===arguments.length)ql.shouldNeverReachHere(null);else if(1===arguments.length){var t=arguments[0];throw new Gl("Should never reach here"+(null!==t?": "+t:""))}},ql.isTrue=function(){var t;if(1===arguments.length)ql.isTrue(arguments[0],null);else if(2===arguments.length&&(t=arguments[1],!arguments[0]))throw null===t?new Gl:new Gl(t)},ql.equals=function(){var t,e,n;if(2===arguments.length)ql.equals(t=arguments[0],e=arguments[1],null);else if(3===arguments.length&&(t=arguments[0],n=arguments[2],!(e=arguments[1]).equals(t)))throw new Gl("Expected "+t+" but encountered "+e+(null!==n?": "+n:""))};var Bl=function(){this._result=null,this._inputLines=Array(2).fill().map((function(){return Array(2)})),this._intPt=new Array(2).fill(null),this._intLineIndex=null,this._isProper=null,this._pa=null,this._pb=null,this._precisionModel=null,this._intPt[0]=new ul,this._intPt[1]=new ul,this._pa=this._intPt[0],this._pb=this._intPt[1],this._result=0},zl={DONT_INTERSECT:{configurable:!0},DO_INTERSECT:{configurable:!0},COLLINEAR:{configurable:!0},NO_INTERSECTION:{configurable:!0},POINT_INTERSECTION:{configurable:!0},COLLINEAR_INTERSECTION:{configurable:!0}};Bl.prototype.getIndexAlongSegment=function(t,e){return this.computeIntLineIndex(),this._intLineIndex[t][e]},Bl.prototype.getTopologySummary=function(){var t=new vl;return this.isEndPoint()&&t.append(" endpoint"),this._isProper&&t.append(" proper"),this.isCollinear()&&t.append(" collinear"),t.toString()},Bl.prototype.computeIntersection=function(t,e,n,r){this._inputLines[0][0]=t,this._inputLines[0][1]=e,this._inputLines[1][0]=n,this._inputLines[1][1]=r,this._result=this.computeIntersect(t,e,n,r)},Bl.prototype.getIntersectionNum=function(){return this._result},Bl.prototype.computeIntLineIndex=function(){if(0===arguments.length)null===this._intLineIndex&&(this._intLineIndex=Array(2).fill().map((function(){return Array(2)})),this.computeIntLineIndex(0),this.computeIntLineIndex(1));else if(1===arguments.length){var t=arguments[0],e=this.getEdgeDistance(t,0),n=this.getEdgeDistance(t,1);e>n?(this._intLineIndex[t][0]=0,this._intLineIndex[t][1]=1):(this._intLineIndex[t][0]=1,this._intLineIndex[t][1]=0)}},Bl.prototype.isProper=function(){return this.hasIntersection()&&this._isProper},Bl.prototype.setPrecisionModel=function(t){this._precisionModel=t},Bl.prototype.isInteriorIntersection=function(){var t=this;if(0===arguments.length)return!!this.isInteriorIntersection(0)||!!this.isInteriorIntersection(1);if(1===arguments.length){for(var e=arguments[0],n=0;n<this._result;n++)if(!t._intPt[n].equals2D(t._inputLines[e][0])&&!t._intPt[n].equals2D(t._inputLines[e][1]))return!0;return!1}},Bl.prototype.getIntersection=function(t){return this._intPt[t]},Bl.prototype.isEndPoint=function(){return this.hasIntersection()&&!this._isProper},Bl.prototype.hasIntersection=function(){return this._result!==Bl.NO_INTERSECTION},Bl.prototype.getEdgeDistance=function(t,e){return Bl.computeEdgeDistance(this._intPt[e],this._inputLines[t][0],this._inputLines[t][1])},Bl.prototype.isCollinear=function(){return this._result===Bl.COLLINEAR_INTERSECTION},Bl.prototype.toString=function(){return Fl.toLineString(this._inputLines[0][0],this._inputLines[0][1])+" - "+Fl.toLineString(this._inputLines[1][0],this._inputLines[1][1])+this.getTopologySummary()},Bl.prototype.getEndpoint=function(t,e){return this._inputLines[t][e]},Bl.prototype.isIntersection=function(t){for(var e=0;e<this._result;e++)if(this._intPt[e].equals2D(t))return!0;return!1},Bl.prototype.getIntersectionAlongSegment=function(t,e){return this.computeIntLineIndex(),this._intPt[this._intLineIndex[t][e]]},Bl.prototype.interfaces_=function(){return[]},Bl.prototype.getClass=function(){return Bl},Bl.computeEdgeDistance=function(t,e,n){var r=Math.abs(n.x-e.x),i=Math.abs(n.y-e.y),o=-1;if(t.equals(e))o=0;else if(t.equals(n))o=r>i?r:i;else{var s=Math.abs(t.x-e.x),a=Math.abs(t.y-e.y);0!==(o=r>i?s:a)||t.equals(e)||(o=Math.max(s,a))}return ql.isTrue(!(0===o&&!t.equals(e)),"Bad distance calculation"),o},Bl.nonRobustComputeEdgeDistance=function(t,e,n){var r=t.x-e.x,i=t.y-e.y,o=Math.sqrt(r*r+i*i);return ql.isTrue(!(0===o&&!t.equals(e)),"Invalid distance calculation"),o},zl.DONT_INTERSECT.get=function(){return 0},zl.DO_INTERSECT.get=function(){return 1},zl.COLLINEAR.get=function(){return 2},zl.NO_INTERSECTION.get=function(){return 0},zl.POINT_INTERSECTION.get=function(){return 1},zl.COLLINEAR_INTERSECTION.get=function(){return 2},Object.defineProperties(Bl,zl);var jl=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.isInSegmentEnvelopes=function(t){var e=new Ll(this._inputLines[0][0],this._inputLines[0][1]),n=new Ll(this._inputLines[1][0],this._inputLines[1][1]);return e.contains(t)&&n.contains(t)},e.prototype.computeIntersection=function(){if(3!==arguments.length)return t.prototype.computeIntersection.apply(this,arguments);var e=arguments[0],n=arguments[1],r=arguments[2];if(this._isProper=!1,Ll.intersects(n,r,e)&&0===Xl.orientationIndex(n,r,e)&&0===Xl.orientationIndex(r,n,e))return this._isProper=!0,(e.equals(n)||e.equals(r))&&(this._isProper=!1),this._result=t.POINT_INTERSECTION,null;this._result=t.NO_INTERSECTION},e.prototype.normalizeToMinimum=function(t,e,n,r,i){i.x=this.smallestInAbsValue(t.x,e.x,n.x,r.x),i.y=this.smallestInAbsValue(t.y,e.y,n.y,r.y),t.x-=i.x,t.y-=i.y,e.x-=i.x,e.y-=i.y,n.x-=i.x,n.y-=i.y,r.x-=i.x,r.y-=i.y},e.prototype.safeHCoordinateIntersection=function(t,n,r,i){var o=null;try{o=Ml.intersection(t,n,r,i)}catch(s){if(!(s instanceof Cl))throw s;o=e.nearestEndpoint(t,n,r,i)}return o},e.prototype.intersection=function(t,n,r,i){var o=this.intersectionWithNormalization(t,n,r,i);return this.isInSegmentEnvelopes(o)||(o=new ul(e.nearestEndpoint(t,n,r,i))),null!==this._precisionModel&&this._precisionModel.makePrecise(o),o},e.prototype.smallestInAbsValue=function(t,e,n,r){var i=t,o=Math.abs(i);return Math.abs(e)<o&&(i=e,o=Math.abs(e)),Math.abs(n)<o&&(i=n,o=Math.abs(n)),Math.abs(r)<o&&(i=r),i},e.prototype.checkDD=function(t,e,n,r,i){var o=bl.intersection(t,e,n,r),s=this.isInSegmentEnvelopes(o);Pl.out.println("DD in env = "+s+"  --------------------- "+o),i.distance(o)>1e-4&&Pl.out.println("Distance = "+i.distance(o))},e.prototype.intersectionWithNormalization=function(t,e,n,r){var i=new ul(t),o=new ul(e),s=new ul(n),a=new ul(r),u=new ul;this.normalizeToEnvCentre(i,o,s,a,u);var l=this.safeHCoordinateIntersection(i,o,s,a);return l.x+=u.x,l.y+=u.y,l},e.prototype.computeCollinearIntersection=function(e,n,r,i){var o=Ll.intersects(e,n,r),s=Ll.intersects(e,n,i),a=Ll.intersects(r,i,e),u=Ll.intersects(r,i,n);return o&&s?(this._intPt[0]=r,this._intPt[1]=i,t.COLLINEAR_INTERSECTION):a&&u?(this._intPt[0]=e,this._intPt[1]=n,t.COLLINEAR_INTERSECTION):o&&a?(this._intPt[0]=r,this._intPt[1]=e,!r.equals(e)||s||u?t.COLLINEAR_INTERSECTION:t.POINT_INTERSECTION):o&&u?(this._intPt[0]=r,this._intPt[1]=n,!r.equals(n)||s||a?t.COLLINEAR_INTERSECTION:t.POINT_INTERSECTION):s&&a?(this._intPt[0]=i,this._intPt[1]=e,!i.equals(e)||o||u?t.COLLINEAR_INTERSECTION:t.POINT_INTERSECTION):s&&u?(this._intPt[0]=i,this._intPt[1]=n,!i.equals(n)||o||a?t.COLLINEAR_INTERSECTION:t.POINT_INTERSECTION):t.NO_INTERSECTION},e.prototype.normalizeToEnvCentre=function(t,e,n,r,i){var o=t.x<e.x?t.x:e.x,s=t.y<e.y?t.y:e.y,a=t.x>e.x?t.x:e.x,u=t.y>e.y?t.y:e.y,l=n.x<r.x?n.x:r.x,c=n.y<r.y?n.y:r.y,h=n.x>r.x?n.x:r.x,p=n.y>r.y?n.y:r.y,f=((o>l?o:l)+(a<h?a:h))/2,g=((s>c?s:c)+(u<p?u:p))/2;i.x=f,i.y=g,t.x-=i.x,t.y-=i.y,e.x-=i.x,e.y-=i.y,n.x-=i.x,n.y-=i.y,r.x-=i.x,r.y-=i.y},e.prototype.computeIntersect=function(e,n,r,i){if(this._isProper=!1,!Ll.intersects(e,n,r,i))return t.NO_INTERSECTION;var o=Xl.orientationIndex(e,n,r),s=Xl.orientationIndex(e,n,i);if(o>0&&s>0||o<0&&s<0)return t.NO_INTERSECTION;var a=Xl.orientationIndex(r,i,e),u=Xl.orientationIndex(r,i,n);return a>0&&u>0||a<0&&u<0?t.NO_INTERSECTION:0===o&&0===s&&0===a&&0===u?this.computeCollinearIntersection(e,n,r,i):(0===o||0===s||0===a||0===u?(this._isProper=!1,e.equals2D(r)||e.equals2D(i)?this._intPt[0]=e:n.equals2D(r)||n.equals2D(i)?this._intPt[0]=n:0===o?this._intPt[0]=new ul(r):0===s?this._intPt[0]=new ul(i):0===a?this._intPt[0]=new ul(e):0===u&&(this._intPt[0]=new ul(n))):(this._isProper=!0,this._intPt[0]=this.intersection(e,n,r,i)),t.POINT_INTERSECTION)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e.nearestEndpoint=function(t,e,n,r){var i=t,o=Xl.distancePointLine(t,n,r),s=Xl.distancePointLine(e,n,r);return s<o&&(o=s,i=e),(s=Xl.distancePointLine(n,t,e))<o&&(o=s,i=n),(s=Xl.distancePointLine(r,t,e))<o&&(o=s,i=r),i},e}(Bl),Ul=function(){};Ul.prototype.interfaces_=function(){return[]},Ul.prototype.getClass=function(){return Ul},Ul.orientationIndex=function(t,e,n){var r=e.x-t.x,i=e.y-t.y,o=n.x-e.x,s=n.y-e.y;return Ul.signOfDet2x2(r,i,o,s)},Ul.signOfDet2x2=function(t,e,n,r){var i=null,o=null,s=null;if(i=1,0===t||0===r)return 0===e||0===n?0:e>0?n>0?-i:i:n>0?i:-i;if(0===e||0===n)return r>0?t>0?i:-i:t>0?-i:i;if(e>0?r>0?e<=r||(i=-i,o=t,t=n,n=o,o=e,e=r,r=o):e<=-r?(i=-i,n=-n,r=-r):(o=t,t=-n,n=o,o=e,e=-r,r=o):r>0?-e<=r?(i=-i,t=-t,e=-e):(o=-t,t=n,n=o,o=-e,e=r,r=o):e>=r?(t=-t,e=-e,n=-n,r=-r):(i=-i,o=-t,t=-n,n=o,o=-e,e=-r,r=o),t>0){if(!(n>0))return i;if(!(t<=n))return i}else{if(n>0)return-i;if(!(t>=n))return-i;i=-i,t=-t,n=-n}for(;;){if((r-=(s=Math.floor(n/t))*e)<0)return-i;if(r>e)return i;if(t>(n-=s*t)+n){if(e<r+r)return i}else{if(e>r+r)return-i;n=t-n,r=e-r,i=-i}if(0===r)return 0===n?0:-i;if(0===n)return i;if((e-=(s=Math.floor(t/n))*r)<0)return i;if(e>r)return-i;if(n>(t-=s*n)+t){if(r<e+e)return-i}else{if(r>e+e)return i;t=n-t,e=r-e,i=-i}if(0===e)return 0===t?0:i;if(0===t)return-i}};var Vl=function(){this._p=null,this._crossingCount=0,this._isPointOnSegment=!1;var t=arguments[0];this._p=t};Vl.prototype.countSegment=function(t,e){if(t.x<this._p.x&&e.x<this._p.x)return null;if(this._p.x===e.x&&this._p.y===e.y)return this._isPointOnSegment=!0,null;if(t.y===this._p.y&&e.y===this._p.y){var n=t.x,r=e.x;return n>r&&(n=e.x,r=t.x),this._p.x>=n&&this._p.x<=r&&(this._isPointOnSegment=!0),null}if(t.y>this._p.y&&e.y<=this._p.y||e.y>this._p.y&&t.y<=this._p.y){var i=t.x-this._p.x,o=t.y-this._p.y,s=e.x-this._p.x,a=e.y-this._p.y,u=Ul.signOfDet2x2(i,o,s,a);if(0===u)return this._isPointOnSegment=!0,null;a<o&&(u=-u),u>0&&this._crossingCount++}},Vl.prototype.isPointInPolygon=function(){return this.getLocation()!==pl.EXTERIOR},Vl.prototype.getLocation=function(){return this._isPointOnSegment?pl.BOUNDARY:this._crossingCount%2==1?pl.INTERIOR:pl.EXTERIOR},Vl.prototype.isOnSegment=function(){return this._isPointOnSegment},Vl.prototype.interfaces_=function(){return[]},Vl.prototype.getClass=function(){return Vl},Vl.locatePointInRing=function(){if(arguments[0]instanceof ul&&gl(arguments[1],Il)){for(var t=arguments[0],e=arguments[1],n=new Vl(t),r=new ul,i=new ul,o=1;o<e.size();o++)if(e.getCoordinate(o,r),e.getCoordinate(o-1,i),n.countSegment(r,i),n.isOnSegment())return n.getLocation();return n.getLocation()}if(arguments[0]instanceof ul&&arguments[1]instanceof Array){for(var s=arguments[0],a=arguments[1],u=new Vl(s),l=1;l<a.length;l++){var c=a[l],h=a[l-1];if(u.countSegment(c,h),u.isOnSegment())return u.getLocation()}return u.getLocation()}};var Xl=function(){},Yl={CLOCKWISE:{configurable:!0},RIGHT:{configurable:!0},COUNTERCLOCKWISE:{configurable:!0},LEFT:{configurable:!0},COLLINEAR:{configurable:!0},STRAIGHT:{configurable:!0}};Xl.prototype.interfaces_=function(){return[]},Xl.prototype.getClass=function(){return Xl},Xl.orientationIndex=function(t,e,n){return bl.orientationIndex(t,e,n)},Xl.signedArea=function(){if(arguments[0]instanceof Array){var t=arguments[0];if(t.length<3)return 0;for(var e=0,n=t[0].x,r=1;r<t.length-1;r++){var i=t[r].x-n,o=t[r+1].y,s=t[r-1].y;e+=i*(s-o)}return e/2}if(gl(arguments[0],Il)){var a=arguments[0],u=a.size();if(u<3)return 0;var l=new ul,c=new ul,h=new ul;a.getCoordinate(0,c),a.getCoordinate(1,h);var p=c.x;h.x-=p;for(var f=0,g=1;g<u-1;g++)l.y=c.y,c.x=h.x,c.y=h.y,a.getCoordinate(g+1,h),h.x-=p,f+=c.x*(l.y-h.y);return f/2}},Xl.distanceLineLine=function(t,e,n,r){if(t.equals(e))return Xl.distancePointLine(t,n,r);if(n.equals(r))return Xl.distancePointLine(r,t,e);var i=!1;if(Ll.intersects(t,e,n,r)){var o=(e.x-t.x)*(r.y-n.y)-(e.y-t.y)*(r.x-n.x);if(0===o)i=!0;else{var s=(t.y-n.y)*(r.x-n.x)-(t.x-n.x)*(r.y-n.y),a=((t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y))/o,u=s/o;(u<0||u>1||a<0||a>1)&&(i=!0)}}else i=!0;return i?dl.min(Xl.distancePointLine(t,n,r),Xl.distancePointLine(e,n,r),Xl.distancePointLine(n,t,e),Xl.distancePointLine(r,t,e)):0},Xl.isPointInRing=function(t,e){return Xl.locatePointInRing(t,e)!==pl.EXTERIOR},Xl.computeLength=function(t){var e=t.size();if(e<=1)return 0;var n=0,r=new ul;t.getCoordinate(0,r);for(var i=r.x,o=r.y,s=1;s<e;s++){t.getCoordinate(s,r);var a=r.x,u=r.y,l=a-i,c=u-o;n+=Math.sqrt(l*l+c*c),i=a,o=u}return n},Xl.isCCW=function(t){var e=t.length-1;if(e<3)throw new el("Ring has fewer than 4 points, so orientation cannot be determined");for(var n=t[0],r=0,i=1;i<=e;i++){var o=t[i];o.y>n.y&&(n=o,r=i)}var s=r;do{(s-=1)<0&&(s=e)}while(t[s].equals2D(n)&&s!==r);var a=r;do{a=(a+1)%e}while(t[a].equals2D(n)&&a!==r);var u=t[s],l=t[a];if(u.equals2D(n)||l.equals2D(n)||u.equals2D(l))return!1;var c=Xl.computeOrientation(u,n,l),h=!1;return h=0===c?u.x>l.x:c>0,h},Xl.locatePointInRing=function(t,e){return Vl.locatePointInRing(t,e)},Xl.distancePointLinePerpendicular=function(t,e,n){var r=(n.x-e.x)*(n.x-e.x)+(n.y-e.y)*(n.y-e.y),i=((e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y))/r;return Math.abs(i)*Math.sqrt(r)},Xl.computeOrientation=function(t,e,n){return Xl.orientationIndex(t,e,n)},Xl.distancePointLine=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1];if(0===e.length)throw new el("Line array must contain at least one vertex");for(var n=t.distance(e[0]),r=0;r<e.length-1;r++){var i=Xl.distancePointLine(t,e[r],e[r+1]);i<n&&(n=i)}return n}if(3===arguments.length){var o=arguments[0],s=arguments[1],a=arguments[2];if(s.x===a.x&&s.y===a.y)return o.distance(s);var u=(a.x-s.x)*(a.x-s.x)+(a.y-s.y)*(a.y-s.y),l=((o.x-s.x)*(a.x-s.x)+(o.y-s.y)*(a.y-s.y))/u;if(l<=0)return o.distance(s);if(l>=1)return o.distance(a);var c=((s.y-o.y)*(a.x-s.x)-(s.x-o.x)*(a.y-s.y))/u;return Math.abs(c)*Math.sqrt(u)}},Xl.isOnLine=function(t,e){for(var n=new jl,r=1;r<e.length;r++){var i=e[r-1],o=e[r];if(n.computeIntersection(t,i,o),n.hasIntersection())return!0}return!1},Yl.CLOCKWISE.get=function(){return-1},Yl.RIGHT.get=function(){return Xl.CLOCKWISE},Yl.COUNTERCLOCKWISE.get=function(){return 1},Yl.LEFT.get=function(){return Xl.COUNTERCLOCKWISE},Yl.COLLINEAR.get=function(){return 0},Yl.STRAIGHT.get=function(){return Xl.COLLINEAR},Object.defineProperties(Xl,Yl);var Hl=function(){};Hl.prototype.filter=function(t){},Hl.prototype.interfaces_=function(){return[]},Hl.prototype.getClass=function(){return Hl};var Wl=function(){var t=arguments[0];this._envelope=null,this._factory=null,this._SRID=null,this._userData=null,this._factory=t,this._SRID=t.getSRID()},Jl={serialVersionUID:{configurable:!0},SORTINDEX_POINT:{configurable:!0},SORTINDEX_MULTIPOINT:{configurable:!0},SORTINDEX_LINESTRING:{configurable:!0},SORTINDEX_LINEARRING:{configurable:!0},SORTINDEX_MULTILINESTRING:{configurable:!0},SORTINDEX_POLYGON:{configurable:!0},SORTINDEX_MULTIPOLYGON:{configurable:!0},SORTINDEX_GEOMETRYCOLLECTION:{configurable:!0},geometryChangedFilter:{configurable:!0}};Wl.prototype.isGeometryCollection=function(){return this.getSortIndex()===Wl.SORTINDEX_GEOMETRYCOLLECTION},Wl.prototype.getFactory=function(){return this._factory},Wl.prototype.getGeometryN=function(t){return this},Wl.prototype.getArea=function(){return 0},Wl.prototype.isRectangle=function(){return!1},Wl.prototype.equals=function(){if(arguments[0]instanceof Wl){var t=arguments[0];return null!==t&&this.equalsTopo(t)}if(arguments[0]instanceof Object){var e=arguments[0];if(!(e instanceof Wl))return!1;var n=e;return this.equalsExact(n)}},Wl.prototype.equalsExact=function(t){return this===t||this.equalsExact(t,0)},Wl.prototype.geometryChanged=function(){this.apply(Wl.geometryChangedFilter)},Wl.prototype.geometryChangedAction=function(){this._envelope=null},Wl.prototype.equalsNorm=function(t){return null!==t&&this.norm().equalsExact(t.norm())},Wl.prototype.getLength=function(){return 0},Wl.prototype.getNumGeometries=function(){return 1},Wl.prototype.compareTo=function(){if(1===arguments.length){var t=arguments[0],e=t;return this.getSortIndex()!==e.getSortIndex()?this.getSortIndex()-e.getSortIndex():this.isEmpty()&&e.isEmpty()?0:this.isEmpty()?-1:e.isEmpty()?1:this.compareToSameClass(t)}if(2===arguments.length){var n=arguments[0],r=arguments[1];return this.getSortIndex()!==n.getSortIndex()?this.getSortIndex()-n.getSortIndex():this.isEmpty()&&n.isEmpty()?0:this.isEmpty()?-1:n.isEmpty()?1:this.compareToSameClass(n,r)}},Wl.prototype.getUserData=function(){return this._userData},Wl.prototype.getSRID=function(){return this._SRID},Wl.prototype.getEnvelope=function(){return this.getFactory().toGeometry(this.getEnvelopeInternal())},Wl.prototype.checkNotGeometryCollection=function(t){if(t.getSortIndex()===Wl.SORTINDEX_GEOMETRYCOLLECTION)throw new el("This method does not support GeometryCollection arguments")},Wl.prototype.equal=function(t,e,n){return 0===n?t.equals(e):t.distance(e)<=n},Wl.prototype.norm=function(){var t=this.copy();return t.normalize(),t},Wl.prototype.getPrecisionModel=function(){return this._factory.getPrecisionModel()},Wl.prototype.getEnvelopeInternal=function(){return null===this._envelope&&(this._envelope=this.computeEnvelopeInternal()),new Ll(this._envelope)},Wl.prototype.setSRID=function(t){this._SRID=t},Wl.prototype.setUserData=function(t){this._userData=t},Wl.prototype.compare=function(t,e){for(var n=t.iterator(),r=e.iterator();n.hasNext()&&r.hasNext();){var i=n.next(),o=r.next(),s=i.compareTo(o);if(0!==s)return s}return n.hasNext()?1:r.hasNext()?-1:0},Wl.prototype.hashCode=function(){return this.getEnvelopeInternal().hashCode()},Wl.prototype.isGeometryCollectionOrDerived=function(){return this.getSortIndex()===Wl.SORTINDEX_GEOMETRYCOLLECTION||this.getSortIndex()===Wl.SORTINDEX_MULTIPOINT||this.getSortIndex()===Wl.SORTINDEX_MULTILINESTRING||this.getSortIndex()===Wl.SORTINDEX_MULTIPOLYGON},Wl.prototype.interfaces_=function(){return[ol,il,al]},Wl.prototype.getClass=function(){return Wl},Wl.hasNonEmptyElements=function(t){for(var e=0;e<t.length;e++)if(!t[e].isEmpty())return!0;return!1},Wl.hasNullElements=function(t){for(var e=0;e<t.length;e++)if(null===t[e])return!0;return!1},Jl.serialVersionUID.get=function(){return 0x799ea46522854c00},Jl.SORTINDEX_POINT.get=function(){return 0},Jl.SORTINDEX_MULTIPOINT.get=function(){return 1},Jl.SORTINDEX_LINESTRING.get=function(){return 2},Jl.SORTINDEX_LINEARRING.get=function(){return 3},Jl.SORTINDEX_MULTILINESTRING.get=function(){return 4},Jl.SORTINDEX_POLYGON.get=function(){return 5},Jl.SORTINDEX_MULTIPOLYGON.get=function(){return 6},Jl.SORTINDEX_GEOMETRYCOLLECTION.get=function(){return 7},Jl.geometryChangedFilter.get=function(){return Zl},Object.defineProperties(Wl,Jl);var Zl=function(){};Zl.interfaces_=function(){return[Hl]},Zl.filter=function(t){t.geometryChangedAction()};var Kl=function(){};Kl.prototype.filter=function(t){},Kl.prototype.interfaces_=function(){return[]},Kl.prototype.getClass=function(){return Kl};var Ql=function(){},$l={Mod2BoundaryNodeRule:{configurable:!0},EndPointBoundaryNodeRule:{configurable:!0},MultiValentEndPointBoundaryNodeRule:{configurable:!0},MonoValentEndPointBoundaryNodeRule:{configurable:!0},MOD2_BOUNDARY_RULE:{configurable:!0},ENDPOINT_BOUNDARY_RULE:{configurable:!0},MULTIVALENT_ENDPOINT_BOUNDARY_RULE:{configurable:!0},MONOVALENT_ENDPOINT_BOUNDARY_RULE:{configurable:!0},OGC_SFS_BOUNDARY_RULE:{configurable:!0}};Ql.prototype.isInBoundary=function(t){},Ql.prototype.interfaces_=function(){return[]},Ql.prototype.getClass=function(){return Ql},$l.Mod2BoundaryNodeRule.get=function(){return tc},$l.EndPointBoundaryNodeRule.get=function(){return ec},$l.MultiValentEndPointBoundaryNodeRule.get=function(){return nc},$l.MonoValentEndPointBoundaryNodeRule.get=function(){return rc},$l.MOD2_BOUNDARY_RULE.get=function(){return new tc},$l.ENDPOINT_BOUNDARY_RULE.get=function(){return new ec},$l.MULTIVALENT_ENDPOINT_BOUNDARY_RULE.get=function(){return new nc},$l.MONOVALENT_ENDPOINT_BOUNDARY_RULE.get=function(){return new rc},$l.OGC_SFS_BOUNDARY_RULE.get=function(){return Ql.MOD2_BOUNDARY_RULE},Object.defineProperties(Ql,$l);var tc=function(){};tc.prototype.isInBoundary=function(t){return t%2==1},tc.prototype.interfaces_=function(){return[Ql]},tc.prototype.getClass=function(){return tc};var ec=function(){};ec.prototype.isInBoundary=function(t){return t>0},ec.prototype.interfaces_=function(){return[Ql]},ec.prototype.getClass=function(){return ec};var nc=function(){};nc.prototype.isInBoundary=function(t){return t>1},nc.prototype.interfaces_=function(){return[Ql]},nc.prototype.getClass=function(){return nc};var rc=function(){};rc.prototype.isInBoundary=function(t){return 1===t},rc.prototype.interfaces_=function(){return[Ql]},rc.prototype.getClass=function(){return rc};var ic=function(){};function oc(t){this.message=t||""}ic.prototype.add=function(){},ic.prototype.addAll=function(){},ic.prototype.isEmpty=function(){},ic.prototype.iterator=function(){},ic.prototype.size=function(){},ic.prototype.toArray=function(){},ic.prototype.remove=function(){},oc.prototype=new Error,oc.prototype.name="IndexOutOfBoundsException";var sc=function(){};sc.prototype.hasNext=function(){},sc.prototype.next=function(){},sc.prototype.remove=function(){};var ac=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(){},e.prototype.set=function(){},e.prototype.isEmpty=function(){},e}(ic);function uc(t){this.message=t||""}uc.prototype=new Error,uc.prototype.name="NoSuchElementException";var lc=function(t){function e(){t.call(this),this.array_=[],arguments[0]instanceof ic&&this.addAll(arguments[0])}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.ensureCapacity=function(){},e.prototype.interfaces_=function(){return[t,ic]},e.prototype.add=function(t){return 1===arguments.length?this.array_.push(t):this.array_.splice(arguments[0],arguments[1]),!0},e.prototype.clear=function(){this.array_=[]},e.prototype.addAll=function(t){for(var e=t.iterator();e.hasNext();)this.add(e.next());return!0},e.prototype.set=function(t,e){var n=this.array_[t];return this.array_[t]=e,n},e.prototype.iterator=function(){return new cc(this)},e.prototype.get=function(t){if(t<0||t>=this.size())throw new oc;return this.array_[t]},e.prototype.isEmpty=function(){return 0===this.array_.length},e.prototype.size=function(){return this.array_.length},e.prototype.toArray=function(){for(var t=[],e=0,n=this.array_.length;e<n;e++)t.push(this.array_[e]);return t},e.prototype.remove=function(t){for(var e=!1,n=0,r=this.array_.length;n<r;n++)if(this.array_[n]===t){this.array_.splice(n,1),e=!0;break}return e},e}(ac),cc=function(t){function e(e){t.call(this),this.arrayList_=e,this.position_=0}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.next=function(){if(this.position_===this.arrayList_.size())throw new uc;return this.arrayList_.get(this.position_++)},e.prototype.hasNext=function(){return this.position_<this.arrayList_.size()},e.prototype.set=function(t){return this.arrayList_.set(this.position_-1,t)},e.prototype.remove=function(){this.arrayList_.remove(this.arrayList_.get(this.position_))},e}(sc),hc=function(t){function e(){if(t.call(this),0===arguments.length);else if(1===arguments.length){var e=arguments[0];this.ensureCapacity(e.length),this.add(e,!0)}else if(2===arguments.length){var n=arguments[0],r=arguments[1];this.ensureCapacity(n.length),this.add(n,r)}}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={coordArrayType:{configurable:!0}};return n.coordArrayType.get=function(){return new Array(0).fill(null)},e.prototype.getCoordinate=function(t){return this.get(t)},e.prototype.addAll=function(){var e=this;if(2===arguments.length){for(var n=arguments[0],r=arguments[1],i=!1,o=n.iterator();o.hasNext();)e.add(o.next(),r),i=!0;return i}return t.prototype.addAll.apply(this,arguments)},e.prototype.clone=function(){for(var e=t.prototype.clone.call(this),n=0;n<this.size();n++)e.add(n,this.get(n).copy());return e},e.prototype.toCoordinateArray=function(){return this.toArray(e.coordArrayType)},e.prototype.add=function(){var e=this;if(1===arguments.length){var n=arguments[0];t.prototype.add.call(this,n)}else if(2===arguments.length){if(arguments[0]instanceof Array&&"boolean"==typeof arguments[1]){var r=arguments[0],i=arguments[1];return this.add(r,i,!0),!0}if(arguments[0]instanceof ul&&"boolean"==typeof arguments[1]){var o=arguments[0],s=arguments[1];if(!s&&this.size()>=1){var a=this.get(this.size()-1);if(a.equals2D(o))return null}t.prototype.add.call(this,o)}else if(arguments[0]instanceof Object&&"boolean"==typeof arguments[1]){var u=arguments[0],l=arguments[1];return this.add(u,l),!0}}else if(3===arguments.length){if("boolean"==typeof arguments[2]&&arguments[0]instanceof Array&&"boolean"==typeof arguments[1]){var c=arguments[0],h=arguments[1],p=arguments[2];if(p)for(var f=0;f<c.length;f++)e.add(c[f],h);else for(var g=c.length-1;g>=0;g--)e.add(c[g],h);return!0}if("boolean"==typeof arguments[2]&&Number.isInteger(arguments[0])&&arguments[1]instanceof ul){var d=arguments[0],y=arguments[1],v=arguments[2];if(!v){var _=this.size();if(_>0){if(d>0){var m=this.get(d-1);if(m.equals2D(y))return null}if(d<_){var x=this.get(d);if(x.equals2D(y))return null}}}t.prototype.add.call(this,d,y)}}else if(4===arguments.length){var E=arguments[0],b=arguments[1],w=arguments[2],I=arguments[3],N=1;w>I&&(N=-1);for(var S=w;S!==I;S+=N)e.add(E[S],b);return!0}},e.prototype.closeRing=function(){this.size()>0&&this.add(new ul(this.get(0)),!1)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},Object.defineProperties(e,n),e}(lc),pc=function(){},fc={ForwardComparator:{configurable:!0},BidirectionalComparator:{configurable:!0},coordArrayType:{configurable:!0}};fc.ForwardComparator.get=function(){return gc},fc.BidirectionalComparator.get=function(){return dc},fc.coordArrayType.get=function(){return new Array(0).fill(null)},pc.prototype.interfaces_=function(){return[]},pc.prototype.getClass=function(){return pc},pc.isRing=function(t){return!(t.length<4)&&!!t[0].equals2D(t[t.length-1])},pc.ptNotInList=function(t,e){for(var n=0;n<t.length;n++){var r=t[n];if(pc.indexOf(r,e)<0)return r}return null},pc.scroll=function(t,e){var n=pc.indexOf(e,t);if(n<0)return null;var r=new Array(t.length).fill(null);Pl.arraycopy(t,n,r,0,t.length-n),Pl.arraycopy(t,0,r,t.length-n,n),Pl.arraycopy(r,0,t,0,t.length)},pc.equals=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1];if(t===e)return!0;if(null===t||null===e)return!1;if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!t[n].equals(e[n]))return!1;return!0}if(3===arguments.length){var r=arguments[0],i=arguments[1],o=arguments[2];if(r===i)return!0;if(null===r||null===i)return!1;if(r.length!==i.length)return!1;for(var s=0;s<r.length;s++)if(0!==o.compare(r[s],i[s]))return!1;return!0}},pc.intersection=function(t,e){for(var n=new hc,r=0;r<t.length;r++)e.intersects(t[r])&&n.add(t[r],!0);return n.toCoordinateArray()},pc.hasRepeatedPoints=function(t){for(var e=1;e<t.length;e++)if(t[e-1].equals(t[e]))return!0;return!1},pc.removeRepeatedPoints=function(t){return pc.hasRepeatedPoints(t)?new hc(t,!1).toCoordinateArray():t},pc.reverse=function(t){for(var e=t.length-1,n=Math.trunc(e/2),r=0;r<=n;r++){var i=t[r];t[r]=t[e-r],t[e-r]=i}},pc.removeNull=function(t){for(var e=0,n=0;n<t.length;n++)null!==t[n]&&e++;var r=new Array(e).fill(null);if(0===e)return r;for(var i=0,o=0;o<t.length;o++)null!==t[o]&&(r[i++]=t[o]);return r},pc.copyDeep=function(){if(1===arguments.length){for(var t=arguments[0],e=new Array(t.length).fill(null),n=0;n<t.length;n++)e[n]=new ul(t[n]);return e}if(5===arguments.length)for(var r=arguments[0],i=arguments[1],o=arguments[2],s=arguments[3],a=arguments[4],u=0;u<a;u++)o[s+u]=new ul(r[i+u])},pc.isEqualReversed=function(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=e[t.length-n-1];if(0!==r.compareTo(i))return!1}return!0},pc.envelope=function(t){for(var e=new Ll,n=0;n<t.length;n++)e.expandToInclude(t[n]);return e},pc.toCoordinateArray=function(t){return t.toArray(pc.coordArrayType)},pc.atLeastNCoordinatesOrNothing=function(t,e){return e.length>=t?e:[]},pc.indexOf=function(t,e){for(var n=0;n<e.length;n++)if(t.equals(e[n]))return n;return-1},pc.increasingDirection=function(t){for(var e=0;e<Math.trunc(t.length/2);e++){var n=t.length-1-e,r=t[e].compareTo(t[n]);if(0!==r)return r}return 1},pc.compare=function(t,e){for(var n=0;n<t.length&&n<e.length;){var r=t[n].compareTo(e[n]);if(0!==r)return r;n++}return n<e.length?-1:n<t.length?1:0},pc.minCoordinate=function(t){for(var e=null,n=0;n<t.length;n++)(null===e||e.compareTo(t[n])>0)&&(e=t[n]);return e},pc.extract=function(t,e,n){e=dl.clamp(e,0,t.length);var r=(n=dl.clamp(n,-1,t.length))-e+1;n<0&&(r=0),e>=t.length&&(r=0),n<e&&(r=0);var i=new Array(r).fill(null);if(0===r)return i;for(var o=0,s=e;s<=n;s++)i[o++]=t[s];return i},Object.defineProperties(pc,fc);var gc=function(){};gc.prototype.compare=function(t,e){return pc.compare(t,e)},gc.prototype.interfaces_=function(){return[sl]},gc.prototype.getClass=function(){return gc};var dc=function(){};dc.prototype.compare=function(t,e){var n=t,r=e;if(n.length<r.length)return-1;if(n.length>r.length)return 1;if(0===n.length)return 0;var i=pc.compare(n,r);return pc.isEqualReversed(n,r)?0:i},dc.prototype.OLDcompare=function(t,e){var n=t,r=e;if(n.length<r.length)return-1;if(n.length>r.length)return 1;if(0===n.length)return 0;for(var i=pc.increasingDirection(n),o=pc.increasingDirection(r),s=i>0?0:n.length-1,a=o>0?0:n.length-1,u=0;u<n.length;u++){var l=n[s].compareTo(r[a]);if(0!==l)return l;s+=i,a+=o}return 0},dc.prototype.interfaces_=function(){return[sl]},dc.prototype.getClass=function(){return dc};var yc=function(){};yc.prototype.get=function(){},yc.prototype.put=function(){},yc.prototype.size=function(){},yc.prototype.values=function(){},yc.prototype.entrySet=function(){};var vc=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(yc);function _c(t){this.message=t||""}function mc(){}_c.prototype=new Error,_c.prototype.name="OperationNotSupported",mc.prototype=new ic,mc.prototype.contains=function(){};var xc=function(t){function e(){t.call(this),this.array_=[],arguments[0]instanceof ic&&this.addAll(arguments[0])}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.contains=function(t){for(var e=0,n=this.array_.length;e<n;e++){if(this.array_[e]===t)return!0}return!1},e.prototype.add=function(t){return!this.contains(t)&&(this.array_.push(t),!0)},e.prototype.addAll=function(t){for(var e=t.iterator();e.hasNext();)this.add(e.next());return!0},e.prototype.remove=function(t){throw new Error},e.prototype.size=function(){return this.array_.length},e.prototype.isEmpty=function(){return 0===this.array_.length},e.prototype.toArray=function(){for(var t=[],e=0,n=this.array_.length;e<n;e++)t.push(this.array_[e]);return t},e.prototype.iterator=function(){return new Ec(this)},e}(mc),Ec=function(t){function e(e){t.call(this),this.hashSet_=e,this.position_=0}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.next=function(){if(this.position_===this.hashSet_.size())throw new uc;return this.hashSet_.array_[this.position_++]},e.prototype.hasNext=function(){return this.position_<this.hashSet_.size()},e.prototype.remove=function(){throw new _c},e}(sc);function bc(t){return null===t?0:t.color}function wc(t){return null===t?null:t.parent}function Ic(t,e){null!==t&&(t.color=e)}function Nc(t){return null===t?null:t.left}function Sc(t){return null===t?null:t.right}function Cc(){this.root_=null,this.size_=0}Cc.prototype=new vc,Cc.prototype.get=function(t){for(var e=this.root_;null!==e;){var n=t.compareTo(e.key);if(n<0)e=e.left;else{if(!(n>0))return e.value;e=e.right}}return null},Cc.prototype.put=function(t,e){if(null===this.root_)return this.root_={key:t,value:e,left:null,right:null,parent:null,color:0,getValue:function(){return this.value},getKey:function(){return this.key}},this.size_=1,null;var n,r,i=this.root_;do{if(n=i,(r=t.compareTo(i.key))<0)i=i.left;else{if(!(r>0)){var o=i.value;return i.value=e,o}i=i.right}}while(null!==i);var s={key:t,left:null,right:null,value:e,parent:n,color:0,getValue:function(){return this.value},getKey:function(){return this.key}};return r<0?n.left=s:n.right=s,this.fixAfterInsertion(s),this.size_++,null},Cc.prototype.fixAfterInsertion=function(t){var e=this;for(t.color=1;null!=t&&t!==this.root_&&1===t.parent.color;)if(wc(t)===Nc(wc(wc(t)))){var n=Sc(wc(wc(t)));1===bc(n)?(Ic(wc(t),0),Ic(n,0),Ic(wc(wc(t)),1),t=wc(wc(t))):(t===Sc(wc(t))&&(t=wc(t),e.rotateLeft(t)),Ic(wc(t),0),Ic(wc(wc(t)),1),e.rotateRight(wc(wc(t))))}else{var r=Nc(wc(wc(t)));1===bc(r)?(Ic(wc(t),0),Ic(r,0),Ic(wc(wc(t)),1),t=wc(wc(t))):(t===Nc(wc(t))&&(t=wc(t),e.rotateRight(t)),Ic(wc(t),0),Ic(wc(wc(t)),1),e.rotateLeft(wc(wc(t))))}this.root_.color=0},Cc.prototype.values=function(){var t=new lc,e=this.getFirstEntry();if(null!==e)for(t.add(e.value);null!==(e=Cc.successor(e));)t.add(e.value);return t},Cc.prototype.entrySet=function(){var t=new xc,e=this.getFirstEntry();if(null!==e)for(t.add(e);null!==(e=Cc.successor(e));)t.add(e);return t},Cc.prototype.rotateLeft=function(t){if(null!=t){var e=t.right;t.right=e.left,null!=e.left&&(e.left.parent=t),e.parent=t.parent,null===t.parent?this.root_=e:t.parent.left===t?t.parent.left=e:t.parent.right=e,e.left=t,t.parent=e}},Cc.prototype.rotateRight=function(t){if(null!=t){var e=t.left;t.left=e.right,null!=e.right&&(e.right.parent=t),e.parent=t.parent,null===t.parent?this.root_=e:t.parent.right===t?t.parent.right=e:t.parent.left=e,e.right=t,t.parent=e}},Cc.prototype.getFirstEntry=function(){var t=this.root_;if(null!=t)for(;null!=t.left;)t=t.left;return t},Cc.successor=function(t){if(null===t)return null;if(null!==t.right){for(var e=t.right;null!==e.left;)e=e.left;return e}for(var n=t.parent,r=t;null!==n&&r===n.right;)r=n,n=n.parent;return n},Cc.prototype.size=function(){return this.size_};var Pc=function(){};function Mc(){}function Lc(){this.array_=[],arguments[0]instanceof ic&&this.addAll(arguments[0])}Pc.prototype.interfaces_=function(){return[]},Pc.prototype.getClass=function(){return Pc},Mc.prototype=new mc,Lc.prototype=new Mc,Lc.prototype.contains=function(t){for(var e=0,n=this.array_.length;e<n;e++){if(0===this.array_[e].compareTo(t))return!0}return!1},Lc.prototype.add=function(t){if(this.contains(t))return!1;for(var e=0,n=this.array_.length;e<n;e++){if(1===this.array_[e].compareTo(t))return this.array_.splice(e,0,t),!0}return this.array_.push(t),!0},Lc.prototype.addAll=function(t){for(var e=t.iterator();e.hasNext();)this.add(e.next());return!0},Lc.prototype.remove=function(t){throw new _c},Lc.prototype.size=function(){return this.array_.length},Lc.prototype.isEmpty=function(){return 0===this.array_.length},Lc.prototype.toArray=function(){for(var t=[],e=0,n=this.array_.length;e<n;e++)t.push(this.array_[e]);return t},Lc.prototype.iterator=function(){return new Oc(this)};var Oc=function(t){this.treeSet_=t,this.position_=0};Oc.prototype.next=function(){if(this.position_===this.treeSet_.size())throw new uc;return this.treeSet_.array_[this.position_++]},Oc.prototype.hasNext=function(){return this.position_<this.treeSet_.size()},Oc.prototype.remove=function(){throw new _c};var Rc=function(){};Rc.sort=function(){var t,e,n,r,i=arguments[0];if(1===arguments.length)r=function(t,e){return t.compareTo(e)},i.sort(r);else if(2===arguments.length)n=arguments[1],r=function(t,e){return n.compare(t,e)},i.sort(r);else if(3===arguments.length){(e=i.slice(arguments[1],arguments[2])).sort();var o=i.slice(0,arguments[1]).concat(e,i.slice(arguments[2],i.length));for(i.splice(0,i.length),t=0;t<o.length;t++)i.push(o[t])}else if(4===arguments.length)for(e=i.slice(arguments[1],arguments[2]),n=arguments[3],r=function(t,e){return n.compare(t,e)},e.sort(r),o=i.slice(0,arguments[1]).concat(e,i.slice(arguments[2],i.length)),i.splice(0,i.length),t=0;t<o.length;t++)i.push(o[t])},Rc.asList=function(t){for(var e=new lc,n=0,r=t.length;n<r;n++)e.add(t[n]);return e};var Tc=function(){},Ac={P:{configurable:!0},L:{configurable:!0},A:{configurable:!0},FALSE:{configurable:!0},TRUE:{configurable:!0},DONTCARE:{configurable:!0},SYM_FALSE:{configurable:!0},SYM_TRUE:{configurable:!0},SYM_DONTCARE:{configurable:!0},SYM_P:{configurable:!0},SYM_L:{configurable:!0},SYM_A:{configurable:!0}};Ac.P.get=function(){return 0},Ac.L.get=function(){return 1},Ac.A.get=function(){return 2},Ac.FALSE.get=function(){return-1},Ac.TRUE.get=function(){return-2},Ac.DONTCARE.get=function(){return-3},Ac.SYM_FALSE.get=function(){return"F"},Ac.SYM_TRUE.get=function(){return"T"},Ac.SYM_DONTCARE.get=function(){return"*"},Ac.SYM_P.get=function(){return"0"},Ac.SYM_L.get=function(){return"1"},Ac.SYM_A.get=function(){return"2"},Tc.prototype.interfaces_=function(){return[]},Tc.prototype.getClass=function(){return Tc},Tc.toDimensionSymbol=function(t){switch(t){case Tc.FALSE:return Tc.SYM_FALSE;case Tc.TRUE:return Tc.SYM_TRUE;case Tc.DONTCARE:return Tc.SYM_DONTCARE;case Tc.P:return Tc.SYM_P;case Tc.L:return Tc.SYM_L;case Tc.A:return Tc.SYM_A}throw new el("Unknown dimension value: "+t)},Tc.toDimensionValue=function(t){switch(ml.toUpperCase(t)){case Tc.SYM_FALSE:return Tc.FALSE;case Tc.SYM_TRUE:return Tc.TRUE;case Tc.SYM_DONTCARE:return Tc.DONTCARE;case Tc.SYM_P:return Tc.P;case Tc.SYM_L:return Tc.L;case Tc.SYM_A:return Tc.A}throw new el("Unknown dimension symbol: "+t)},Object.defineProperties(Tc,Ac);var Dc=function(){};Dc.prototype.filter=function(t){},Dc.prototype.interfaces_=function(){return[]},Dc.prototype.getClass=function(){return Dc};var Fc=function(){};Fc.prototype.filter=function(t,e){},Fc.prototype.isDone=function(){},Fc.prototype.isGeometryChanged=function(){},Fc.prototype.interfaces_=function(){return[]},Fc.prototype.getClass=function(){return Fc};var kc=function(t){function e(e,n){if(t.call(this,n),this._geometries=e||[],t.hasNullElements(this._geometries))throw new el("geometries must not contain null elements")}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={serialVersionUID:{configurable:!0}};return e.prototype.computeEnvelopeInternal=function(){for(var t=new Ll,e=0;e<this._geometries.length;e++)t.expandToInclude(this._geometries[e].getEnvelopeInternal());return t},e.prototype.getGeometryN=function(t){return this._geometries[t]},e.prototype.getSortIndex=function(){return t.SORTINDEX_GEOMETRYCOLLECTION},e.prototype.getCoordinates=function(){for(var t=new Array(this.getNumPoints()).fill(null),e=-1,n=0;n<this._geometries.length;n++)for(var r=this._geometries[n].getCoordinates(),i=0;i<r.length;i++)t[++e]=r[i];return t},e.prototype.getArea=function(){for(var t=0,e=0;e<this._geometries.length;e++)t+=this._geometries[e].getArea();return t},e.prototype.equalsExact=function(){var e=this;if(2===arguments.length){var n=arguments[0],r=arguments[1];if(!this.isEquivalentClass(n))return!1;var i=n;if(this._geometries.length!==i._geometries.length)return!1;for(var o=0;o<this._geometries.length;o++)if(!e._geometries[o].equalsExact(i._geometries[o],r))return!1;return!0}return t.prototype.equalsExact.apply(this,arguments)},e.prototype.normalize=function(){for(var t=0;t<this._geometries.length;t++)this._geometries[t].normalize();Rc.sort(this._geometries)},e.prototype.getCoordinate=function(){return this.isEmpty()?null:this._geometries[0].getCoordinate()},e.prototype.getBoundaryDimension=function(){for(var t=Tc.FALSE,e=0;e<this._geometries.length;e++)t=Math.max(t,this._geometries[e].getBoundaryDimension());return t},e.prototype.getDimension=function(){for(var t=Tc.FALSE,e=0;e<this._geometries.length;e++)t=Math.max(t,this._geometries[e].getDimension());return t},e.prototype.getLength=function(){for(var t=0,e=0;e<this._geometries.length;e++)t+=this._geometries[e].getLength();return t},e.prototype.getNumPoints=function(){for(var t=0,e=0;e<this._geometries.length;e++)t+=this._geometries[e].getNumPoints();return t},e.prototype.getNumGeometries=function(){return this._geometries.length},e.prototype.reverse=function(){for(var t=this._geometries.length,e=new Array(t).fill(null),n=0;n<this._geometries.length;n++)e[n]=this._geometries[n].reverse();return this.getFactory().createGeometryCollection(e)},e.prototype.compareToSameClass=function(){var t=this;if(1===arguments.length){var e=arguments[0],n=new Lc(Rc.asList(this._geometries)),r=new Lc(Rc.asList(e._geometries));return this.compare(n,r)}if(2===arguments.length){for(var i=arguments[0],o=arguments[1],s=i,a=this.getNumGeometries(),u=s.getNumGeometries(),l=0;l<a&&l<u;){var c=t.getGeometryN(l),h=s.getGeometryN(l),p=c.compareToSameClass(h,o);if(0!==p)return p;l++}return l<a?1:l<u?-1:0}},e.prototype.apply=function(){var t=this;if(gl(arguments[0],Kl))for(var e=arguments[0],n=0;n<this._geometries.length;n++)t._geometries[n].apply(e);else if(gl(arguments[0],Fc)){var r=arguments[0];if(0===this._geometries.length)return null;for(var i=0;i<this._geometries.length&&(t._geometries[i].apply(r),!r.isDone());i++);r.isGeometryChanged()&&this.geometryChanged()}else if(gl(arguments[0],Dc)){var o=arguments[0];o.filter(this);for(var s=0;s<this._geometries.length;s++)t._geometries[s].apply(o)}else if(gl(arguments[0],Hl)){var a=arguments[0];a.filter(this);for(var u=0;u<this._geometries.length;u++)t._geometries[u].apply(a)}},e.prototype.getBoundary=function(){return this.checkNotGeometryCollection(this),ql.shouldNeverReachHere(),null},e.prototype.clone=function(){var e=t.prototype.clone.call(this);e._geometries=new Array(this._geometries.length).fill(null);for(var n=0;n<this._geometries.length;n++)e._geometries[n]=this._geometries[n].clone();return e},e.prototype.getGeometryType=function(){return"GeometryCollection"},e.prototype.copy=function(){for(var t=new Array(this._geometries.length).fill(null),n=0;n<t.length;n++)t[n]=this._geometries[n].copy();return new e(t,this._factory)},e.prototype.isEmpty=function(){for(var t=0;t<this._geometries.length;t++)if(!this._geometries[t].isEmpty())return!1;return!0},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},n.serialVersionUID.get=function(){return-0x4f07bcb1f857d800},Object.defineProperties(e,n),e}(Wl),Gc=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={serialVersionUID:{configurable:!0}};return e.prototype.getSortIndex=function(){return Wl.SORTINDEX_MULTILINESTRING},e.prototype.equalsExact=function(){if(2===arguments.length){var e=arguments[0],n=arguments[1];return!!this.isEquivalentClass(e)&&t.prototype.equalsExact.call(this,e,n)}return t.prototype.equalsExact.apply(this,arguments)},e.prototype.getBoundaryDimension=function(){return this.isClosed()?Tc.FALSE:0},e.prototype.isClosed=function(){if(this.isEmpty())return!1;for(var t=0;t<this._geometries.length;t++)if(!this._geometries[t].isClosed())return!1;return!0},e.prototype.getDimension=function(){return 1},e.prototype.reverse=function(){for(var t=this._geometries.length,e=new Array(t).fill(null),n=0;n<this._geometries.length;n++)e[t-1-n]=this._geometries[n].reverse();return this.getFactory().createMultiLineString(e)},e.prototype.getBoundary=function(){return new qc(this).getBoundary()},e.prototype.getGeometryType=function(){return"MultiLineString"},e.prototype.copy=function(){for(var t=new Array(this._geometries.length).fill(null),n=0;n<t.length;n++)t[n]=this._geometries[n].copy();return new e(t,this._factory)},e.prototype.interfaces_=function(){return[Pc]},e.prototype.getClass=function(){return e},n.serialVersionUID.get=function(){return 0x7155d2ab4afa8000},Object.defineProperties(e,n),e}(kc),qc=function(){if(this._geom=null,this._geomFact=null,this._bnRule=null,this._endpointMap=null,1===arguments.length){var t=arguments[0],e=Ql.MOD2_BOUNDARY_RULE;this._geom=t,this._geomFact=t.getFactory(),this._bnRule=e}else if(2===arguments.length){var n=arguments[0],r=arguments[1];this._geom=n,this._geomFact=n.getFactory(),this._bnRule=r}};qc.prototype.boundaryMultiLineString=function(t){if(this._geom.isEmpty())return this.getEmptyMultiPoint();var e=this.computeBoundaryCoordinates(t);return 1===e.length?this._geomFact.createPoint(e[0]):this._geomFact.createMultiPointFromCoords(e)},qc.prototype.getBoundary=function(){return this._geom instanceof Zc?this.boundaryLineString(this._geom):this._geom instanceof Gc?this.boundaryMultiLineString(this._geom):this._geom.getBoundary()},qc.prototype.boundaryLineString=function(t){return this._geom.isEmpty()?this.getEmptyMultiPoint():t.isClosed()?this._bnRule.isInBoundary(2)?t.getStartPoint():this._geomFact.createMultiPoint():this._geomFact.createMultiPoint([t.getStartPoint(),t.getEndPoint()])},qc.prototype.getEmptyMultiPoint=function(){return this._geomFact.createMultiPoint()},qc.prototype.computeBoundaryCoordinates=function(t){var e=this,n=new lc;this._endpointMap=new Cc;for(var r=0;r<t.getNumGeometries();r++){var i=t.getGeometryN(r);0!==i.getNumPoints()&&(e.addEndpoint(i.getCoordinateN(0)),e.addEndpoint(i.getCoordinateN(i.getNumPoints()-1)))}for(var o=this._endpointMap.entrySet().iterator();o.hasNext();){var s=o.next(),a=s.getValue().count;e._bnRule.isInBoundary(a)&&n.add(s.getKey())}return pc.toCoordinateArray(n)},qc.prototype.addEndpoint=function(t){var e=this._endpointMap.get(t);null===e&&(e=new Bc,this._endpointMap.put(t,e)),e.count++},qc.prototype.interfaces_=function(){return[]},qc.prototype.getClass=function(){return qc},qc.getBoundary=function(){if(1===arguments.length){var t=arguments[0],e=new qc(t);return e.getBoundary()}if(2===arguments.length){var n=arguments[0],r=arguments[1],i=new qc(n,r);return i.getBoundary()}};var Bc=function(){this.count=null};function zc(){}function jc(){}Bc.prototype.interfaces_=function(){return[]},Bc.prototype.getClass=function(){return Bc};var Uc=function(){};function Vc(){}function Xc(){}function Yc(){}var Hc=function(){},Wc={NEWLINE:{configurable:!0},SIMPLE_ORDINATE_FORMAT:{configurable:!0}};Hc.prototype.interfaces_=function(){return[]},Hc.prototype.getClass=function(){return Hc},Hc.chars=function(t,e){for(var n=new Array(e).fill(null),r=0;r<e;r++)n[r]=t;return String(n)},Hc.getStackTrace=function(){if(1===arguments.length){var t=arguments[0],e=new Vc,n=new zc(e);return t.printStackTrace(n),e.toString()}if(2===arguments.length){for(var r=arguments[0],i=arguments[1],o="",s=new jc(Hc.getStackTrace(r)),a=new Yc(s),u=0;u<i;u++)try{o+=a.readLine()+Hc.NEWLINE}catch(t){if(!(t instanceof Xc))throw t;ql.shouldNeverReachHere()}return o}},Hc.split=function(t,e){for(var n=e.length,r=new lc,i=""+t,o=i.indexOf(e);o>=0;){var s=i.substring(0,o);r.add(s),o=(i=i.substring(o+n)).indexOf(e)}i.length>0&&r.add(i);for(var a=new Array(r.size()).fill(null),u=0;u<a.length;u++)a[u]=r.get(u);return a},Hc.toString=function(){if(1===arguments.length){var t=arguments[0];return Hc.SIMPLE_ORDINATE_FORMAT.format(t)}},Hc.spaces=function(t){return Hc.chars(" ",t)},Wc.NEWLINE.get=function(){return Pl.getProperty("line.separator")},Wc.SIMPLE_ORDINATE_FORMAT.get=function(){return new Uc("0.#")},Object.defineProperties(Hc,Wc);var Jc=function(){};Jc.prototype.interfaces_=function(){return[]},Jc.prototype.getClass=function(){return Jc},Jc.copyCoord=function(t,e,n,r){for(var i=Math.min(t.getDimension(),n.getDimension()),o=0;o<i;o++)n.setOrdinate(r,o,t.getOrdinate(e,o))},Jc.isRing=function(t){var e=t.size();return 0===e||!(e<=3)&&(t.getOrdinate(0,Il.X)===t.getOrdinate(e-1,Il.X)&&t.getOrdinate(0,Il.Y)===t.getOrdinate(e-1,Il.Y))},Jc.isEqual=function(t,e){var n=t.size();if(n!==e.size())return!1;for(var r=Math.min(t.getDimension(),e.getDimension()),i=0;i<n;i++)for(var o=0;o<r;o++){var s=t.getOrdinate(i,o),a=e.getOrdinate(i,o);if(t.getOrdinate(i,o)!==e.getOrdinate(i,o)&&(!nl.isNaN(s)||!nl.isNaN(a)))return!1}return!0},Jc.extend=function(t,e,n){var r=t.create(n,e.getDimension()),i=e.size();if(Jc.copy(e,0,r,0,i),i>0)for(var o=i;o<n;o++)Jc.copy(e,i-1,r,o,1);return r},Jc.reverse=function(t){for(var e=t.size()-1,n=Math.trunc(e/2),r=0;r<=n;r++)Jc.swap(t,r,e-r)},Jc.swap=function(t,e,n){if(e===n)return null;for(var r=0;r<t.getDimension();r++){var i=t.getOrdinate(e,r);t.setOrdinate(e,r,t.getOrdinate(n,r)),t.setOrdinate(n,r,i)}},Jc.copy=function(t,e,n,r,i){for(var o=0;o<i;o++)Jc.copyCoord(t,e+o,n,r+o)},Jc.toString=function(){if(1===arguments.length){var t=arguments[0],e=t.size();if(0===e)return"()";var n=t.getDimension(),r=new vl;r.append("(");for(var i=0;i<e;i++){i>0&&r.append(" ");for(var o=0;o<n;o++)o>0&&r.append(","),r.append(Hc.toString(t.getOrdinate(i,o)))}return r.append(")"),r.toString()}},Jc.ensureValidRing=function(t,e){var n=e.size();return 0===n?e:n<=3?Jc.createClosedRing(t,e,4):e.getOrdinate(0,Il.X)===e.getOrdinate(n-1,Il.X)&&e.getOrdinate(0,Il.Y)===e.getOrdinate(n-1,Il.Y)?e:Jc.createClosedRing(t,e,n+1)},Jc.createClosedRing=function(t,e,n){var r=t.create(n,e.getDimension()),i=e.size();Jc.copy(e,0,r,0,i);for(var o=i;o<n;o++)Jc.copy(e,0,r,o,1);return r};var Zc=function(t){function e(e,n){t.call(this,n),this._points=null,this.init(e)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={serialVersionUID:{configurable:!0}};return e.prototype.computeEnvelopeInternal=function(){return this.isEmpty()?new Ll:this._points.expandEnvelope(new Ll)},e.prototype.isRing=function(){return this.isClosed()&&this.isSimple()},e.prototype.getSortIndex=function(){return t.SORTINDEX_LINESTRING},e.prototype.getCoordinates=function(){return this._points.toCoordinateArray()},e.prototype.equalsExact=function(){var e=this;if(2===arguments.length){var n=arguments[0],r=arguments[1];if(!this.isEquivalentClass(n))return!1;var i=n;if(this._points.size()!==i._points.size())return!1;for(var o=0;o<this._points.size();o++)if(!e.equal(e._points.getCoordinate(o),i._points.getCoordinate(o),r))return!1;return!0}return t.prototype.equalsExact.apply(this,arguments)},e.prototype.normalize=function(){for(var t=this,e=0;e<Math.trunc(this._points.size()/2);e++){var n=t._points.size()-1-e;if(!t._points.getCoordinate(e).equals(t._points.getCoordinate(n)))return t._points.getCoordinate(e).compareTo(t._points.getCoordinate(n))>0&&Jc.reverse(t._points),null}},e.prototype.getCoordinate=function(){return this.isEmpty()?null:this._points.getCoordinate(0)},e.prototype.getBoundaryDimension=function(){return this.isClosed()?Tc.FALSE:0},e.prototype.isClosed=function(){return!this.isEmpty()&&this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints()-1))},e.prototype.getEndPoint=function(){return this.isEmpty()?null:this.getPointN(this.getNumPoints()-1)},e.prototype.getDimension=function(){return 1},e.prototype.getLength=function(){return Xl.computeLength(this._points)},e.prototype.getNumPoints=function(){return this._points.size()},e.prototype.reverse=function(){var t=this._points.copy();return Jc.reverse(t),this.getFactory().createLineString(t)},e.prototype.compareToSameClass=function(){var t=this;if(1===arguments.length){for(var e=arguments[0],n=e,r=0,i=0;r<this._points.size()&&i<n._points.size();){var o=t._points.getCoordinate(r).compareTo(n._points.getCoordinate(i));if(0!==o)return o;r++,i++}return r<this._points.size()?1:i<n._points.size()?-1:0}if(2===arguments.length){var s=arguments[0],a=arguments[1],u=s;return a.compare(this._points,u._points)}},e.prototype.apply=function(){var t=this;if(gl(arguments[0],Kl))for(var e=arguments[0],n=0;n<this._points.size();n++)e.filter(t._points.getCoordinate(n));else if(gl(arguments[0],Fc)){var r=arguments[0];if(0===this._points.size())return null;for(var i=0;i<this._points.size()&&(r.filter(t._points,i),!r.isDone());i++);r.isGeometryChanged()&&this.geometryChanged()}else if(gl(arguments[0],Dc)){var o=arguments[0];o.filter(this)}else if(gl(arguments[0],Hl)){var s=arguments[0];s.filter(this)}},e.prototype.getBoundary=function(){return new qc(this).getBoundary()},e.prototype.isEquivalentClass=function(t){return t instanceof e},e.prototype.clone=function(){var e=t.prototype.clone.call(this);return e._points=this._points.clone(),e},e.prototype.getCoordinateN=function(t){return this._points.getCoordinate(t)},e.prototype.getGeometryType=function(){return"LineString"},e.prototype.copy=function(){return new e(this._points.copy(),this._factory)},e.prototype.getCoordinateSequence=function(){return this._points},e.prototype.isEmpty=function(){return 0===this._points.size()},e.prototype.init=function(t){if(null===t&&(t=this.getFactory().getCoordinateSequenceFactory().create([])),1===t.size())throw new el("Invalid number of points in LineString (found "+t.size()+" - must be 0 or >= 2)");this._points=t},e.prototype.isCoordinate=function(t){for(var e=0;e<this._points.size();e++)if(this._points.getCoordinate(e).equals(t))return!0;return!1},e.prototype.getStartPoint=function(){return this.isEmpty()?null:this.getPointN(0)},e.prototype.getPointN=function(t){return this.getFactory().createPoint(this._points.getCoordinate(t))},e.prototype.interfaces_=function(){return[Pc]},e.prototype.getClass=function(){return e},n.serialVersionUID.get=function(){return 0x2b2b51ba435c8e00},Object.defineProperties(e,n),e}(Wl),Kc=function(){};Kc.prototype.interfaces_=function(){return[]},Kc.prototype.getClass=function(){return Kc};var Qc=function(t){function e(e,n){t.call(this,n),this._coordinates=e||null,this.init(this._coordinates)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={serialVersionUID:{configurable:!0}};return e.prototype.computeEnvelopeInternal=function(){if(this.isEmpty())return new Ll;var t=new Ll;return t.expandToInclude(this._coordinates.getX(0),this._coordinates.getY(0)),t},e.prototype.getSortIndex=function(){return t.SORTINDEX_POINT},e.prototype.getCoordinates=function(){return this.isEmpty()?[]:[this.getCoordinate()]},e.prototype.equalsExact=function(){if(2===arguments.length){var e=arguments[0],n=arguments[1];return!!this.isEquivalentClass(e)&&(!(!this.isEmpty()||!e.isEmpty())||this.isEmpty()===e.isEmpty()&&this.equal(e.getCoordinate(),this.getCoordinate(),n))}return t.prototype.equalsExact.apply(this,arguments)},e.prototype.normalize=function(){},e.prototype.getCoordinate=function(){return 0!==this._coordinates.size()?this._coordinates.getCoordinate(0):null},e.prototype.getBoundaryDimension=function(){return Tc.FALSE},e.prototype.getDimension=function(){return 0},e.prototype.getNumPoints=function(){return this.isEmpty()?0:1},e.prototype.reverse=function(){return this.copy()},e.prototype.getX=function(){if(null===this.getCoordinate())throw new Error("getX called on empty Point");return this.getCoordinate().x},e.prototype.compareToSameClass=function(){if(1===arguments.length){var t=arguments[0],e=t;return this.getCoordinate().compareTo(e.getCoordinate())}if(2===arguments.length){var n=arguments[0],r=arguments[1],i=n;return r.compare(this._coordinates,i._coordinates)}},e.prototype.apply=function(){if(gl(arguments[0],Kl)){var t=arguments[0];if(this.isEmpty())return null;t.filter(this.getCoordinate())}else if(gl(arguments[0],Fc)){var e=arguments[0];if(this.isEmpty())return null;e.filter(this._coordinates,0),e.isGeometryChanged()&&this.geometryChanged()}else if(gl(arguments[0],Dc)){var n=arguments[0];n.filter(this)}else if(gl(arguments[0],Hl)){var r=arguments[0];r.filter(this)}},e.prototype.getBoundary=function(){return this.getFactory().createGeometryCollection(null)},e.prototype.clone=function(){var e=t.prototype.clone.call(this);return e._coordinates=this._coordinates.clone(),e},e.prototype.getGeometryType=function(){return"Point"},e.prototype.copy=function(){return new e(this._coordinates.copy(),this._factory)},e.prototype.getCoordinateSequence=function(){return this._coordinates},e.prototype.getY=function(){if(null===this.getCoordinate())throw new Error("getY called on empty Point");return this.getCoordinate().y},e.prototype.isEmpty=function(){return 0===this._coordinates.size()},e.prototype.init=function(t){null===t&&(t=this.getFactory().getCoordinateSequenceFactory().create([])),ql.isTrue(t.size()<=1),this._coordinates=t},e.prototype.isSimple=function(){return!0},e.prototype.interfaces_=function(){return[Kc]},e.prototype.getClass=function(){return e},n.serialVersionUID.get=function(){return 0x44077bad161cbc00},Object.defineProperties(e,n),e}(Wl),$c=function(){};$c.prototype.interfaces_=function(){return[]},$c.prototype.getClass=function(){return $c};var th=function(t){function e(e,n,r){if(t.call(this,r),this._shell=null,this._holes=null,null===e&&(e=this.getFactory().createLinearRing()),null===n&&(n=[]),t.hasNullElements(n))throw new el("holes must not contain null elements");if(e.isEmpty()&&t.hasNonEmptyElements(n))throw new el("shell is empty but holes are not");this._shell=e,this._holes=n}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={serialVersionUID:{configurable:!0}};return e.prototype.computeEnvelopeInternal=function(){return this._shell.getEnvelopeInternal()},e.prototype.getSortIndex=function(){return t.SORTINDEX_POLYGON},e.prototype.getCoordinates=function(){if(this.isEmpty())return[];for(var t=new Array(this.getNumPoints()).fill(null),e=-1,n=this._shell.getCoordinates(),r=0;r<n.length;r++)t[++e]=n[r];for(var i=0;i<this._holes.length;i++)for(var o=this._holes[i].getCoordinates(),s=0;s<o.length;s++)t[++e]=o[s];return t},e.prototype.getArea=function(){var t=0;t+=Math.abs(Xl.signedArea(this._shell.getCoordinateSequence()));for(var e=0;e<this._holes.length;e++)t-=Math.abs(Xl.signedArea(this._holes[e].getCoordinateSequence()));return t},e.prototype.isRectangle=function(){if(0!==this.getNumInteriorRing())return!1;if(null===this._shell)return!1;if(5!==this._shell.getNumPoints())return!1;for(var t=this._shell.getCoordinateSequence(),e=this.getEnvelopeInternal(),n=0;n<5;n++){var r=t.getX(n);if(r!==e.getMinX()&&r!==e.getMaxX())return!1;var i=t.getY(n);if(i!==e.getMinY()&&i!==e.getMaxY())return!1}for(var o=t.getX(0),s=t.getY(0),a=1;a<=4;a++){var u=t.getX(a),l=t.getY(a);if(u!==o===(l!==s))return!1;o=u,s=l}return!0},e.prototype.equalsExact=function(){var e=this;if(2===arguments.length){var n=arguments[0],r=arguments[1];if(!this.isEquivalentClass(n))return!1;var i=n,o=this._shell,s=i._shell;if(!o.equalsExact(s,r))return!1;if(this._holes.length!==i._holes.length)return!1;for(var a=0;a<this._holes.length;a++)if(!e._holes[a].equalsExact(i._holes[a],r))return!1;return!0}return t.prototype.equalsExact.apply(this,arguments)},e.prototype.normalize=function(){var t=this;if(0===arguments.length){this.normalize(this._shell,!0);for(var e=0;e<this._holes.length;e++)t.normalize(t._holes[e],!1);Rc.sort(this._holes)}else if(2===arguments.length){var n=arguments[0],r=arguments[1];if(n.isEmpty())return null;var i=new Array(n.getCoordinates().length-1).fill(null);Pl.arraycopy(n.getCoordinates(),0,i,0,i.length);var o=pc.minCoordinate(n.getCoordinates());pc.scroll(i,o),Pl.arraycopy(i,0,n.getCoordinates(),0,i.length),n.getCoordinates()[i.length]=i[0],Xl.isCCW(n.getCoordinates())===r&&pc.reverse(n.getCoordinates())}},e.prototype.getCoordinate=function(){return this._shell.getCoordinate()},e.prototype.getNumInteriorRing=function(){return this._holes.length},e.prototype.getBoundaryDimension=function(){return 1},e.prototype.getDimension=function(){return 2},e.prototype.getLength=function(){var t=0;t+=this._shell.getLength();for(var e=0;e<this._holes.length;e++)t+=this._holes[e].getLength();return t},e.prototype.getNumPoints=function(){for(var t=this._shell.getNumPoints(),e=0;e<this._holes.length;e++)t+=this._holes[e].getNumPoints();return t},e.prototype.reverse=function(){var t=this.copy();t._shell=this._shell.copy().reverse(),t._holes=new Array(this._holes.length).fill(null);for(var e=0;e<this._holes.length;e++)t._holes[e]=this._holes[e].copy().reverse();return t},e.prototype.convexHull=function(){return this.getExteriorRing().convexHull()},e.prototype.compareToSameClass=function(){var t=this;if(1===arguments.length){var e=arguments[0],n=this._shell,r=e._shell;return n.compareToSameClass(r)}if(2===arguments.length){var i=arguments[0],o=arguments[1],s=i,a=this._shell,u=s._shell,l=a.compareToSameClass(u,o);if(0!==l)return l;for(var c=this.getNumInteriorRing(),h=s.getNumInteriorRing(),p=0;p<c&&p<h;){var f=t.getInteriorRingN(p),g=s.getInteriorRingN(p),d=f.compareToSameClass(g,o);if(0!==d)return d;p++}return p<c?1:p<h?-1:0}},e.prototype.apply=function(t){var e=this;if(gl(t,Kl)){this._shell.apply(t);for(var n=0;n<this._holes.length;n++)e._holes[n].apply(t)}else if(gl(t,Fc)){if(this._shell.apply(t),!t.isDone())for(var r=0;r<this._holes.length&&(e._holes[r].apply(t),!t.isDone());r++);t.isGeometryChanged()&&this.geometryChanged()}else if(gl(t,Dc))t.filter(this);else if(gl(t,Hl)){t.filter(this),this._shell.apply(t);for(var i=0;i<this._holes.length;i++)e._holes[i].apply(t)}},e.prototype.getBoundary=function(){if(this.isEmpty())return this.getFactory().createMultiLineString();var t=new Array(this._holes.length+1).fill(null);t[0]=this._shell;for(var e=0;e<this._holes.length;e++)t[e+1]=this._holes[e];return t.length<=1?this.getFactory().createLinearRing(t[0].getCoordinateSequence()):this.getFactory().createMultiLineString(t)},e.prototype.clone=function(){var e=t.prototype.clone.call(this);e._shell=this._shell.clone(),e._holes=new Array(this._holes.length).fill(null);for(var n=0;n<this._holes.length;n++)e._holes[n]=this._holes[n].clone();return e},e.prototype.getGeometryType=function(){return"Polygon"},e.prototype.copy=function(){for(var t=this._shell.copy(),n=new Array(this._holes.length).fill(null),r=0;r<n.length;r++)n[r]=this._holes[r].copy();return new e(t,n,this._factory)},e.prototype.getExteriorRing=function(){return this._shell},e.prototype.isEmpty=function(){return this._shell.isEmpty()},e.prototype.getInteriorRingN=function(t){return this._holes[t]},e.prototype.interfaces_=function(){return[$c]},e.prototype.getClass=function(){return e},n.serialVersionUID.get=function(){return-0x307ffefd8dc97200},Object.defineProperties(e,n),e}(Wl),eh=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={serialVersionUID:{configurable:!0}};return e.prototype.getSortIndex=function(){return Wl.SORTINDEX_MULTIPOINT},e.prototype.isValid=function(){return!0},e.prototype.equalsExact=function(){if(2===arguments.length){var e=arguments[0],n=arguments[1];return!!this.isEquivalentClass(e)&&t.prototype.equalsExact.call(this,e,n)}return t.prototype.equalsExact.apply(this,arguments)},e.prototype.getCoordinate=function(){if(1===arguments.length){var e=arguments[0];return this._geometries[e].getCoordinate()}return t.prototype.getCoordinate.apply(this,arguments)},e.prototype.getBoundaryDimension=function(){return Tc.FALSE},e.prototype.getDimension=function(){return 0},e.prototype.getBoundary=function(){return this.getFactory().createGeometryCollection(null)},e.prototype.getGeometryType=function(){return"MultiPoint"},e.prototype.copy=function(){for(var t=new Array(this._geometries.length).fill(null),n=0;n<t.length;n++)t[n]=this._geometries[n].copy();return new e(t,this._factory)},e.prototype.interfaces_=function(){return[Kc]},e.prototype.getClass=function(){return e},n.serialVersionUID.get=function(){return-0x6fb1ed4162e0fc00},Object.defineProperties(e,n),e}(kc),nh=function(t){function e(e,n){e instanceof ul&&n instanceof _h&&(e=n.getCoordinateSequenceFactory().create(e)),t.call(this,e,n),this.validateConstruction()}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={MINIMUM_VALID_SIZE:{configurable:!0},serialVersionUID:{configurable:!0}};return e.prototype.getSortIndex=function(){return Wl.SORTINDEX_LINEARRING},e.prototype.getBoundaryDimension=function(){return Tc.FALSE},e.prototype.isClosed=function(){return!!this.isEmpty()||t.prototype.isClosed.call(this)},e.prototype.reverse=function(){var t=this._points.copy();return Jc.reverse(t),this.getFactory().createLinearRing(t)},e.prototype.validateConstruction=function(){if(!this.isEmpty()&&!t.prototype.isClosed.call(this))throw new el("Points of LinearRing do not form a closed linestring");if(this.getCoordinateSequence().size()>=1&&this.getCoordinateSequence().size()<e.MINIMUM_VALID_SIZE)throw new el("Invalid number of points in LinearRing (found "+this.getCoordinateSequence().size()+" - must be 0 or >= 4)")},e.prototype.getGeometryType=function(){return"LinearRing"},e.prototype.copy=function(){return new e(this._points.copy(),this._factory)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},n.MINIMUM_VALID_SIZE.get=function(){return 4},n.serialVersionUID.get=function(){return-0x3b229e262367a600},Object.defineProperties(e,n),e}(Zc),rh=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={serialVersionUID:{configurable:!0}};return e.prototype.getSortIndex=function(){return Wl.SORTINDEX_MULTIPOLYGON},e.prototype.equalsExact=function(){if(2===arguments.length){var e=arguments[0],n=arguments[1];return!!this.isEquivalentClass(e)&&t.prototype.equalsExact.call(this,e,n)}return t.prototype.equalsExact.apply(this,arguments)},e.prototype.getBoundaryDimension=function(){return 1},e.prototype.getDimension=function(){return 2},e.prototype.reverse=function(){for(var t=this._geometries.length,e=new Array(t).fill(null),n=0;n<this._geometries.length;n++)e[n]=this._geometries[n].reverse();return this.getFactory().createMultiPolygon(e)},e.prototype.getBoundary=function(){if(this.isEmpty())return this.getFactory().createMultiLineString();for(var t=new lc,e=0;e<this._geometries.length;e++)for(var n=this._geometries[e].getBoundary(),r=0;r<n.getNumGeometries();r++)t.add(n.getGeometryN(r));var i=new Array(t.size()).fill(null);return this.getFactory().createMultiLineString(t.toArray(i))},e.prototype.getGeometryType=function(){return"MultiPolygon"},e.prototype.copy=function(){for(var t=new Array(this._geometries.length).fill(null),n=0;n<t.length;n++)t[n]=this._geometries[n].copy();return new e(t,this._factory)},e.prototype.interfaces_=function(){return[$c]},e.prototype.getClass=function(){return e},n.serialVersionUID.get=function(){return-0x7a5aa1369171980},Object.defineProperties(e,n),e}(kc),ih=function(t){this._factory=t||null,this._isUserDataCopied=!1},oh={NoOpGeometryOperation:{configurable:!0},CoordinateOperation:{configurable:!0},CoordinateSequenceOperation:{configurable:!0}};ih.prototype.setCopyUserData=function(t){this._isUserDataCopied=t},ih.prototype.edit=function(t,e){if(null===t)return null;var n=this.editInternal(t,e);return this._isUserDataCopied&&n.setUserData(t.getUserData()),n},ih.prototype.editInternal=function(t,e){return null===this._factory&&(this._factory=t.getFactory()),t instanceof kc?this.editGeometryCollection(t,e):t instanceof th?this.editPolygon(t,e):t instanceof Qc||t instanceof Zc?e.edit(t,this._factory):(ql.shouldNeverReachHere("Unsupported Geometry class: "+t.getClass().getName()),null)},ih.prototype.editGeometryCollection=function(t,e){for(var n=e.edit(t,this._factory),r=new lc,i=0;i<n.getNumGeometries();i++){var o=this.edit(n.getGeometryN(i),e);null===o||o.isEmpty()||r.add(o)}return n.getClass()===eh?this._factory.createMultiPoint(r.toArray([])):n.getClass()===Gc?this._factory.createMultiLineString(r.toArray([])):n.getClass()===rh?this._factory.createMultiPolygon(r.toArray([])):this._factory.createGeometryCollection(r.toArray([]))},ih.prototype.editPolygon=function(t,e){var n=e.edit(t,this._factory);if(null===n&&(n=this._factory.createPolygon(null)),n.isEmpty())return n;var r=this.edit(n.getExteriorRing(),e);if(null===r||r.isEmpty())return this._factory.createPolygon();for(var i=new lc,o=0;o<n.getNumInteriorRing();o++){var s=this.edit(n.getInteriorRingN(o),e);null===s||s.isEmpty()||i.add(s)}return this._factory.createPolygon(r,i.toArray([]))},ih.prototype.interfaces_=function(){return[]},ih.prototype.getClass=function(){return ih},ih.GeometryEditorOperation=function(){},oh.NoOpGeometryOperation.get=function(){return sh},oh.CoordinateOperation.get=function(){return ah},oh.CoordinateSequenceOperation.get=function(){return uh},Object.defineProperties(ih,oh);var sh=function(){};sh.prototype.edit=function(t,e){return t},sh.prototype.interfaces_=function(){return[ih.GeometryEditorOperation]},sh.prototype.getClass=function(){return sh};var ah=function(){};ah.prototype.edit=function(t,e){var n=this.editCoordinates(t.getCoordinates(),t);return null===n?t:t instanceof nh?e.createLinearRing(n):t instanceof Zc?e.createLineString(n):t instanceof Qc?n.length>0?e.createPoint(n[0]):e.createPoint():t},ah.prototype.interfaces_=function(){return[ih.GeometryEditorOperation]},ah.prototype.getClass=function(){return ah};var uh=function(){};uh.prototype.edit=function(t,e){return t instanceof nh?e.createLinearRing(this.edit(t.getCoordinateSequence(),t)):t instanceof Zc?e.createLineString(this.edit(t.getCoordinateSequence(),t)):t instanceof Qc?e.createPoint(this.edit(t.getCoordinateSequence(),t)):t},uh.prototype.interfaces_=function(){return[ih.GeometryEditorOperation]},uh.prototype.getClass=function(){return uh};var lh=function(){var t=this;if(this._dimension=3,this._coordinates=null,1===arguments.length){if(arguments[0]instanceof Array)this._coordinates=arguments[0],this._dimension=3;else if(Number.isInteger(arguments[0])){var e=arguments[0];this._coordinates=new Array(e).fill(null);for(var n=0;n<e;n++)t._coordinates[n]=new ul}else if(gl(arguments[0],Il)){var r=arguments[0];if(null===r)return this._coordinates=new Array(0).fill(null),null;this._dimension=r.getDimension(),this._coordinates=new Array(r.size()).fill(null);for(var i=0;i<this._coordinates.length;i++)t._coordinates[i]=r.getCoordinateCopy(i)}}else if(2===arguments.length)if(arguments[0]instanceof Array&&Number.isInteger(arguments[1])){var o=arguments[0],s=arguments[1];this._coordinates=o,this._dimension=s,null===o&&(this._coordinates=new Array(0).fill(null))}else if(Number.isInteger(arguments[0])&&Number.isInteger(arguments[1])){var a=arguments[0],u=arguments[1];this._coordinates=new Array(a).fill(null),this._dimension=u;for(var l=0;l<a;l++)t._coordinates[l]=new ul}},ch={serialVersionUID:{configurable:!0}};lh.prototype.setOrdinate=function(t,e,n){switch(e){case Il.X:this._coordinates[t].x=n;break;case Il.Y:this._coordinates[t].y=n;break;case Il.Z:this._coordinates[t].z=n;break;default:throw new el("invalid ordinateIndex")}},lh.prototype.size=function(){return this._coordinates.length},lh.prototype.getOrdinate=function(t,e){switch(e){case Il.X:return this._coordinates[t].x;case Il.Y:return this._coordinates[t].y;case Il.Z:return this._coordinates[t].z}return nl.NaN},lh.prototype.getCoordinate=function(){if(1===arguments.length){var t=arguments[0];return this._coordinates[t]}if(2===arguments.length){var e=arguments[0],n=arguments[1];n.x=this._coordinates[e].x,n.y=this._coordinates[e].y,n.z=this._coordinates[e].z}},lh.prototype.getCoordinateCopy=function(t){return new ul(this._coordinates[t])},lh.prototype.getDimension=function(){return this._dimension},lh.prototype.getX=function(t){return this._coordinates[t].x},lh.prototype.clone=function(){for(var t=new Array(this.size()).fill(null),e=0;e<this._coordinates.length;e++)t[e]=this._coordinates[e].clone();return new lh(t,this._dimension)},lh.prototype.expandEnvelope=function(t){for(var e=0;e<this._coordinates.length;e++)t.expandToInclude(this._coordinates[e]);return t},lh.prototype.copy=function(){for(var t=new Array(this.size()).fill(null),e=0;e<this._coordinates.length;e++)t[e]=this._coordinates[e].copy();return new lh(t,this._dimension)},lh.prototype.toString=function(){if(this._coordinates.length>0){var t=new vl(17*this._coordinates.length);t.append("("),t.append(this._coordinates[0]);for(var e=1;e<this._coordinates.length;e++)t.append(", "),t.append(this._coordinates[e]);return t.append(")"),t.toString()}return"()"},lh.prototype.getY=function(t){return this._coordinates[t].y},lh.prototype.toCoordinateArray=function(){return this._coordinates},lh.prototype.interfaces_=function(){return[Il,al]},lh.prototype.getClass=function(){return lh},ch.serialVersionUID.get=function(){return-0xcb44a778db18e00},Object.defineProperties(lh,ch);var hh=function(){},ph={serialVersionUID:{configurable:!0},instanceObject:{configurable:!0}};hh.prototype.readResolve=function(){return hh.instance()},hh.prototype.create=function(){if(1===arguments.length){if(arguments[0]instanceof Array){var t=arguments[0];return new lh(t)}if(gl(arguments[0],Il)){var e=arguments[0];return new lh(e)}}else if(2===arguments.length){var n=arguments[0],r=arguments[1];return r>3&&(r=3),r<2?new lh(n):new lh(n,r)}},hh.prototype.interfaces_=function(){return[hl,al]},hh.prototype.getClass=function(){return hh},hh.instance=function(){return hh.instanceObject},ph.serialVersionUID.get=function(){return-0x38e49fa6cf6f2e00},ph.instanceObject.get=function(){return new hh},Object.defineProperties(hh,ph);var fh=function(t){function e(){t.call(this),this.map_=new Map}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(t){return this.map_.get(t)||null},e.prototype.put=function(t,e){return this.map_.set(t,e),e},e.prototype.values=function(){for(var t=new lc,e=this.map_.values(),n=e.next();!n.done;)t.add(n.value),n=e.next();return t},e.prototype.entrySet=function(){var t=new xc;return this.map_.entries().forEach((function(e){return t.add(e)})),t},e.prototype.size=function(){return this.map_.size()},e}(yc),gh=function t(){if(this._modelType=null,this._scale=null,0===arguments.length)this._modelType=t.FLOATING;else if(1===arguments.length)if(arguments[0]instanceof yh){var e=arguments[0];this._modelType=e,e===t.FIXED&&this.setScale(1)}else if("number"==typeof arguments[0]){var n=arguments[0];this._modelType=t.FIXED,this.setScale(n)}else if(arguments[0]instanceof t){var r=arguments[0];this._modelType=r._modelType,this._scale=r._scale}},dh={serialVersionUID:{configurable:!0},maximumPreciseValue:{configurable:!0}};gh.prototype.equals=function(t){if(!(t instanceof gh))return!1;var e=t;return this._modelType===e._modelType&&this._scale===e._scale},gh.prototype.compareTo=function(t){var e=t,n=this.getMaximumSignificantDigits(),r=e.getMaximumSignificantDigits();return new _l(n).compareTo(new _l(r))},gh.prototype.getScale=function(){return this._scale},gh.prototype.isFloating=function(){return this._modelType===gh.FLOATING||this._modelType===gh.FLOATING_SINGLE},gh.prototype.getType=function(){return this._modelType},gh.prototype.toString=function(){var t="UNKNOWN";return this._modelType===gh.FLOATING?t="Floating":this._modelType===gh.FLOATING_SINGLE?t="Floating-Single":this._modelType===gh.FIXED&&(t="Fixed (Scale="+this.getScale()+")"),t},gh.prototype.makePrecise=function(){if("number"==typeof arguments[0]){var t=arguments[0];if(nl.isNaN(t))return t;if(this._modelType===gh.FLOATING_SINGLE){return t}return this._modelType===gh.FIXED?Math.round(t*this._scale)/this._scale:t}if(arguments[0]instanceof ul){var e=arguments[0];if(this._modelType===gh.FLOATING)return null;e.x=this.makePrecise(e.x),e.y=this.makePrecise(e.y)}},gh.prototype.getMaximumSignificantDigits=function(){var t=16;return this._modelType===gh.FLOATING?t=16:this._modelType===gh.FLOATING_SINGLE?t=6:this._modelType===gh.FIXED&&(t=1+Math.trunc(Math.ceil(Math.log(this.getScale())/Math.log(10)))),t},gh.prototype.setScale=function(t){this._scale=Math.abs(t)},gh.prototype.interfaces_=function(){return[al,il]},gh.prototype.getClass=function(){return gh},gh.mostPrecise=function(t,e){return t.compareTo(e)>=0?t:e},dh.serialVersionUID.get=function(){return 0x6bee6404e9a25c00},dh.maximumPreciseValue.get=function(){return 9007199254740992},Object.defineProperties(gh,dh);var yh=function t(e){this._name=e||null,t.nameToTypeMap.put(e,this)},vh={serialVersionUID:{configurable:!0},nameToTypeMap:{configurable:!0}};yh.prototype.readResolve=function(){return yh.nameToTypeMap.get(this._name)},yh.prototype.toString=function(){return this._name},yh.prototype.interfaces_=function(){return[al]},yh.prototype.getClass=function(){return yh},vh.serialVersionUID.get=function(){return-552860263173159e4},vh.nameToTypeMap.get=function(){return new fh},Object.defineProperties(yh,vh),gh.Type=yh,gh.FIXED=new yh("FIXED"),gh.FLOATING=new yh("FLOATING"),gh.FLOATING_SINGLE=new yh("FLOATING SINGLE");var _h=function t(){this._precisionModel=new gh,this._SRID=0,this._coordinateSequenceFactory=t.getDefaultCoordinateSequenceFactory(),0===arguments.length||(1===arguments.length?gl(arguments[0],hl)?this._coordinateSequenceFactory=arguments[0]:arguments[0]instanceof gh&&(this._precisionModel=arguments[0]):2===arguments.length?(this._precisionModel=arguments[0],this._SRID=arguments[1]):3===arguments.length&&(this._precisionModel=arguments[0],this._SRID=arguments[1],this._coordinateSequenceFactory=arguments[2]))},mh={serialVersionUID:{configurable:!0}};_h.prototype.toGeometry=function(t){return t.isNull()?this.createPoint(null):t.getMinX()===t.getMaxX()&&t.getMinY()===t.getMaxY()?this.createPoint(new ul(t.getMinX(),t.getMinY())):t.getMinX()===t.getMaxX()||t.getMinY()===t.getMaxY()?this.createLineString([new ul(t.getMinX(),t.getMinY()),new ul(t.getMaxX(),t.getMaxY())]):this.createPolygon(this.createLinearRing([new ul(t.getMinX(),t.getMinY()),new ul(t.getMinX(),t.getMaxY()),new ul(t.getMaxX(),t.getMaxY()),new ul(t.getMaxX(),t.getMinY()),new ul(t.getMinX(),t.getMinY())]),null)},_h.prototype.createLineString=function(t){return t?t instanceof Array?new Zc(this.getCoordinateSequenceFactory().create(t),this):gl(t,Il)?new Zc(t,this):void 0:new Zc(this.getCoordinateSequenceFactory().create([]),this)},_h.prototype.createMultiLineString=function(){if(0===arguments.length)return new Gc(null,this);if(1===arguments.length){var t=arguments[0];return new Gc(t,this)}},_h.prototype.buildGeometry=function(t){for(var e=null,n=!1,r=!1,i=t.iterator();i.hasNext();){var o=i.next(),s=o.getClass();null===e&&(e=s),s!==e&&(n=!0),o.isGeometryCollectionOrDerived()&&(r=!0)}if(null===e)return this.createGeometryCollection();if(n||r)return this.createGeometryCollection(_h.toGeometryArray(t));var a=t.iterator().next();if(t.size()>1){if(a instanceof th)return this.createMultiPolygon(_h.toPolygonArray(t));if(a instanceof Zc)return this.createMultiLineString(_h.toLineStringArray(t));if(a instanceof Qc)return this.createMultiPoint(_h.toPointArray(t));ql.shouldNeverReachHere("Unhandled class: "+a.getClass().getName())}return a},_h.prototype.createMultiPointFromCoords=function(t){return this.createMultiPoint(null!==t?this.getCoordinateSequenceFactory().create(t):null)},_h.prototype.createPoint=function(){if(0===arguments.length)return this.createPoint(this.getCoordinateSequenceFactory().create([]));if(1===arguments.length){if(arguments[0]instanceof ul){var t=arguments[0];return this.createPoint(null!==t?this.getCoordinateSequenceFactory().create([t]):null)}if(gl(arguments[0],Il)){var e=arguments[0];return new Qc(e,this)}}},_h.prototype.getCoordinateSequenceFactory=function(){return this._coordinateSequenceFactory},_h.prototype.createPolygon=function(){if(0===arguments.length)return new th(null,null,this);if(1===arguments.length){if(gl(arguments[0],Il)){var t=arguments[0];return this.createPolygon(this.createLinearRing(t))}if(arguments[0]instanceof Array){var e=arguments[0];return this.createPolygon(this.createLinearRing(e))}if(arguments[0]instanceof nh){var n=arguments[0];return this.createPolygon(n,null)}}else if(2===arguments.length){var r=arguments[0],i=arguments[1];return new th(r,i,this)}},_h.prototype.getSRID=function(){return this._SRID},_h.prototype.createGeometryCollection=function(){if(0===arguments.length)return new kc(null,this);if(1===arguments.length){var t=arguments[0];return new kc(t,this)}},_h.prototype.createGeometry=function(t){return new ih(this).edit(t,{edit:function(){if(2===arguments.length){var t=arguments[0];return this._coordinateSequenceFactory.create(t)}}})},_h.prototype.getPrecisionModel=function(){return this._precisionModel},_h.prototype.createLinearRing=function(){if(0===arguments.length)return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));if(1===arguments.length){if(arguments[0]instanceof Array){var t=arguments[0];return this.createLinearRing(null!==t?this.getCoordinateSequenceFactory().create(t):null)}if(gl(arguments[0],Il)){var e=arguments[0];return new nh(e,this)}}},_h.prototype.createMultiPolygon=function(){if(0===arguments.length)return new rh(null,this);if(1===arguments.length){var t=arguments[0];return new rh(t,this)}},_h.prototype.createMultiPoint=function(){var t=this;if(0===arguments.length)return new eh(null,this);if(1===arguments.length){if(arguments[0]instanceof Array){var e=arguments[0];return new eh(e,this)}if(arguments[0]instanceof Array){var n=arguments[0];return this.createMultiPoint(null!==n?this.getCoordinateSequenceFactory().create(n):null)}if(gl(arguments[0],Il)){var r=arguments[0];if(null===r)return this.createMultiPoint(new Array(0).fill(null));for(var i=new Array(r.size()).fill(null),o=0;o<r.size();o++){var s=t.getCoordinateSequenceFactory().create(1,r.getDimension());Jc.copy(r,o,s,0,1),i[o]=t.createPoint(s)}return this.createMultiPoint(i)}}},_h.prototype.interfaces_=function(){return[al]},_h.prototype.getClass=function(){return _h},_h.toMultiPolygonArray=function(t){var e=new Array(t.size()).fill(null);return t.toArray(e)},_h.toGeometryArray=function(t){if(null===t)return null;var e=new Array(t.size()).fill(null);return t.toArray(e)},_h.getDefaultCoordinateSequenceFactory=function(){return hh.instance()},_h.toMultiLineStringArray=function(t){var e=new Array(t.size()).fill(null);return t.toArray(e)},_h.toLineStringArray=function(t){var e=new Array(t.size()).fill(null);return t.toArray(e)},_h.toMultiPointArray=function(t){var e=new Array(t.size()).fill(null);return t.toArray(e)},_h.toLinearRingArray=function(t){var e=new Array(t.size()).fill(null);return t.toArray(e)},_h.toPointArray=function(t){var e=new Array(t.size()).fill(null);return t.toArray(e)},_h.toPolygonArray=function(t){var e=new Array(t.size()).fill(null);return t.toArray(e)},_h.createPointFromInternalCoord=function(t,e){return e.getPrecisionModel().makePrecise(t),e.getFactory().createPoint(t)},mh.serialVersionUID.get=function(){return-0x5ea75f2051eeb400},Object.defineProperties(_h,mh);var xh=["Point","MultiPoint","LineString","MultiLineString","Polygon","MultiPolygon"],Eh=function(t){this.geometryFactory=t||new _h};Eh.prototype.read=function(t){var e,n=(e="string"==typeof t?JSON.parse(t):t).type;if(!bh[n])throw new Error("Unknown GeoJSON type: "+e.type);return-1!==xh.indexOf(n)?bh[n].apply(this,[e.coordinates]):"GeometryCollection"===n?bh[n].apply(this,[e.geometries]):bh[n].apply(this,[e])},Eh.prototype.write=function(t){var e=t.getGeometryType();if(!wh[e])throw new Error("Geometry is not supported");return wh[e].apply(this,[t])};var bh={Feature:function(t){var e={};for(var n in t)e[n]=t[n];if(t.geometry){var r=t.geometry.type;if(!bh[r])throw new Error("Unknown GeoJSON type: "+t.type);e.geometry=this.read(t.geometry)}return t.bbox&&(e.bbox=bh.bbox.apply(this,[t.bbox])),e},FeatureCollection:function(t){var e={};if(t.features){e.features=[];for(var n=0;n<t.features.length;++n)e.features.push(this.read(t.features[n]))}return t.bbox&&(e.bbox=this.parse.bbox.apply(this,[t.bbox])),e},coordinates:function(t){for(var e=[],n=0;n<t.length;++n){var r=t[n];e.push(new ul(r[0],r[1]))}return e},bbox:function(t){return this.geometryFactory.createLinearRing([new ul(t[0],t[1]),new ul(t[2],t[1]),new ul(t[2],t[3]),new ul(t[0],t[3]),new ul(t[0],t[1])])},Point:function(t){var e=new ul(t[0],t[1]);return this.geometryFactory.createPoint(e)},MultiPoint:function(t){for(var e=[],n=0;n<t.length;++n)e.push(bh.Point.apply(this,[t[n]]));return this.geometryFactory.createMultiPoint(e)},LineString:function(t){var e=bh.coordinates.apply(this,[t]);return this.geometryFactory.createLineString(e)},MultiLineString:function(t){for(var e=[],n=0;n<t.length;++n)e.push(bh.LineString.apply(this,[t[n]]));return this.geometryFactory.createMultiLineString(e)},Polygon:function(t){for(var e=bh.coordinates.apply(this,[t[0]]),n=this.geometryFactory.createLinearRing(e),r=[],i=1;i<t.length;++i){var o=t[i],s=bh.coordinates.apply(this,[o]),a=this.geometryFactory.createLinearRing(s);r.push(a)}return this.geometryFactory.createPolygon(n,r)},MultiPolygon:function(t){for(var e=[],n=0;n<t.length;++n){var r=t[n];e.push(bh.Polygon.apply(this,[r]))}return this.geometryFactory.createMultiPolygon(e)},GeometryCollection:function(t){for(var e=[],n=0;n<t.length;++n){var r=t[n];e.push(this.read(r))}return this.geometryFactory.createGeometryCollection(e)}},wh={coordinate:function(t){return[t.x,t.y]},Point:function(t){return{type:"Point",coordinates:wh.coordinate.apply(this,[t.getCoordinate()])}},MultiPoint:function(t){for(var e=[],n=0;n<t._geometries.length;++n){var r=t._geometries[n],i=wh.Point.apply(this,[r]);e.push(i.coordinates)}return{type:"MultiPoint",coordinates:e}},LineString:function(t){for(var e=[],n=t.getCoordinates(),r=0;r<n.length;++r){var i=n[r];e.push(wh.coordinate.apply(this,[i]))}return{type:"LineString",coordinates:e}},MultiLineString:function(t){for(var e=[],n=0;n<t._geometries.length;++n){var r=t._geometries[n],i=wh.LineString.apply(this,[r]);e.push(i.coordinates)}return{type:"MultiLineString",coordinates:e}},Polygon:function(t){var e=[],n=wh.LineString.apply(this,[t._shell]);e.push(n.coordinates);for(var r=0;r<t._holes.length;++r){var i=t._holes[r],o=wh.LineString.apply(this,[i]);e.push(o.coordinates)}return{type:"Polygon",coordinates:e}},MultiPolygon:function(t){for(var e=[],n=0;n<t._geometries.length;++n){var r=t._geometries[n],i=wh.Polygon.apply(this,[r]);e.push(i.coordinates)}return{type:"MultiPolygon",coordinates:e}},GeometryCollection:function(t){for(var e=[],n=0;n<t._geometries.length;++n){var r=t._geometries[n],i=r.getGeometryType();e.push(wh[i].apply(this,[r]))}return{type:"GeometryCollection",geometries:e}}},Ih=function(t){this.geometryFactory=t||new _h,this.precisionModel=this.geometryFactory.getPrecisionModel(),this.parser=new Eh(this.geometryFactory)};Ih.prototype.read=function(t){var e=this.parser.read(t);return this.precisionModel.getType()===gh.FIXED&&this.reducePrecision(e),e},Ih.prototype.reducePrecision=function(t){var e,n;if(t.coordinate)this.precisionModel.makePrecise(t.coordinate);else if(t.points)for(e=0,n=t.points.length;e<n;e++)this.precisionModel.makePrecise(t.points[e]);else if(t.geometries)for(e=0,n=t.geometries.length;e<n;e++)this.reducePrecision(t.geometries[e])};var Nh=function(){this.parser=new Eh(this.geometryFactory)};Nh.prototype.write=function(t){return this.parser.write(t)};var Sh=function(){},Ch={ON:{configurable:!0},LEFT:{configurable:!0},RIGHT:{configurable:!0}};function Ph(t){this.message=t||""}function Mh(){this.array_=[]}Sh.prototype.interfaces_=function(){return[]},Sh.prototype.getClass=function(){return Sh},Sh.opposite=function(t){return t===Sh.LEFT?Sh.RIGHT:t===Sh.RIGHT?Sh.LEFT:t},Ch.ON.get=function(){return 0},Ch.LEFT.get=function(){return 1},Ch.RIGHT.get=function(){return 2},Object.defineProperties(Sh,Ch),Ph.prototype=new Error,Ph.prototype.name="EmptyStackException",Mh.prototype=new ac,Mh.prototype.add=function(t){return this.array_.push(t),!0},Mh.prototype.get=function(t){if(t<0||t>=this.size())throw new Error;return this.array_[t]},Mh.prototype.push=function(t){return this.array_.push(t),t},Mh.prototype.pop=function(t){if(0===this.array_.length)throw new Ph;return this.array_.pop()},Mh.prototype.peek=function(){if(0===this.array_.length)throw new Ph;return this.array_[this.array_.length-1]},Mh.prototype.empty=function(){return 0===this.array_.length},Mh.prototype.isEmpty=function(){return this.empty()},Mh.prototype.search=function(t){return this.array_.indexOf(t)},Mh.prototype.size=function(){return this.array_.length},Mh.prototype.toArray=function(){for(var t=[],e=0,n=this.array_.length;e<n;e++)t.push(this.array_[e]);return t};var Lh=function(){this._minIndex=-1,this._minCoord=null,this._minDe=null,this._orientedDe=null};Lh.prototype.getCoordinate=function(){return this._minCoord},Lh.prototype.getRightmostSide=function(t,e){var n=this.getRightmostSideOfSegment(t,e);return n<0&&(n=this.getRightmostSideOfSegment(t,e-1)),n<0&&(this._minCoord=null,this.checkForRightmostCoordinate(t)),n},Lh.prototype.findRightmostEdgeAtVertex=function(){var t=this._minDe.getEdge().getCoordinates();ql.isTrue(this._minIndex>0&&this._minIndex<t.length,"rightmost point expected to be interior vertex of edge");var e=t[this._minIndex-1],n=t[this._minIndex+1],r=Xl.computeOrientation(this._minCoord,n,e),i=!1;(e.y<this._minCoord.y&&n.y<this._minCoord.y&&r===Xl.COUNTERCLOCKWISE||e.y>this._minCoord.y&&n.y>this._minCoord.y&&r===Xl.CLOCKWISE)&&(i=!0),i&&(this._minIndex=this._minIndex-1)},Lh.prototype.getRightmostSideOfSegment=function(t,e){var n=t.getEdge().getCoordinates();if(e<0||e+1>=n.length)return-1;if(n[e].y===n[e+1].y)return-1;var r=Sh.LEFT;return n[e].y<n[e+1].y&&(r=Sh.RIGHT),r},Lh.prototype.getEdge=function(){return this._orientedDe},Lh.prototype.checkForRightmostCoordinate=function(t){for(var e=this,n=t.getEdge().getCoordinates(),r=0;r<n.length-1;r++)(null===e._minCoord||n[r].x>e._minCoord.x)&&(e._minDe=t,e._minIndex=r,e._minCoord=n[r])},Lh.prototype.findRightmostEdgeAtNode=function(){var t=this._minDe.getNode().getEdges();this._minDe=t.getRightmostEdge(),this._minDe.isForward()||(this._minDe=this._minDe.getSym(),this._minIndex=this._minDe.getEdge().getCoordinates().length-1)},Lh.prototype.findEdge=function(t){for(var e=t.iterator();e.hasNext();){var n=e.next();n.isForward()&&this.checkForRightmostCoordinate(n)}ql.isTrue(0!==this._minIndex||this._minCoord.equals(this._minDe.getCoordinate()),"inconsistency in rightmost processing"),0===this._minIndex?this.findRightmostEdgeAtNode():this.findRightmostEdgeAtVertex(),this._orientedDe=this._minDe,this.getRightmostSide(this._minDe,this._minIndex)===Sh.LEFT&&(this._orientedDe=this._minDe.getSym())},Lh.prototype.interfaces_=function(){return[]},Lh.prototype.getClass=function(){return Lh};var Oh=function(t){function e(n,r){t.call(this,e.msgWithCoord(n,r)),this.pt=r?new ul(r):null,this.name="TopologyException"}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getCoordinate=function(){return this.pt},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e.msgWithCoord=function(t,e){return e?t:t+" [ "+e+" ]"},e}(kl),Rh=function(){this.array_=[]};Rh.prototype.addLast=function(t){this.array_.push(t)},Rh.prototype.removeFirst=function(){return this.array_.shift()},Rh.prototype.isEmpty=function(){return 0===this.array_.length};var Th=function(){this._finder=null,this._dirEdgeList=new lc,this._nodes=new lc,this._rightMostCoord=null,this._env=null,this._finder=new Lh};Th.prototype.clearVisitedEdges=function(){for(var t=this._dirEdgeList.iterator();t.hasNext();){t.next().setVisited(!1)}},Th.prototype.getRightmostCoordinate=function(){return this._rightMostCoord},Th.prototype.computeNodeDepth=function(t){for(var e=null,n=t.getEdges().iterator();n.hasNext();){var r=n.next();if(r.isVisited()||r.getSym().isVisited()){e=r;break}}if(null===e)throw new Oh("unable to find edge to compute depths at "+t.getCoordinate());t.getEdges().computeDepths(e);for(var i=t.getEdges().iterator();i.hasNext();){var o=i.next();o.setVisited(!0),this.copySymDepths(o)}},Th.prototype.computeDepth=function(t){this.clearVisitedEdges();var e=this._finder.getEdge();e.setEdgeDepths(Sh.RIGHT,t),this.copySymDepths(e),this.computeDepths(e)},Th.prototype.create=function(t){this.addReachable(t),this._finder.findEdge(this._dirEdgeList),this._rightMostCoord=this._finder.getCoordinate()},Th.prototype.findResultEdges=function(){for(var t=this._dirEdgeList.iterator();t.hasNext();){var e=t.next();e.getDepth(Sh.RIGHT)>=1&&e.getDepth(Sh.LEFT)<=0&&!e.isInteriorAreaEdge()&&e.setInResult(!0)}},Th.prototype.computeDepths=function(t){var e=new xc,n=new Rh,r=t.getNode();for(n.addLast(r),e.add(r),t.setVisited(!0);!n.isEmpty();){var i=n.removeFirst();e.add(i),this.computeNodeDepth(i);for(var o=i.getEdges().iterator();o.hasNext();){var s=o.next().getSym();if(!s.isVisited()){var a=s.getNode();e.contains(a)||(n.addLast(a),e.add(a))}}}},Th.prototype.compareTo=function(t){var e=t;return this._rightMostCoord.x<e._rightMostCoord.x?-1:this._rightMostCoord.x>e._rightMostCoord.x?1:0},Th.prototype.getEnvelope=function(){if(null===this._env){for(var t=new Ll,e=this._dirEdgeList.iterator();e.hasNext();)for(var n=e.next().getEdge().getCoordinates(),r=0;r<n.length-1;r++)t.expandToInclude(n[r]);this._env=t}return this._env},Th.prototype.addReachable=function(t){var e=new Mh;for(e.add(t);!e.empty();){var n=e.pop();this.add(n,e)}},Th.prototype.copySymDepths=function(t){var e=t.getSym();e.setDepth(Sh.LEFT,t.getDepth(Sh.RIGHT)),e.setDepth(Sh.RIGHT,t.getDepth(Sh.LEFT))},Th.prototype.add=function(t,e){t.setVisited(!0),this._nodes.add(t);for(var n=t.getEdges().iterator();n.hasNext();){var r=n.next();this._dirEdgeList.add(r);var i=r.getSym().getNode();i.isVisited()||e.push(i)}},Th.prototype.getNodes=function(){return this._nodes},Th.prototype.getDirectedEdges=function(){return this._dirEdgeList},Th.prototype.interfaces_=function(){return[il]},Th.prototype.getClass=function(){return Th};var Ah=function t(){var e=this;if(this.location=null,1===arguments.length){if(arguments[0]instanceof Array){var n=arguments[0];this.init(n.length)}else if(Number.isInteger(arguments[0])){var r=arguments[0];this.init(1),this.location[Sh.ON]=r}else if(arguments[0]instanceof t){var i=arguments[0];if(this.init(i.location.length),null!==i)for(var o=0;o<this.location.length;o++)e.location[o]=i.location[o]}}else if(3===arguments.length){var s=arguments[0],a=arguments[1],u=arguments[2];this.init(3),this.location[Sh.ON]=s,this.location[Sh.LEFT]=a,this.location[Sh.RIGHT]=u}};Ah.prototype.setAllLocations=function(t){for(var e=0;e<this.location.length;e++)this.location[e]=t},Ah.prototype.isNull=function(){for(var t=0;t<this.location.length;t++)if(this.location[t]!==pl.NONE)return!1;return!0},Ah.prototype.setAllLocationsIfNull=function(t){for(var e=0;e<this.location.length;e++)this.location[e]===pl.NONE&&(this.location[e]=t)},Ah.prototype.isLine=function(){return 1===this.location.length},Ah.prototype.merge=function(t){if(t.location.length>this.location.length){var e=new Array(3).fill(null);e[Sh.ON]=this.location[Sh.ON],e[Sh.LEFT]=pl.NONE,e[Sh.RIGHT]=pl.NONE,this.location=e}for(var n=0;n<this.location.length;n++)this.location[n]===pl.NONE&&n<t.location.length&&(this.location[n]=t.location[n])},Ah.prototype.getLocations=function(){return this.location},Ah.prototype.flip=function(){if(this.location.length<=1)return null;var t=this.location[Sh.LEFT];this.location[Sh.LEFT]=this.location[Sh.RIGHT],this.location[Sh.RIGHT]=t},Ah.prototype.toString=function(){var t=new vl;return this.location.length>1&&t.append(pl.toLocationSymbol(this.location[Sh.LEFT])),t.append(pl.toLocationSymbol(this.location[Sh.ON])),this.location.length>1&&t.append(pl.toLocationSymbol(this.location[Sh.RIGHT])),t.toString()},Ah.prototype.setLocations=function(t,e,n){this.location[Sh.ON]=t,this.location[Sh.LEFT]=e,this.location[Sh.RIGHT]=n},Ah.prototype.get=function(t){return t<this.location.length?this.location[t]:pl.NONE},Ah.prototype.isArea=function(){return this.location.length>1},Ah.prototype.isAnyNull=function(){for(var t=0;t<this.location.length;t++)if(this.location[t]===pl.NONE)return!0;return!1},Ah.prototype.setLocation=function(){if(1===arguments.length){var t=arguments[0];this.setLocation(Sh.ON,t)}else if(2===arguments.length){var e=arguments[0],n=arguments[1];this.location[e]=n}},Ah.prototype.init=function(t){this.location=new Array(t).fill(null),this.setAllLocations(pl.NONE)},Ah.prototype.isEqualOnSide=function(t,e){return this.location[e]===t.location[e]},Ah.prototype.allPositionsEqual=function(t){for(var e=0;e<this.location.length;e++)if(this.location[e]!==t)return!1;return!0},Ah.prototype.interfaces_=function(){return[]},Ah.prototype.getClass=function(){return Ah};var Dh=function t(){if(this.elt=new Array(2).fill(null),1===arguments.length){if(Number.isInteger(arguments[0])){var e=arguments[0];this.elt[0]=new Ah(e),this.elt[1]=new Ah(e)}else if(arguments[0]instanceof t){var n=arguments[0];this.elt[0]=new Ah(n.elt[0]),this.elt[1]=new Ah(n.elt[1])}}else if(2===arguments.length){var r=arguments[0],i=arguments[1];this.elt[0]=new Ah(pl.NONE),this.elt[1]=new Ah(pl.NONE),this.elt[r].setLocation(i)}else if(3===arguments.length){var o=arguments[0],s=arguments[1],a=arguments[2];this.elt[0]=new Ah(o,s,a),this.elt[1]=new Ah(o,s,a)}else if(4===arguments.length){var u=arguments[0],l=arguments[1],c=arguments[2],h=arguments[3];this.elt[0]=new Ah(pl.NONE,pl.NONE,pl.NONE),this.elt[1]=new Ah(pl.NONE,pl.NONE,pl.NONE),this.elt[u].setLocations(l,c,h)}};Dh.prototype.getGeometryCount=function(){var t=0;return this.elt[0].isNull()||t++,this.elt[1].isNull()||t++,t},Dh.prototype.setAllLocations=function(t,e){this.elt[t].setAllLocations(e)},Dh.prototype.isNull=function(t){return this.elt[t].isNull()},Dh.prototype.setAllLocationsIfNull=function(){if(1===arguments.length){var t=arguments[0];this.setAllLocationsIfNull(0,t),this.setAllLocationsIfNull(1,t)}else if(2===arguments.length){var e=arguments[0],n=arguments[1];this.elt[e].setAllLocationsIfNull(n)}},Dh.prototype.isLine=function(t){return this.elt[t].isLine()},Dh.prototype.merge=function(t){for(var e=this,n=0;n<2;n++)null===e.elt[n]&&null!==t.elt[n]?e.elt[n]=new Ah(t.elt[n]):e.elt[n].merge(t.elt[n])},Dh.prototype.flip=function(){this.elt[0].flip(),this.elt[1].flip()},Dh.prototype.getLocation=function(){if(1===arguments.length){var t=arguments[0];return this.elt[t].get(Sh.ON)}if(2===arguments.length){var e=arguments[0],n=arguments[1];return this.elt[e].get(n)}},Dh.prototype.toString=function(){var t=new vl;return null!==this.elt[0]&&(t.append("A:"),t.append(this.elt[0].toString())),null!==this.elt[1]&&(t.append(" B:"),t.append(this.elt[1].toString())),t.toString()},Dh.prototype.isArea=function(){if(0===arguments.length)return this.elt[0].isArea()||this.elt[1].isArea();if(1===arguments.length){var t=arguments[0];return this.elt[t].isArea()}},Dh.prototype.isAnyNull=function(t){return this.elt[t].isAnyNull()},Dh.prototype.setLocation=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1];this.elt[t].setLocation(Sh.ON,e)}else if(3===arguments.length){var n=arguments[0],r=arguments[1],i=arguments[2];this.elt[n].setLocation(r,i)}},Dh.prototype.isEqualOnSide=function(t,e){return this.elt[0].isEqualOnSide(t.elt[0],e)&&this.elt[1].isEqualOnSide(t.elt[1],e)},Dh.prototype.allPositionsEqual=function(t,e){return this.elt[t].allPositionsEqual(e)},Dh.prototype.toLine=function(t){this.elt[t].isArea()&&(this.elt[t]=new Ah(this.elt[t].location[0]))},Dh.prototype.interfaces_=function(){return[]},Dh.prototype.getClass=function(){return Dh},Dh.toLineLabel=function(t){for(var e=new Dh(pl.NONE),n=0;n<2;n++)e.setLocation(n,t.getLocation(n));return e};var Fh=function(){this._startDe=null,this._maxNodeDegree=-1,this._edges=new lc,this._pts=new lc,this._label=new Dh(pl.NONE),this._ring=null,this._isHole=null,this._shell=null,this._holes=new lc,this._geometryFactory=null;var t=arguments[0],e=arguments[1];this._geometryFactory=e,this.computePoints(t),this.computeRing()};Fh.prototype.computeRing=function(){if(null!==this._ring)return null;for(var t=new Array(this._pts.size()).fill(null),e=0;e<this._pts.size();e++)t[e]=this._pts.get(e);this._ring=this._geometryFactory.createLinearRing(t),this._isHole=Xl.isCCW(this._ring.getCoordinates())},Fh.prototype.isIsolated=function(){return 1===this._label.getGeometryCount()},Fh.prototype.computePoints=function(t){var e=this;this._startDe=t;var n=t,r=!0;do{if(null===n)throw new Oh("Found null DirectedEdge");if(n.getEdgeRing()===e)throw new Oh("Directed Edge visited twice during ring-building at "+n.getCoordinate());e._edges.add(n);var i=n.getLabel();ql.isTrue(i.isArea()),e.mergeLabel(i),e.addPoints(n.getEdge(),n.isForward(),r),r=!1,e.setEdgeRing(n,e),n=e.getNext(n)}while(n!==this._startDe)},Fh.prototype.getLinearRing=function(){return this._ring},Fh.prototype.getCoordinate=function(t){return this._pts.get(t)},Fh.prototype.computeMaxNodeDegree=function(){var t=this;this._maxNodeDegree=0;var e=this._startDe;do{var n=e.getNode().getEdges().getOutgoingDegree(t);n>t._maxNodeDegree&&(t._maxNodeDegree=n),e=t.getNext(e)}while(e!==this._startDe);this._maxNodeDegree*=2},Fh.prototype.addPoints=function(t,e,n){var r=t.getCoordinates();if(e){var i=1;n&&(i=0);for(var o=i;o<r.length;o++)this._pts.add(r[o])}else{var s=r.length-2;n&&(s=r.length-1);for(var a=s;a>=0;a--)this._pts.add(r[a])}},Fh.prototype.isHole=function(){return this._isHole},Fh.prototype.setInResult=function(){var t=this._startDe;do{t.getEdge().setInResult(!0),t=t.getNext()}while(t!==this._startDe)},Fh.prototype.containsPoint=function(t){var e=this.getLinearRing();if(!e.getEnvelopeInternal().contains(t))return!1;if(!Xl.isPointInRing(t,e.getCoordinates()))return!1;for(var n=this._holes.iterator();n.hasNext();){if(n.next().containsPoint(t))return!1}return!0},Fh.prototype.addHole=function(t){this._holes.add(t)},Fh.prototype.isShell=function(){return null===this._shell},Fh.prototype.getLabel=function(){return this._label},Fh.prototype.getEdges=function(){return this._edges},Fh.prototype.getMaxNodeDegree=function(){return this._maxNodeDegree<0&&this.computeMaxNodeDegree(),this._maxNodeDegree},Fh.prototype.getShell=function(){return this._shell},Fh.prototype.mergeLabel=function(){if(1===arguments.length){var t=arguments[0];this.mergeLabel(t,0),this.mergeLabel(t,1)}else if(2===arguments.length){var e=arguments[0],n=arguments[1],r=e.getLocation(n,Sh.RIGHT);if(r===pl.NONE)return null;if(this._label.getLocation(n)===pl.NONE)return this._label.setLocation(n,r),null}},Fh.prototype.setShell=function(t){this._shell=t,null!==t&&t.addHole(this)},Fh.prototype.toPolygon=function(t){for(var e=new Array(this._holes.size()).fill(null),n=0;n<this._holes.size();n++)e[n]=this._holes.get(n).getLinearRing();return t.createPolygon(this.getLinearRing(),e)},Fh.prototype.interfaces_=function(){return[]},Fh.prototype.getClass=function(){return Fh};var kh=function(t){function e(){var e=arguments[0],n=arguments[1];t.call(this,e,n)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setEdgeRing=function(t,e){t.setMinEdgeRing(e)},e.prototype.getNext=function(t){return t.getNextMin()},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(Fh),Gh=function(t){function e(){var e=arguments[0],n=arguments[1];t.call(this,e,n)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.buildMinimalRings=function(){var t=new lc,e=this._startDe;do{if(null===e.getMinEdgeRing()){var n=new kh(e,this._geometryFactory);t.add(n)}e=e.getNext()}while(e!==this._startDe);return t},e.prototype.setEdgeRing=function(t,e){t.setEdgeRing(e)},e.prototype.linkDirectedEdgesForMinimalEdgeRings=function(){var t=this._startDe;do{t.getNode().getEdges().linkMinimalDirectedEdges(this),t=t.getNext()}while(t!==this._startDe)},e.prototype.getNext=function(t){return t.getNext()},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(Fh),qh=function(){if(this._label=null,this._isInResult=!1,this._isCovered=!1,this._isCoveredSet=!1,this._isVisited=!1,0===arguments.length);else if(1===arguments.length){var t=arguments[0];this._label=t}};qh.prototype.setVisited=function(t){this._isVisited=t},qh.prototype.setInResult=function(t){this._isInResult=t},qh.prototype.isCovered=function(){return this._isCovered},qh.prototype.isCoveredSet=function(){return this._isCoveredSet},qh.prototype.setLabel=function(t){this._label=t},qh.prototype.getLabel=function(){return this._label},qh.prototype.setCovered=function(t){this._isCovered=t,this._isCoveredSet=!0},qh.prototype.updateIM=function(t){ql.isTrue(this._label.getGeometryCount()>=2,"found partial label"),this.computeIM(t)},qh.prototype.isInResult=function(){return this._isInResult},qh.prototype.isVisited=function(){return this._isVisited},qh.prototype.interfaces_=function(){return[]},qh.prototype.getClass=function(){return qh};var Bh=function(t){function e(){t.call(this),this._coord=null,this._edges=null;var e=arguments[0],n=arguments[1];this._coord=e,this._edges=n,this._label=new Dh(0,pl.NONE)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.isIncidentEdgeInResult=function(){for(var t=this.getEdges().getEdges().iterator();t.hasNext();){if(t.next().getEdge().isInResult())return!0}return!1},e.prototype.isIsolated=function(){return 1===this._label.getGeometryCount()},e.prototype.getCoordinate=function(){return this._coord},e.prototype.print=function(t){t.println("node "+this._coord+" lbl: "+this._label)},e.prototype.computeIM=function(t){},e.prototype.computeMergedLocation=function(t,e){var n=pl.NONE;if(n=this._label.getLocation(e),!t.isNull(e)){var r=t.getLocation(e);n!==pl.BOUNDARY&&(n=r)}return n},e.prototype.setLabel=function(){if(2!==arguments.length)return t.prototype.setLabel.apply(this,arguments);var e=arguments[0],n=arguments[1];null===this._label?this._label=new Dh(e,n):this._label.setLocation(e,n)},e.prototype.getEdges=function(){return this._edges},e.prototype.mergeLabel=function(){var t=this;if(arguments[0]instanceof e){var n=arguments[0];this.mergeLabel(n._label)}else if(arguments[0]instanceof Dh)for(var r=arguments[0],i=0;i<2;i++){var o=t.computeMergedLocation(r,i),s=t._label.getLocation(i);s===pl.NONE&&t._label.setLocation(i,o)}},e.prototype.add=function(t){this._edges.insert(t),t.setNode(this)},e.prototype.setLabelBoundary=function(t){if(null===this._label)return null;var e=pl.NONE;null!==this._label&&(e=this._label.getLocation(t));var n=null;switch(e){case pl.BOUNDARY:n=pl.INTERIOR;break;case pl.INTERIOR:default:n=pl.BOUNDARY}this._label.setLocation(t,n)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(qh),zh=function(){this.nodeMap=new Cc,this.nodeFact=null;var t=arguments[0];this.nodeFact=t};zh.prototype.find=function(t){return this.nodeMap.get(t)},zh.prototype.addNode=function(){if(arguments[0]instanceof ul){var t=arguments[0],e=this.nodeMap.get(t);return null===e&&(e=this.nodeFact.createNode(t),this.nodeMap.put(t,e)),e}if(arguments[0]instanceof Bh){var n=arguments[0],r=this.nodeMap.get(n.getCoordinate());return null===r?(this.nodeMap.put(n.getCoordinate(),n),n):(r.mergeLabel(n),r)}},zh.prototype.print=function(t){for(var e=this.iterator();e.hasNext();){e.next().print(t)}},zh.prototype.iterator=function(){return this.nodeMap.values().iterator()},zh.prototype.values=function(){return this.nodeMap.values()},zh.prototype.getBoundaryNodes=function(t){for(var e=new lc,n=this.iterator();n.hasNext();){var r=n.next();r.getLabel().getLocation(t)===pl.BOUNDARY&&e.add(r)}return e},zh.prototype.add=function(t){var e=t.getCoordinate();this.addNode(e).add(t)},zh.prototype.interfaces_=function(){return[]},zh.prototype.getClass=function(){return zh};var jh=function(){},Uh={NE:{configurable:!0},NW:{configurable:!0},SW:{configurable:!0},SE:{configurable:!0}};jh.prototype.interfaces_=function(){return[]},jh.prototype.getClass=function(){return jh},jh.isNorthern=function(t){return t===jh.NE||t===jh.NW},jh.isOpposite=function(t,e){return t!==e&&2===(t-e+4)%4},jh.commonHalfPlane=function(t,e){if(t===e)return t;if(2===(t-e+4)%4)return-1;var n=t<e?t:e;return 0===n&&3===(t>e?t:e)?3:n},jh.isInHalfPlane=function(t,e){return e===jh.SE?t===jh.SE||t===jh.SW:t===e||t===e+1},jh.quadrant=function(){if("number"==typeof arguments[0]&&"number"==typeof arguments[1]){var t=arguments[0],e=arguments[1];if(0===t&&0===e)throw new el("Cannot compute the quadrant for point ( "+t+", "+e+" )");return t>=0?e>=0?jh.NE:jh.SE:e>=0?jh.NW:jh.SW}if(arguments[0]instanceof ul&&arguments[1]instanceof ul){var n=arguments[0],r=arguments[1];if(r.x===n.x&&r.y===n.y)throw new el("Cannot compute the quadrant for two identical points "+n);return r.x>=n.x?r.y>=n.y?jh.NE:jh.SE:r.y>=n.y?jh.NW:jh.SW}},Uh.NE.get=function(){return 0},Uh.NW.get=function(){return 1},Uh.SW.get=function(){return 2},Uh.SE.get=function(){return 3},Object.defineProperties(jh,Uh);var Vh=function(){if(this._edge=null,this._label=null,this._node=null,this._p0=null,this._p1=null,this._dx=null,this._dy=null,this._quadrant=null,1===arguments.length){var t=arguments[0];this._edge=t}else if(3===arguments.length){var e=arguments[0],n=arguments[1],r=arguments[2],i=null;this._edge=e,this.init(n,r),this._label=i}else if(4===arguments.length){var o=arguments[0],s=arguments[1],a=arguments[2],u=arguments[3];this._edge=o,this.init(s,a),this._label=u}};Vh.prototype.compareDirection=function(t){return this._dx===t._dx&&this._dy===t._dy?0:this._quadrant>t._quadrant?1:this._quadrant<t._quadrant?-1:Xl.computeOrientation(t._p0,t._p1,this._p1)},Vh.prototype.getDy=function(){return this._dy},Vh.prototype.getCoordinate=function(){return this._p0},Vh.prototype.setNode=function(t){this._node=t},Vh.prototype.print=function(t){var e=Math.atan2(this._dy,this._dx),n=this.getClass().getName(),r=n.lastIndexOf("."),i=n.substring(r+1);t.print("  "+i+": "+this._p0+" - "+this._p1+" "+this._quadrant+":"+e+"   "+this._label)},Vh.prototype.compareTo=function(t){var e=t;return this.compareDirection(e)},Vh.prototype.getDirectedCoordinate=function(){return this._p1},Vh.prototype.getDx=function(){return this._dx},Vh.prototype.getLabel=function(){return this._label},Vh.prototype.getEdge=function(){return this._edge},Vh.prototype.getQuadrant=function(){return this._quadrant},Vh.prototype.getNode=function(){return this._node},Vh.prototype.toString=function(){var t=Math.atan2(this._dy,this._dx),e=this.getClass().getName(),n=e.lastIndexOf(".");return"  "+e.substring(n+1)+": "+this._p0+" - "+this._p1+" "+this._quadrant+":"+t+"   "+this._label},Vh.prototype.computeLabel=function(t){},Vh.prototype.init=function(t,e){this._p0=t,this._p1=e,this._dx=e.x-t.x,this._dy=e.y-t.y,this._quadrant=jh.quadrant(this._dx,this._dy),ql.isTrue(!(0===this._dx&&0===this._dy),"EdgeEnd with identical endpoints found")},Vh.prototype.interfaces_=function(){return[il]},Vh.prototype.getClass=function(){return Vh};var Xh=function(t){function e(){var e=arguments[0],n=arguments[1];if(t.call(this,e),this._isForward=null,this._isInResult=!1,this._isVisited=!1,this._sym=null,this._next=null,this._nextMin=null,this._edgeRing=null,this._minEdgeRing=null,this._depth=[0,-999,-999],this._isForward=n,n)this.init(e.getCoordinate(0),e.getCoordinate(1));else{var r=e.getNumPoints()-1;this.init(e.getCoordinate(r),e.getCoordinate(r-1))}this.computeDirectedLabel()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getNextMin=function(){return this._nextMin},e.prototype.getDepth=function(t){return this._depth[t]},e.prototype.setVisited=function(t){this._isVisited=t},e.prototype.computeDirectedLabel=function(){this._label=new Dh(this._edge.getLabel()),this._isForward||this._label.flip()},e.prototype.getNext=function(){return this._next},e.prototype.setDepth=function(t,e){if(-999!==this._depth[t]&&this._depth[t]!==e)throw new Oh("assigned depths do not match",this.getCoordinate());this._depth[t]=e},e.prototype.isInteriorAreaEdge=function(){for(var t=this,e=!0,n=0;n<2;n++)t._label.isArea(n)&&t._label.getLocation(n,Sh.LEFT)===pl.INTERIOR&&t._label.getLocation(n,Sh.RIGHT)===pl.INTERIOR||(e=!1);return e},e.prototype.setNextMin=function(t){this._nextMin=t},e.prototype.print=function(e){t.prototype.print.call(this,e),e.print(" "+this._depth[Sh.LEFT]+"/"+this._depth[Sh.RIGHT]),e.print(" ("+this.getDepthDelta()+")"),this._isInResult&&e.print(" inResult")},e.prototype.setMinEdgeRing=function(t){this._minEdgeRing=t},e.prototype.isLineEdge=function(){var t=this._label.isLine(0)||this._label.isLine(1),e=!this._label.isArea(0)||this._label.allPositionsEqual(0,pl.EXTERIOR),n=!this._label.isArea(1)||this._label.allPositionsEqual(1,pl.EXTERIOR);return t&&e&&n},e.prototype.setEdgeRing=function(t){this._edgeRing=t},e.prototype.getMinEdgeRing=function(){return this._minEdgeRing},e.prototype.getDepthDelta=function(){var t=this._edge.getDepthDelta();return this._isForward||(t=-t),t},e.prototype.setInResult=function(t){this._isInResult=t},e.prototype.getSym=function(){return this._sym},e.prototype.isForward=function(){return this._isForward},e.prototype.getEdge=function(){return this._edge},e.prototype.printEdge=function(t){this.print(t),t.print(" "),this._isForward?this._edge.print(t):this._edge.printReverse(t)},e.prototype.setSym=function(t){this._sym=t},e.prototype.setVisitedEdge=function(t){this.setVisited(t),this._sym.setVisited(t)},e.prototype.setEdgeDepths=function(t,e){var n=this.getEdge().getDepthDelta();this._isForward||(n=-n);var r=1;t===Sh.LEFT&&(r=-1);var i=Sh.opposite(t),o=e+n*r;this.setDepth(t,e),this.setDepth(i,o)},e.prototype.getEdgeRing=function(){return this._edgeRing},e.prototype.isInResult=function(){return this._isInResult},e.prototype.setNext=function(t){this._next=t},e.prototype.isVisited=function(){return this._isVisited},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e.depthFactor=function(t,e){return t===pl.EXTERIOR&&e===pl.INTERIOR?1:t===pl.INTERIOR&&e===pl.EXTERIOR?-1:0},e}(Vh),Yh=function(){};Yh.prototype.createNode=function(t){return new Bh(t,null)},Yh.prototype.interfaces_=function(){return[]},Yh.prototype.getClass=function(){return Yh};var Hh=function(){if(this._edges=new lc,this._nodes=null,this._edgeEndList=new lc,0===arguments.length)this._nodes=new zh(new Yh);else if(1===arguments.length){var t=arguments[0];this._nodes=new zh(t)}};Hh.prototype.printEdges=function(t){t.println("Edges:");for(var e=0;e<this._edges.size();e++){t.println("edge "+e+":");var n=this._edges.get(e);n.print(t),n.eiList.print(t)}},Hh.prototype.find=function(t){return this._nodes.find(t)},Hh.prototype.addNode=function(){if(arguments[0]instanceof Bh){var t=arguments[0];return this._nodes.addNode(t)}if(arguments[0]instanceof ul){var e=arguments[0];return this._nodes.addNode(e)}},Hh.prototype.getNodeIterator=function(){return this._nodes.iterator()},Hh.prototype.linkResultDirectedEdges=function(){for(var t=this._nodes.iterator();t.hasNext();){t.next().getEdges().linkResultDirectedEdges()}},Hh.prototype.debugPrintln=function(t){Pl.out.println(t)},Hh.prototype.isBoundaryNode=function(t,e){var n=this._nodes.find(e);if(null===n)return!1;var r=n.getLabel();return null!==r&&r.getLocation(t)===pl.BOUNDARY},Hh.prototype.linkAllDirectedEdges=function(){for(var t=this._nodes.iterator();t.hasNext();){t.next().getEdges().linkAllDirectedEdges()}},Hh.prototype.matchInSameDirection=function(t,e,n,r){return!!t.equals(n)&&(Xl.computeOrientation(t,e,r)===Xl.COLLINEAR&&jh.quadrant(t,e)===jh.quadrant(n,r))},Hh.prototype.getEdgeEnds=function(){return this._edgeEndList},Hh.prototype.debugPrint=function(t){Pl.out.print(t)},Hh.prototype.getEdgeIterator=function(){return this._edges.iterator()},Hh.prototype.findEdgeInSameDirection=function(t,e){for(var n=this,r=0;r<this._edges.size();r++){var i=n._edges.get(r),o=i.getCoordinates();if(n.matchInSameDirection(t,e,o[0],o[1]))return i;if(n.matchInSameDirection(t,e,o[o.length-1],o[o.length-2]))return i}return null},Hh.prototype.insertEdge=function(t){this._edges.add(t)},Hh.prototype.findEdgeEnd=function(t){for(var e=this.getEdgeEnds().iterator();e.hasNext();){var n=e.next();if(n.getEdge()===t)return n}return null},Hh.prototype.addEdges=function(t){for(var e=this,n=t.iterator();n.hasNext();){var r=n.next();e._edges.add(r);var i=new Xh(r,!0),o=new Xh(r,!1);i.setSym(o),o.setSym(i),e.add(i),e.add(o)}},Hh.prototype.add=function(t){this._nodes.add(t),this._edgeEndList.add(t)},Hh.prototype.getNodes=function(){return this._nodes.values()},Hh.prototype.findEdge=function(t,e){for(var n=0;n<this._edges.size();n++){var r=this._edges.get(n),i=r.getCoordinates();if(t.equals(i[0])&&e.equals(i[1]))return r}return null},Hh.prototype.interfaces_=function(){return[]},Hh.prototype.getClass=function(){return Hh},Hh.linkResultDirectedEdges=function(t){for(var e=t.iterator();e.hasNext();){e.next().getEdges().linkResultDirectedEdges()}};var Wh=function(){this._geometryFactory=null,this._shellList=new lc;var t=arguments[0];this._geometryFactory=t};Wh.prototype.sortShellsAndHoles=function(t,e,n){for(var r=t.iterator();r.hasNext();){var i=r.next();i.isHole()?n.add(i):e.add(i)}},Wh.prototype.computePolygons=function(t){for(var e=new lc,n=t.iterator();n.hasNext();){var r=n.next().toPolygon(this._geometryFactory);e.add(r)}return e},Wh.prototype.placeFreeHoles=function(t,e){for(var n=e.iterator();n.hasNext();){var r=n.next();if(null===r.getShell()){var i=this.findEdgeRingContaining(r,t);if(null===i)throw new Oh("unable to assign hole to a shell",r.getCoordinate(0));r.setShell(i)}}},Wh.prototype.buildMinimalEdgeRings=function(t,e,n){for(var r=new lc,i=t.iterator();i.hasNext();){var o=i.next();if(o.getMaxNodeDegree()>2){o.linkDirectedEdgesForMinimalEdgeRings();var s=o.buildMinimalRings(),a=this.findShell(s);null!==a?(this.placePolygonHoles(a,s),e.add(a)):n.addAll(s)}else r.add(o)}return r},Wh.prototype.containsPoint=function(t){for(var e=this._shellList.iterator();e.hasNext();){if(e.next().containsPoint(t))return!0}return!1},Wh.prototype.buildMaximalEdgeRings=function(t){for(var e=new lc,n=t.iterator();n.hasNext();){var r=n.next();if(r.isInResult()&&r.getLabel().isArea()&&null===r.getEdgeRing()){var i=new Gh(r,this._geometryFactory);e.add(i),i.setInResult()}}return e},Wh.prototype.placePolygonHoles=function(t,e){for(var n=e.iterator();n.hasNext();){var r=n.next();r.isHole()&&r.setShell(t)}},Wh.prototype.getPolygons=function(){return this.computePolygons(this._shellList)},Wh.prototype.findEdgeRingContaining=function(t,e){for(var n=t.getLinearRing(),r=n.getEnvelopeInternal(),i=n.getCoordinateN(0),o=null,s=null,a=e.iterator();a.hasNext();){var u=a.next(),l=u.getLinearRing(),c=l.getEnvelopeInternal();null!==o&&(s=o.getLinearRing().getEnvelopeInternal());var h=!1;c.contains(r)&&Xl.isPointInRing(i,l.getCoordinates())&&(h=!0),h&&(null===o||s.contains(c))&&(o=u)}return o},Wh.prototype.findShell=function(t){for(var e=0,n=null,r=t.iterator();r.hasNext();){var i=r.next();i.isHole()||(n=i,e++)}return ql.isTrue(e<=1,"found two shells in MinimalEdgeRing list"),n},Wh.prototype.add=function(){if(1===arguments.length){var t=arguments[0];this.add(t.getEdgeEnds(),t.getNodes())}else if(2===arguments.length){var e=arguments[0],n=arguments[1];Hh.linkResultDirectedEdges(n);var r=this.buildMaximalEdgeRings(e),i=new lc,o=this.buildMinimalEdgeRings(r,this._shellList,i);this.sortShellsAndHoles(o,this._shellList,i),this.placeFreeHoles(this._shellList,i)}},Wh.prototype.interfaces_=function(){return[]},Wh.prototype.getClass=function(){return Wh};var Jh=function(){};Jh.prototype.getBounds=function(){},Jh.prototype.interfaces_=function(){return[]},Jh.prototype.getClass=function(){return Jh};var Zh=function(){this._bounds=null,this._item=null;var t=arguments[0],e=arguments[1];this._bounds=t,this._item=e};Zh.prototype.getItem=function(){return this._item},Zh.prototype.getBounds=function(){return this._bounds},Zh.prototype.interfaces_=function(){return[Jh,al]},Zh.prototype.getClass=function(){return Zh};var Kh=function(){this._size=null,this._items=null,this._size=0,this._items=new lc,this._items.add(null)};Kh.prototype.poll=function(){if(this.isEmpty())return null;var t=this._items.get(1);return this._items.set(1,this._items.get(this._size)),this._size-=1,this.reorder(1),t},Kh.prototype.size=function(){return this._size},Kh.prototype.reorder=function(t){for(var e=this,n=null,r=this._items.get(t);2*t<=this._size&&((n=2*t)!==e._size&&e._items.get(n+1).compareTo(e._items.get(n))<0&&n++,e._items.get(n).compareTo(r)<0);t=n)e._items.set(t,e._items.get(n));this._items.set(t,r)},Kh.prototype.clear=function(){this._size=0,this._items.clear()},Kh.prototype.isEmpty=function(){return 0===this._size},Kh.prototype.add=function(t){this._items.add(null),this._size+=1;var e=this._size;for(this._items.set(0,t);t.compareTo(this._items.get(Math.trunc(e/2)))<0;e/=2)this._items.set(e,this._items.get(Math.trunc(e/2)));this._items.set(e,t)},Kh.prototype.interfaces_=function(){return[]},Kh.prototype.getClass=function(){return Kh};var Qh=function(){};Qh.prototype.visitItem=function(t){},Qh.prototype.interfaces_=function(){return[]},Qh.prototype.getClass=function(){return Qh};var $h=function(){};$h.prototype.insert=function(t,e){},$h.prototype.remove=function(t,e){},$h.prototype.query=function(){},$h.prototype.interfaces_=function(){return[]},$h.prototype.getClass=function(){return $h};var tp=function(){if(this._childBoundables=new lc,this._bounds=null,this._level=null,0===arguments.length);else if(1===arguments.length){var t=arguments[0];this._level=t}},ep={serialVersionUID:{configurable:!0}};tp.prototype.getLevel=function(){return this._level},tp.prototype.size=function(){return this._childBoundables.size()},tp.prototype.getChildBoundables=function(){return this._childBoundables},tp.prototype.addChildBoundable=function(t){ql.isTrue(null===this._bounds),this._childBoundables.add(t)},tp.prototype.isEmpty=function(){return this._childBoundables.isEmpty()},tp.prototype.getBounds=function(){return null===this._bounds&&(this._bounds=this.computeBounds()),this._bounds},tp.prototype.interfaces_=function(){return[Jh,al]},tp.prototype.getClass=function(){return tp},ep.serialVersionUID.get=function(){return 0x5a1e55ec41369800},Object.defineProperties(tp,ep);var np=function(){};np.reverseOrder=function(){return{compare:function(t,e){return e.compareTo(t)}}},np.min=function(t){return np.sort(t),t.get(0)},np.sort=function(t,e){var n=t.toArray();e?Rc.sort(n,e):Rc.sort(n);for(var r=t.iterator(),i=0,o=n.length;i<o;i++)r.next(),r.set(n[i])},np.singletonList=function(t){var e=new lc;return e.add(t),e};var rp=function(){this._boundable1=null,this._boundable2=null,this._distance=null,this._itemDistance=null;var t=arguments[0],e=arguments[1],n=arguments[2];this._boundable1=t,this._boundable2=e,this._itemDistance=n,this._distance=this.distance()};rp.prototype.expandToQueue=function(t,e){var n=rp.isComposite(this._boundable1),r=rp.isComposite(this._boundable2);if(n&&r)return rp.area(this._boundable1)>rp.area(this._boundable2)?(this.expand(this._boundable1,this._boundable2,t,e),null):(this.expand(this._boundable2,this._boundable1,t,e),null);if(n)return this.expand(this._boundable1,this._boundable2,t,e),null;if(r)return this.expand(this._boundable2,this._boundable1,t,e),null;throw new el("neither boundable is composite")},rp.prototype.isLeaves=function(){return!(rp.isComposite(this._boundable1)||rp.isComposite(this._boundable2))},rp.prototype.compareTo=function(t){var e=t;return this._distance<e._distance?-1:this._distance>e._distance?1:0},rp.prototype.expand=function(t,e,n,r){for(var i=t.getChildBoundables().iterator();i.hasNext();){var o=i.next(),s=new rp(o,e,this._itemDistance);s.getDistance()<r&&n.add(s)}},rp.prototype.getBoundable=function(t){return 0===t?this._boundable1:this._boundable2},rp.prototype.getDistance=function(){return this._distance},rp.prototype.distance=function(){return this.isLeaves()?this._itemDistance.distance(this._boundable1,this._boundable2):this._boundable1.getBounds().distance(this._boundable2.getBounds())},rp.prototype.interfaces_=function(){return[il]},rp.prototype.getClass=function(){return rp},rp.area=function(t){return t.getBounds().getArea()},rp.isComposite=function(t){return t instanceof tp};var ip=function t(){if(this._root=null,this._built=!1,this._itemBoundables=new lc,this._nodeCapacity=null,0===arguments.length){var e=t.DEFAULT_NODE_CAPACITY;this._nodeCapacity=e}else if(1===arguments.length){var n=arguments[0];ql.isTrue(n>1,"Node capacity must be greater than 1"),this._nodeCapacity=n}},op={IntersectsOp:{configurable:!0},serialVersionUID:{configurable:!0},DEFAULT_NODE_CAPACITY:{configurable:!0}};ip.prototype.getNodeCapacity=function(){return this._nodeCapacity},ip.prototype.lastNode=function(t){return t.get(t.size()-1)},ip.prototype.size=function(){var t=this;if(0===arguments.length)return this.isEmpty()?0:(this.build(),this.size(this._root));if(1===arguments.length){for(var e=arguments[0],n=0,r=e.getChildBoundables().iterator();r.hasNext();){var i=r.next();i instanceof tp?n+=t.size(i):i instanceof Zh&&(n+=1)}return n}},ip.prototype.removeItem=function(t,e){for(var n=null,r=t.getChildBoundables().iterator();r.hasNext();){var i=r.next();i instanceof Zh&&i.getItem()===e&&(n=i)}return null!==n&&(t.getChildBoundables().remove(n),!0)},ip.prototype.itemsTree=function(){var t=this;if(0===arguments.length){this.build();var e=this.itemsTree(this._root);return null===e?new lc:e}if(1===arguments.length){for(var n=arguments[0],r=new lc,i=n.getChildBoundables().iterator();i.hasNext();){var o=i.next();if(o instanceof tp){var s=t.itemsTree(o);null!==s&&r.add(s)}else o instanceof Zh?r.add(o.getItem()):ql.shouldNeverReachHere()}return r.size()<=0?null:r}},ip.prototype.insert=function(t,e){ql.isTrue(!this._built,"Cannot insert items into an STR packed R-tree after it has been built."),this._itemBoundables.add(new Zh(t,e))},ip.prototype.boundablesAtLevel=function(){var t=this;if(1===arguments.length){var e=arguments[0],n=new lc;return this.boundablesAtLevel(e,this._root,n),n}if(3===arguments.length){var r=arguments[0],i=arguments[1],o=arguments[2];if(ql.isTrue(r>-2),i.getLevel()===r)return o.add(i),null;for(var s=i.getChildBoundables().iterator();s.hasNext();){var a=s.next();a instanceof tp?t.boundablesAtLevel(r,a,o):(ql.isTrue(a instanceof Zh),-1===r&&o.add(a))}return null}},ip.prototype.query=function(){var t=this;if(1===arguments.length){var e=arguments[0];this.build();var n=new lc;return this.isEmpty()||this.getIntersectsOp().intersects(this._root.getBounds(),e)&&this.query(e,this._root,n),n}if(2===arguments.length){var r=arguments[0],i=arguments[1];if(this.build(),this.isEmpty())return null;this.getIntersectsOp().intersects(this._root.getBounds(),r)&&this.query(r,this._root,i)}else if(3===arguments.length)if(gl(arguments[2],Qh)&&arguments[0]instanceof Object&&arguments[1]instanceof tp)for(var o=arguments[0],s=arguments[1],a=arguments[2],u=s.getChildBoundables(),l=0;l<u.size();l++){var c=u.get(l);t.getIntersectsOp().intersects(c.getBounds(),o)&&(c instanceof tp?t.query(o,c,a):c instanceof Zh?a.visitItem(c.getItem()):ql.shouldNeverReachHere())}else if(gl(arguments[2],ac)&&arguments[0]instanceof Object&&arguments[1]instanceof tp)for(var h=arguments[0],p=arguments[1],f=arguments[2],g=p.getChildBoundables(),d=0;d<g.size();d++){var y=g.get(d);t.getIntersectsOp().intersects(y.getBounds(),h)&&(y instanceof tp?t.query(h,y,f):y instanceof Zh?f.add(y.getItem()):ql.shouldNeverReachHere())}},ip.prototype.build=function(){if(this._built)return null;this._root=this._itemBoundables.isEmpty()?this.createNode(0):this.createHigherLevels(this._itemBoundables,-1),this._itemBoundables=null,this._built=!0},ip.prototype.getRoot=function(){return this.build(),this._root},ip.prototype.remove=function(){var t=this;if(2===arguments.length){var e=arguments[0],n=arguments[1];return this.build(),!!this.getIntersectsOp().intersects(this._root.getBounds(),e)&&this.remove(e,this._root,n)}if(3===arguments.length){var r=arguments[0],i=arguments[1],o=arguments[2],s=this.removeItem(i,o);if(s)return!0;for(var a=null,u=i.getChildBoundables().iterator();u.hasNext();){var l=u.next();if(t.getIntersectsOp().intersects(l.getBounds(),r)&&(l instanceof tp&&(s=t.remove(r,l,o)))){a=l;break}}return null!==a&&a.getChildBoundables().isEmpty()&&i.getChildBoundables().remove(a),s}},ip.prototype.createHigherLevels=function(t,e){ql.isTrue(!t.isEmpty());var n=this.createParentBoundables(t,e+1);return 1===n.size()?n.get(0):this.createHigherLevels(n,e+1)},ip.prototype.depth=function(){var t=this;if(0===arguments.length)return this.isEmpty()?0:(this.build(),this.depth(this._root));if(1===arguments.length){for(var e=arguments[0],n=0,r=e.getChildBoundables().iterator();r.hasNext();){var i=r.next();if(i instanceof tp){var o=t.depth(i);o>n&&(n=o)}}return n+1}},ip.prototype.createParentBoundables=function(t,e){var n=this;ql.isTrue(!t.isEmpty());var r=new lc;r.add(this.createNode(e));var i=new lc(t);np.sort(i,this.getComparator());for(var o=i.iterator();o.hasNext();){var s=o.next();n.lastNode(r).getChildBoundables().size()===n.getNodeCapacity()&&r.add(n.createNode(e)),n.lastNode(r).addChildBoundable(s)}return r},ip.prototype.isEmpty=function(){return this._built?this._root.isEmpty():this._itemBoundables.isEmpty()},ip.prototype.interfaces_=function(){return[al]},ip.prototype.getClass=function(){return ip},ip.compareDoubles=function(t,e){return t>e?1:t<e?-1:0},op.IntersectsOp.get=function(){return sp},op.serialVersionUID.get=function(){return-0x35ef64c82d4c5400},op.DEFAULT_NODE_CAPACITY.get=function(){return 10},Object.defineProperties(ip,op);var sp=function(){},ap=function(){};ap.prototype.distance=function(t,e){},ap.prototype.interfaces_=function(){return[]},ap.prototype.getClass=function(){return ap};var up=function(t){function e(n){n=n||e.DEFAULT_NODE_CAPACITY,t.call(this,n)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={STRtreeNode:{configurable:!0},serialVersionUID:{configurable:!0},xComparator:{configurable:!0},yComparator:{configurable:!0},intersectsOp:{configurable:!0},DEFAULT_NODE_CAPACITY:{configurable:!0}};return e.prototype.createParentBoundablesFromVerticalSlices=function(t,e){ql.isTrue(t.length>0);for(var n=new lc,r=0;r<t.length;r++)n.addAll(this.createParentBoundablesFromVerticalSlice(t[r],e));return n},e.prototype.createNode=function(t){return new lp(t)},e.prototype.size=function(){return 0===arguments.length?t.prototype.size.call(this):t.prototype.size.apply(this,arguments)},e.prototype.insert=function(){if(2!==arguments.length)return t.prototype.insert.apply(this,arguments);var e=arguments[0],n=arguments[1];if(e.isNull())return null;t.prototype.insert.call(this,e,n)},e.prototype.getIntersectsOp=function(){return e.intersectsOp},e.prototype.verticalSlices=function(t,e){for(var n=Math.trunc(Math.ceil(t.size()/e)),r=new Array(e).fill(null),i=t.iterator(),o=0;o<e;o++){r[o]=new lc;for(var s=0;i.hasNext()&&s<n;){var a=i.next();r[o].add(a),s++}}return r},e.prototype.query=function(){if(1===arguments.length){var e=arguments[0];return t.prototype.query.call(this,e)}if(2===arguments.length){var n=arguments[0],r=arguments[1];t.prototype.query.call(this,n,r)}else if(3===arguments.length)if(gl(arguments[2],Qh)&&arguments[0]instanceof Object&&arguments[1]instanceof tp){var i=arguments[0],o=arguments[1],s=arguments[2];t.prototype.query.call(this,i,o,s)}else if(gl(arguments[2],ac)&&arguments[0]instanceof Object&&arguments[1]instanceof tp){var a=arguments[0],u=arguments[1],l=arguments[2];t.prototype.query.call(this,a,u,l)}},e.prototype.getComparator=function(){return e.yComparator},e.prototype.createParentBoundablesFromVerticalSlice=function(e,n){return t.prototype.createParentBoundables.call(this,e,n)},e.prototype.remove=function(){if(2===arguments.length){var e=arguments[0],n=arguments[1];return t.prototype.remove.call(this,e,n)}return t.prototype.remove.apply(this,arguments)},e.prototype.depth=function(){return 0===arguments.length?t.prototype.depth.call(this):t.prototype.depth.apply(this,arguments)},e.prototype.createParentBoundables=function(t,n){ql.isTrue(!t.isEmpty());var r=Math.trunc(Math.ceil(t.size()/this.getNodeCapacity())),i=new lc(t);np.sort(i,e.xComparator);var o=this.verticalSlices(i,Math.trunc(Math.ceil(Math.sqrt(r))));return this.createParentBoundablesFromVerticalSlices(o,n)},e.prototype.nearestNeighbour=function(){if(1===arguments.length){if(gl(arguments[0],ap)){var t=arguments[0],n=new rp(this.getRoot(),this.getRoot(),t);return this.nearestNeighbour(n)}if(arguments[0]instanceof rp){var r=arguments[0];return this.nearestNeighbour(r,nl.POSITIVE_INFINITY)}}else if(2===arguments.length){if(arguments[0]instanceof e&&gl(arguments[1],ap)){var i=arguments[0],o=arguments[1],s=new rp(this.getRoot(),i.getRoot(),o);return this.nearestNeighbour(s)}if(arguments[0]instanceof rp&&"number"==typeof arguments[1]){var a=arguments[0],u=arguments[1],l=u,c=null,h=new Kh;for(h.add(a);!h.isEmpty()&&l>0;){var p=h.poll(),f=p.getDistance();if(f>=l)break;p.isLeaves()?(l=f,c=p):p.expandToQueue(h,l)}return[c.getBoundable(0).getItem(),c.getBoundable(1).getItem()]}}else if(3===arguments.length){var g=arguments[0],d=arguments[1],y=arguments[2],v=new Zh(g,d),_=new rp(this.getRoot(),v,y);return this.nearestNeighbour(_)[0]}},e.prototype.interfaces_=function(){return[$h,al]},e.prototype.getClass=function(){return e},e.centreX=function(t){return e.avg(t.getMinX(),t.getMaxX())},e.avg=function(t,e){return(t+e)/2},e.centreY=function(t){return e.avg(t.getMinY(),t.getMaxY())},n.STRtreeNode.get=function(){return lp},n.serialVersionUID.get=function(){return 0x39920f7d5f261e0},n.xComparator.get=function(){return{interfaces_:function(){return[sl]},compare:function(n,r){return t.compareDoubles(e.centreX(n.getBounds()),e.centreX(r.getBounds()))}}},n.yComparator.get=function(){return{interfaces_:function(){return[sl]},compare:function(n,r){return t.compareDoubles(e.centreY(n.getBounds()),e.centreY(r.getBounds()))}}},n.intersectsOp.get=function(){return{interfaces_:function(){return[t.IntersectsOp]},intersects:function(t,e){return t.intersects(e)}}},n.DEFAULT_NODE_CAPACITY.get=function(){return 10},Object.defineProperties(e,n),e}(ip),lp=function(t){function e(){var e=arguments[0];t.call(this,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.computeBounds=function(){for(var t=null,e=this.getChildBoundables().iterator();e.hasNext();){var n=e.next();null===t?t=new Ll(n.getBounds()):t.expandToInclude(n.getBounds())}return t},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(tp),cp=function(){};cp.prototype.interfaces_=function(){return[]},cp.prototype.getClass=function(){return cp},cp.relativeSign=function(t,e){return t<e?-1:t>e?1:0},cp.compare=function(t,e,n){if(e.equals2D(n))return 0;var r=cp.relativeSign(e.x,n.x),i=cp.relativeSign(e.y,n.y);switch(t){case 0:return cp.compareValue(r,i);case 1:return cp.compareValue(i,r);case 2:return cp.compareValue(i,-r);case 3:return cp.compareValue(-r,i);case 4:return cp.compareValue(-r,-i);case 5:return cp.compareValue(-i,-r);case 6:return cp.compareValue(-i,r);case 7:return cp.compareValue(r,-i)}return ql.shouldNeverReachHere("invalid octant value"),0},cp.compareValue=function(t,e){return t<0?-1:t>0?1:e<0?-1:e>0?1:0};var hp=function(){this._segString=null,this.coord=null,this.segmentIndex=null,this._segmentOctant=null,this._isInterior=null;var t=arguments[0],e=arguments[1],n=arguments[2],r=arguments[3];this._segString=t,this.coord=new ul(e),this.segmentIndex=n,this._segmentOctant=r,this._isInterior=!e.equals2D(t.getCoordinate(n))};hp.prototype.getCoordinate=function(){return this.coord},hp.prototype.print=function(t){t.print(this.coord),t.print(" seg # = "+this.segmentIndex)},hp.prototype.compareTo=function(t){var e=t;return this.segmentIndex<e.segmentIndex?-1:this.segmentIndex>e.segmentIndex?1:this.coord.equals2D(e.coord)?0:cp.compare(this._segmentOctant,this.coord,e.coord)},hp.prototype.isEndPoint=function(t){return 0===this.segmentIndex&&!this._isInterior||this.segmentIndex===t},hp.prototype.isInterior=function(){return this._isInterior},hp.prototype.interfaces_=function(){return[il]},hp.prototype.getClass=function(){return hp};var pp=function(){this._nodeMap=new Cc,this._edge=null;var t=arguments[0];this._edge=t};pp.prototype.getSplitCoordinates=function(){var t=new hc;this.addEndpoints();for(var e=this.iterator(),n=e.next();e.hasNext();){var r=e.next();this.addEdgeCoordinates(n,r,t),n=r}return t.toCoordinateArray()},pp.prototype.addCollapsedNodes=function(){var t=new lc;this.findCollapsesFromInsertedNodes(t),this.findCollapsesFromExistingVertices(t);for(var e=t.iterator();e.hasNext();){var n=e.next().intValue();this.add(this._edge.getCoordinate(n),n)}},pp.prototype.print=function(t){t.println("Intersections:");for(var e=this.iterator();e.hasNext();){e.next().print(t)}},pp.prototype.findCollapsesFromExistingVertices=function(t){for(var e=0;e<this._edge.size()-2;e++){var n=this._edge.getCoordinate(e),r=this._edge.getCoordinate(e+2);n.equals2D(r)&&t.add(new _l(e+1))}},pp.prototype.addEdgeCoordinates=function(t,e,n){var r=this._edge.getCoordinate(e.segmentIndex),i=e.isInterior()||!e.coord.equals2D(r);n.add(new ul(t.coord),!1);for(var o=t.segmentIndex+1;o<=e.segmentIndex;o++)n.add(this._edge.getCoordinate(o));i&&n.add(new ul(e.coord))},pp.prototype.iterator=function(){return this._nodeMap.values().iterator()},pp.prototype.addSplitEdges=function(t){this.addEndpoints(),this.addCollapsedNodes();for(var e=this.iterator(),n=e.next();e.hasNext();){var r=e.next(),i=this.createSplitEdge(n,r);t.add(i),n=r}},pp.prototype.findCollapseIndex=function(t,e,n){if(!t.coord.equals2D(e.coord))return!1;var r=e.segmentIndex-t.segmentIndex;return e.isInterior()||r--,1===r&&(n[0]=t.segmentIndex+1,!0)},pp.prototype.findCollapsesFromInsertedNodes=function(t){for(var e=new Array(1).fill(null),n=this.iterator(),r=n.next();n.hasNext();){var i=n.next();this.findCollapseIndex(r,i,e)&&t.add(new _l(e[0])),r=i}},pp.prototype.getEdge=function(){return this._edge},pp.prototype.addEndpoints=function(){var t=this._edge.size()-1;this.add(this._edge.getCoordinate(0),0),this.add(this._edge.getCoordinate(t),t)},pp.prototype.createSplitEdge=function(t,e){var n=e.segmentIndex-t.segmentIndex+2,r=this._edge.getCoordinate(e.segmentIndex),i=e.isInterior()||!e.coord.equals2D(r);i||n--;var o=new Array(n).fill(null),s=0;o[s++]=new ul(t.coord);for(var a=t.segmentIndex+1;a<=e.segmentIndex;a++)o[s++]=this._edge.getCoordinate(a);return i&&(o[s]=new ul(e.coord)),new yp(o,this._edge.getData())},pp.prototype.add=function(t,e){var n=new hp(this._edge,t,e,this._edge.getSegmentOctant(e)),r=this._nodeMap.get(n);return null!==r?(ql.isTrue(r.coord.equals2D(t),"Found equal nodes with different coordinates"),r):(this._nodeMap.put(n,n),n)},pp.prototype.checkSplitEdgesCorrectness=function(t){var e=this._edge.getCoordinates(),n=t.get(0).getCoordinate(0);if(!n.equals2D(e[0]))throw new kl("bad split edge start point at "+n);var r=t.get(t.size()-1).getCoordinates(),i=r[r.length-1];if(!i.equals2D(e[e.length-1]))throw new kl("bad split edge end point at "+i)},pp.prototype.interfaces_=function(){return[]},pp.prototype.getClass=function(){return pp};var fp=function(){};fp.prototype.interfaces_=function(){return[]},fp.prototype.getClass=function(){return fp},fp.octant=function(){if("number"==typeof arguments[0]&&"number"==typeof arguments[1]){var t=arguments[0],e=arguments[1];if(0===t&&0===e)throw new el("Cannot compute the octant for point ( "+t+", "+e+" )");var n=Math.abs(t),r=Math.abs(e);return t>=0?e>=0?n>=r?0:1:n>=r?7:6:e>=0?n>=r?3:2:n>=r?4:5}if(arguments[0]instanceof ul&&arguments[1]instanceof ul){var i=arguments[0],o=arguments[1],s=o.x-i.x,a=o.y-i.y;if(0===s&&0===a)throw new el("Cannot compute the octant for two identical points "+i);return fp.octant(s,a)}};var gp=function(){};gp.prototype.getCoordinates=function(){},gp.prototype.size=function(){},gp.prototype.getCoordinate=function(t){},gp.prototype.isClosed=function(){},gp.prototype.setData=function(t){},gp.prototype.getData=function(){},gp.prototype.interfaces_=function(){return[]},gp.prototype.getClass=function(){return gp};var dp=function(){};dp.prototype.addIntersection=function(t,e){},dp.prototype.interfaces_=function(){return[gp]},dp.prototype.getClass=function(){return dp};var yp=function(){this._nodeList=new pp(this),this._pts=null,this._data=null;var t=arguments[0],e=arguments[1];this._pts=t,this._data=e};yp.prototype.getCoordinates=function(){return this._pts},yp.prototype.size=function(){return this._pts.length},yp.prototype.getCoordinate=function(t){return this._pts[t]},yp.prototype.isClosed=function(){return this._pts[0].equals(this._pts[this._pts.length-1])},yp.prototype.getSegmentOctant=function(t){return t===this._pts.length-1?-1:this.safeOctant(this.getCoordinate(t),this.getCoordinate(t+1))},yp.prototype.setData=function(t){this._data=t},yp.prototype.safeOctant=function(t,e){return t.equals2D(e)?0:fp.octant(t,e)},yp.prototype.getData=function(){return this._data},yp.prototype.addIntersection=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1];this.addIntersectionNode(t,e)}else if(4===arguments.length){var n=arguments[0],r=arguments[1],i=arguments[3],o=new ul(n.getIntersection(i));this.addIntersection(o,r)}},yp.prototype.toString=function(){return Fl.toLineString(new lh(this._pts))},yp.prototype.getNodeList=function(){return this._nodeList},yp.prototype.addIntersectionNode=function(t,e){var n=e,r=n+1;if(r<this._pts.length){var i=this._pts[r];t.equals2D(i)&&(n=r)}return this._nodeList.add(t,n)},yp.prototype.addIntersections=function(t,e,n){for(var r=0;r<t.getIntersectionNum();r++)this.addIntersection(t,e,n,r)},yp.prototype.interfaces_=function(){return[dp]},yp.prototype.getClass=function(){return yp},yp.getNodedSubstrings=function(){if(1===arguments.length){var t=arguments[0],e=new lc;return yp.getNodedSubstrings(t,e),e}if(2===arguments.length)for(var n=arguments[0],r=arguments[1],i=n.iterator();i.hasNext();){var o=i.next();o.getNodeList().addSplitEdges(r)}};var vp=function(){if(this.p0=null,this.p1=null,0===arguments.length)this.p0=new ul,this.p1=new ul;else if(1===arguments.length){var t=arguments[0];this.p0=new ul(t.p0),this.p1=new ul(t.p1)}else if(2===arguments.length)this.p0=arguments[0],this.p1=arguments[1];else if(4===arguments.length){var e=arguments[0],n=arguments[1],r=arguments[2],i=arguments[3];this.p0=new ul(e,n),this.p1=new ul(r,i)}},_p={serialVersionUID:{configurable:!0}};vp.prototype.minX=function(){return Math.min(this.p0.x,this.p1.x)},vp.prototype.orientationIndex=function(){if(arguments[0]instanceof vp){var t=arguments[0],e=Xl.orientationIndex(this.p0,this.p1,t.p0),n=Xl.orientationIndex(this.p0,this.p1,t.p1);return e>=0&&n>=0||e<=0&&n<=0?Math.max(e,n):0}if(arguments[0]instanceof ul){var r=arguments[0];return Xl.orientationIndex(this.p0,this.p1,r)}},vp.prototype.toGeometry=function(t){return t.createLineString([this.p0,this.p1])},vp.prototype.isVertical=function(){return this.p0.x===this.p1.x},vp.prototype.equals=function(t){if(!(t instanceof vp))return!1;var e=t;return this.p0.equals(e.p0)&&this.p1.equals(e.p1)},vp.prototype.intersection=function(t){var e=new jl;return e.computeIntersection(this.p0,this.p1,t.p0,t.p1),e.hasIntersection()?e.getIntersection(0):null},vp.prototype.project=function(){if(arguments[0]instanceof ul){var t=arguments[0];if(t.equals(this.p0)||t.equals(this.p1))return new ul(t);var e=this.projectionFactor(t),n=new ul;return n.x=this.p0.x+e*(this.p1.x-this.p0.x),n.y=this.p0.y+e*(this.p1.y-this.p0.y),n}if(arguments[0]instanceof vp){var r=arguments[0],i=this.projectionFactor(r.p0),o=this.projectionFactor(r.p1);if(i>=1&&o>=1)return null;if(i<=0&&o<=0)return null;var s=this.project(r.p0);i<0&&(s=this.p0),i>1&&(s=this.p1);var a=this.project(r.p1);return o<0&&(a=this.p0),o>1&&(a=this.p1),new vp(s,a)}},vp.prototype.normalize=function(){this.p1.compareTo(this.p0)<0&&this.reverse()},vp.prototype.angle=function(){return Math.atan2(this.p1.y-this.p0.y,this.p1.x-this.p0.x)},vp.prototype.getCoordinate=function(t){return 0===t?this.p0:this.p1},vp.prototype.distancePerpendicular=function(t){return Xl.distancePointLinePerpendicular(t,this.p0,this.p1)},vp.prototype.minY=function(){return Math.min(this.p0.y,this.p1.y)},vp.prototype.midPoint=function(){return vp.midPoint(this.p0,this.p1)},vp.prototype.projectionFactor=function(t){if(t.equals(this.p0))return 0;if(t.equals(this.p1))return 1;var e=this.p1.x-this.p0.x,n=this.p1.y-this.p0.y,r=e*e+n*n;return r<=0?nl.NaN:((t.x-this.p0.x)*e+(t.y-this.p0.y)*n)/r},vp.prototype.closestPoints=function(t){var e=this.intersection(t);if(null!==e)return[e,e];var n=new Array(2).fill(null),r=nl.MAX_VALUE,i=null,o=this.closestPoint(t.p0);r=o.distance(t.p0),n[0]=o,n[1]=t.p0;var s=this.closestPoint(t.p1);(i=s.distance(t.p1))<r&&(r=i,n[0]=s,n[1]=t.p1);var a=t.closestPoint(this.p0);(i=a.distance(this.p0))<r&&(r=i,n[0]=this.p0,n[1]=a);var u=t.closestPoint(this.p1);return(i=u.distance(this.p1))<r&&(r=i,n[0]=this.p1,n[1]=u),n},vp.prototype.closestPoint=function(t){var e=this.projectionFactor(t);return e>0&&e<1?this.project(t):this.p0.distance(t)<this.p1.distance(t)?this.p0:this.p1},vp.prototype.maxX=function(){return Math.max(this.p0.x,this.p1.x)},vp.prototype.getLength=function(){return this.p0.distance(this.p1)},vp.prototype.compareTo=function(t){var e=t,n=this.p0.compareTo(e.p0);return 0!==n?n:this.p1.compareTo(e.p1)},vp.prototype.reverse=function(){var t=this.p0;this.p0=this.p1,this.p1=t},vp.prototype.equalsTopo=function(t){return this.p0.equals(t.p0)&&(this.p1.equals(t.p1)||this.p0.equals(t.p1))&&this.p1.equals(t.p0)},vp.prototype.lineIntersection=function(t){try{return Ml.intersection(this.p0,this.p1,t.p0,t.p1)}catch(t){if(!(t instanceof Cl))throw t}return null},vp.prototype.maxY=function(){return Math.max(this.p0.y,this.p1.y)},vp.prototype.pointAlongOffset=function(t,e){var n=this.p0.x+t*(this.p1.x-this.p0.x),r=this.p0.y+t*(this.p1.y-this.p0.y),i=this.p1.x-this.p0.x,o=this.p1.y-this.p0.y,s=Math.sqrt(i*i+o*o),a=0,u=0;if(0!==e){if(s<=0)throw new Error("Cannot compute offset from zero-length line segment");a=e*i/s,u=e*o/s}return new ul(n-u,r+a)},vp.prototype.setCoordinates=function(){if(1===arguments.length){var t=arguments[0];this.setCoordinates(t.p0,t.p1)}else if(2===arguments.length){var e=arguments[0],n=arguments[1];this.p0.x=e.x,this.p0.y=e.y,this.p1.x=n.x,this.p1.y=n.y}},vp.prototype.segmentFraction=function(t){var e=this.projectionFactor(t);return e<0?e=0:(e>1||nl.isNaN(e))&&(e=1),e},vp.prototype.toString=function(){return"LINESTRING( "+this.p0.x+" "+this.p0.y+", "+this.p1.x+" "+this.p1.y+")"},vp.prototype.isHorizontal=function(){return this.p0.y===this.p1.y},vp.prototype.distance=function(){if(arguments[0]instanceof vp){var t=arguments[0];return Xl.distanceLineLine(this.p0,this.p1,t.p0,t.p1)}if(arguments[0]instanceof ul){var e=arguments[0];return Xl.distancePointLine(e,this.p0,this.p1)}},vp.prototype.pointAlong=function(t){var e=new ul;return e.x=this.p0.x+t*(this.p1.x-this.p0.x),e.y=this.p0.y+t*(this.p1.y-this.p0.y),e},vp.prototype.hashCode=function(){var t=nl.doubleToLongBits(this.p0.x);t^=31*nl.doubleToLongBits(this.p0.y);var e=Math.trunc(t)^Math.trunc(t>>32),n=nl.doubleToLongBits(this.p1.x);return n^=31*nl.doubleToLongBits(this.p1.y),e^(Math.trunc(n)^Math.trunc(n>>32))},vp.prototype.interfaces_=function(){return[il,al]},vp.prototype.getClass=function(){return vp},vp.midPoint=function(t,e){return new ul((t.x+e.x)/2,(t.y+e.y)/2)},_p.serialVersionUID.get=function(){return 0x2d2172135f411c00},Object.defineProperties(vp,_p);var mp=function(){this.tempEnv1=new Ll,this.tempEnv2=new Ll,this._overlapSeg1=new vp,this._overlapSeg2=new vp};mp.prototype.overlap=function(){if(2===arguments.length);else if(4===arguments.length){var t=arguments[0],e=arguments[1],n=arguments[2],r=arguments[3];t.getLineSegment(e,this._overlapSeg1),n.getLineSegment(r,this._overlapSeg2),this.overlap(this._overlapSeg1,this._overlapSeg2)}},mp.prototype.interfaces_=function(){return[]},mp.prototype.getClass=function(){return mp};var xp=function(){this._pts=null,this._start=null,this._end=null,this._env=null,this._context=null,this._id=null;var t=arguments[0],e=arguments[1],n=arguments[2],r=arguments[3];this._pts=t,this._start=e,this._end=n,this._context=r};xp.prototype.getLineSegment=function(t,e){e.p0=this._pts[t],e.p1=this._pts[t+1]},xp.prototype.computeSelect=function(t,e,n,r){var i=this._pts[e],o=this._pts[n];if(r.tempEnv1.init(i,o),n-e==1)return r.select(this,e),null;if(!t.intersects(r.tempEnv1))return null;var s=Math.trunc((e+n)/2);e<s&&this.computeSelect(t,e,s,r),s<n&&this.computeSelect(t,s,n,r)},xp.prototype.getCoordinates=function(){for(var t=new Array(this._end-this._start+1).fill(null),e=0,n=this._start;n<=this._end;n++)t[e++]=this._pts[n];return t},xp.prototype.computeOverlaps=function(t,e){this.computeOverlapsInternal(this._start,this._end,t,t._start,t._end,e)},xp.prototype.setId=function(t){this._id=t},xp.prototype.select=function(t,e){this.computeSelect(t,this._start,this._end,e)},xp.prototype.getEnvelope=function(){if(null===this._env){var t=this._pts[this._start],e=this._pts[this._end];this._env=new Ll(t,e)}return this._env},xp.prototype.getEndIndex=function(){return this._end},xp.prototype.getStartIndex=function(){return this._start},xp.prototype.getContext=function(){return this._context},xp.prototype.getId=function(){return this._id},xp.prototype.computeOverlapsInternal=function(t,e,n,r,i,o){var s=this._pts[t],a=this._pts[e],u=n._pts[r],l=n._pts[i];if(e-t==1&&i-r==1)return o.overlap(this,t,n,r),null;if(o.tempEnv1.init(s,a),o.tempEnv2.init(u,l),!o.tempEnv1.intersects(o.tempEnv2))return null;var c=Math.trunc((t+e)/2),h=Math.trunc((r+i)/2);t<c&&(r<h&&this.computeOverlapsInternal(t,c,n,r,h,o),h<i&&this.computeOverlapsInternal(t,c,n,h,i,o)),c<e&&(r<h&&this.computeOverlapsInternal(c,e,n,r,h,o),h<i&&this.computeOverlapsInternal(c,e,n,h,i,o))},xp.prototype.interfaces_=function(){return[]},xp.prototype.getClass=function(){return xp};var Ep=function(){};Ep.prototype.interfaces_=function(){return[]},Ep.prototype.getClass=function(){return Ep},Ep.getChainStartIndices=function(t){var e=0,n=new lc;n.add(new _l(e));do{var r=Ep.findChainEnd(t,e);n.add(new _l(r)),e=r}while(e<t.length-1);return Ep.toIntArray(n)},Ep.findChainEnd=function(t,e){for(var n=e;n<t.length-1&&t[n].equals2D(t[n+1]);)n++;if(n>=t.length-1)return t.length-1;for(var r=jh.quadrant(t[n],t[n+1]),i=e+1;i<t.length;){if(!t[i-1].equals2D(t[i]))if(jh.quadrant(t[i-1],t[i])!==r)break;i++}return i-1},Ep.getChains=function(){if(1===arguments.length){var t=arguments[0];return Ep.getChains(t,null)}if(2===arguments.length){for(var e=arguments[0],n=arguments[1],r=new lc,i=Ep.getChainStartIndices(e),o=0;o<i.length-1;o++){var s=new xp(e,i[o],i[o+1],n);r.add(s)}return r}},Ep.toIntArray=function(t){for(var e=new Array(t.size()).fill(null),n=0;n<e.length;n++)e[n]=t.get(n).intValue();return e};var bp=function(){};bp.prototype.computeNodes=function(t){},bp.prototype.getNodedSubstrings=function(){},bp.prototype.interfaces_=function(){return[]},bp.prototype.getClass=function(){return bp};var wp=function(){if(this._segInt=null,0===arguments.length);else if(1===arguments.length){var t=arguments[0];this.setSegmentIntersector(t)}};wp.prototype.setSegmentIntersector=function(t){this._segInt=t},wp.prototype.interfaces_=function(){return[bp]},wp.prototype.getClass=function(){return wp};var Ip=function(t){function e(e){e?t.call(this,e):t.call(this),this._monoChains=new lc,this._index=new up,this._idCounter=0,this._nodedSegStrings=null,this._nOverlaps=0}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={SegmentOverlapAction:{configurable:!0}};return e.prototype.getMonotoneChains=function(){return this._monoChains},e.prototype.getNodedSubstrings=function(){return yp.getNodedSubstrings(this._nodedSegStrings)},e.prototype.getIndex=function(){return this._index},e.prototype.add=function(t){for(var e=this,n=Ep.getChains(t.getCoordinates(),t).iterator();n.hasNext();){var r=n.next();r.setId(e._idCounter++),e._index.insert(r.getEnvelope(),r),e._monoChains.add(r)}},e.prototype.computeNodes=function(t){this._nodedSegStrings=t;for(var e=t.iterator();e.hasNext();)this.add(e.next());this.intersectChains()},e.prototype.intersectChains=function(){for(var t=this,e=new Np(this._segInt),n=this._monoChains.iterator();n.hasNext();)for(var r=n.next(),i=t._index.query(r.getEnvelope()).iterator();i.hasNext();){var o=i.next();if(o.getId()>r.getId()&&(r.computeOverlaps(o,e),t._nOverlaps++),t._segInt.isDone())return null}},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},n.SegmentOverlapAction.get=function(){return Np},Object.defineProperties(e,n),e}(wp),Np=function(t){function e(){t.call(this),this._si=null;var e=arguments[0];this._si=e}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.overlap=function(){if(4!==arguments.length)return t.prototype.overlap.apply(this,arguments);var e=arguments[0],n=arguments[1],r=arguments[2],i=arguments[3],o=e.getContext(),s=r.getContext();this._si.processIntersections(o,n,s,i)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(mp),Sp=function t(){if(this._quadrantSegments=t.DEFAULT_QUADRANT_SEGMENTS,this._endCapStyle=t.CAP_ROUND,this._joinStyle=t.JOIN_ROUND,this._mitreLimit=t.DEFAULT_MITRE_LIMIT,this._isSingleSided=!1,this._simplifyFactor=t.DEFAULT_SIMPLIFY_FACTOR,0===arguments.length);else if(1===arguments.length){var e=arguments[0];this.setQuadrantSegments(e)}else if(2===arguments.length){var n=arguments[0],r=arguments[1];this.setQuadrantSegments(n),this.setEndCapStyle(r)}else if(4===arguments.length){var i=arguments[0],o=arguments[1],s=arguments[2],a=arguments[3];this.setQuadrantSegments(i),this.setEndCapStyle(o),this.setJoinStyle(s),this.setMitreLimit(a)}},Cp={CAP_ROUND:{configurable:!0},CAP_FLAT:{configurable:!0},CAP_SQUARE:{configurable:!0},JOIN_ROUND:{configurable:!0},JOIN_MITRE:{configurable:!0},JOIN_BEVEL:{configurable:!0},DEFAULT_QUADRANT_SEGMENTS:{configurable:!0},DEFAULT_MITRE_LIMIT:{configurable:!0},DEFAULT_SIMPLIFY_FACTOR:{configurable:!0}};Sp.prototype.getEndCapStyle=function(){return this._endCapStyle},Sp.prototype.isSingleSided=function(){return this._isSingleSided},Sp.prototype.setQuadrantSegments=function(t){this._quadrantSegments=t,0===this._quadrantSegments&&(this._joinStyle=Sp.JOIN_BEVEL),this._quadrantSegments<0&&(this._joinStyle=Sp.JOIN_MITRE,this._mitreLimit=Math.abs(this._quadrantSegments)),t<=0&&(this._quadrantSegments=1),this._joinStyle!==Sp.JOIN_ROUND&&(this._quadrantSegments=Sp.DEFAULT_QUADRANT_SEGMENTS)},Sp.prototype.getJoinStyle=function(){return this._joinStyle},Sp.prototype.setJoinStyle=function(t){this._joinStyle=t},Sp.prototype.setSimplifyFactor=function(t){this._simplifyFactor=t<0?0:t},Sp.prototype.getSimplifyFactor=function(){return this._simplifyFactor},Sp.prototype.getQuadrantSegments=function(){return this._quadrantSegments},Sp.prototype.setEndCapStyle=function(t){this._endCapStyle=t},Sp.prototype.getMitreLimit=function(){return this._mitreLimit},Sp.prototype.setMitreLimit=function(t){this._mitreLimit=t},Sp.prototype.setSingleSided=function(t){this._isSingleSided=t},Sp.prototype.interfaces_=function(){return[]},Sp.prototype.getClass=function(){return Sp},Sp.bufferDistanceError=function(t){var e=Math.PI/2/t;return 1-Math.cos(e/2)},Cp.CAP_ROUND.get=function(){return 1},Cp.CAP_FLAT.get=function(){return 2},Cp.CAP_SQUARE.get=function(){return 3},Cp.JOIN_ROUND.get=function(){return 1},Cp.JOIN_MITRE.get=function(){return 2},Cp.JOIN_BEVEL.get=function(){return 3},Cp.DEFAULT_QUADRANT_SEGMENTS.get=function(){return 8},Cp.DEFAULT_MITRE_LIMIT.get=function(){return 5},Cp.DEFAULT_SIMPLIFY_FACTOR.get=function(){return.01},Object.defineProperties(Sp,Cp);var Pp=function(t){this._distanceTol=null,this._isDeleted=null,this._angleOrientation=Xl.COUNTERCLOCKWISE,this._inputLine=t||null},Mp={INIT:{configurable:!0},DELETE:{configurable:!0},KEEP:{configurable:!0},NUM_PTS_TO_CHECK:{configurable:!0}};Pp.prototype.isDeletable=function(t,e,n,r){var i=this._inputLine[t],o=this._inputLine[e],s=this._inputLine[n];return!!this.isConcave(i,o,s)&&(!!this.isShallow(i,o,s,r)&&this.isShallowSampled(i,o,t,n,r))},Pp.prototype.deleteShallowConcavities=function(){for(var t=this,e=1,n=this.findNextNonDeletedIndex(e),r=this.findNextNonDeletedIndex(n),i=!1;r<this._inputLine.length;){var o=!1;t.isDeletable(e,n,r,t._distanceTol)&&(t._isDeleted[n]=Pp.DELETE,o=!0,i=!0),e=o?r:n,n=t.findNextNonDeletedIndex(e),r=t.findNextNonDeletedIndex(n)}return i},Pp.prototype.isShallowConcavity=function(t,e,n,r){return Xl.computeOrientation(t,e,n)===this._angleOrientation&&Xl.distancePointLine(e,t,n)<r},Pp.prototype.isShallowSampled=function(t,e,n,r,i){var o=Math.trunc((r-n)/Pp.NUM_PTS_TO_CHECK);o<=0&&(o=1);for(var s=n;s<r;s+=o)if(!this.isShallow(t,e,this._inputLine[s],i))return!1;return!0},Pp.prototype.isConcave=function(t,e,n){var r=Xl.computeOrientation(t,e,n)===this._angleOrientation;return r},Pp.prototype.simplify=function(t){this._distanceTol=Math.abs(t),t<0&&(this._angleOrientation=Xl.CLOCKWISE),this._isDeleted=new Array(this._inputLine.length).fill(null);var e=!1;do{e=this.deleteShallowConcavities()}while(e);return this.collapseLine()},Pp.prototype.findNextNonDeletedIndex=function(t){for(var e=t+1;e<this._inputLine.length&&this._isDeleted[e]===Pp.DELETE;)e++;return e},Pp.prototype.isShallow=function(t,e,n,r){return Xl.distancePointLine(e,t,n)<r},Pp.prototype.collapseLine=function(){for(var t=new hc,e=0;e<this._inputLine.length;e++)this._isDeleted[e]!==Pp.DELETE&&t.add(this._inputLine[e]);return t.toCoordinateArray()},Pp.prototype.interfaces_=function(){return[]},Pp.prototype.getClass=function(){return Pp},Pp.simplify=function(t,e){return new Pp(t).simplify(e)},Mp.INIT.get=function(){return 0},Mp.DELETE.get=function(){return 1},Mp.KEEP.get=function(){return 1},Mp.NUM_PTS_TO_CHECK.get=function(){return 10},Object.defineProperties(Pp,Mp);var Lp=function(){this._ptList=null,this._precisionModel=null,this._minimimVertexDistance=0,this._ptList=new lc},Op={COORDINATE_ARRAY_TYPE:{configurable:!0}};Lp.prototype.getCoordinates=function(){return this._ptList.toArray(Lp.COORDINATE_ARRAY_TYPE)},Lp.prototype.setPrecisionModel=function(t){this._precisionModel=t},Lp.prototype.addPt=function(t){var e=new ul(t);if(this._precisionModel.makePrecise(e),this.isRedundant(e))return null;this._ptList.add(e)},Lp.prototype.revere=function(){},Lp.prototype.addPts=function(t,e){if(e)for(var n=0;n<t.length;n++)this.addPt(t[n]);else for(var r=t.length-1;r>=0;r--)this.addPt(t[r])},Lp.prototype.isRedundant=function(t){if(this._ptList.size()<1)return!1;var e=this._ptList.get(this._ptList.size()-1);return t.distance(e)<this._minimimVertexDistance},Lp.prototype.toString=function(){return(new _h).createLineString(this.getCoordinates()).toString()},Lp.prototype.closeRing=function(){if(this._ptList.size()<1)return null;var t=new ul(this._ptList.get(0)),e=this._ptList.get(this._ptList.size()-1);if(t.equals(e))return null;this._ptList.add(t)},Lp.prototype.setMinimumVertexDistance=function(t){this._minimimVertexDistance=t},Lp.prototype.interfaces_=function(){return[]},Lp.prototype.getClass=function(){return Lp},Op.COORDINATE_ARRAY_TYPE.get=function(){return new Array(0).fill(null)},Object.defineProperties(Lp,Op);var Rp=function(){},Tp={PI_TIMES_2:{configurable:!0},PI_OVER_2:{configurable:!0},PI_OVER_4:{configurable:!0},COUNTERCLOCKWISE:{configurable:!0},CLOCKWISE:{configurable:!0},NONE:{configurable:!0}};Rp.prototype.interfaces_=function(){return[]},Rp.prototype.getClass=function(){return Rp},Rp.toDegrees=function(t){return 180*t/Math.PI},Rp.normalize=function(t){for(;t>Math.PI;)t-=Rp.PI_TIMES_2;for(;t<=-Math.PI;)t+=Rp.PI_TIMES_2;return t},Rp.angle=function(){if(1===arguments.length){var t=arguments[0];return Math.atan2(t.y,t.x)}if(2===arguments.length){var e=arguments[0],n=arguments[1],r=n.x-e.x,i=n.y-e.y;return Math.atan2(i,r)}},Rp.isAcute=function(t,e,n){var r=t.x-e.x,i=t.y-e.y;return r*(n.x-e.x)+i*(n.y-e.y)>0},Rp.isObtuse=function(t,e,n){var r=t.x-e.x,i=t.y-e.y;return r*(n.x-e.x)+i*(n.y-e.y)<0},Rp.interiorAngle=function(t,e,n){var r=Rp.angle(e,t),i=Rp.angle(e,n);return Math.abs(i-r)},Rp.normalizePositive=function(t){if(t<0){for(;t<0;)t+=Rp.PI_TIMES_2;t>=Rp.PI_TIMES_2&&(t=0)}else{for(;t>=Rp.PI_TIMES_2;)t-=Rp.PI_TIMES_2;t<0&&(t=0)}return t},Rp.angleBetween=function(t,e,n){var r=Rp.angle(e,t),i=Rp.angle(e,n);return Rp.diff(r,i)},Rp.diff=function(t,e){var n=null;return(n=t<e?e-t:t-e)>Math.PI&&(n=2*Math.PI-n),n},Rp.toRadians=function(t){return t*Math.PI/180},Rp.getTurn=function(t,e){var n=Math.sin(e-t);return n>0?Rp.COUNTERCLOCKWISE:n<0?Rp.CLOCKWISE:Rp.NONE},Rp.angleBetweenOriented=function(t,e,n){var r=Rp.angle(e,t),i=Rp.angle(e,n)-r;return i<=-Math.PI?i+Rp.PI_TIMES_2:i>Math.PI?i-Rp.PI_TIMES_2:i},Tp.PI_TIMES_2.get=function(){return 2*Math.PI},Tp.PI_OVER_2.get=function(){return Math.PI/2},Tp.PI_OVER_4.get=function(){return Math.PI/4},Tp.COUNTERCLOCKWISE.get=function(){return Xl.COUNTERCLOCKWISE},Tp.CLOCKWISE.get=function(){return Xl.CLOCKWISE},Tp.NONE.get=function(){return Xl.COLLINEAR},Object.defineProperties(Rp,Tp);var Ap=function t(){this._maxCurveSegmentError=0,this._filletAngleQuantum=null,this._closingSegLengthFactor=1,this._segList=null,this._distance=0,this._precisionModel=null,this._bufParams=null,this._li=null,this._s0=null,this._s1=null,this._s2=null,this._seg0=new vp,this._seg1=new vp,this._offset0=new vp,this._offset1=new vp,this._side=0,this._hasNarrowConcaveAngle=!1;var e=arguments[0],n=arguments[1],r=arguments[2];this._precisionModel=e,this._bufParams=n,this._li=new jl,this._filletAngleQuantum=Math.PI/2/n.getQuadrantSegments(),n.getQuadrantSegments()>=8&&n.getJoinStyle()===Sp.JOIN_ROUND&&(this._closingSegLengthFactor=t.MAX_CLOSING_SEG_LEN_FACTOR),this.init(r)},Dp={OFFSET_SEGMENT_SEPARATION_FACTOR:{configurable:!0},INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR:{configurable:!0},CURVE_VERTEX_SNAP_DISTANCE_FACTOR:{configurable:!0},MAX_CLOSING_SEG_LEN_FACTOR:{configurable:!0}};Ap.prototype.addNextSegment=function(t,e){if(this._s0=this._s1,this._s1=this._s2,this._s2=t,this._seg0.setCoordinates(this._s0,this._s1),this.computeOffsetSegment(this._seg0,this._side,this._distance,this._offset0),this._seg1.setCoordinates(this._s1,this._s2),this.computeOffsetSegment(this._seg1,this._side,this._distance,this._offset1),this._s1.equals(this._s2))return null;var n=Xl.computeOrientation(this._s0,this._s1,this._s2),r=n===Xl.CLOCKWISE&&this._side===Sh.LEFT||n===Xl.COUNTERCLOCKWISE&&this._side===Sh.RIGHT;0===n?this.addCollinear(e):r?this.addOutsideTurn(n,e):this.addInsideTurn(n,e)},Ap.prototype.addLineEndCap=function(t,e){var n=new vp(t,e),r=new vp;this.computeOffsetSegment(n,Sh.LEFT,this._distance,r);var i=new vp;this.computeOffsetSegment(n,Sh.RIGHT,this._distance,i);var o=e.x-t.x,s=e.y-t.y,a=Math.atan2(s,o);switch(this._bufParams.getEndCapStyle()){case Sp.CAP_ROUND:this._segList.addPt(r.p1),this.addFilletArc(e,a+Math.PI/2,a-Math.PI/2,Xl.CLOCKWISE,this._distance),this._segList.addPt(i.p1);break;case Sp.CAP_FLAT:this._segList.addPt(r.p1),this._segList.addPt(i.p1);break;case Sp.CAP_SQUARE:var u=new ul;u.x=Math.abs(this._distance)*Math.cos(a),u.y=Math.abs(this._distance)*Math.sin(a);var l=new ul(r.p1.x+u.x,r.p1.y+u.y),c=new ul(i.p1.x+u.x,i.p1.y+u.y);this._segList.addPt(l),this._segList.addPt(c)}},Ap.prototype.getCoordinates=function(){return this._segList.getCoordinates()},Ap.prototype.addMitreJoin=function(t,e,n,r){var i=!0,o=null;try{o=Ml.intersection(e.p0,e.p1,n.p0,n.p1),(r<=0?1:o.distance(t)/Math.abs(r))>this._bufParams.getMitreLimit()&&(i=!1)}catch(t){if(!(t instanceof Cl))throw t;o=new ul(0,0),i=!1}i?this._segList.addPt(o):this.addLimitedMitreJoin(e,n,r,this._bufParams.getMitreLimit())},Ap.prototype.addFilletCorner=function(t,e,n,r,i){var o=e.x-t.x,s=e.y-t.y,a=Math.atan2(s,o),u=n.x-t.x,l=n.y-t.y,c=Math.atan2(l,u);r===Xl.CLOCKWISE?a<=c&&(a+=2*Math.PI):a>=c&&(a-=2*Math.PI),this._segList.addPt(e),this.addFilletArc(t,a,c,r,i),this._segList.addPt(n)},Ap.prototype.addOutsideTurn=function(t,e){if(this._offset0.p1.distance(this._offset1.p0)<this._distance*Ap.OFFSET_SEGMENT_SEPARATION_FACTOR)return this._segList.addPt(this._offset0.p1),null;this._bufParams.getJoinStyle()===Sp.JOIN_MITRE?this.addMitreJoin(this._s1,this._offset0,this._offset1,this._distance):this._bufParams.getJoinStyle()===Sp.JOIN_BEVEL?this.addBevelJoin(this._offset0,this._offset1):(e&&this._segList.addPt(this._offset0.p1),this.addFilletCorner(this._s1,this._offset0.p1,this._offset1.p0,t,this._distance),this._segList.addPt(this._offset1.p0))},Ap.prototype.createSquare=function(t){this._segList.addPt(new ul(t.x+this._distance,t.y+this._distance)),this._segList.addPt(new ul(t.x+this._distance,t.y-this._distance)),this._segList.addPt(new ul(t.x-this._distance,t.y-this._distance)),this._segList.addPt(new ul(t.x-this._distance,t.y+this._distance)),this._segList.closeRing()},Ap.prototype.addSegments=function(t,e){this._segList.addPts(t,e)},Ap.prototype.addFirstSegment=function(){this._segList.addPt(this._offset1.p0)},Ap.prototype.addLastSegment=function(){this._segList.addPt(this._offset1.p1)},Ap.prototype.initSideSegments=function(t,e,n){this._s1=t,this._s2=e,this._side=n,this._seg1.setCoordinates(t,e),this.computeOffsetSegment(this._seg1,n,this._distance,this._offset1)},Ap.prototype.addLimitedMitreJoin=function(t,e,n,r){var i=this._seg0.p1,o=Rp.angle(i,this._seg0.p0),s=Rp.angleBetweenOriented(this._seg0.p0,i,this._seg1.p1)/2,a=Rp.normalize(o+s),u=Rp.normalize(a+Math.PI),l=r*n,c=n-l*Math.abs(Math.sin(s)),h=i.x+l*Math.cos(u),p=i.y+l*Math.sin(u),f=new ul(h,p),g=new vp(i,f),d=g.pointAlongOffset(1,c),y=g.pointAlongOffset(1,-c);this._side===Sh.LEFT?(this._segList.addPt(d),this._segList.addPt(y)):(this._segList.addPt(y),this._segList.addPt(d))},Ap.prototype.computeOffsetSegment=function(t,e,n,r){var i=e===Sh.LEFT?1:-1,o=t.p1.x-t.p0.x,s=t.p1.y-t.p0.y,a=Math.sqrt(o*o+s*s),u=i*n*o/a,l=i*n*s/a;r.p0.x=t.p0.x-l,r.p0.y=t.p0.y+u,r.p1.x=t.p1.x-l,r.p1.y=t.p1.y+u},Ap.prototype.addFilletArc=function(t,e,n,r,i){var o=r===Xl.CLOCKWISE?-1:1,s=Math.abs(e-n),a=Math.trunc(s/this._filletAngleQuantum+.5);if(a<1)return null;for(var u=s/a,l=0,c=new ul;l<s;){var h=e+o*l;c.x=t.x+i*Math.cos(h),c.y=t.y+i*Math.sin(h),this._segList.addPt(c),l+=u}},Ap.prototype.addInsideTurn=function(t,e){if(this._li.computeIntersection(this._offset0.p0,this._offset0.p1,this._offset1.p0,this._offset1.p1),this._li.hasIntersection())this._segList.addPt(this._li.getIntersection(0));else if(this._hasNarrowConcaveAngle=!0,this._offset0.p1.distance(this._offset1.p0)<this._distance*Ap.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR)this._segList.addPt(this._offset0.p1);else{if(this._segList.addPt(this._offset0.p1),this._closingSegLengthFactor>0){var n=new ul((this._closingSegLengthFactor*this._offset0.p1.x+this._s1.x)/(this._closingSegLengthFactor+1),(this._closingSegLengthFactor*this._offset0.p1.y+this._s1.y)/(this._closingSegLengthFactor+1));this._segList.addPt(n);var r=new ul((this._closingSegLengthFactor*this._offset1.p0.x+this._s1.x)/(this._closingSegLengthFactor+1),(this._closingSegLengthFactor*this._offset1.p0.y+this._s1.y)/(this._closingSegLengthFactor+1));this._segList.addPt(r)}else this._segList.addPt(this._s1);this._segList.addPt(this._offset1.p0)}},Ap.prototype.createCircle=function(t){var e=new ul(t.x+this._distance,t.y);this._segList.addPt(e),this.addFilletArc(t,0,2*Math.PI,-1,this._distance),this._segList.closeRing()},Ap.prototype.addBevelJoin=function(t,e){this._segList.addPt(t.p1),this._segList.addPt(e.p0)},Ap.prototype.init=function(t){this._distance=t,this._maxCurveSegmentError=t*(1-Math.cos(this._filletAngleQuantum/2)),this._segList=new Lp,this._segList.setPrecisionModel(this._precisionModel),this._segList.setMinimumVertexDistance(t*Ap.CURVE_VERTEX_SNAP_DISTANCE_FACTOR)},Ap.prototype.addCollinear=function(t){this._li.computeIntersection(this._s0,this._s1,this._s1,this._s2),this._li.getIntersectionNum()>=2&&(this._bufParams.getJoinStyle()===Sp.JOIN_BEVEL||this._bufParams.getJoinStyle()===Sp.JOIN_MITRE?(t&&this._segList.addPt(this._offset0.p1),this._segList.addPt(this._offset1.p0)):this.addFilletCorner(this._s1,this._offset0.p1,this._offset1.p0,Xl.CLOCKWISE,this._distance))},Ap.prototype.closeRing=function(){this._segList.closeRing()},Ap.prototype.hasNarrowConcaveAngle=function(){return this._hasNarrowConcaveAngle},Ap.prototype.interfaces_=function(){return[]},Ap.prototype.getClass=function(){return Ap},Dp.OFFSET_SEGMENT_SEPARATION_FACTOR.get=function(){return.001},Dp.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR.get=function(){return.001},Dp.CURVE_VERTEX_SNAP_DISTANCE_FACTOR.get=function(){return 1e-6},Dp.MAX_CLOSING_SEG_LEN_FACTOR.get=function(){return 80},Object.defineProperties(Ap,Dp);var Fp=function(){this._distance=0,this._precisionModel=null,this._bufParams=null;var t=arguments[0],e=arguments[1];this._precisionModel=t,this._bufParams=e};Fp.prototype.getOffsetCurve=function(t,e){if(this._distance=e,0===e)return null;var n=e<0,r=Math.abs(e),i=this.getSegGen(r);t.length<=1?this.computePointCurve(t[0],i):this.computeOffsetCurve(t,n,i);var o=i.getCoordinates();return n&&pc.reverse(o),o},Fp.prototype.computeSingleSidedBufferCurve=function(t,e,n){var r=this.simplifyTolerance(this._distance);if(e){n.addSegments(t,!0);var i=Pp.simplify(t,-r),o=i.length-1;n.initSideSegments(i[o],i[o-1],Sh.LEFT),n.addFirstSegment();for(var s=o-2;s>=0;s--)n.addNextSegment(i[s],!0)}else{n.addSegments(t,!1);var a=Pp.simplify(t,r),u=a.length-1;n.initSideSegments(a[0],a[1],Sh.LEFT),n.addFirstSegment();for(var l=2;l<=u;l++)n.addNextSegment(a[l],!0)}n.addLastSegment(),n.closeRing()},Fp.prototype.computeRingBufferCurve=function(t,e,n){var r=this.simplifyTolerance(this._distance);e===Sh.RIGHT&&(r=-r);var i=Pp.simplify(t,r),o=i.length-1;n.initSideSegments(i[o-1],i[0],e);for(var s=1;s<=o;s++){var a=1!==s;n.addNextSegment(i[s],a)}n.closeRing()},Fp.prototype.computeLineBufferCurve=function(t,e){var n=this.simplifyTolerance(this._distance),r=Pp.simplify(t,n),i=r.length-1;e.initSideSegments(r[0],r[1],Sh.LEFT);for(var o=2;o<=i;o++)e.addNextSegment(r[o],!0);e.addLastSegment(),e.addLineEndCap(r[i-1],r[i]);var s=Pp.simplify(t,-n),a=s.length-1;e.initSideSegments(s[a],s[a-1],Sh.LEFT);for(var u=a-2;u>=0;u--)e.addNextSegment(s[u],!0);e.addLastSegment(),e.addLineEndCap(s[1],s[0]),e.closeRing()},Fp.prototype.computePointCurve=function(t,e){switch(this._bufParams.getEndCapStyle()){case Sp.CAP_ROUND:e.createCircle(t);break;case Sp.CAP_SQUARE:e.createSquare(t)}},Fp.prototype.getLineCurve=function(t,e){if(this._distance=e,e<0&&!this._bufParams.isSingleSided())return null;if(0===e)return null;var n=Math.abs(e),r=this.getSegGen(n);if(t.length<=1)this.computePointCurve(t[0],r);else if(this._bufParams.isSingleSided()){var i=e<0;this.computeSingleSidedBufferCurve(t,i,r)}else this.computeLineBufferCurve(t,r);return r.getCoordinates()},Fp.prototype.getBufferParameters=function(){return this._bufParams},Fp.prototype.simplifyTolerance=function(t){return t*this._bufParams.getSimplifyFactor()},Fp.prototype.getRingCurve=function(t,e,n){if(this._distance=n,t.length<=2)return this.getLineCurve(t,n);if(0===n)return Fp.copyCoordinates(t);var r=this.getSegGen(n);return this.computeRingBufferCurve(t,e,r),r.getCoordinates()},Fp.prototype.computeOffsetCurve=function(t,e,n){var r=this.simplifyTolerance(this._distance);if(e){var i=Pp.simplify(t,-r),o=i.length-1;n.initSideSegments(i[o],i[o-1],Sh.LEFT),n.addFirstSegment();for(var s=o-2;s>=0;s--)n.addNextSegment(i[s],!0)}else{var a=Pp.simplify(t,r),u=a.length-1;n.initSideSegments(a[0],a[1],Sh.LEFT),n.addFirstSegment();for(var l=2;l<=u;l++)n.addNextSegment(a[l],!0)}n.addLastSegment()},Fp.prototype.getSegGen=function(t){return new Ap(this._precisionModel,this._bufParams,t)},Fp.prototype.interfaces_=function(){return[]},Fp.prototype.getClass=function(){return Fp},Fp.copyCoordinates=function(t){for(var e=new Array(t.length).fill(null),n=0;n<e.length;n++)e[n]=new ul(t[n]);return e};var kp=function(){this._subgraphs=null,this._seg=new vp,this._cga=new Xl;var t=arguments[0];this._subgraphs=t},Gp={DepthSegment:{configurable:!0}};kp.prototype.findStabbedSegments=function(){var t=this;if(1===arguments.length){for(var e=arguments[0],n=new lc,r=this._subgraphs.iterator();r.hasNext();){var i=r.next(),o=i.getEnvelope();e.y<o.getMinY()||e.y>o.getMaxY()||t.findStabbedSegments(e,i.getDirectedEdges(),n)}return n}if(3===arguments.length)if(gl(arguments[2],ac)&&arguments[0]instanceof ul&&arguments[1]instanceof Xh)for(var s=arguments[0],a=arguments[1],u=arguments[2],l=a.getEdge().getCoordinates(),c=0;c<l.length-1;c++){t._seg.p0=l[c],t._seg.p1=l[c+1],t._seg.p0.y>t._seg.p1.y&&t._seg.reverse();var h=Math.max(t._seg.p0.x,t._seg.p1.x);if(!(h<s.x)&&!(t._seg.isHorizontal()||s.y<t._seg.p0.y||s.y>t._seg.p1.y||Xl.computeOrientation(t._seg.p0,t._seg.p1,s)===Xl.RIGHT)){var p=a.getDepth(Sh.LEFT);t._seg.p0.equals(l[c])||(p=a.getDepth(Sh.RIGHT));var f=new qp(t._seg,p);u.add(f)}}else if(gl(arguments[2],ac)&&arguments[0]instanceof ul&&gl(arguments[1],ac))for(var g=arguments[0],d=arguments[1],y=arguments[2],v=d.iterator();v.hasNext();){var _=v.next();_.isForward()&&t.findStabbedSegments(g,_,y)}},kp.prototype.getDepth=function(t){var e=this.findStabbedSegments(t);return 0===e.size()?0:np.min(e)._leftDepth},kp.prototype.interfaces_=function(){return[]},kp.prototype.getClass=function(){return kp},Gp.DepthSegment.get=function(){return qp},Object.defineProperties(kp,Gp);var qp=function(){this._upwardSeg=null,this._leftDepth=null;var t=arguments[0],e=arguments[1];this._upwardSeg=new vp(t),this._leftDepth=e};qp.prototype.compareTo=function(t){var e=t;if(this._upwardSeg.minX()>=e._upwardSeg.maxX())return 1;if(this._upwardSeg.maxX()<=e._upwardSeg.minX())return-1;var n=this._upwardSeg.orientationIndex(e._upwardSeg);return 0!==n||0!==(n=-1*e._upwardSeg.orientationIndex(this._upwardSeg))?n:this._upwardSeg.compareTo(e._upwardSeg)},qp.prototype.compareX=function(t,e){var n=t.p0.compareTo(e.p0);return 0!==n?n:t.p1.compareTo(e.p1)},qp.prototype.toString=function(){return this._upwardSeg.toString()},qp.prototype.interfaces_=function(){return[il]},qp.prototype.getClass=function(){return qp};var Bp=function(t,e,n){this.p0=t||null,this.p1=e||null,this.p2=n||null};Bp.prototype.area=function(){return Bp.area(this.p0,this.p1,this.p2)},Bp.prototype.signedArea=function(){return Bp.signedArea(this.p0,this.p1,this.p2)},Bp.prototype.interpolateZ=function(t){if(null===t)throw new el("Supplied point is null.");return Bp.interpolateZ(t,this.p0,this.p1,this.p2)},Bp.prototype.longestSideLength=function(){return Bp.longestSideLength(this.p0,this.p1,this.p2)},Bp.prototype.isAcute=function(){return Bp.isAcute(this.p0,this.p1,this.p2)},Bp.prototype.circumcentre=function(){return Bp.circumcentre(this.p0,this.p1,this.p2)},Bp.prototype.area3D=function(){return Bp.area3D(this.p0,this.p1,this.p2)},Bp.prototype.centroid=function(){return Bp.centroid(this.p0,this.p1,this.p2)},Bp.prototype.inCentre=function(){return Bp.inCentre(this.p0,this.p1,this.p2)},Bp.prototype.interfaces_=function(){return[]},Bp.prototype.getClass=function(){return Bp},Bp.area=function(t,e,n){return Math.abs(((n.x-t.x)*(e.y-t.y)-(e.x-t.x)*(n.y-t.y))/2)},Bp.signedArea=function(t,e,n){return((n.x-t.x)*(e.y-t.y)-(e.x-t.x)*(n.y-t.y))/2},Bp.det=function(t,e,n,r){return t*r-e*n},Bp.interpolateZ=function(t,e,n,r){var i=e.x,o=e.y,s=n.x-i,a=r.x-i,u=n.y-o,l=r.y-o,c=s*l-a*u,h=t.x-i,p=t.y-o,f=(l*h-a*p)/c,g=(-u*h+s*p)/c;return e.z+f*(n.z-e.z)+g*(r.z-e.z)},Bp.longestSideLength=function(t,e,n){var r=t.distance(e),i=e.distance(n),o=n.distance(t),s=r;return i>s&&(s=i),o>s&&(s=o),s},Bp.isAcute=function(t,e,n){return!!Rp.isAcute(t,e,n)&&(!!Rp.isAcute(e,n,t)&&!!Rp.isAcute(n,t,e))},Bp.circumcentre=function(t,e,n){var r=n.x,i=n.y,o=t.x-r,s=t.y-i,a=e.x-r,u=e.y-i,l=2*Bp.det(o,s,a,u),c=Bp.det(s,o*o+s*s,u,a*a+u*u),h=Bp.det(o,o*o+s*s,a,a*a+u*u);return new ul(r-c/l,i+h/l)},Bp.perpendicularBisector=function(t,e){var n=e.x-t.x,r=e.y-t.y,i=new Ml(t.x+n/2,t.y+r/2,1),o=new Ml(t.x-r+n/2,t.y+n+r/2,1);return new Ml(i,o)},Bp.angleBisector=function(t,e,n){var r=e.distance(t),i=r/(r+e.distance(n)),o=n.x-t.x,s=n.y-t.y;return new ul(t.x+i*o,t.y+i*s)},Bp.area3D=function(t,e,n){var r=e.x-t.x,i=e.y-t.y,o=e.z-t.z,s=n.x-t.x,a=n.y-t.y,u=n.z-t.z,l=i*u-o*a,c=o*s-r*u,h=r*a-i*s,p=l*l+c*c+h*h,f=Math.sqrt(p)/2;return f},Bp.centroid=function(t,e,n){var r=(t.x+e.x+n.x)/3,i=(t.y+e.y+n.y)/3;return new ul(r,i)},Bp.inCentre=function(t,e,n){var r=e.distance(n),i=t.distance(n),o=t.distance(e),s=r+i+o,a=(r*t.x+i*e.x+o*n.x)/s,u=(r*t.y+i*e.y+o*n.y)/s;return new ul(a,u)};var zp=function(){this._inputGeom=null,this._distance=null,this._curveBuilder=null,this._curveList=new lc;var t=arguments[0],e=arguments[1],n=arguments[2];this._inputGeom=t,this._distance=e,this._curveBuilder=n};zp.prototype.addPoint=function(t){if(this._distance<=0)return null;var e=t.getCoordinates(),n=this._curveBuilder.getLineCurve(e,this._distance);this.addCurve(n,pl.EXTERIOR,pl.INTERIOR)},zp.prototype.addPolygon=function(t){var e=this,n=this._distance,r=Sh.LEFT;this._distance<0&&(n=-this._distance,r=Sh.RIGHT);var i=t.getExteriorRing(),o=pc.removeRepeatedPoints(i.getCoordinates());if(this._distance<0&&this.isErodedCompletely(i,this._distance))return null;if(this._distance<=0&&o.length<3)return null;this.addPolygonRing(o,n,r,pl.EXTERIOR,pl.INTERIOR);for(var s=0;s<t.getNumInteriorRing();s++){var a=t.getInteriorRingN(s),u=pc.removeRepeatedPoints(a.getCoordinates());e._distance>0&&e.isErodedCompletely(a,-e._distance)||e.addPolygonRing(u,n,Sh.opposite(r),pl.INTERIOR,pl.EXTERIOR)}},zp.prototype.isTriangleErodedCompletely=function(t,e){var n=new Bp(t[0],t[1],t[2]),r=n.inCentre();return Xl.distancePointLine(r,n.p0,n.p1)<Math.abs(e)},zp.prototype.addLineString=function(t){if(this._distance<=0&&!this._curveBuilder.getBufferParameters().isSingleSided())return null;var e=pc.removeRepeatedPoints(t.getCoordinates()),n=this._curveBuilder.getLineCurve(e,this._distance);this.addCurve(n,pl.EXTERIOR,pl.INTERIOR)},zp.prototype.addCurve=function(t,e,n){if(null===t||t.length<2)return null;var r=new yp(t,new Dh(0,pl.BOUNDARY,e,n));this._curveList.add(r)},zp.prototype.getCurves=function(){return this.add(this._inputGeom),this._curveList},zp.prototype.addPolygonRing=function(t,e,n,r,i){if(0===e&&t.length<nh.MINIMUM_VALID_SIZE)return null;var o=r,s=i;t.length>=nh.MINIMUM_VALID_SIZE&&Xl.isCCW(t)&&(o=i,s=r,n=Sh.opposite(n));var a=this._curveBuilder.getRingCurve(t,n,e);this.addCurve(a,o,s)},zp.prototype.add=function(t){if(t.isEmpty())return null;t instanceof th?this.addPolygon(t):t instanceof Zc?this.addLineString(t):t instanceof Qc?this.addPoint(t):(t instanceof eh||t instanceof Gc||t instanceof rh||t instanceof kc)&&this.addCollection(t)},zp.prototype.isErodedCompletely=function(t,e){var n=t.getCoordinates();if(n.length<4)return e<0;if(4===n.length)return this.isTriangleErodedCompletely(n,e);var r=t.getEnvelopeInternal(),i=Math.min(r.getHeight(),r.getWidth());return e<0&&2*Math.abs(e)>i},zp.prototype.addCollection=function(t){for(var e=0;e<t.getNumGeometries();e++){var n=t.getGeometryN(e);this.add(n)}},zp.prototype.interfaces_=function(){return[]},zp.prototype.getClass=function(){return zp};var jp=function(){};jp.prototype.locate=function(t){},jp.prototype.interfaces_=function(){return[]},jp.prototype.getClass=function(){return jp};var Up=function(){this._parent=null,this._atStart=null,this._max=null,this._index=null,this._subcollectionIterator=null;var t=arguments[0];this._parent=t,this._atStart=!0,this._index=0,this._max=t.getNumGeometries()};Up.prototype.next=function(){if(this._atStart)return this._atStart=!1,Up.isAtomic(this._parent)&&this._index++,this._parent;if(null!==this._subcollectionIterator){if(this._subcollectionIterator.hasNext())return this._subcollectionIterator.next();this._subcollectionIterator=null}if(this._index>=this._max)throw new uc;var t=this._parent.getGeometryN(this._index++);return t instanceof kc?(this._subcollectionIterator=new Up(t),this._subcollectionIterator.next()):t},Up.prototype.remove=function(){throw new Error(this.getClass().getName())},Up.prototype.hasNext=function(){if(this._atStart)return!0;if(null!==this._subcollectionIterator){if(this._subcollectionIterator.hasNext())return!0;this._subcollectionIterator=null}return!(this._index>=this._max)},Up.prototype.interfaces_=function(){return[sc]},Up.prototype.getClass=function(){return Up},Up.isAtomic=function(t){return!(t instanceof kc)};var Vp=function(){this._geom=null;var t=arguments[0];this._geom=t};Vp.prototype.locate=function(t){return Vp.locate(t,this._geom)},Vp.prototype.interfaces_=function(){return[jp]},Vp.prototype.getClass=function(){return Vp},Vp.isPointInRing=function(t,e){return!!e.getEnvelopeInternal().intersects(t)&&Xl.isPointInRing(t,e.getCoordinates())},Vp.containsPointInPolygon=function(t,e){if(e.isEmpty())return!1;var n=e.getExteriorRing();if(!Vp.isPointInRing(t,n))return!1;for(var r=0;r<e.getNumInteriorRing();r++){var i=e.getInteriorRingN(r);if(Vp.isPointInRing(t,i))return!1}return!0},Vp.containsPoint=function(t,e){if(e instanceof th)return Vp.containsPointInPolygon(t,e);if(e instanceof kc)for(var n=new Up(e);n.hasNext();){var r=n.next();if(r!==e&&Vp.containsPoint(t,r))return!0}return!1},Vp.locate=function(t,e){return e.isEmpty()?pl.EXTERIOR:Vp.containsPoint(t,e)?pl.INTERIOR:pl.EXTERIOR};var Xp=function(){this._edgeMap=new Cc,this._edgeList=null,this._ptInAreaLocation=[pl.NONE,pl.NONE]};Xp.prototype.getNextCW=function(t){this.getEdges();var e=this._edgeList.indexOf(t),n=e-1;return 0===e&&(n=this._edgeList.size()-1),this._edgeList.get(n)},Xp.prototype.propagateSideLabels=function(t){for(var e=pl.NONE,n=this.iterator();n.hasNext();){var r=n.next().getLabel();r.isArea(t)&&r.getLocation(t,Sh.LEFT)!==pl.NONE&&(e=r.getLocation(t,Sh.LEFT))}if(e===pl.NONE)return null;for(var i=e,o=this.iterator();o.hasNext();){var s=o.next(),a=s.getLabel();if(a.getLocation(t,Sh.ON)===pl.NONE&&a.setLocation(t,Sh.ON,i),a.isArea(t)){var u=a.getLocation(t,Sh.LEFT),l=a.getLocation(t,Sh.RIGHT);if(l!==pl.NONE){if(l!==i)throw new Oh("side location conflict",s.getCoordinate());u===pl.NONE&&ql.shouldNeverReachHere("found single null side (at "+s.getCoordinate()+")"),i=u}else ql.isTrue(a.getLocation(t,Sh.LEFT)===pl.NONE,"found single null side"),a.setLocation(t,Sh.RIGHT,i),a.setLocation(t,Sh.LEFT,i)}}},Xp.prototype.getCoordinate=function(){var t=this.iterator();return t.hasNext()?t.next().getCoordinate():null},Xp.prototype.print=function(t){Pl.out.println("EdgeEndStar:   "+this.getCoordinate());for(var e=this.iterator();e.hasNext();){e.next().print(t)}},Xp.prototype.isAreaLabelsConsistent=function(t){return this.computeEdgeEndLabels(t.getBoundaryNodeRule()),this.checkAreaLabelsConsistent(0)},Xp.prototype.checkAreaLabelsConsistent=function(t){var e=this.getEdges();if(e.size()<=0)return!0;var n=e.size()-1,r=e.get(n).getLabel().getLocation(t,Sh.LEFT);ql.isTrue(r!==pl.NONE,"Found unlabelled area edge");for(var i=r,o=this.iterator();o.hasNext();){var s=o.next().getLabel();ql.isTrue(s.isArea(t),"Found non-area edge");var a=s.getLocation(t,Sh.LEFT),u=s.getLocation(t,Sh.RIGHT);if(a===u)return!1;if(u!==i)return!1;i=a}return!0},Xp.prototype.findIndex=function(t){this.iterator();for(var e=0;e<this._edgeList.size();e++){if(this._edgeList.get(e)===t)return e}return-1},Xp.prototype.iterator=function(){return this.getEdges().iterator()},Xp.prototype.getEdges=function(){return null===this._edgeList&&(this._edgeList=new lc(this._edgeMap.values())),this._edgeList},Xp.prototype.getLocation=function(t,e,n){return this._ptInAreaLocation[t]===pl.NONE&&(this._ptInAreaLocation[t]=Vp.locate(e,n[t].getGeometry())),this._ptInAreaLocation[t]},Xp.prototype.toString=function(){var t=new vl;t.append("EdgeEndStar:   "+this.getCoordinate()),t.append("\n");for(var e=this.iterator();e.hasNext();){var n=e.next();t.append(n),t.append("\n")}return t.toString()},Xp.prototype.computeEdgeEndLabels=function(t){for(var e=this.iterator();e.hasNext();){e.next().computeLabel(t)}},Xp.prototype.computeLabelling=function(t){this.computeEdgeEndLabels(t[0].getBoundaryNodeRule()),this.propagateSideLabels(0),this.propagateSideLabels(1);for(var e=[!1,!1],n=this.iterator();n.hasNext();)for(var r=n.next().getLabel(),i=0;i<2;i++)r.isLine(i)&&r.getLocation(i)===pl.BOUNDARY&&(e[i]=!0);for(var o=this.iterator();o.hasNext();)for(var s=o.next(),a=s.getLabel(),u=0;u<2;u++)if(a.isAnyNull(u)){var l=pl.NONE;if(e[u])l=pl.EXTERIOR;else{var c=s.getCoordinate();l=this.getLocation(u,c,t)}a.setAllLocationsIfNull(u,l)}},Xp.prototype.getDegree=function(){return this._edgeMap.size()},Xp.prototype.insertEdgeEnd=function(t,e){this._edgeMap.put(t,e),this._edgeList=null},Xp.prototype.interfaces_=function(){return[]},Xp.prototype.getClass=function(){return Xp};var Yp=function(t){function e(){t.call(this),this._resultAreaEdgeList=null,this._label=null,this._SCANNING_FOR_INCOMING=1,this._LINKING_TO_OUTGOING=2}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.linkResultDirectedEdges=function(){var t=this;this.getResultAreaEdges();for(var e=null,n=null,r=this._SCANNING_FOR_INCOMING,i=0;i<this._resultAreaEdgeList.size();i++){var o=t._resultAreaEdgeList.get(i),s=o.getSym();if(o.getLabel().isArea())switch(null===e&&o.isInResult()&&(e=o),r){case t._SCANNING_FOR_INCOMING:if(!s.isInResult())continue;n=s,r=t._LINKING_TO_OUTGOING;break;case t._LINKING_TO_OUTGOING:if(!o.isInResult())continue;n.setNext(o),r=t._SCANNING_FOR_INCOMING}}if(r===this._LINKING_TO_OUTGOING){if(null===e)throw new Oh("no outgoing dirEdge found",this.getCoordinate());ql.isTrue(e.isInResult(),"unable to link last incoming dirEdge"),n.setNext(e)}},e.prototype.insert=function(t){var e=t;this.insertEdgeEnd(e,e)},e.prototype.getRightmostEdge=function(){var t=this.getEdges(),e=t.size();if(e<1)return null;var n=t.get(0);if(1===e)return n;var r=t.get(e-1),i=n.getQuadrant(),o=r.getQuadrant();return jh.isNorthern(i)&&jh.isNorthern(o)?n:jh.isNorthern(i)||jh.isNorthern(o)?0!==n.getDy()?n:0!==r.getDy()?r:(ql.shouldNeverReachHere("found two horizontal edges incident on node"),null):r},e.prototype.print=function(t){Pl.out.println("DirectedEdgeStar: "+this.getCoordinate());for(var e=this.iterator();e.hasNext();){var n=e.next();t.print("out "),n.print(t),t.println(),t.print("in "),n.getSym().print(t),t.println()}},e.prototype.getResultAreaEdges=function(){if(null!==this._resultAreaEdgeList)return this._resultAreaEdgeList;this._resultAreaEdgeList=new lc;for(var t=this.iterator();t.hasNext();){var e=t.next();(e.isInResult()||e.getSym().isInResult())&&this._resultAreaEdgeList.add(e)}return this._resultAreaEdgeList},e.prototype.updateLabelling=function(t){for(var e=this.iterator();e.hasNext();){var n=e.next().getLabel();n.setAllLocationsIfNull(0,t.getLocation(0)),n.setAllLocationsIfNull(1,t.getLocation(1))}},e.prototype.linkAllDirectedEdges=function(){this.getEdges();for(var t=null,e=null,n=this._edgeList.size()-1;n>=0;n--){var r=this._edgeList.get(n),i=r.getSym();null===e&&(e=i),null!==t&&i.setNext(t),t=r}e.setNext(t)},e.prototype.computeDepths=function(){var t=this;if(1===arguments.length){var e=arguments[0],n=this.findIndex(e),r=e.getDepth(Sh.LEFT),i=e.getDepth(Sh.RIGHT),o=this.computeDepths(n+1,this._edgeList.size(),r),s=this.computeDepths(0,n,o);if(s!==i)throw new Oh("depth mismatch at "+e.getCoordinate())}else if(3===arguments.length){for(var a=arguments[0],u=arguments[1],l=arguments[2],c=l,h=a;h<u;h++){var p=t._edgeList.get(h);p.setEdgeDepths(Sh.RIGHT,c),c=p.getDepth(Sh.LEFT)}return c}},e.prototype.mergeSymLabels=function(){for(var t=this.iterator();t.hasNext();){var e=t.next();e.getLabel().merge(e.getSym().getLabel())}},e.prototype.linkMinimalDirectedEdges=function(t){for(var e=this,n=null,r=null,i=this._SCANNING_FOR_INCOMING,o=this._resultAreaEdgeList.size()-1;o>=0;o--){var s=e._resultAreaEdgeList.get(o),a=s.getSym();switch(null===n&&s.getEdgeRing()===t&&(n=s),i){case e._SCANNING_FOR_INCOMING:if(a.getEdgeRing()!==t)continue;r=a,i=e._LINKING_TO_OUTGOING;break;case e._LINKING_TO_OUTGOING:if(s.getEdgeRing()!==t)continue;r.setNextMin(s),i=e._SCANNING_FOR_INCOMING}}i===this._LINKING_TO_OUTGOING&&(ql.isTrue(null!==n,"found null for first outgoing dirEdge"),ql.isTrue(n.getEdgeRing()===t,"unable to link last incoming dirEdge"),r.setNextMin(n))},e.prototype.getOutgoingDegree=function(){if(0===arguments.length){for(var t=0,e=this.iterator();e.hasNext();){var n=e.next();n.isInResult()&&t++}return t}if(1===arguments.length){for(var r=arguments[0],i=0,o=this.iterator();o.hasNext();){var s=o.next();s.getEdgeRing()===r&&i++}return i}},e.prototype.getLabel=function(){return this._label},e.prototype.findCoveredLineEdges=function(){for(var t=pl.NONE,e=this.iterator();e.hasNext();){var n=e.next(),r=n.getSym();if(!n.isLineEdge()){if(n.isInResult()){t=pl.INTERIOR;break}if(r.isInResult()){t=pl.EXTERIOR;break}}}if(t===pl.NONE)return null;for(var i=t,o=this.iterator();o.hasNext();){var s=o.next(),a=s.getSym();s.isLineEdge()?s.getEdge().setCovered(i===pl.INTERIOR):(s.isInResult()&&(i=pl.EXTERIOR),a.isInResult()&&(i=pl.INTERIOR))}},e.prototype.computeLabelling=function(e){t.prototype.computeLabelling.call(this,e),this._label=new Dh(pl.NONE);for(var n=this.iterator();n.hasNext();)for(var r=n.next().getEdge().getLabel(),i=0;i<2;i++){var o=r.getLocation(i);o!==pl.INTERIOR&&o!==pl.BOUNDARY||this._label.setLocation(i,pl.INTERIOR)}},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(Xp),Hp=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createNode=function(t){return new Bh(t,new Yp)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(Yh),Wp=function t(){this._pts=null,this._orientation=null;var e=arguments[0];this._pts=e,this._orientation=t.orientation(e)};Wp.prototype.compareTo=function(t){var e=t;return Wp.compareOriented(this._pts,this._orientation,e._pts,e._orientation)},Wp.prototype.interfaces_=function(){return[il]},Wp.prototype.getClass=function(){return Wp},Wp.orientation=function(t){return 1===pc.increasingDirection(t)},Wp.compareOriented=function(t,e,n,r){for(var i=e?1:-1,o=r?1:-1,s=e?t.length:-1,a=r?n.length:-1,u=e?0:t.length-1,l=r?0:n.length-1;;){var c=t[u].compareTo(n[l]);if(0!==c)return c;var h=(u+=i)===s,p=(l+=o)===a;if(h&&!p)return-1;if(!h&&p)return 1;if(h&&p)return 0}};var Jp=function(){this._edges=new lc,this._ocaMap=new Cc};Jp.prototype.print=function(t){t.print("MULTILINESTRING ( ");for(var e=0;e<this._edges.size();e++){var n=this._edges.get(e);e>0&&t.print(","),t.print("(");for(var r=n.getCoordinates(),i=0;i<r.length;i++)i>0&&t.print(","),t.print(r[i].x+" "+r[i].y);t.println(")")}t.print(")  ")},Jp.prototype.addAll=function(t){for(var e=t.iterator();e.hasNext();)this.add(e.next())},Jp.prototype.findEdgeIndex=function(t){for(var e=0;e<this._edges.size();e++)if(this._edges.get(e).equals(t))return e;return-1},Jp.prototype.iterator=function(){return this._edges.iterator()},Jp.prototype.getEdges=function(){return this._edges},Jp.prototype.get=function(t){return this._edges.get(t)},Jp.prototype.findEqualEdge=function(t){var e=new Wp(t.getCoordinates());return this._ocaMap.get(e)},Jp.prototype.add=function(t){this._edges.add(t);var e=new Wp(t.getCoordinates());this._ocaMap.put(e,t)},Jp.prototype.interfaces_=function(){return[]},Jp.prototype.getClass=function(){return Jp};var Zp=function(){};Zp.prototype.processIntersections=function(t,e,n,r){},Zp.prototype.isDone=function(){},Zp.prototype.interfaces_=function(){return[]},Zp.prototype.getClass=function(){return Zp};var Kp=function(){this._hasIntersection=!1,this._hasProper=!1,this._hasProperInterior=!1,this._hasInterior=!1,this._properIntersectionPoint=null,this._li=null,this._isSelfIntersection=null,this.numIntersections=0,this.numInteriorIntersections=0,this.numProperIntersections=0,this.numTests=0;var t=arguments[0];this._li=t};Kp.prototype.isTrivialIntersection=function(t,e,n,r){if(t===n&&1===this._li.getIntersectionNum()){if(Kp.isAdjacentSegments(e,r))return!0;if(t.isClosed()){var i=t.size()-1;if(0===e&&r===i||0===r&&e===i)return!0}}return!1},Kp.prototype.getProperIntersectionPoint=function(){return this._properIntersectionPoint},Kp.prototype.hasProperInteriorIntersection=function(){return this._hasProperInterior},Kp.prototype.getLineIntersector=function(){return this._li},Kp.prototype.hasProperIntersection=function(){return this._hasProper},Kp.prototype.processIntersections=function(t,e,n,r){if(t===n&&e===r)return null;this.numTests++;var i=t.getCoordinates()[e],o=t.getCoordinates()[e+1],s=n.getCoordinates()[r],a=n.getCoordinates()[r+1];this._li.computeIntersection(i,o,s,a),this._li.hasIntersection()&&(this.numIntersections++,this._li.isInteriorIntersection()&&(this.numInteriorIntersections++,this._hasInterior=!0),this.isTrivialIntersection(t,e,n,r)||(this._hasIntersection=!0,t.addIntersections(this._li,e,0),n.addIntersections(this._li,r,1),this._li.isProper()&&(this.numProperIntersections++,this._hasProper=!0,this._hasProperInterior=!0)))},Kp.prototype.hasIntersection=function(){return this._hasIntersection},Kp.prototype.isDone=function(){return!1},Kp.prototype.hasInteriorIntersection=function(){return this._hasInterior},Kp.prototype.interfaces_=function(){return[Zp]},Kp.prototype.getClass=function(){return Kp},Kp.isAdjacentSegments=function(t,e){return 1===Math.abs(t-e)};var Qp=function(){this.coord=null,this.segmentIndex=null,this.dist=null;var t=arguments[0],e=arguments[1],n=arguments[2];this.coord=new ul(t),this.segmentIndex=e,this.dist=n};Qp.prototype.getSegmentIndex=function(){return this.segmentIndex},Qp.prototype.getCoordinate=function(){return this.coord},Qp.prototype.print=function(t){t.print(this.coord),t.print(" seg # = "+this.segmentIndex),t.println(" dist = "+this.dist)},Qp.prototype.compareTo=function(t){var e=t;return this.compare(e.segmentIndex,e.dist)},Qp.prototype.isEndPoint=function(t){return 0===this.segmentIndex&&0===this.dist||this.segmentIndex===t},Qp.prototype.toString=function(){return this.coord+" seg # = "+this.segmentIndex+" dist = "+this.dist},Qp.prototype.getDistance=function(){return this.dist},Qp.prototype.compare=function(t,e){return this.segmentIndex<t?-1:this.segmentIndex>t?1:this.dist<e?-1:this.dist>e?1:0},Qp.prototype.interfaces_=function(){return[il]},Qp.prototype.getClass=function(){return Qp};var $p=function(){this._nodeMap=new Cc,this.edge=null;var t=arguments[0];this.edge=t};$p.prototype.print=function(t){t.println("Intersections:");for(var e=this.iterator();e.hasNext();){e.next().print(t)}},$p.prototype.iterator=function(){return this._nodeMap.values().iterator()},$p.prototype.addSplitEdges=function(t){this.addEndpoints();for(var e=this.iterator(),n=e.next();e.hasNext();){var r=e.next(),i=this.createSplitEdge(n,r);t.add(i),n=r}},$p.prototype.addEndpoints=function(){var t=this.edge.pts.length-1;this.add(this.edge.pts[0],0,0),this.add(this.edge.pts[t],t,0)},$p.prototype.createSplitEdge=function(t,e){var n=e.segmentIndex-t.segmentIndex+2,r=this.edge.pts[e.segmentIndex],i=e.dist>0||!e.coord.equals2D(r);i||n--;var o=new Array(n).fill(null),s=0;o[s++]=new ul(t.coord);for(var a=t.segmentIndex+1;a<=e.segmentIndex;a++)o[s++]=this.edge.pts[a];return i&&(o[s]=e.coord),new of(o,new Dh(this.edge._label))},$p.prototype.add=function(t,e,n){var r=new Qp(t,e,n),i=this._nodeMap.get(r);return null!==i?i:(this._nodeMap.put(r,r),r)},$p.prototype.isIntersection=function(t){for(var e=this.iterator();e.hasNext();){if(e.next().coord.equals(t))return!0}return!1},$p.prototype.interfaces_=function(){return[]},$p.prototype.getClass=function(){return $p};var tf=function(){};tf.prototype.getChainStartIndices=function(t){var e=0,n=new lc;n.add(new _l(e));do{var r=this.findChainEnd(t,e);n.add(new _l(r)),e=r}while(e<t.length-1);return tf.toIntArray(n)},tf.prototype.findChainEnd=function(t,e){for(var n=jh.quadrant(t[e],t[e+1]),r=e+1;r<t.length;){if(jh.quadrant(t[r-1],t[r])!==n)break;r++}return r-1},tf.prototype.interfaces_=function(){return[]},tf.prototype.getClass=function(){return tf},tf.toIntArray=function(t){for(var e=new Array(t.size()).fill(null),n=0;n<e.length;n++)e[n]=t.get(n).intValue();return e};var ef=function(){this.e=null,this.pts=null,this.startIndex=null,this.env1=new Ll,this.env2=new Ll;var t=arguments[0];this.e=t,this.pts=t.getCoordinates();var e=new tf;this.startIndex=e.getChainStartIndices(this.pts)};ef.prototype.getCoordinates=function(){return this.pts},ef.prototype.getMaxX=function(t){var e=this.pts[this.startIndex[t]].x,n=this.pts[this.startIndex[t+1]].x;return e>n?e:n},ef.prototype.getMinX=function(t){var e=this.pts[this.startIndex[t]].x,n=this.pts[this.startIndex[t+1]].x;return e<n?e:n},ef.prototype.computeIntersectsForChain=function(){if(4===arguments.length){var t=arguments[0],e=arguments[1],n=arguments[2],r=arguments[3];this.computeIntersectsForChain(this.startIndex[t],this.startIndex[t+1],e,e.startIndex[n],e.startIndex[n+1],r)}else if(6===arguments.length){var i=arguments[0],o=arguments[1],s=arguments[2],a=arguments[3],u=arguments[4],l=arguments[5],c=this.pts[i],h=this.pts[o],p=s.pts[a],f=s.pts[u];if(o-i==1&&u-a==1)return l.addIntersections(this.e,i,s.e,a),null;if(this.env1.init(c,h),this.env2.init(p,f),!this.env1.intersects(this.env2))return null;var g=Math.trunc((i+o)/2),d=Math.trunc((a+u)/2);i<g&&(a<d&&this.computeIntersectsForChain(i,g,s,a,d,l),d<u&&this.computeIntersectsForChain(i,g,s,d,u,l)),g<o&&(a<d&&this.computeIntersectsForChain(g,o,s,a,d,l),d<u&&this.computeIntersectsForChain(g,o,s,d,u,l))}},ef.prototype.getStartIndexes=function(){return this.startIndex},ef.prototype.computeIntersects=function(t,e){for(var n=0;n<this.startIndex.length-1;n++)for(var r=0;r<t.startIndex.length-1;r++)this.computeIntersectsForChain(n,t,r,e)},ef.prototype.interfaces_=function(){return[]},ef.prototype.getClass=function(){return ef};var nf=function t(){this._depth=Array(2).fill().map((function(){return Array(3)}));for(var e=0;e<2;e++)for(var n=0;n<3;n++)this._depth[e][n]=t.NULL_VALUE},rf={NULL_VALUE:{configurable:!0}};nf.prototype.getDepth=function(t,e){return this._depth[t][e]},nf.prototype.setDepth=function(t,e,n){this._depth[t][e]=n},nf.prototype.isNull=function(){var t=this;if(0===arguments.length){for(var e=0;e<2;e++)for(var n=0;n<3;n++)if(t._depth[e][n]!==nf.NULL_VALUE)return!1;return!0}if(1===arguments.length){var r=arguments[0];return this._depth[r][1]===nf.NULL_VALUE}if(2===arguments.length){var i=arguments[0],o=arguments[1];return this._depth[i][o]===nf.NULL_VALUE}},nf.prototype.normalize=function(){for(var t=this,e=0;e<2;e++)if(!t.isNull(e)){var n=t._depth[e][1];t._depth[e][2]<n&&(n=t._depth[e][2]),n<0&&(n=0);for(var r=1;r<3;r++){var i=0;t._depth[e][r]>n&&(i=1),t._depth[e][r]=i}}},nf.prototype.getDelta=function(t){return this._depth[t][Sh.RIGHT]-this._depth[t][Sh.LEFT]},nf.prototype.getLocation=function(t,e){return this._depth[t][e]<=0?pl.EXTERIOR:pl.INTERIOR},nf.prototype.toString=function(){return"A: "+this._depth[0][1]+","+this._depth[0][2]+" B: "+this._depth[1][1]+","+this._depth[1][2]},nf.prototype.add=function(){var t=this;if(1===arguments.length)for(var e=arguments[0],n=0;n<2;n++)for(var r=1;r<3;r++){var i=e.getLocation(n,r);i!==pl.EXTERIOR&&i!==pl.INTERIOR||(t.isNull(n,r)?t._depth[n][r]=nf.depthAtLocation(i):t._depth[n][r]+=nf.depthAtLocation(i))}else if(3===arguments.length){var o=arguments[0],s=arguments[1],a=arguments[2];a===pl.INTERIOR&&this._depth[o][s]++}},nf.prototype.interfaces_=function(){return[]},nf.prototype.getClass=function(){return nf},nf.depthAtLocation=function(t){return t===pl.EXTERIOR?0:t===pl.INTERIOR?1:nf.NULL_VALUE},rf.NULL_VALUE.get=function(){return-1},Object.defineProperties(nf,rf);var of=function(t){function e(){if(t.call(this),this.pts=null,this._env=null,this.eiList=new $p(this),this._name=null,this._mce=null,this._isIsolated=!0,this._depth=new nf,this._depthDelta=0,1===arguments.length){var n=arguments[0];e.call(this,n,null)}else if(2===arguments.length){var r=arguments[0],i=arguments[1];this.pts=r,this._label=i}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDepth=function(){return this._depth},e.prototype.getCollapsedEdge=function(){var t=new Array(2).fill(null);return t[0]=this.pts[0],t[1]=this.pts[1],new e(t,Dh.toLineLabel(this._label))},e.prototype.isIsolated=function(){return this._isIsolated},e.prototype.getCoordinates=function(){return this.pts},e.prototype.setIsolated=function(t){this._isIsolated=t},e.prototype.setName=function(t){this._name=t},e.prototype.equals=function(t){if(!(t instanceof e))return!1;var n=t;if(this.pts.length!==n.pts.length)return!1;for(var r=!0,i=!0,o=this.pts.length,s=0;s<this.pts.length;s++)if(this.pts[s].equals2D(n.pts[s])||(r=!1),this.pts[s].equals2D(n.pts[--o])||(i=!1),!r&&!i)return!1;return!0},e.prototype.getCoordinate=function(){if(0===arguments.length)return this.pts.length>0?this.pts[0]:null;if(1===arguments.length){var t=arguments[0];return this.pts[t]}},e.prototype.print=function(t){t.print("edge "+this._name+": "),t.print("LINESTRING (");for(var e=0;e<this.pts.length;e++)e>0&&t.print(","),t.print(this.pts[e].x+" "+this.pts[e].y);t.print(")  "+this._label+" "+this._depthDelta)},e.prototype.computeIM=function(t){e.updateIM(this._label,t)},e.prototype.isCollapsed=function(){return!!this._label.isArea()&&(3===this.pts.length&&!!this.pts[0].equals(this.pts[2]))},e.prototype.isClosed=function(){return this.pts[0].equals(this.pts[this.pts.length-1])},e.prototype.getMaximumSegmentIndex=function(){return this.pts.length-1},e.prototype.getDepthDelta=function(){return this._depthDelta},e.prototype.getNumPoints=function(){return this.pts.length},e.prototype.printReverse=function(t){t.print("edge "+this._name+": ");for(var e=this.pts.length-1;e>=0;e--)t.print(this.pts[e]+" ");t.println("")},e.prototype.getMonotoneChainEdge=function(){return null===this._mce&&(this._mce=new ef(this)),this._mce},e.prototype.getEnvelope=function(){if(null===this._env){this._env=new Ll;for(var t=0;t<this.pts.length;t++)this._env.expandToInclude(this.pts[t])}return this._env},e.prototype.addIntersection=function(t,e,n,r){var i=new ul(t.getIntersection(r)),o=e,s=t.getEdgeDistance(n,r),a=o+1;if(a<this.pts.length){var u=this.pts[a];i.equals2D(u)&&(o=a,s=0)}this.eiList.add(i,o,s)},e.prototype.toString=function(){var t=new vl;t.append("edge "+this._name+": "),t.append("LINESTRING (");for(var e=0;e<this.pts.length;e++)e>0&&t.append(","),t.append(this.pts[e].x+" "+this.pts[e].y);return t.append(")  "+this._label+" "+this._depthDelta),t.toString()},e.prototype.isPointwiseEqual=function(t){if(this.pts.length!==t.pts.length)return!1;for(var e=0;e<this.pts.length;e++)if(!this.pts[e].equals2D(t.pts[e]))return!1;return!0},e.prototype.setDepthDelta=function(t){this._depthDelta=t},e.prototype.getEdgeIntersectionList=function(){return this.eiList},e.prototype.addIntersections=function(t,e,n){for(var r=0;r<t.getIntersectionNum();r++)this.addIntersection(t,e,n,r)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e.updateIM=function(){if(2!==arguments.length)return t.prototype.updateIM.apply(this,arguments);var e=arguments[0],n=arguments[1];n.setAtLeastIfValid(e.getLocation(0,Sh.ON),e.getLocation(1,Sh.ON),1),e.isArea()&&(n.setAtLeastIfValid(e.getLocation(0,Sh.LEFT),e.getLocation(1,Sh.LEFT),2),n.setAtLeastIfValid(e.getLocation(0,Sh.RIGHT),e.getLocation(1,Sh.RIGHT),2))},e}(qh),sf=function(t){this._workingPrecisionModel=null,this._workingNoder=null,this._geomFact=null,this._graph=null,this._edgeList=new Jp,this._bufParams=t||null};sf.prototype.setWorkingPrecisionModel=function(t){this._workingPrecisionModel=t},sf.prototype.insertUniqueEdge=function(t){var e=this._edgeList.findEqualEdge(t);if(null!==e){var n=e.getLabel(),r=t.getLabel();e.isPointwiseEqual(t)||(r=new Dh(t.getLabel())).flip(),n.merge(r);var i=sf.depthDelta(r),o=e.getDepthDelta()+i;e.setDepthDelta(o)}else this._edgeList.add(t),t.setDepthDelta(sf.depthDelta(t.getLabel()))},sf.prototype.buildSubgraphs=function(t,e){for(var n=new lc,r=t.iterator();r.hasNext();){var i=r.next(),o=i.getRightmostCoordinate(),s=new kp(n).getDepth(o);i.computeDepth(s),i.findResultEdges(),n.add(i),e.add(i.getDirectedEdges(),i.getNodes())}},sf.prototype.createSubgraphs=function(t){for(var e=new lc,n=t.getNodes().iterator();n.hasNext();){var r=n.next();if(!r.isVisited()){var i=new Th;i.create(r),e.add(i)}}return np.sort(e,np.reverseOrder()),e},sf.prototype.createEmptyResultGeometry=function(){return this._geomFact.createPolygon()},sf.prototype.getNoder=function(t){if(null!==this._workingNoder)return this._workingNoder;var e=new Ip,n=new jl;return n.setPrecisionModel(t),e.setSegmentIntersector(new Kp(n)),e},sf.prototype.buffer=function(t,e){var n=this._workingPrecisionModel;null===n&&(n=t.getPrecisionModel()),this._geomFact=t.getFactory();var r=new Fp(n,this._bufParams),i=new zp(t,e,r).getCurves();if(i.size()<=0)return this.createEmptyResultGeometry();this.computeNodedEdges(i,n),this._graph=new Hh(new Hp),this._graph.addEdges(this._edgeList.getEdges());var o=this.createSubgraphs(this._graph),s=new Wh(this._geomFact);this.buildSubgraphs(o,s);var a=s.getPolygons();return a.size()<=0?this.createEmptyResultGeometry():this._geomFact.buildGeometry(a)},sf.prototype.computeNodedEdges=function(t,e){var n=this.getNoder(e);n.computeNodes(t);for(var r=n.getNodedSubstrings().iterator();r.hasNext();){var i=r.next(),o=i.getCoordinates();if(2!==o.length||!o[0].equals2D(o[1])){var s=i.getData(),a=new of(i.getCoordinates(),new Dh(s));this.insertUniqueEdge(a)}}},sf.prototype.setNoder=function(t){this._workingNoder=t},sf.prototype.interfaces_=function(){return[]},sf.prototype.getClass=function(){return sf},sf.depthDelta=function(t){var e=t.getLocation(0,Sh.LEFT),n=t.getLocation(0,Sh.RIGHT);return e===pl.INTERIOR&&n===pl.EXTERIOR?1:e===pl.EXTERIOR&&n===pl.INTERIOR?-1:0},sf.convertSegStrings=function(t){for(var e=new _h,n=new lc;t.hasNext();){var r=t.next(),i=e.createLineString(r.getCoordinates());n.add(i)}return e.buildGeometry(n)};var af=function(){if(this._noder=null,this._scaleFactor=null,this._offsetX=null,this._offsetY=null,this._isScaled=!1,2===arguments.length){var t=arguments[0],e=arguments[1];this._noder=t,this._scaleFactor=e,this._offsetX=0,this._offsetY=0,this._isScaled=!this.isIntegerPrecision()}else if(4===arguments.length){var n=arguments[0],r=arguments[1],i=arguments[2],o=arguments[3];this._noder=n,this._scaleFactor=r,this._offsetX=i,this._offsetY=o,this._isScaled=!this.isIntegerPrecision()}};af.prototype.rescale=function(){var t=this;if(gl(arguments[0],ic))for(var e=arguments[0],n=e.iterator();n.hasNext();){var r=n.next();t.rescale(r.getCoordinates())}else if(arguments[0]instanceof Array){for(var i=arguments[0],o=0;o<i.length;o++)i[o].x=i[o].x/t._scaleFactor+t._offsetX,i[o].y=i[o].y/t._scaleFactor+t._offsetY;2===i.length&&i[0].equals2D(i[1])&&Pl.out.println(i)}},af.prototype.scale=function(){var t=this;if(gl(arguments[0],ic)){for(var e=arguments[0],n=new lc,r=e.iterator();r.hasNext();){var i=r.next();n.add(new yp(t.scale(i.getCoordinates()),i.getData()))}return n}if(arguments[0]instanceof Array){for(var o=arguments[0],s=new Array(o.length).fill(null),a=0;a<o.length;a++)s[a]=new ul(Math.round((o[a].x-t._offsetX)*t._scaleFactor),Math.round((o[a].y-t._offsetY)*t._scaleFactor),o[a].z);var u=pc.removeRepeatedPoints(s);return u}},af.prototype.isIntegerPrecision=function(){return 1===this._scaleFactor},af.prototype.getNodedSubstrings=function(){var t=this._noder.getNodedSubstrings();return this._isScaled&&this.rescale(t),t},af.prototype.computeNodes=function(t){var e=t;this._isScaled&&(e=this.scale(t)),this._noder.computeNodes(e)},af.prototype.interfaces_=function(){return[bp]},af.prototype.getClass=function(){return af};var uf=function(){this._li=new jl,this._segStrings=null;var t=arguments[0];this._segStrings=t},lf={fact:{configurable:!0}};uf.prototype.checkEndPtVertexIntersections=function(){var t=this;if(0===arguments.length)for(var e=this._segStrings.iterator();e.hasNext();){var n=e.next(),r=n.getCoordinates();t.checkEndPtVertexIntersections(r[0],t._segStrings),t.checkEndPtVertexIntersections(r[r.length-1],t._segStrings)}else if(2===arguments.length)for(var i=arguments[0],o=arguments[1],s=o.iterator();s.hasNext();)for(var a=s.next(),u=a.getCoordinates(),l=1;l<u.length-1;l++)if(u[l].equals(i))throw new kl("found endpt/interior pt intersection at index "+l+" :pt "+i)},uf.prototype.checkInteriorIntersections=function(){var t=this;if(0===arguments.length)for(var e=this._segStrings.iterator();e.hasNext();)for(var n=e.next(),r=this._segStrings.iterator();r.hasNext();){var i=r.next();t.checkInteriorIntersections(n,i)}else if(2===arguments.length)for(var o=arguments[0],s=arguments[1],a=o.getCoordinates(),u=s.getCoordinates(),l=0;l<a.length-1;l++)for(var c=0;c<u.length-1;c++)t.checkInteriorIntersections(o,l,s,c);else if(4===arguments.length){var h=arguments[0],p=arguments[1],f=arguments[2],g=arguments[3];if(h===f&&p===g)return null;var d=h.getCoordinates()[p],y=h.getCoordinates()[p+1],v=f.getCoordinates()[g],_=f.getCoordinates()[g+1];if(this._li.computeIntersection(d,y,v,_),this._li.hasIntersection()&&(this._li.isProper()||this.hasInteriorIntersection(this._li,d,y)||this.hasInteriorIntersection(this._li,v,_)))throw new kl("found non-noded intersection at "+d+"-"+y+" and "+v+"-"+_)}},uf.prototype.checkValid=function(){this.checkEndPtVertexIntersections(),this.checkInteriorIntersections(),this.checkCollapses()},uf.prototype.checkCollapses=function(){var t=this;if(0===arguments.length)for(var e=this._segStrings.iterator();e.hasNext();){var n=e.next();t.checkCollapses(n)}else if(1===arguments.length)for(var r=arguments[0],i=r.getCoordinates(),o=0;o<i.length-2;o++)t.checkCollapse(i[o],i[o+1],i[o+2])},uf.prototype.hasInteriorIntersection=function(t,e,n){for(var r=0;r<t.getIntersectionNum();r++){var i=t.getIntersection(r);if(!i.equals(e)&&!i.equals(n))return!0}return!1},uf.prototype.checkCollapse=function(t,e,n){if(t.equals(n))throw new kl("found non-noded collapse at "+uf.fact.createLineString([t,e,n]))},uf.prototype.interfaces_=function(){return[]},uf.prototype.getClass=function(){return uf},lf.fact.get=function(){return new _h},Object.defineProperties(uf,lf);var cf=function(){this._li=null,this._pt=null,this._originalPt=null,this._ptScaled=null,this._p0Scaled=null,this._p1Scaled=null,this._scaleFactor=null,this._minx=null,this._maxx=null,this._miny=null,this._maxy=null,this._corner=new Array(4).fill(null),this._safeEnv=null;var t=arguments[0],e=arguments[1],n=arguments[2];if(this._originalPt=t,this._pt=t,this._scaleFactor=e,this._li=n,e<=0)throw new el("Scale factor must be non-zero");1!==e&&(this._pt=new ul(this.scale(t.x),this.scale(t.y)),this._p0Scaled=new ul,this._p1Scaled=new ul),this.initCorners(this._pt)},hf={SAFE_ENV_EXPANSION_FACTOR:{configurable:!0}};cf.prototype.intersectsScaled=function(t,e){var n=Math.min(t.x,e.x),r=Math.max(t.x,e.x),i=Math.min(t.y,e.y),o=Math.max(t.y,e.y),s=this._maxx<n||this._minx>r||this._maxy<i||this._miny>o;if(s)return!1;var a=this.intersectsToleranceSquare(t,e);return ql.isTrue(!(s&&a),"Found bad envelope test"),a},cf.prototype.initCorners=function(t){var e=.5;this._minx=t.x-e,this._maxx=t.x+e,this._miny=t.y-e,this._maxy=t.y+e,this._corner[0]=new ul(this._maxx,this._maxy),this._corner[1]=new ul(this._minx,this._maxy),this._corner[2]=new ul(this._minx,this._miny),this._corner[3]=new ul(this._maxx,this._miny)},cf.prototype.intersects=function(t,e){return 1===this._scaleFactor?this.intersectsScaled(t,e):(this.copyScaled(t,this._p0Scaled),this.copyScaled(e,this._p1Scaled),this.intersectsScaled(this._p0Scaled,this._p1Scaled))},cf.prototype.scale=function(t){return Math.round(t*this._scaleFactor)},cf.prototype.getCoordinate=function(){return this._originalPt},cf.prototype.copyScaled=function(t,e){e.x=this.scale(t.x),e.y=this.scale(t.y)},cf.prototype.getSafeEnvelope=function(){if(null===this._safeEnv){var t=cf.SAFE_ENV_EXPANSION_FACTOR/this._scaleFactor;this._safeEnv=new Ll(this._originalPt.x-t,this._originalPt.x+t,this._originalPt.y-t,this._originalPt.y+t)}return this._safeEnv},cf.prototype.intersectsPixelClosure=function(t,e){return this._li.computeIntersection(t,e,this._corner[0],this._corner[1]),!!this._li.hasIntersection()||(this._li.computeIntersection(t,e,this._corner[1],this._corner[2]),!!this._li.hasIntersection()||(this._li.computeIntersection(t,e,this._corner[2],this._corner[3]),!!this._li.hasIntersection()||(this._li.computeIntersection(t,e,this._corner[3],this._corner[0]),!!this._li.hasIntersection())))},cf.prototype.intersectsToleranceSquare=function(t,e){var n=!1,r=!1;return this._li.computeIntersection(t,e,this._corner[0],this._corner[1]),!!this._li.isProper()||(this._li.computeIntersection(t,e,this._corner[1],this._corner[2]),!!this._li.isProper()||(this._li.hasIntersection()&&(n=!0),this._li.computeIntersection(t,e,this._corner[2],this._corner[3]),!!this._li.isProper()||(this._li.hasIntersection()&&(r=!0),this._li.computeIntersection(t,e,this._corner[3],this._corner[0]),!!this._li.isProper()||(!(!n||!r)||(!!t.equals(this._pt)||!!e.equals(this._pt))))))},cf.prototype.addSnappedNode=function(t,e){var n=t.getCoordinate(e),r=t.getCoordinate(e+1);return!!this.intersects(n,r)&&(t.addIntersection(this.getCoordinate(),e),!0)},cf.prototype.interfaces_=function(){return[]},cf.prototype.getClass=function(){return cf},hf.SAFE_ENV_EXPANSION_FACTOR.get=function(){return.75},Object.defineProperties(cf,hf);var pf=function(){this.tempEnv1=new Ll,this.selectedSegment=new vp};pf.prototype.select=function(){if(1===arguments.length);else if(2===arguments.length){var t=arguments[0],e=arguments[1];t.getLineSegment(e,this.selectedSegment),this.select(this.selectedSegment)}},pf.prototype.interfaces_=function(){return[]},pf.prototype.getClass=function(){return pf};var ff=function(){this._index=null;var t=arguments[0];this._index=t},gf={HotPixelSnapAction:{configurable:!0}};ff.prototype.snap=function(){if(1===arguments.length){var t=arguments[0];return this.snap(t,null,-1)}if(3===arguments.length){var e=arguments[0],n=arguments[1],r=arguments[2],i=e.getSafeEnvelope(),o=new df(e,n,r);return this._index.query(i,{interfaces_:function(){return[Qh]},visitItem:function(t){t.select(i,o)}}),o.isNodeAdded()}},ff.prototype.interfaces_=function(){return[]},ff.prototype.getClass=function(){return ff},gf.HotPixelSnapAction.get=function(){return df},Object.defineProperties(ff,gf);var df=function(t){function e(){t.call(this),this._hotPixel=null,this._parentEdge=null,this._hotPixelVertexIndex=null,this._isNodeAdded=!1;var e=arguments[0],n=arguments[1],r=arguments[2];this._hotPixel=e,this._parentEdge=n,this._hotPixelVertexIndex=r}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.isNodeAdded=function(){return this._isNodeAdded},e.prototype.select=function(){if(2!==arguments.length)return t.prototype.select.apply(this,arguments);var e=arguments[0],n=arguments[1],r=e.getContext();if(null!==this._parentEdge&&r===this._parentEdge&&n===this._hotPixelVertexIndex)return null;this._isNodeAdded=this._hotPixel.addSnappedNode(r,n)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(pf),yf=function(){this._li=null,this._interiorIntersections=null;var t=arguments[0];this._li=t,this._interiorIntersections=new lc};yf.prototype.processIntersections=function(t,e,n,r){if(t===n&&e===r)return null;var i=t.getCoordinates()[e],o=t.getCoordinates()[e+1],s=n.getCoordinates()[r],a=n.getCoordinates()[r+1];if(this._li.computeIntersection(i,o,s,a),this._li.hasIntersection()&&this._li.isInteriorIntersection()){for(var u=0;u<this._li.getIntersectionNum();u++)this._interiorIntersections.add(this._li.getIntersection(u));t.addIntersections(this._li,e,0),n.addIntersections(this._li,r,1)}},yf.prototype.isDone=function(){return!1},yf.prototype.getInteriorIntersections=function(){return this._interiorIntersections},yf.prototype.interfaces_=function(){return[Zp]},yf.prototype.getClass=function(){return yf};var vf=function(){this._pm=null,this._li=null,this._scaleFactor=null,this._noder=null,this._pointSnapper=null,this._nodedSegStrings=null;var t=arguments[0];this._pm=t,this._li=new jl,this._li.setPrecisionModel(t),this._scaleFactor=t.getScale()};vf.prototype.checkCorrectness=function(t){var e=yp.getNodedSubstrings(t),n=new uf(e);try{n.checkValid()}catch(t){if(!(t instanceof Sl))throw t;t.printStackTrace()}},vf.prototype.getNodedSubstrings=function(){return yp.getNodedSubstrings(this._nodedSegStrings)},vf.prototype.snapRound=function(t,e){var n=this.findInteriorIntersections(t,e);this.computeIntersectionSnaps(n),this.computeVertexSnaps(t)},vf.prototype.findInteriorIntersections=function(t,e){var n=new yf(e);return this._noder.setSegmentIntersector(n),this._noder.computeNodes(t),n.getInteriorIntersections()},vf.prototype.computeVertexSnaps=function(){var t=this;if(gl(arguments[0],ic))for(var e=arguments[0],n=e.iterator();n.hasNext();){var r=n.next();t.computeVertexSnaps(r)}else if(arguments[0]instanceof yp)for(var i=arguments[0],o=i.getCoordinates(),s=0;s<o.length;s++){var a=new cf(o[s],t._scaleFactor,t._li),u=t._pointSnapper.snap(a,i,s);u&&i.addIntersection(o[s],s)}},vf.prototype.computeNodes=function(t){this._nodedSegStrings=t,this._noder=new Ip,this._pointSnapper=new ff(this._noder.getIndex()),this.snapRound(t,this._li)},vf.prototype.computeIntersectionSnaps=function(t){for(var e=this,n=t.iterator();n.hasNext();){var r=n.next(),i=new cf(r,e._scaleFactor,e._li);e._pointSnapper.snap(i)}},vf.prototype.interfaces_=function(){return[bp]},vf.prototype.getClass=function(){return vf};var _f=function(){if(this._argGeom=null,this._distance=null,this._bufParams=new Sp,this._resultGeometry=null,this._saveException=null,1===arguments.length){var t=arguments[0];this._argGeom=t}else if(2===arguments.length){var e=arguments[0],n=arguments[1];this._argGeom=e,this._bufParams=n}},mf={CAP_ROUND:{configurable:!0},CAP_BUTT:{configurable:!0},CAP_FLAT:{configurable:!0},CAP_SQUARE:{configurable:!0},MAX_PRECISION_DIGITS:{configurable:!0}};_f.prototype.bufferFixedPrecision=function(t){var e=new af(new vf(new gh(1)),t.getScale()),n=new sf(this._bufParams);n.setWorkingPrecisionModel(t),n.setNoder(e),this._resultGeometry=n.buffer(this._argGeom,this._distance)},_f.prototype.bufferReducedPrecision=function(){var t=this;if(0===arguments.length){for(var e=_f.MAX_PRECISION_DIGITS;e>=0;e--){try{t.bufferReducedPrecision(e)}catch(e){if(!(e instanceof Oh))throw e;t._saveException=e}if(null!==t._resultGeometry)return null}throw this._saveException}if(1===arguments.length){var n=arguments[0],r=_f.precisionScaleFactor(this._argGeom,this._distance,n),i=new gh(r);this.bufferFixedPrecision(i)}},_f.prototype.computeGeometry=function(){if(this.bufferOriginalPrecision(),null!==this._resultGeometry)return null;var t=this._argGeom.getFactory().getPrecisionModel();t.getType()===gh.FIXED?this.bufferFixedPrecision(t):this.bufferReducedPrecision()},_f.prototype.setQuadrantSegments=function(t){this._bufParams.setQuadrantSegments(t)},_f.prototype.bufferOriginalPrecision=function(){try{var t=new sf(this._bufParams);this._resultGeometry=t.buffer(this._argGeom,this._distance)}catch(t){if(!(t instanceof kl))throw t;this._saveException=t}},_f.prototype.getResultGeometry=function(t){return this._distance=t,this.computeGeometry(),this._resultGeometry},_f.prototype.setEndCapStyle=function(t){this._bufParams.setEndCapStyle(t)},_f.prototype.interfaces_=function(){return[]},_f.prototype.getClass=function(){return _f},_f.bufferOp=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1],n=new _f(t),r=n.getResultGeometry(e);return r}if(3===arguments.length){if(Number.isInteger(arguments[2])&&arguments[0]instanceof Wl&&"number"==typeof arguments[1]){var i=arguments[0],o=arguments[1],s=arguments[2],a=new _f(i);a.setQuadrantSegments(s);var u=a.getResultGeometry(o);return u}if(arguments[2]instanceof Sp&&arguments[0]instanceof Wl&&"number"==typeof arguments[1]){var l=arguments[0],c=arguments[1],h=arguments[2],p=new _f(l,h),f=p.getResultGeometry(c);return f}}else if(4===arguments.length){var g=arguments[0],d=arguments[1],y=arguments[2],v=arguments[3],_=new _f(g);_.setQuadrantSegments(y),_.setEndCapStyle(v);var m=_.getResultGeometry(d);return m}},_f.precisionScaleFactor=function(t,e,n){var r=t.getEnvelopeInternal(),i=dl.max(Math.abs(r.getMaxX()),Math.abs(r.getMaxY()),Math.abs(r.getMinX()),Math.abs(r.getMinY()))+2*(e>0?e:0),o=n-Math.trunc(Math.log(i)/Math.log(10)+1);return Math.pow(10,o)},mf.CAP_ROUND.get=function(){return Sp.CAP_ROUND},mf.CAP_BUTT.get=function(){return Sp.CAP_FLAT},mf.CAP_FLAT.get=function(){return Sp.CAP_FLAT},mf.CAP_SQUARE.get=function(){return Sp.CAP_SQUARE},mf.MAX_PRECISION_DIGITS.get=function(){return 12},Object.defineProperties(_f,mf);var xf=function(){this._pt=[new ul,new ul],this._distance=nl.NaN,this._isNull=!0};xf.prototype.getCoordinates=function(){return this._pt},xf.prototype.getCoordinate=function(t){return this._pt[t]},xf.prototype.setMinimum=function(){if(1===arguments.length){var t=arguments[0];this.setMinimum(t._pt[0],t._pt[1])}else if(2===arguments.length){var e=arguments[0],n=arguments[1];if(this._isNull)return this.initialize(e,n),null;var r=e.distance(n);r<this._distance&&this.initialize(e,n,r)}},xf.prototype.initialize=function(){if(0===arguments.length)this._isNull=!0;else if(2===arguments.length){var t=arguments[0],e=arguments[1];this._pt[0].setCoordinate(t),this._pt[1].setCoordinate(e),this._distance=t.distance(e),this._isNull=!1}else if(3===arguments.length){var n=arguments[0],r=arguments[1],i=arguments[2];this._pt[0].setCoordinate(n),this._pt[1].setCoordinate(r),this._distance=i,this._isNull=!1}},xf.prototype.getDistance=function(){return this._distance},xf.prototype.setMaximum=function(){if(1===arguments.length){var t=arguments[0];this.setMaximum(t._pt[0],t._pt[1])}else if(2===arguments.length){var e=arguments[0],n=arguments[1];if(this._isNull)return this.initialize(e,n),null;var r=e.distance(n);r>this._distance&&this.initialize(e,n,r)}},xf.prototype.interfaces_=function(){return[]},xf.prototype.getClass=function(){return xf};var Ef=function(){};Ef.prototype.interfaces_=function(){return[]},Ef.prototype.getClass=function(){return Ef},Ef.computeDistance=function(){if(arguments[2]instanceof xf&&arguments[0]instanceof Zc&&arguments[1]instanceof ul)for(var t=arguments[0],e=arguments[1],n=arguments[2],r=t.getCoordinates(),i=new vp,o=0;o<r.length-1;o++){i.setCoordinates(r[o],r[o+1]);var s=i.closestPoint(e);n.setMinimum(s,e)}else if(arguments[2]instanceof xf&&arguments[0]instanceof th&&arguments[1]instanceof ul){var a=arguments[0],u=arguments[1],l=arguments[2];Ef.computeDistance(a.getExteriorRing(),u,l);for(var c=0;c<a.getNumInteriorRing();c++)Ef.computeDistance(a.getInteriorRingN(c),u,l)}else if(arguments[2]instanceof xf&&arguments[0]instanceof Wl&&arguments[1]instanceof ul){var h=arguments[0],p=arguments[1],f=arguments[2];if(h instanceof Zc)Ef.computeDistance(h,p,f);else if(h instanceof th)Ef.computeDistance(h,p,f);else if(h instanceof kc)for(var g=h,d=0;d<g.getNumGeometries();d++){var y=g.getGeometryN(d);Ef.computeDistance(y,p,f)}else f.setMinimum(h.getCoordinate(),p)}else if(arguments[2]instanceof xf&&arguments[0]instanceof vp&&arguments[1]instanceof ul){var v=arguments[0],_=arguments[1],m=arguments[2],x=v.closestPoint(_);m.setMinimum(x,_)}};var bf=function(t){this._maxPtDist=new xf,this._inputGeom=t||null},wf={MaxPointDistanceFilter:{configurable:!0},MaxMidpointDistanceFilter:{configurable:!0}};bf.prototype.computeMaxMidpointDistance=function(t){var e=new Nf(this._inputGeom);t.apply(e),this._maxPtDist.setMaximum(e.getMaxPointDistance())},bf.prototype.computeMaxVertexDistance=function(t){var e=new If(this._inputGeom);t.apply(e),this._maxPtDist.setMaximum(e.getMaxPointDistance())},bf.prototype.findDistance=function(t){return this.computeMaxVertexDistance(t),this.computeMaxMidpointDistance(t),this._maxPtDist.getDistance()},bf.prototype.getDistancePoints=function(){return this._maxPtDist},bf.prototype.interfaces_=function(){return[]},bf.prototype.getClass=function(){return bf},wf.MaxPointDistanceFilter.get=function(){return If},wf.MaxMidpointDistanceFilter.get=function(){return Nf},Object.defineProperties(bf,wf);var If=function(t){this._maxPtDist=new xf,this._minPtDist=new xf,this._geom=t||null};If.prototype.filter=function(t){this._minPtDist.initialize(),Ef.computeDistance(this._geom,t,this._minPtDist),this._maxPtDist.setMaximum(this._minPtDist)},If.prototype.getMaxPointDistance=function(){return this._maxPtDist},If.prototype.interfaces_=function(){return[Kl]},If.prototype.getClass=function(){return If};var Nf=function(t){this._maxPtDist=new xf,this._minPtDist=new xf,this._geom=t||null};Nf.prototype.filter=function(t,e){if(0===e)return null;var n=t.getCoordinate(e-1),r=t.getCoordinate(e),i=new ul((n.x+r.x)/2,(n.y+r.y)/2);this._minPtDist.initialize(),Ef.computeDistance(this._geom,i,this._minPtDist),this._maxPtDist.setMaximum(this._minPtDist)},Nf.prototype.isDone=function(){return!1},Nf.prototype.isGeometryChanged=function(){return!1},Nf.prototype.getMaxPointDistance=function(){return this._maxPtDist},Nf.prototype.interfaces_=function(){return[Fc]},Nf.prototype.getClass=function(){return Nf};var Sf=function(t){this._comps=t||null};Sf.prototype.filter=function(t){t instanceof th&&this._comps.add(t)},Sf.prototype.interfaces_=function(){return[Dc]},Sf.prototype.getClass=function(){return Sf},Sf.getPolygons=function(){if(1===arguments.length){var t=arguments[0];return Sf.getPolygons(t,new lc)}if(2===arguments.length){var e=arguments[0],n=arguments[1];return e instanceof th?n.add(e):e instanceof kc&&e.apply(new Sf(n)),n}};var Cf=function(){if(this._lines=null,this._isForcedToLineString=!1,1===arguments.length){var t=arguments[0];this._lines=t}else if(2===arguments.length){var e=arguments[0],n=arguments[1];this._lines=e,this._isForcedToLineString=n}};Cf.prototype.filter=function(t){if(this._isForcedToLineString&&t instanceof nh){var e=t.getFactory().createLineString(t.getCoordinateSequence());return this._lines.add(e),null}t instanceof Zc&&this._lines.add(t)},Cf.prototype.setForceToLineString=function(t){this._isForcedToLineString=t},Cf.prototype.interfaces_=function(){return[Hl]},Cf.prototype.getClass=function(){return Cf},Cf.getGeometry=function(){if(1===arguments.length){var t=arguments[0];return t.getFactory().buildGeometry(Cf.getLines(t))}if(2===arguments.length){var e=arguments[0],n=arguments[1];return e.getFactory().buildGeometry(Cf.getLines(e,n))}},Cf.getLines=function(){if(1===arguments.length){var t=arguments[0];return Cf.getLines(t,!1)}if(2===arguments.length){if(gl(arguments[0],ic)&&gl(arguments[1],ic)){for(var e=arguments[0],n=arguments[1],r=e.iterator();r.hasNext();){var i=r.next();Cf.getLines(i,n)}return n}if(arguments[0]instanceof Wl&&"boolean"==typeof arguments[1]){var o=arguments[0],s=arguments[1],a=new lc;return o.apply(new Cf(a,s)),a}if(arguments[0]instanceof Wl&&gl(arguments[1],ic)){var u=arguments[0],l=arguments[1];return u instanceof Zc?l.add(u):u.apply(new Cf(l)),l}}else if(3===arguments.length){if("boolean"==typeof arguments[2]&&gl(arguments[0],ic)&&gl(arguments[1],ic)){for(var c=arguments[0],h=arguments[1],p=arguments[2],f=c.iterator();f.hasNext();){var g=f.next();Cf.getLines(g,h,p)}return h}if("boolean"==typeof arguments[2]&&arguments[0]instanceof Wl&&gl(arguments[1],ic)){var d=arguments[0],y=arguments[1],v=arguments[2];return d.apply(new Cf(y,v)),y}}};var Pf=function(){if(this._boundaryRule=Ql.OGC_SFS_BOUNDARY_RULE,this._isIn=null,this._numBoundaries=null,0===arguments.length);else if(1===arguments.length){var t=arguments[0];if(null===t)throw new el("Rule must be non-null");this._boundaryRule=t}};Pf.prototype.locateInternal=function(){var t=this;if(arguments[0]instanceof ul&&arguments[1]instanceof th){var e=arguments[0],n=arguments[1];if(n.isEmpty())return pl.EXTERIOR;var r=n.getExteriorRing(),i=this.locateInPolygonRing(e,r);if(i===pl.EXTERIOR)return pl.EXTERIOR;if(i===pl.BOUNDARY)return pl.BOUNDARY;for(var o=0;o<n.getNumInteriorRing();o++){var s=n.getInteriorRingN(o),a=t.locateInPolygonRing(e,s);if(a===pl.INTERIOR)return pl.EXTERIOR;if(a===pl.BOUNDARY)return pl.BOUNDARY}return pl.INTERIOR}if(arguments[0]instanceof ul&&arguments[1]instanceof Zc){var u=arguments[0],l=arguments[1];if(!l.getEnvelopeInternal().intersects(u))return pl.EXTERIOR;var c=l.getCoordinates();return l.isClosed()||!u.equals(c[0])&&!u.equals(c[c.length-1])?Xl.isOnLine(u,c)?pl.INTERIOR:pl.EXTERIOR:pl.BOUNDARY}if(arguments[0]instanceof ul&&arguments[1]instanceof Qc){var h=arguments[0],p=arguments[1],f=p.getCoordinate();return f.equals2D(h)?pl.INTERIOR:pl.EXTERIOR}},Pf.prototype.locateInPolygonRing=function(t,e){return e.getEnvelopeInternal().intersects(t)?Xl.locatePointInRing(t,e.getCoordinates()):pl.EXTERIOR},Pf.prototype.intersects=function(t,e){return this.locate(t,e)!==pl.EXTERIOR},Pf.prototype.updateLocationInfo=function(t){t===pl.INTERIOR&&(this._isIn=!0),t===pl.BOUNDARY&&this._numBoundaries++},Pf.prototype.computeLocation=function(t,e){var n=this;if(e instanceof Qc&&this.updateLocationInfo(this.locateInternal(t,e)),e instanceof Zc)this.updateLocationInfo(this.locateInternal(t,e));else if(e instanceof th)this.updateLocationInfo(this.locateInternal(t,e));else if(e instanceof Gc)for(var r=e,i=0;i<r.getNumGeometries();i++){var o=r.getGeometryN(i);n.updateLocationInfo(n.locateInternal(t,o))}else if(e instanceof rh)for(var s=e,a=0;a<s.getNumGeometries();a++){var u=s.getGeometryN(a);n.updateLocationInfo(n.locateInternal(t,u))}else if(e instanceof kc)for(var l=new Up(e);l.hasNext();){var c=l.next();c!==e&&n.computeLocation(t,c)}},Pf.prototype.locate=function(t,e){return e.isEmpty()?pl.EXTERIOR:e instanceof Zc||e instanceof th?this.locateInternal(t,e):(this._isIn=!1,this._numBoundaries=0,this.computeLocation(t,e),this._boundaryRule.isInBoundary(this._numBoundaries)?pl.BOUNDARY:this._numBoundaries>0||this._isIn?pl.INTERIOR:pl.EXTERIOR)},Pf.prototype.interfaces_=function(){return[]},Pf.prototype.getClass=function(){return Pf};var Mf=function t(){if(this._component=null,this._segIndex=null,this._pt=null,2===arguments.length){var e=arguments[0],n=arguments[1];t.call(this,e,t.INSIDE_AREA,n)}else if(3===arguments.length){var r=arguments[0],i=arguments[1],o=arguments[2];this._component=r,this._segIndex=i,this._pt=o}},Lf={INSIDE_AREA:{configurable:!0}};Mf.prototype.isInsideArea=function(){return this._segIndex===Mf.INSIDE_AREA},Mf.prototype.getCoordinate=function(){return this._pt},Mf.prototype.getGeometryComponent=function(){return this._component},Mf.prototype.getSegmentIndex=function(){return this._segIndex},Mf.prototype.interfaces_=function(){return[]},Mf.prototype.getClass=function(){return Mf},Lf.INSIDE_AREA.get=function(){return-1},Object.defineProperties(Mf,Lf);var Of=function(t){this._pts=t||null};Of.prototype.filter=function(t){t instanceof Qc&&this._pts.add(t)},Of.prototype.interfaces_=function(){return[Dc]},Of.prototype.getClass=function(){return Of},Of.getPoints=function(){if(1===arguments.length){var t=arguments[0];return t instanceof Qc?np.singletonList(t):Of.getPoints(t,new lc)}if(2===arguments.length){var e=arguments[0],n=arguments[1];return e instanceof Qc?n.add(e):e instanceof kc&&e.apply(new Of(n)),n}};var Rf=function(){this._locations=null;var t=arguments[0];this._locations=t};Rf.prototype.filter=function(t){(t instanceof Qc||t instanceof Zc||t instanceof th)&&this._locations.add(new Mf(t,0,t.getCoordinate()))},Rf.prototype.interfaces_=function(){return[Dc]},Rf.prototype.getClass=function(){return Rf},Rf.getLocations=function(t){var e=new lc;return t.apply(new Rf(e)),e};var Tf=function(){if(this._geom=null,this._terminateDistance=0,this._ptLocator=new Pf,this._minDistanceLocation=null,this._minDistance=nl.MAX_VALUE,2===arguments.length){var t=arguments[0],e=arguments[1];this._geom=[t,e],this._terminateDistance=0}else if(3===arguments.length){var n=arguments[0],r=arguments[1],i=arguments[2];this._geom=new Array(2).fill(null),this._geom[0]=n,this._geom[1]=r,this._terminateDistance=i}};Tf.prototype.computeContainmentDistance=function(){var t=this;if(0===arguments.length){var e=new Array(2).fill(null);if(this.computeContainmentDistance(0,e),this._minDistance<=this._terminateDistance)return null;this.computeContainmentDistance(1,e)}else if(2===arguments.length){var n=arguments[0],r=arguments[1],i=1-n,o=Sf.getPolygons(this._geom[n]);if(o.size()>0){var s=Rf.getLocations(this._geom[i]);if(this.computeContainmentDistance(s,o,r),this._minDistance<=this._terminateDistance)return this._minDistanceLocation[i]=r[0],this._minDistanceLocation[n]=r[1],null}}else if(3===arguments.length)if(arguments[2]instanceof Array&&gl(arguments[0],ac)&&gl(arguments[1],ac)){for(var a=arguments[0],u=arguments[1],l=arguments[2],c=0;c<a.size();c++)for(var h=a.get(c),p=0;p<u.size();p++)if(t.computeContainmentDistance(h,u.get(p),l),t._minDistance<=t._terminateDistance)return null}else if(arguments[2]instanceof Array&&arguments[0]instanceof Mf&&arguments[1]instanceof th){var f=arguments[0],g=arguments[1],d=arguments[2],y=f.getCoordinate();if(pl.EXTERIOR!==this._ptLocator.locate(y,g))return this._minDistance=0,d[0]=f,d[1]=new Mf(g,y),null}},Tf.prototype.computeMinDistanceLinesPoints=function(t,e,n){for(var r=this,i=0;i<t.size();i++)for(var o=t.get(i),s=0;s<e.size();s++){var a=e.get(s);if(r.computeMinDistance(o,a,n),r._minDistance<=r._terminateDistance)return null}},Tf.prototype.computeFacetDistance=function(){var t=new Array(2).fill(null),e=Cf.getLines(this._geom[0]),n=Cf.getLines(this._geom[1]),r=Of.getPoints(this._geom[0]),i=Of.getPoints(this._geom[1]);return this.computeMinDistanceLines(e,n,t),this.updateMinDistance(t,!1),this._minDistance<=this._terminateDistance?null:(t[0]=null,t[1]=null,this.computeMinDistanceLinesPoints(e,i,t),this.updateMinDistance(t,!1),this._minDistance<=this._terminateDistance?null:(t[0]=null,t[1]=null,this.computeMinDistanceLinesPoints(n,r,t),this.updateMinDistance(t,!0),this._minDistance<=this._terminateDistance?null:(t[0]=null,t[1]=null,this.computeMinDistancePoints(r,i,t),void this.updateMinDistance(t,!1))))},Tf.prototype.nearestLocations=function(){return this.computeMinDistance(),this._minDistanceLocation},Tf.prototype.updateMinDistance=function(t,e){if(null===t[0])return null;e?(this._minDistanceLocation[0]=t[1],this._minDistanceLocation[1]=t[0]):(this._minDistanceLocation[0]=t[0],this._minDistanceLocation[1]=t[1])},Tf.prototype.nearestPoints=function(){return this.computeMinDistance(),[this._minDistanceLocation[0].getCoordinate(),this._minDistanceLocation[1].getCoordinate()]},Tf.prototype.computeMinDistance=function(){var t=this;if(0===arguments.length){if(null!==this._minDistanceLocation)return null;if(this._minDistanceLocation=new Array(2).fill(null),this.computeContainmentDistance(),this._minDistance<=this._terminateDistance)return null;this.computeFacetDistance()}else if(3===arguments.length)if(arguments[2]instanceof Array&&arguments[0]instanceof Zc&&arguments[1]instanceof Qc){var e=arguments[0],n=arguments[1],r=arguments[2];if(e.getEnvelopeInternal().distance(n.getEnvelopeInternal())>this._minDistance)return null;for(var i=e.getCoordinates(),o=n.getCoordinate(),s=0;s<i.length-1;s++){var a=Xl.distancePointLine(o,i[s],i[s+1]);if(a<t._minDistance){t._minDistance=a;var u=new vp(i[s],i[s+1]),l=u.closestPoint(o);r[0]=new Mf(e,s,l),r[1]=new Mf(n,0,o)}if(t._minDistance<=t._terminateDistance)return null}}else if(arguments[2]instanceof Array&&arguments[0]instanceof Zc&&arguments[1]instanceof Zc){var c=arguments[0],h=arguments[1],p=arguments[2];if(c.getEnvelopeInternal().distance(h.getEnvelopeInternal())>this._minDistance)return null;for(var f=c.getCoordinates(),g=h.getCoordinates(),d=0;d<f.length-1;d++)for(var y=0;y<g.length-1;y++){var v=Xl.distanceLineLine(f[d],f[d+1],g[y],g[y+1]);if(v<t._minDistance){t._minDistance=v;var _=new vp(f[d],f[d+1]),m=new vp(g[y],g[y+1]),x=_.closestPoints(m);p[0]=new Mf(c,d,x[0]),p[1]=new Mf(h,y,x[1])}if(t._minDistance<=t._terminateDistance)return null}}},Tf.prototype.computeMinDistancePoints=function(t,e,n){for(var r=this,i=0;i<t.size();i++)for(var o=t.get(i),s=0;s<e.size();s++){var a=e.get(s),u=o.getCoordinate().distance(a.getCoordinate());if(u<r._minDistance&&(r._minDistance=u,n[0]=new Mf(o,0,o.getCoordinate()),n[1]=new Mf(a,0,a.getCoordinate())),r._minDistance<=r._terminateDistance)return null}},Tf.prototype.distance=function(){if(null===this._geom[0]||null===this._geom[1])throw new el("null geometries are not supported");return this._geom[0].isEmpty()||this._geom[1].isEmpty()?0:(this.computeMinDistance(),this._minDistance)},Tf.prototype.computeMinDistanceLines=function(t,e,n){for(var r=this,i=0;i<t.size();i++)for(var o=t.get(i),s=0;s<e.size();s++){var a=e.get(s);if(r.computeMinDistance(o,a,n),r._minDistance<=r._terminateDistance)return null}},Tf.prototype.interfaces_=function(){return[]},Tf.prototype.getClass=function(){return Tf},Tf.distance=function(t,e){return new Tf(t,e).distance()},Tf.isWithinDistance=function(t,e,n){return new Tf(t,e,n).distance()<=n},Tf.nearestPoints=function(t,e){return new Tf(t,e).nearestPoints()};var Af=function(){this._pt=[new ul,new ul],this._distance=nl.NaN,this._isNull=!0};Af.prototype.getCoordinates=function(){return this._pt},Af.prototype.getCoordinate=function(t){return this._pt[t]},Af.prototype.setMinimum=function(){if(1===arguments.length){var t=arguments[0];this.setMinimum(t._pt[0],t._pt[1])}else if(2===arguments.length){var e=arguments[0],n=arguments[1];if(this._isNull)return this.initialize(e,n),null;var r=e.distance(n);r<this._distance&&this.initialize(e,n,r)}},Af.prototype.initialize=function(){if(0===arguments.length)this._isNull=!0;else if(2===arguments.length){var t=arguments[0],e=arguments[1];this._pt[0].setCoordinate(t),this._pt[1].setCoordinate(e),this._distance=t.distance(e),this._isNull=!1}else if(3===arguments.length){var n=arguments[0],r=arguments[1],i=arguments[2];this._pt[0].setCoordinate(n),this._pt[1].setCoordinate(r),this._distance=i,this._isNull=!1}},Af.prototype.toString=function(){return Fl.toLineString(this._pt[0],this._pt[1])},Af.prototype.getDistance=function(){return this._distance},Af.prototype.setMaximum=function(){if(1===arguments.length){var t=arguments[0];this.setMaximum(t._pt[0],t._pt[1])}else if(2===arguments.length){var e=arguments[0],n=arguments[1];if(this._isNull)return this.initialize(e,n),null;var r=e.distance(n);r>this._distance&&this.initialize(e,n,r)}},Af.prototype.interfaces_=function(){return[]},Af.prototype.getClass=function(){return Af};var Df=function(){};Df.prototype.interfaces_=function(){return[]},Df.prototype.getClass=function(){return Df},Df.computeDistance=function(){if(arguments[2]instanceof Af&&arguments[0]instanceof Zc&&arguments[1]instanceof ul)for(var t=arguments[0],e=arguments[1],n=arguments[2],r=new vp,i=t.getCoordinates(),o=0;o<i.length-1;o++){r.setCoordinates(i[o],i[o+1]);var s=r.closestPoint(e);n.setMinimum(s,e)}else if(arguments[2]instanceof Af&&arguments[0]instanceof th&&arguments[1]instanceof ul){var a=arguments[0],u=arguments[1],l=arguments[2];Df.computeDistance(a.getExteriorRing(),u,l);for(var c=0;c<a.getNumInteriorRing();c++)Df.computeDistance(a.getInteriorRingN(c),u,l)}else if(arguments[2]instanceof Af&&arguments[0]instanceof Wl&&arguments[1]instanceof ul){var h=arguments[0],p=arguments[1],f=arguments[2];if(h instanceof Zc)Df.computeDistance(h,p,f);else if(h instanceof th)Df.computeDistance(h,p,f);else if(h instanceof kc)for(var g=h,d=0;d<g.getNumGeometries();d++){var y=g.getGeometryN(d);Df.computeDistance(y,p,f)}else f.setMinimum(h.getCoordinate(),p)}else if(arguments[2]instanceof Af&&arguments[0]instanceof vp&&arguments[1]instanceof ul){var v=arguments[0],_=arguments[1],m=arguments[2],x=v.closestPoint(_);m.setMinimum(x,_)}};var Ff=function(){this._g0=null,this._g1=null,this._ptDist=new Af,this._densifyFrac=0;var t=arguments[0],e=arguments[1];this._g0=t,this._g1=e},kf={MaxPointDistanceFilter:{configurable:!0},MaxDensifiedByFractionDistanceFilter:{configurable:!0}};Ff.prototype.getCoordinates=function(){return this._ptDist.getCoordinates()},Ff.prototype.setDensifyFraction=function(t){if(t>1||t<=0)throw new el("Fraction is not in range (0.0 - 1.0]");this._densifyFrac=t},Ff.prototype.compute=function(t,e){this.computeOrientedDistance(t,e,this._ptDist),this.computeOrientedDistance(e,t,this._ptDist)},Ff.prototype.distance=function(){return this.compute(this._g0,this._g1),this._ptDist.getDistance()},Ff.prototype.computeOrientedDistance=function(t,e,n){var r=new Gf(e);if(t.apply(r),n.setMaximum(r.getMaxPointDistance()),this._densifyFrac>0){var i=new qf(e,this._densifyFrac);t.apply(i),n.setMaximum(i.getMaxPointDistance())}},Ff.prototype.orientedDistance=function(){return this.computeOrientedDistance(this._g0,this._g1,this._ptDist),this._ptDist.getDistance()},Ff.prototype.interfaces_=function(){return[]},Ff.prototype.getClass=function(){return Ff},Ff.distance=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1],n=new Ff(t,e);return n.distance()}if(3===arguments.length){var r=arguments[0],i=arguments[1],o=arguments[2],s=new Ff(r,i);return s.setDensifyFraction(o),s.distance()}},kf.MaxPointDistanceFilter.get=function(){return Gf},kf.MaxDensifiedByFractionDistanceFilter.get=function(){return qf},Object.defineProperties(Ff,kf);var Gf=function(){this._maxPtDist=new Af,this._minPtDist=new Af,this._euclideanDist=new Df,this._geom=null;var t=arguments[0];this._geom=t};Gf.prototype.filter=function(t){this._minPtDist.initialize(),Df.computeDistance(this._geom,t,this._minPtDist),this._maxPtDist.setMaximum(this._minPtDist)},Gf.prototype.getMaxPointDistance=function(){return this._maxPtDist},Gf.prototype.interfaces_=function(){return[Kl]},Gf.prototype.getClass=function(){return Gf};var qf=function(){this._maxPtDist=new Af,this._minPtDist=new Af,this._geom=null,this._numSubSegs=0;var t=arguments[0],e=arguments[1];this._geom=t,this._numSubSegs=Math.trunc(Math.round(1/e))};qf.prototype.filter=function(t,e){var n=this;if(0===e)return null;for(var r=t.getCoordinate(e-1),i=t.getCoordinate(e),o=(i.x-r.x)/this._numSubSegs,s=(i.y-r.y)/this._numSubSegs,a=0;a<this._numSubSegs;a++){var u=r.x+a*o,l=r.y+a*s,c=new ul(u,l);n._minPtDist.initialize(),Df.computeDistance(n._geom,c,n._minPtDist),n._maxPtDist.setMaximum(n._minPtDist)}},qf.prototype.isDone=function(){return!1},qf.prototype.isGeometryChanged=function(){return!1},qf.prototype.getMaxPointDistance=function(){return this._maxPtDist},qf.prototype.interfaces_=function(){return[Fc]},qf.prototype.getClass=function(){return qf};var Bf=function(t,e,n){this._minValidDistance=null,this._maxValidDistance=null,this._minDistanceFound=null,this._maxDistanceFound=null,this._isValid=!0,this._errMsg=null,this._errorLocation=null,this._errorIndicator=null,this._input=t||null,this._bufDistance=e||null,this._result=n||null},zf={VERBOSE:{configurable:!0},MAX_DISTANCE_DIFF_FRAC:{configurable:!0}};Bf.prototype.checkMaximumDistance=function(t,e,n){var r=new Ff(e,t);if(r.setDensifyFraction(.25),this._maxDistanceFound=r.orientedDistance(),this._maxDistanceFound>n){this._isValid=!1;var i=r.getCoordinates();this._errorLocation=i[1],this._errorIndicator=t.getFactory().createLineString(i),this._errMsg="Distance between buffer curve and input is too large ("+this._maxDistanceFound+" at "+Fl.toLineString(i[0],i[1])+")"}},Bf.prototype.isValid=function(){var t=Math.abs(this._bufDistance),e=Bf.MAX_DISTANCE_DIFF_FRAC*t;return this._minValidDistance=t-e,this._maxValidDistance=t+e,!(!this._input.isEmpty()&&!this._result.isEmpty())||(this._bufDistance>0?this.checkPositiveValid():this.checkNegativeValid(),Bf.VERBOSE&&Pl.out.println("Min Dist= "+this._minDistanceFound+"  err= "+(1-this._minDistanceFound/this._bufDistance)+"  Max Dist= "+this._maxDistanceFound+"  err= "+(this._maxDistanceFound/this._bufDistance-1)),this._isValid)},Bf.prototype.checkNegativeValid=function(){if(!(this._input instanceof th||this._input instanceof rh||this._input instanceof kc))return null;var t=this.getPolygonLines(this._input);if(this.checkMinimumDistance(t,this._result,this._minValidDistance),!this._isValid)return null;this.checkMaximumDistance(t,this._result,this._maxValidDistance)},Bf.prototype.getErrorIndicator=function(){return this._errorIndicator},Bf.prototype.checkMinimumDistance=function(t,e,n){var r=new Tf(t,e,n);if(this._minDistanceFound=r.distance(),this._minDistanceFound<n){this._isValid=!1;var i=r.nearestPoints();this._errorLocation=r.nearestPoints()[1],this._errorIndicator=t.getFactory().createLineString(i),this._errMsg="Distance between buffer curve and input is too small ("+this._minDistanceFound+" at "+Fl.toLineString(i[0],i[1])+" )"}},Bf.prototype.checkPositiveValid=function(){var t=this._result.getBoundary();if(this.checkMinimumDistance(this._input,t,this._minValidDistance),!this._isValid)return null;this.checkMaximumDistance(this._input,t,this._maxValidDistance)},Bf.prototype.getErrorLocation=function(){return this._errorLocation},Bf.prototype.getPolygonLines=function(t){for(var e=new lc,n=new Cf(e),r=Sf.getPolygons(t).iterator();r.hasNext();){r.next().apply(n)}return t.getFactory().buildGeometry(e)},Bf.prototype.getErrorMessage=function(){return this._errMsg},Bf.prototype.interfaces_=function(){return[]},Bf.prototype.getClass=function(){return Bf},zf.VERBOSE.get=function(){return!1},zf.MAX_DISTANCE_DIFF_FRAC.get=function(){return.012},Object.defineProperties(Bf,zf);var jf=function(t,e,n){this._isValid=!0,this._errorMsg=null,this._errorLocation=null,this._errorIndicator=null,this._input=t||null,this._distance=e||null,this._result=n||null},Uf={VERBOSE:{configurable:!0},MAX_ENV_DIFF_FRAC:{configurable:!0}};jf.prototype.isValid=function(){return this.checkPolygonal(),this._isValid?(this.checkExpectedEmpty(),this._isValid?(this.checkEnvelope(),this._isValid?(this.checkArea(),this._isValid?(this.checkDistance(),this._isValid):this._isValid):this._isValid):this._isValid):this._isValid},jf.prototype.checkEnvelope=function(){if(this._distance<0)return null;var t=this._distance*jf.MAX_ENV_DIFF_FRAC;0===t&&(t=.001);var e=new Ll(this._input.getEnvelopeInternal());e.expandBy(this._distance);var n=new Ll(this._result.getEnvelopeInternal());n.expandBy(t),n.contains(e)||(this._isValid=!1,this._errorMsg="Buffer envelope is incorrect",this._errorIndicator=this._input.getFactory().toGeometry(n)),this.report("Envelope")},jf.prototype.checkDistance=function(){var t=new Bf(this._input,this._distance,this._result);t.isValid()||(this._isValid=!1,this._errorMsg=t.getErrorMessage(),this._errorLocation=t.getErrorLocation(),this._errorIndicator=t.getErrorIndicator()),this.report("Distance")},jf.prototype.checkArea=function(){var t=this._input.getArea(),e=this._result.getArea();this._distance>0&&t>e&&(this._isValid=!1,this._errorMsg="Area of positive buffer is smaller than input",this._errorIndicator=this._result),this._distance<0&&t<e&&(this._isValid=!1,this._errorMsg="Area of negative buffer is larger than input",this._errorIndicator=this._result),this.report("Area")},jf.prototype.checkPolygonal=function(){this._result instanceof th||this._result instanceof rh||(this._isValid=!1),this._errorMsg="Result is not polygonal",this._errorIndicator=this._result,this.report("Polygonal")},jf.prototype.getErrorIndicator=function(){return this._errorIndicator},jf.prototype.getErrorLocation=function(){return this._errorLocation},jf.prototype.checkExpectedEmpty=function(){return this._input.getDimension()>=2||this._distance>0?null:(this._result.isEmpty()||(this._isValid=!1,this._errorMsg="Result is non-empty",this._errorIndicator=this._result),void this.report("ExpectedEmpty"))},jf.prototype.report=function(t){if(!jf.VERBOSE)return null;Pl.out.println("Check "+t+": "+(this._isValid?"passed":"FAILED"))},jf.prototype.getErrorMessage=function(){return this._errorMsg},jf.prototype.interfaces_=function(){return[]},jf.prototype.getClass=function(){return jf},jf.isValidMsg=function(t,e,n){var r=new jf(t,e,n);return r.isValid()?null:r.getErrorMessage()},jf.isValid=function(t,e,n){return!!new jf(t,e,n).isValid()},Uf.VERBOSE.get=function(){return!1},Uf.MAX_ENV_DIFF_FRAC.get=function(){return.012},Object.defineProperties(jf,Uf);var Vf=function(){this._pts=null,this._data=null;var t=arguments[0],e=arguments[1];this._pts=t,this._data=e};Vf.prototype.getCoordinates=function(){return this._pts},Vf.prototype.size=function(){return this._pts.length},Vf.prototype.getCoordinate=function(t){return this._pts[t]},Vf.prototype.isClosed=function(){return this._pts[0].equals(this._pts[this._pts.length-1])},Vf.prototype.getSegmentOctant=function(t){return t===this._pts.length-1?-1:fp.octant(this.getCoordinate(t),this.getCoordinate(t+1))},Vf.prototype.setData=function(t){this._data=t},Vf.prototype.getData=function(){return this._data},Vf.prototype.toString=function(){return Fl.toLineString(new lh(this._pts))},Vf.prototype.interfaces_=function(){return[gp]},Vf.prototype.getClass=function(){return Vf};var Xf=function(){this._findAllIntersections=!1,this._isCheckEndSegmentsOnly=!1,this._li=null,this._interiorIntersection=null,this._intSegments=null,this._intersections=new lc,this._intersectionCount=0,this._keepIntersections=!0;var t=arguments[0];this._li=t,this._interiorIntersection=null};Xf.prototype.getInteriorIntersection=function(){return this._interiorIntersection},Xf.prototype.setCheckEndSegmentsOnly=function(t){this._isCheckEndSegmentsOnly=t},Xf.prototype.getIntersectionSegments=function(){return this._intSegments},Xf.prototype.count=function(){return this._intersectionCount},Xf.prototype.getIntersections=function(){return this._intersections},Xf.prototype.setFindAllIntersections=function(t){this._findAllIntersections=t},Xf.prototype.setKeepIntersections=function(t){this._keepIntersections=t},Xf.prototype.processIntersections=function(t,e,n,r){if(!this._findAllIntersections&&this.hasIntersection())return null;if(t===n&&e===r)return null;if(this._isCheckEndSegmentsOnly&&!(this.isEndSegment(t,e)||this.isEndSegment(n,r)))return null;var i=t.getCoordinates()[e],o=t.getCoordinates()[e+1],s=n.getCoordinates()[r],a=n.getCoordinates()[r+1];this._li.computeIntersection(i,o,s,a),this._li.hasIntersection()&&this._li.isInteriorIntersection()&&(this._intSegments=new Array(4).fill(null),this._intSegments[0]=i,this._intSegments[1]=o,this._intSegments[2]=s,this._intSegments[3]=a,this._interiorIntersection=this._li.getIntersection(0),this._keepIntersections&&this._intersections.add(this._interiorIntersection),this._intersectionCount++)},Xf.prototype.isEndSegment=function(t,e){return 0===e||e>=t.size()-2},Xf.prototype.hasIntersection=function(){return null!==this._interiorIntersection},Xf.prototype.isDone=function(){return!this._findAllIntersections&&null!==this._interiorIntersection},Xf.prototype.interfaces_=function(){return[Zp]},Xf.prototype.getClass=function(){return Xf},Xf.createAllIntersectionsFinder=function(t){var e=new Xf(t);return e.setFindAllIntersections(!0),e},Xf.createAnyIntersectionFinder=function(t){return new Xf(t)},Xf.createIntersectionCounter=function(t){var e=new Xf(t);return e.setFindAllIntersections(!0),e.setKeepIntersections(!1),e};var Yf=function(){this._li=new jl,this._segStrings=null,this._findAllIntersections=!1,this._segInt=null,this._isValid=!0;var t=arguments[0];this._segStrings=t};Yf.prototype.execute=function(){if(null!==this._segInt)return null;this.checkInteriorIntersections()},Yf.prototype.getIntersections=function(){return this._segInt.getIntersections()},Yf.prototype.isValid=function(){return this.execute(),this._isValid},Yf.prototype.setFindAllIntersections=function(t){this._findAllIntersections=t},Yf.prototype.checkInteriorIntersections=function(){this._isValid=!0,this._segInt=new Xf(this._li),this._segInt.setFindAllIntersections(this._findAllIntersections);var t=new Ip;if(t.setSegmentIntersector(this._segInt),t.computeNodes(this._segStrings),this._segInt.hasIntersection())return this._isValid=!1,null},Yf.prototype.checkValid=function(){if(this.execute(),!this._isValid)throw new Oh(this.getErrorMessage(),this._segInt.getInteriorIntersection())},Yf.prototype.getErrorMessage=function(){if(this._isValid)return"no intersections found";var t=this._segInt.getIntersectionSegments();return"found non-noded intersection between "+Fl.toLineString(t[0],t[1])+" and "+Fl.toLineString(t[2],t[3])},Yf.prototype.interfaces_=function(){return[]},Yf.prototype.getClass=function(){return Yf},Yf.computeIntersections=function(t){var e=new Yf(t);return e.setFindAllIntersections(!0),e.isValid(),e.getIntersections()};var Hf=function t(){this._nv=null;var e=arguments[0];this._nv=new Yf(t.toSegmentStrings(e))};Hf.prototype.checkValid=function(){this._nv.checkValid()},Hf.prototype.interfaces_=function(){return[]},Hf.prototype.getClass=function(){return Hf},Hf.toSegmentStrings=function(t){for(var e=new lc,n=t.iterator();n.hasNext();){var r=n.next();e.add(new Vf(r.getCoordinates(),r))}return e},Hf.checkValid=function(t){new Hf(t).checkValid()};var Wf=function(t){this._mapOp=t};Wf.prototype.map=function(t){for(var e=new lc,n=0;n<t.getNumGeometries();n++){var r=this._mapOp.map(t.getGeometryN(n));r.isEmpty()||e.add(r)}return t.getFactory().createGeometryCollection(_h.toGeometryArray(e))},Wf.prototype.interfaces_=function(){return[]},Wf.prototype.getClass=function(){return Wf},Wf.map=function(t,e){return new Wf(e).map(t)};var Jf=function(){this._op=null,this._geometryFactory=null,this._ptLocator=null,this._lineEdgesList=new lc,this._resultLineList=new lc;var t=arguments[0],e=arguments[1],n=arguments[2];this._op=t,this._geometryFactory=e,this._ptLocator=n};Jf.prototype.collectLines=function(t){for(var e=this,n=this._op.getGraph().getEdgeEnds().iterator();n.hasNext();){var r=n.next();e.collectLineEdge(r,t,e._lineEdgesList),e.collectBoundaryTouchEdge(r,t,e._lineEdgesList)}},Jf.prototype.labelIsolatedLine=function(t,e){var n=this._ptLocator.locate(t.getCoordinate(),this._op.getArgGeometry(e));t.getLabel().setLocation(e,n)},Jf.prototype.build=function(t){return this.findCoveredLineEdges(),this.collectLines(t),this.buildLines(t),this._resultLineList},Jf.prototype.collectLineEdge=function(t,e,n){var r=t.getLabel(),i=t.getEdge();t.isLineEdge()&&(t.isVisited()||!Mg.isResultOfOp(r,e)||i.isCovered()||(n.add(i),t.setVisitedEdge(!0)))},Jf.prototype.findCoveredLineEdges=function(){for(var t=this._op.getGraph().getNodes().iterator();t.hasNext();){t.next().getEdges().findCoveredLineEdges()}for(var e=this._op.getGraph().getEdgeEnds().iterator();e.hasNext();){var n=e.next(),r=n.getEdge();if(n.isLineEdge()&&!r.isCoveredSet()){var i=this._op.isCoveredByA(n.getCoordinate());r.setCovered(i)}}},Jf.prototype.labelIsolatedLines=function(t){for(var e=t.iterator();e.hasNext();){var n=e.next(),r=n.getLabel();n.isIsolated()&&(r.isNull(0)?this.labelIsolatedLine(n,0):this.labelIsolatedLine(n,1))}},Jf.prototype.buildLines=function(t){for(var e=this._lineEdgesList.iterator();e.hasNext();){var n=e.next(),r=this._geometryFactory.createLineString(n.getCoordinates());this._resultLineList.add(r),n.setInResult(!0)}},Jf.prototype.collectBoundaryTouchEdge=function(t,e,n){var r=t.getLabel();return t.isLineEdge()||t.isVisited()||t.isInteriorAreaEdge()||t.getEdge().isInResult()?null:(ql.isTrue(!(t.isInResult()||t.getSym().isInResult())||!t.getEdge().isInResult()),void(Mg.isResultOfOp(r,e)&&e===Mg.INTERSECTION&&(n.add(t.getEdge()),t.setVisitedEdge(!0))))},Jf.prototype.interfaces_=function(){return[]},Jf.prototype.getClass=function(){return Jf};var Zf=function(){this._op=null,this._geometryFactory=null,this._resultPointList=new lc;var t=arguments[0],e=arguments[1];this._op=t,this._geometryFactory=e};Zf.prototype.filterCoveredNodeToPoint=function(t){var e=t.getCoordinate();if(!this._op.isCoveredByLA(e)){var n=this._geometryFactory.createPoint(e);this._resultPointList.add(n)}},Zf.prototype.extractNonCoveredResultNodes=function(t){for(var e=this._op.getGraph().getNodes().iterator();e.hasNext();){var n=e.next();if(!n.isInResult()&&(!n.isIncidentEdgeInResult()&&(0===n.getEdges().getDegree()||t===Mg.INTERSECTION))){var r=n.getLabel();Mg.isResultOfOp(r,t)&&this.filterCoveredNodeToPoint(n)}}},Zf.prototype.build=function(t){return this.extractNonCoveredResultNodes(t),this._resultPointList},Zf.prototype.interfaces_=function(){return[]},Zf.prototype.getClass=function(){return Zf};var Kf=function(){this._inputGeom=null,this._factory=null,this._pruneEmptyGeometry=!0,this._preserveGeometryCollectionType=!0,this._preserveCollections=!1,this._preserveType=!1};Kf.prototype.transformPoint=function(t,e){return this._factory.createPoint(this.transformCoordinates(t.getCoordinateSequence(),t))},Kf.prototype.transformPolygon=function(t,e){var n=!0,r=this.transformLinearRing(t.getExteriorRing(),t);null!==r&&r instanceof nh&&!r.isEmpty()||(n=!1);for(var i=new lc,o=0;o<t.getNumInteriorRing();o++){var s=this.transformLinearRing(t.getInteriorRingN(o),t);null===s||s.isEmpty()||(s instanceof nh||(n=!1),i.add(s))}if(n)return this._factory.createPolygon(r,i.toArray([]));var a=new lc;return null!==r&&a.add(r),a.addAll(i),this._factory.buildGeometry(a)},Kf.prototype.createCoordinateSequence=function(t){return this._factory.getCoordinateSequenceFactory().create(t)},Kf.prototype.getInputGeometry=function(){return this._inputGeom},Kf.prototype.transformMultiLineString=function(t,e){for(var n=new lc,r=0;r<t.getNumGeometries();r++){var i=this.transformLineString(t.getGeometryN(r),t);null!==i&&(i.isEmpty()||n.add(i))}return this._factory.buildGeometry(n)},Kf.prototype.transformCoordinates=function(t,e){return this.copy(t)},Kf.prototype.transformLineString=function(t,e){return this._factory.createLineString(this.transformCoordinates(t.getCoordinateSequence(),t))},Kf.prototype.transformMultiPoint=function(t,e){for(var n=new lc,r=0;r<t.getNumGeometries();r++){var i=this.transformPoint(t.getGeometryN(r),t);null!==i&&(i.isEmpty()||n.add(i))}return this._factory.buildGeometry(n)},Kf.prototype.transformMultiPolygon=function(t,e){for(var n=new lc,r=0;r<t.getNumGeometries();r++){var i=this.transformPolygon(t.getGeometryN(r),t);null!==i&&(i.isEmpty()||n.add(i))}return this._factory.buildGeometry(n)},Kf.prototype.copy=function(t){return t.copy()},Kf.prototype.transformGeometryCollection=function(t,e){for(var n=new lc,r=0;r<t.getNumGeometries();r++){var i=this.transform(t.getGeometryN(r));null!==i&&(this._pruneEmptyGeometry&&i.isEmpty()||n.add(i))}return this._preserveGeometryCollectionType?this._factory.createGeometryCollection(_h.toGeometryArray(n)):this._factory.buildGeometry(n)},Kf.prototype.transform=function(t){if(this._inputGeom=t,this._factory=t.getFactory(),t instanceof Qc)return this.transformPoint(t,null);if(t instanceof eh)return this.transformMultiPoint(t,null);if(t instanceof nh)return this.transformLinearRing(t,null);if(t instanceof Zc)return this.transformLineString(t,null);if(t instanceof Gc)return this.transformMultiLineString(t,null);if(t instanceof th)return this.transformPolygon(t,null);if(t instanceof rh)return this.transformMultiPolygon(t,null);if(t instanceof kc)return this.transformGeometryCollection(t,null);throw new el("Unknown Geometry subtype: "+t.getClass().getName())},Kf.prototype.transformLinearRing=function(t,e){var n=this.transformCoordinates(t.getCoordinateSequence(),t);if(null===n)return this._factory.createLinearRing(null);var r=n.size();return r>0&&r<4&&!this._preserveType?this._factory.createLineString(n):this._factory.createLinearRing(n)},Kf.prototype.interfaces_=function(){return[]},Kf.prototype.getClass=function(){return Kf};var Qf=function t(){if(this._snapTolerance=0,this._srcPts=null,this._seg=new vp,this._allowSnappingToSourceVertices=!1,this._isClosed=!1,arguments[0]instanceof Zc&&"number"==typeof arguments[1]){var e=arguments[0],n=arguments[1];t.call(this,e.getCoordinates(),n)}else if(arguments[0]instanceof Array&&"number"==typeof arguments[1]){var r=arguments[0],i=arguments[1];this._srcPts=r,this._isClosed=t.isClosed(r),this._snapTolerance=i}};Qf.prototype.snapVertices=function(t,e){for(var n=this._isClosed?t.size()-1:t.size(),r=0;r<n;r++){var i=t.get(r),o=this.findSnapForVertex(i,e);null!==o&&(t.set(r,new ul(o)),0===r&&this._isClosed&&t.set(t.size()-1,new ul(o)))}},Qf.prototype.findSnapForVertex=function(t,e){for(var n=0;n<e.length;n++){if(t.equals2D(e[n]))return null;if(t.distance(e[n])<this._snapTolerance)return e[n]}return null},Qf.prototype.snapTo=function(t){var e=new hc(this._srcPts);return this.snapVertices(e,t),this.snapSegments(e,t),e.toCoordinateArray()},Qf.prototype.snapSegments=function(t,e){if(0===e.length)return null;var n=e.length;e[0].equals2D(e[e.length-1])&&(n=e.length-1);for(var r=0;r<n;r++){var i=e[r],o=this.findSegmentIndexToSnap(i,t);o>=0&&t.add(o+1,new ul(i),!1)}},Qf.prototype.findSegmentIndexToSnap=function(t,e){for(var n=this,r=nl.MAX_VALUE,i=-1,o=0;o<e.size()-1;o++){if(n._seg.p0=e.get(o),n._seg.p1=e.get(o+1),n._seg.p0.equals2D(t)||n._seg.p1.equals2D(t)){if(n._allowSnappingToSourceVertices)continue;return-1}var s=n._seg.distance(t);s<n._snapTolerance&&s<r&&(r=s,i=o)}return i},Qf.prototype.setAllowSnappingToSourceVertices=function(t){this._allowSnappingToSourceVertices=t},Qf.prototype.interfaces_=function(){return[]},Qf.prototype.getClass=function(){return Qf},Qf.isClosed=function(t){return!(t.length<=1)&&t[0].equals2D(t[t.length-1])};var $f=function(t){this._srcGeom=t||null},tg={SNAP_PRECISION_FACTOR:{configurable:!0}};$f.prototype.snapTo=function(t,e){var n=this.extractTargetCoordinates(t);return new eg(e,n).transform(this._srcGeom)},$f.prototype.snapToSelf=function(t,e){var n=this.extractTargetCoordinates(this._srcGeom),r=new eg(t,n,!0).transform(this._srcGeom),i=r;return e&&gl(i,$c)&&(i=r.buffer(0)),i},$f.prototype.computeSnapTolerance=function(t){return this.computeMinimumSegmentLength(t)/10},$f.prototype.extractTargetCoordinates=function(t){for(var e=new Lc,n=t.getCoordinates(),r=0;r<n.length;r++)e.add(n[r]);return e.toArray(new Array(0).fill(null))},$f.prototype.computeMinimumSegmentLength=function(t){for(var e=nl.MAX_VALUE,n=0;n<t.length-1;n++){var r=t[n].distance(t[n+1]);r<e&&(e=r)}return e},$f.prototype.interfaces_=function(){return[]},$f.prototype.getClass=function(){return $f},$f.snap=function(t,e,n){var r=new Array(2).fill(null),i=new $f(t);r[0]=i.snapTo(e,n);var o=new $f(e);return r[1]=o.snapTo(r[0],n),r},$f.computeOverlaySnapTolerance=function(){if(1===arguments.length){var t=arguments[0],e=$f.computeSizeBasedSnapTolerance(t),n=t.getPrecisionModel();if(n.getType()===gh.FIXED){var r=1/n.getScale()*2/1.415;r>e&&(e=r)}return e}if(2===arguments.length){var i=arguments[0],o=arguments[1];return Math.min($f.computeOverlaySnapTolerance(i),$f.computeOverlaySnapTolerance(o))}},$f.computeSizeBasedSnapTolerance=function(t){var e=t.getEnvelopeInternal();return Math.min(e.getHeight(),e.getWidth())*$f.SNAP_PRECISION_FACTOR},$f.snapToSelf=function(t,e,n){return new $f(t).snapToSelf(e,n)},tg.SNAP_PRECISION_FACTOR.get=function(){return 1e-9},Object.defineProperties($f,tg);var eg=function(t){function e(e,n,r){t.call(this),this._snapTolerance=e||null,this._snapPts=n||null,this._isSelfSnap=void 0!==r&&r}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.snapLine=function(t,e){var n=new Qf(t,this._snapTolerance);return n.setAllowSnappingToSourceVertices(this._isSelfSnap),n.snapTo(e)},e.prototype.transformCoordinates=function(t,e){var n=t.toCoordinateArray(),r=this.snapLine(n,this._snapPts);return this._factory.getCoordinateSequenceFactory().create(r)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(Kf),ng=function(){this._isFirst=!0,this._commonMantissaBitsCount=53,this._commonBits=0,this._commonSignExp=null};ng.prototype.getCommon=function(){return nl.longBitsToDouble(this._commonBits)},ng.prototype.add=function(t){var e=nl.doubleToLongBits(t);return this._isFirst?(this._commonBits=e,this._commonSignExp=ng.signExpBits(this._commonBits),this._isFirst=!1,null):ng.signExpBits(e)!==this._commonSignExp?(this._commonBits=0,null):(this._commonMantissaBitsCount=ng.numCommonMostSigMantissaBits(this._commonBits,e),void(this._commonBits=ng.zeroLowerBits(this._commonBits,64-(12+this._commonMantissaBitsCount))))},ng.prototype.toString=function(){if(1===arguments.length){var t=arguments[0],e=nl.longBitsToDouble(t),n=nl.toBinaryString(t),r="0000000000000000000000000000000000000000000000000000000000000000"+n,i=r.substring(r.length-64),o=i.substring(0,1)+"  "+i.substring(1,12)+"(exp) "+i.substring(12)+" [ "+e+" ]";return o}},ng.prototype.interfaces_=function(){return[]},ng.prototype.getClass=function(){return ng},ng.getBit=function(t,e){return 0!=(t&1<<e)?1:0},ng.signExpBits=function(t){return t>>52},ng.zeroLowerBits=function(t,e){return t&~((1<<e)-1)},ng.numCommonMostSigMantissaBits=function(t,e){for(var n=0,r=52;r>=0;r--){if(ng.getBit(t,r)!==ng.getBit(e,r))return n;n++}return 52};var rg=function(){this._commonCoord=null,this._ccFilter=new og},ig={CommonCoordinateFilter:{configurable:!0},Translater:{configurable:!0}};rg.prototype.addCommonBits=function(t){var e=new sg(this._commonCoord);t.apply(e),t.geometryChanged()},rg.prototype.removeCommonBits=function(t){if(0===this._commonCoord.x&&0===this._commonCoord.y)return t;var e=new ul(this._commonCoord);e.x=-e.x,e.y=-e.y;var n=new sg(e);return t.apply(n),t.geometryChanged(),t},rg.prototype.getCommonCoordinate=function(){return this._commonCoord},rg.prototype.add=function(t){t.apply(this._ccFilter),this._commonCoord=this._ccFilter.getCommonCoordinate()},rg.prototype.interfaces_=function(){return[]},rg.prototype.getClass=function(){return rg},ig.CommonCoordinateFilter.get=function(){return og},ig.Translater.get=function(){return sg},Object.defineProperties(rg,ig);var og=function(){this._commonBitsX=new ng,this._commonBitsY=new ng};og.prototype.filter=function(t){this._commonBitsX.add(t.x),this._commonBitsY.add(t.y)},og.prototype.getCommonCoordinate=function(){return new ul(this._commonBitsX.getCommon(),this._commonBitsY.getCommon())},og.prototype.interfaces_=function(){return[Kl]},og.prototype.getClass=function(){return og};var sg=function(){this.trans=null;var t=arguments[0];this.trans=t};sg.prototype.filter=function(t,e){var n=t.getOrdinate(e,0)+this.trans.x,r=t.getOrdinate(e,1)+this.trans.y;t.setOrdinate(e,0,n),t.setOrdinate(e,1,r)},sg.prototype.isDone=function(){return!1},sg.prototype.isGeometryChanged=function(){return!0},sg.prototype.interfaces_=function(){return[Fc]},sg.prototype.getClass=function(){return sg};var ag=function(t,e){this._geom=new Array(2).fill(null),this._snapTolerance=null,this._cbr=null,this._geom[0]=t,this._geom[1]=e,this.computeSnapTolerance()};ag.prototype.selfSnap=function(t){return new $f(t).snapTo(t,this._snapTolerance)},ag.prototype.removeCommonBits=function(t){this._cbr=new rg,this._cbr.add(t[0]),this._cbr.add(t[1]);var e=new Array(2).fill(null);return e[0]=this._cbr.removeCommonBits(t[0].copy()),e[1]=this._cbr.removeCommonBits(t[1].copy()),e},ag.prototype.prepareResult=function(t){return this._cbr.addCommonBits(t),t},ag.prototype.getResultGeometry=function(t){var e=this.snap(this._geom),n=Mg.overlayOp(e[0],e[1],t);return this.prepareResult(n)},ag.prototype.checkValid=function(t){t.isValid()||Pl.out.println("Snapped geometry is invalid")},ag.prototype.computeSnapTolerance=function(){this._snapTolerance=$f.computeOverlaySnapTolerance(this._geom[0],this._geom[1])},ag.prototype.snap=function(t){var e=this.removeCommonBits(t);return $f.snap(e[0],e[1],this._snapTolerance)},ag.prototype.interfaces_=function(){return[]},ag.prototype.getClass=function(){return ag},ag.overlayOp=function(t,e,n){return new ag(t,e).getResultGeometry(n)},ag.union=function(t,e){return ag.overlayOp(t,e,Mg.UNION)},ag.intersection=function(t,e){return ag.overlayOp(t,e,Mg.INTERSECTION)},ag.symDifference=function(t,e){return ag.overlayOp(t,e,Mg.SYMDIFFERENCE)},ag.difference=function(t,e){return ag.overlayOp(t,e,Mg.DIFFERENCE)};var ug=function(t,e){this._geom=new Array(2).fill(null),this._geom[0]=t,this._geom[1]=e};ug.prototype.getResultGeometry=function(t){var e=null,n=!1,r=null;try{e=Mg.overlayOp(this._geom[0],this._geom[1],t);n=!0}catch(t){if(!(t instanceof kl))throw t;r=t}if(!n)try{e=ag.overlayOp(this._geom[0],this._geom[1],t)}catch(t){throw t instanceof kl?r:t}return e},ug.prototype.interfaces_=function(){return[]},ug.prototype.getClass=function(){return ug},ug.overlayOp=function(t,e,n){return new ug(t,e).getResultGeometry(n)},ug.union=function(t,e){return ug.overlayOp(t,e,Mg.UNION)},ug.intersection=function(t,e){return ug.overlayOp(t,e,Mg.INTERSECTION)},ug.symDifference=function(t,e){return ug.overlayOp(t,e,Mg.SYMDIFFERENCE)},ug.difference=function(t,e){return ug.overlayOp(t,e,Mg.DIFFERENCE)};var lg=function(){this.mce=null,this.chainIndex=null;var t=arguments[0],e=arguments[1];this.mce=t,this.chainIndex=e};lg.prototype.computeIntersections=function(t,e){this.mce.computeIntersectsForChain(this.chainIndex,t.mce,t.chainIndex,e)},lg.prototype.interfaces_=function(){return[]},lg.prototype.getClass=function(){return lg};var cg=function t(){if(this._label=null,this._xValue=null,this._eventType=null,this._insertEvent=null,this._deleteEventIndex=null,this._obj=null,2===arguments.length){var e=arguments[0],n=arguments[1];this._eventType=t.DELETE,this._xValue=e,this._insertEvent=n}else if(3===arguments.length){var r=arguments[0],i=arguments[1],o=arguments[2];this._eventType=t.INSERT,this._label=r,this._xValue=i,this._obj=o}},hg={INSERT:{configurable:!0},DELETE:{configurable:!0}};cg.prototype.isDelete=function(){return this._eventType===cg.DELETE},cg.prototype.setDeleteEventIndex=function(t){this._deleteEventIndex=t},cg.prototype.getObject=function(){return this._obj},cg.prototype.compareTo=function(t){var e=t;return this._xValue<e._xValue?-1:this._xValue>e._xValue?1:this._eventType<e._eventType?-1:this._eventType>e._eventType?1:0},cg.prototype.getInsertEvent=function(){return this._insertEvent},cg.prototype.isInsert=function(){return this._eventType===cg.INSERT},cg.prototype.isSameLabel=function(t){return null!==this._label&&this._label===t._label},cg.prototype.getDeleteEventIndex=function(){return this._deleteEventIndex},cg.prototype.interfaces_=function(){return[il]},cg.prototype.getClass=function(){return cg},hg.INSERT.get=function(){return 1},hg.DELETE.get=function(){return 2},Object.defineProperties(cg,hg);var pg=function(){};pg.prototype.interfaces_=function(){return[]},pg.prototype.getClass=function(){return pg};var fg=function(){this._hasIntersection=!1,this._hasProper=!1,this._hasProperInterior=!1,this._properIntersectionPoint=null,this._li=null,this._includeProper=null,this._recordIsolated=null,this._isSelfIntersection=null,this._numIntersections=0,this.numTests=0,this._bdyNodes=null,this._isDone=!1,this._isDoneWhenProperInt=!1;var t=arguments[0],e=arguments[1],n=arguments[2];this._li=t,this._includeProper=e,this._recordIsolated=n};fg.prototype.isTrivialIntersection=function(t,e,n,r){if(t===n&&1===this._li.getIntersectionNum()){if(fg.isAdjacentSegments(e,r))return!0;if(t.isClosed()){var i=t.getNumPoints()-1;if(0===e&&r===i||0===r&&e===i)return!0}}return!1},fg.prototype.getProperIntersectionPoint=function(){return this._properIntersectionPoint},fg.prototype.setIsDoneIfProperInt=function(t){this._isDoneWhenProperInt=t},fg.prototype.hasProperInteriorIntersection=function(){return this._hasProperInterior},fg.prototype.isBoundaryPointInternal=function(t,e){for(var n=e.iterator();n.hasNext();){var r=n.next().getCoordinate();if(t.isIntersection(r))return!0}return!1},fg.prototype.hasProperIntersection=function(){return this._hasProper},fg.prototype.hasIntersection=function(){return this._hasIntersection},fg.prototype.isDone=function(){return this._isDone},fg.prototype.isBoundaryPoint=function(t,e){return null!==e&&(!!this.isBoundaryPointInternal(t,e[0])||!!this.isBoundaryPointInternal(t,e[1]))},fg.prototype.setBoundaryNodes=function(t,e){this._bdyNodes=new Array(2).fill(null),this._bdyNodes[0]=t,this._bdyNodes[1]=e},fg.prototype.addIntersections=function(t,e,n,r){if(t===n&&e===r)return null;this.numTests++;var i=t.getCoordinates()[e],o=t.getCoordinates()[e+1],s=n.getCoordinates()[r],a=n.getCoordinates()[r+1];this._li.computeIntersection(i,o,s,a),this._li.hasIntersection()&&(this._recordIsolated&&(t.setIsolated(!1),n.setIsolated(!1)),this._numIntersections++,this.isTrivialIntersection(t,e,n,r)||(this._hasIntersection=!0,!this._includeProper&&this._li.isProper()||(t.addIntersections(this._li,e,0),n.addIntersections(this._li,r,1)),this._li.isProper()&&(this._properIntersectionPoint=this._li.getIntersection(0).copy(),this._hasProper=!0,this._isDoneWhenProperInt&&(this._isDone=!0),this.isBoundaryPoint(this._li,this._bdyNodes)||(this._hasProperInterior=!0))))},fg.prototype.interfaces_=function(){return[]},fg.prototype.getClass=function(){return fg},fg.isAdjacentSegments=function(t,e){return 1===Math.abs(t-e)};var gg=function(t){function e(){t.call(this),this.events=new lc,this.nOverlaps=null}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.prepareEvents=function(){np.sort(this.events);for(var t=0;t<this.events.size();t++){var e=this.events.get(t);e.isDelete()&&e.getInsertEvent().setDeleteEventIndex(t)}},e.prototype.computeIntersections=function(){var t=this;if(1===arguments.length){var e=arguments[0];this.nOverlaps=0,this.prepareEvents();for(var n=0;n<this.events.size();n++){var r=t.events.get(n);if(r.isInsert()&&t.processOverlaps(n,r.getDeleteEventIndex(),r,e),e.isDone())break}}else if(3===arguments.length)if(arguments[2]instanceof fg&&gl(arguments[0],ac)&&gl(arguments[1],ac)){var i=arguments[0],o=arguments[1],s=arguments[2];this.addEdges(i,i),this.addEdges(o,o),this.computeIntersections(s)}else if("boolean"==typeof arguments[2]&&gl(arguments[0],ac)&&arguments[1]instanceof fg){var a=arguments[0],u=arguments[1],l=arguments[2];l?this.addEdges(a,null):this.addEdges(a),this.computeIntersections(u)}},e.prototype.addEdge=function(t,e){for(var n=t.getMonotoneChainEdge(),r=n.getStartIndexes(),i=0;i<r.length-1;i++){var o=new lg(n,i),s=new cg(e,n.getMinX(i),o);this.events.add(s),this.events.add(new cg(n.getMaxX(i),s))}},e.prototype.processOverlaps=function(t,e,n,r){for(var i=n.getObject(),o=t;o<e;o++){var s=this.events.get(o);if(s.isInsert()){var a=s.getObject();n.isSameLabel(s)||(i.computeIntersections(a,r),this.nOverlaps++)}}},e.prototype.addEdges=function(){var t=this;if(1===arguments.length)for(var e=arguments[0],n=e.iterator();n.hasNext();){var r=n.next();t.addEdge(r,r)}else if(2===arguments.length)for(var i=arguments[0],o=arguments[1],s=i.iterator();s.hasNext();){var a=s.next();t.addEdge(a,o)}},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(pg),dg=function(){this._min=nl.POSITIVE_INFINITY,this._max=nl.NEGATIVE_INFINITY},yg={NodeComparator:{configurable:!0}};dg.prototype.getMin=function(){return this._min},dg.prototype.intersects=function(t,e){return!(this._min>e||this._max<t)},dg.prototype.getMax=function(){return this._max},dg.prototype.toString=function(){return Fl.toLineString(new ul(this._min,0),new ul(this._max,0))},dg.prototype.interfaces_=function(){return[]},dg.prototype.getClass=function(){return dg},yg.NodeComparator.get=function(){return vg},Object.defineProperties(dg,yg);var vg=function(){};vg.prototype.compare=function(t,e){var n=t,r=e,i=(n._min+n._max)/2,o=(r._min+r._max)/2;return i<o?-1:i>o?1:0},vg.prototype.interfaces_=function(){return[sl]},vg.prototype.getClass=function(){return vg};var _g=function(t){function e(){t.call(this),this._item=null;var e=arguments[0],n=arguments[1],r=arguments[2];this._min=e,this._max=n,this._item=r}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.query=function(t,e,n){if(!this.intersects(t,e))return null;n.visitItem(this._item)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(dg),mg=function(t){function e(){t.call(this),this._node1=null,this._node2=null;var e=arguments[0],n=arguments[1];this._node1=e,this._node2=n,this.buildExtent(this._node1,this._node2)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.buildExtent=function(t,e){this._min=Math.min(t._min,e._min),this._max=Math.max(t._max,e._max)},e.prototype.query=function(t,e,n){if(!this.intersects(t,e))return null;null!==this._node1&&this._node1.query(t,e,n),null!==this._node2&&this._node2.query(t,e,n)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(dg),xg=function(){this._leaves=new lc,this._root=null,this._level=0};xg.prototype.buildTree=function(){np.sort(this._leaves,new dg.NodeComparator);for(var t=this._leaves,e=null,n=new lc;;){if(this.buildLevel(t,n),1===n.size())return n.get(0);e=t,t=n,n=e}},xg.prototype.insert=function(t,e,n){if(null!==this._root)throw new Error("Index cannot be added to once it has been queried");this._leaves.add(new _g(t,e,n))},xg.prototype.query=function(t,e,n){this.init(),this._root.query(t,e,n)},xg.prototype.buildRoot=function(){if(null!==this._root)return null;this._root=this.buildTree()},xg.prototype.printNode=function(t){Pl.out.println(Fl.toLineString(new ul(t._min,this._level),new ul(t._max,this._level)))},xg.prototype.init=function(){if(null!==this._root)return null;this.buildRoot()},xg.prototype.buildLevel=function(t,e){this._level++,e.clear();for(var n=0;n<t.size();n+=2){var r=t.get(n);if(null===(n+1<t.size()?t.get(n):null))e.add(r);else{var i=new mg(t.get(n),t.get(n+1));e.add(i)}}},xg.prototype.interfaces_=function(){return[]},xg.prototype.getClass=function(){return xg};var Eg=function(){this._items=new lc};Eg.prototype.visitItem=function(t){this._items.add(t)},Eg.prototype.getItems=function(){return this._items},Eg.prototype.interfaces_=function(){return[Qh]},Eg.prototype.getClass=function(){return Eg};var bg=function(){this._index=null;var t=arguments[0];if(!gl(t,$c))throw new el("Argument must be Polygonal");this._index=new Ng(t)},wg={SegmentVisitor:{configurable:!0},IntervalIndexedGeometry:{configurable:!0}};bg.prototype.locate=function(t){var e=new Vl(t),n=new Ig(e);return this._index.query(t.y,t.y,n),e.getLocation()},bg.prototype.interfaces_=function(){return[jp]},bg.prototype.getClass=function(){return bg},wg.SegmentVisitor.get=function(){return Ig},wg.IntervalIndexedGeometry.get=function(){return Ng},Object.defineProperties(bg,wg);var Ig=function(){this._counter=null;var t=arguments[0];this._counter=t};Ig.prototype.visitItem=function(t){var e=t;this._counter.countSegment(e.getCoordinate(0),e.getCoordinate(1))},Ig.prototype.interfaces_=function(){return[Qh]},Ig.prototype.getClass=function(){return Ig};var Ng=function(){this._index=new xg;var t=arguments[0];this.init(t)};Ng.prototype.init=function(t){for(var e=Cf.getLines(t).iterator();e.hasNext();){var n=e.next().getCoordinates();this.addLine(n)}},Ng.prototype.addLine=function(t){for(var e=1;e<t.length;e++){var n=new vp(t[e-1],t[e]),r=Math.min(n.p0.y,n.p1.y),i=Math.max(n.p0.y,n.p1.y);this._index.insert(r,i,n)}},Ng.prototype.query=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1],n=new Eg;return this._index.query(t,e,n),n.getItems()}if(3===arguments.length){var r=arguments[0],i=arguments[1],o=arguments[2];this._index.query(r,i,o)}},Ng.prototype.interfaces_=function(){return[]},Ng.prototype.getClass=function(){return Ng};var Sg=function(t){function e(){if(t.call(this),this._parentGeom=null,this._lineEdgeMap=new fh,this._boundaryNodeRule=null,this._useBoundaryDeterminationRule=!0,this._argIndex=null,this._boundaryNodes=null,this._hasTooFewPoints=!1,this._invalidPoint=null,this._areaPtLocator=null,this._ptLocator=new Pf,2===arguments.length){var e=arguments[0],n=arguments[1],r=Ql.OGC_SFS_BOUNDARY_RULE;this._argIndex=e,this._parentGeom=n,this._boundaryNodeRule=r,null!==n&&this.add(n)}else if(3===arguments.length){var i=arguments[0],o=arguments[1],s=arguments[2];this._argIndex=i,this._parentGeom=o,this._boundaryNodeRule=s,null!==o&&this.add(o)}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.insertBoundaryPoint=function(t,n){var r=this._nodes.addNode(n).getLabel(),i=1;r.getLocation(t,Sh.ON)===pl.BOUNDARY&&i++;var o=e.determineBoundary(this._boundaryNodeRule,i);r.setLocation(t,o)},e.prototype.computeSelfNodes=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1];return this.computeSelfNodes(t,e,!1)}if(3===arguments.length){var n=arguments[0],r=arguments[1],i=arguments[2],o=new fg(n,!0,!1);o.setIsDoneIfProperInt(i);var s=this.createEdgeSetIntersector(),a=this._parentGeom instanceof nh||this._parentGeom instanceof th||this._parentGeom instanceof rh,u=r||!a;return s.computeIntersections(this._edges,o,u),this.addSelfIntersectionNodes(this._argIndex),o}},e.prototype.computeSplitEdges=function(t){for(var e=this._edges.iterator();e.hasNext();){e.next().eiList.addSplitEdges(t)}},e.prototype.computeEdgeIntersections=function(t,e,n){var r=new fg(e,n,!0);return r.setBoundaryNodes(this.getBoundaryNodes(),t.getBoundaryNodes()),this.createEdgeSetIntersector().computeIntersections(this._edges,t._edges,r),r},e.prototype.getGeometry=function(){return this._parentGeom},e.prototype.getBoundaryNodeRule=function(){return this._boundaryNodeRule},e.prototype.hasTooFewPoints=function(){return this._hasTooFewPoints},e.prototype.addPoint=function(){if(arguments[0]instanceof Qc){var t=arguments[0],e=t.getCoordinate();this.insertPoint(this._argIndex,e,pl.INTERIOR)}else if(arguments[0]instanceof ul){var n=arguments[0];this.insertPoint(this._argIndex,n,pl.INTERIOR)}},e.prototype.addPolygon=function(t){this.addPolygonRing(t.getExteriorRing(),pl.EXTERIOR,pl.INTERIOR);for(var e=0;e<t.getNumInteriorRing();e++){var n=t.getInteriorRingN(e);this.addPolygonRing(n,pl.INTERIOR,pl.EXTERIOR)}},e.prototype.addEdge=function(t){this.insertEdge(t);var e=t.getCoordinates();this.insertPoint(this._argIndex,e[0],pl.BOUNDARY),this.insertPoint(this._argIndex,e[e.length-1],pl.BOUNDARY)},e.prototype.addLineString=function(t){var e=pc.removeRepeatedPoints(t.getCoordinates());if(e.length<2)return this._hasTooFewPoints=!0,this._invalidPoint=e[0],null;var n=new of(e,new Dh(this._argIndex,pl.INTERIOR));this._lineEdgeMap.put(t,n),this.insertEdge(n),ql.isTrue(e.length>=2,"found LineString with single point"),this.insertBoundaryPoint(this._argIndex,e[0]),this.insertBoundaryPoint(this._argIndex,e[e.length-1])},e.prototype.getInvalidPoint=function(){return this._invalidPoint},e.prototype.getBoundaryPoints=function(){for(var t=this.getBoundaryNodes(),e=new Array(t.size()).fill(null),n=0,r=t.iterator();r.hasNext();){var i=r.next();e[n++]=i.getCoordinate().copy()}return e},e.prototype.getBoundaryNodes=function(){return null===this._boundaryNodes&&(this._boundaryNodes=this._nodes.getBoundaryNodes(this._argIndex)),this._boundaryNodes},e.prototype.addSelfIntersectionNode=function(t,e,n){if(this.isBoundaryNode(t,e))return null;n===pl.BOUNDARY&&this._useBoundaryDeterminationRule?this.insertBoundaryPoint(t,e):this.insertPoint(t,e,n)},e.prototype.addPolygonRing=function(t,e,n){if(t.isEmpty())return null;var r=pc.removeRepeatedPoints(t.getCoordinates());if(r.length<4)return this._hasTooFewPoints=!0,this._invalidPoint=r[0],null;var i=e,o=n;Xl.isCCW(r)&&(i=n,o=e);var s=new of(r,new Dh(this._argIndex,pl.BOUNDARY,i,o));this._lineEdgeMap.put(t,s),this.insertEdge(s),this.insertPoint(this._argIndex,r[0],pl.BOUNDARY)},e.prototype.insertPoint=function(t,e,n){var r=this._nodes.addNode(e),i=r.getLabel();null===i?r._label=new Dh(t,n):i.setLocation(t,n)},e.prototype.createEdgeSetIntersector=function(){return new gg},e.prototype.addSelfIntersectionNodes=function(t){for(var e=this._edges.iterator();e.hasNext();)for(var n=e.next(),r=n.getLabel().getLocation(t),i=n.eiList.iterator();i.hasNext();){var o=i.next();this.addSelfIntersectionNode(t,o.coord,r)}},e.prototype.add=function(){if(1!==arguments.length)return t.prototype.add.apply(this,arguments);var e=arguments[0];if(e.isEmpty())return null;if(e instanceof rh&&(this._useBoundaryDeterminationRule=!1),e instanceof th)this.addPolygon(e);else if(e instanceof Zc)this.addLineString(e);else if(e instanceof Qc)this.addPoint(e);else if(e instanceof eh)this.addCollection(e);else if(e instanceof Gc)this.addCollection(e);else if(e instanceof rh)this.addCollection(e);else{if(!(e instanceof kc))throw new Error(e.getClass().getName());this.addCollection(e)}},e.prototype.addCollection=function(t){for(var e=0;e<t.getNumGeometries();e++){var n=t.getGeometryN(e);this.add(n)}},e.prototype.locate=function(t){return gl(this._parentGeom,$c)&&this._parentGeom.getNumGeometries()>50?(null===this._areaPtLocator&&(this._areaPtLocator=new bg(this._parentGeom)),this._areaPtLocator.locate(t)):this._ptLocator.locate(t,this._parentGeom)},e.prototype.findEdge=function(){if(1===arguments.length){var e=arguments[0];return this._lineEdgeMap.get(e)}return t.prototype.findEdge.apply(this,arguments)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e.determineBoundary=function(t,e){return t.isInBoundary(e)?pl.BOUNDARY:pl.INTERIOR},e}(Hh),Cg=function(){if(this._li=new jl,this._resultPrecisionModel=null,this._arg=null,1===arguments.length){var t=arguments[0];this.setComputationPrecision(t.getPrecisionModel()),this._arg=new Array(1).fill(null),this._arg[0]=new Sg(0,t)}else if(2===arguments.length){var e=arguments[0],n=arguments[1],r=Ql.OGC_SFS_BOUNDARY_RULE;e.getPrecisionModel().compareTo(n.getPrecisionModel())>=0?this.setComputationPrecision(e.getPrecisionModel()):this.setComputationPrecision(n.getPrecisionModel()),this._arg=new Array(2).fill(null),this._arg[0]=new Sg(0,e,r),this._arg[1]=new Sg(1,n,r)}else if(3===arguments.length){var i=arguments[0],o=arguments[1],s=arguments[2];i.getPrecisionModel().compareTo(o.getPrecisionModel())>=0?this.setComputationPrecision(i.getPrecisionModel()):this.setComputationPrecision(o.getPrecisionModel()),this._arg=new Array(2).fill(null),this._arg[0]=new Sg(0,i,s),this._arg[1]=new Sg(1,o,s)}};Cg.prototype.getArgGeometry=function(t){return this._arg[t].getGeometry()},Cg.prototype.setComputationPrecision=function(t){this._resultPrecisionModel=t,this._li.setPrecisionModel(this._resultPrecisionModel)},Cg.prototype.interfaces_=function(){return[]},Cg.prototype.getClass=function(){return Cg};var Pg=function(){};Pg.prototype.interfaces_=function(){return[]},Pg.prototype.getClass=function(){return Pg},Pg.map=function(){if(arguments[0]instanceof Wl&&gl(arguments[1],Pg.MapOp)){for(var t=arguments[0],e=arguments[1],n=new lc,r=0;r<t.getNumGeometries();r++){var i=e.map(t.getGeometryN(r));null!==i&&n.add(i)}return t.getFactory().buildGeometry(n)}if(gl(arguments[0],ic)&&gl(arguments[1],Pg.MapOp)){for(var o=arguments[0],s=arguments[1],a=new lc,u=o.iterator();u.hasNext();){var l=u.next(),c=s.map(l);null!==c&&a.add(c)}return a}},Pg.MapOp=function(){};var Mg=function(t){function e(){var e=arguments[0],n=arguments[1];t.call(this,e,n),this._ptLocator=new Pf,this._geomFact=null,this._resultGeom=null,this._graph=null,this._edgeList=new Jp,this._resultPolyList=new lc,this._resultLineList=new lc,this._resultPointList=new lc,this._graph=new Hh(new Hp),this._geomFact=e.getFactory()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.insertUniqueEdge=function(t){var e=this._edgeList.findEqualEdge(t);if(null!==e){var n=e.getLabel(),r=t.getLabel();e.isPointwiseEqual(t)||(r=new Dh(t.getLabel())).flip();var i=e.getDepth();i.isNull()&&i.add(n),i.add(r),n.merge(r)}else this._edgeList.add(t)},e.prototype.getGraph=function(){return this._graph},e.prototype.cancelDuplicateResultEdges=function(){for(var t=this._graph.getEdgeEnds().iterator();t.hasNext();){var e=t.next(),n=e.getSym();e.isInResult()&&n.isInResult()&&(e.setInResult(!1),n.setInResult(!1))}},e.prototype.isCoveredByLA=function(t){return!!this.isCovered(t,this._resultLineList)||!!this.isCovered(t,this._resultPolyList)},e.prototype.computeGeometry=function(t,n,r,i){var o=new lc;return o.addAll(t),o.addAll(n),o.addAll(r),o.isEmpty()?e.createEmptyResult(i,this._arg[0].getGeometry(),this._arg[1].getGeometry(),this._geomFact):this._geomFact.buildGeometry(o)},e.prototype.mergeSymLabels=function(){for(var t=this._graph.getNodes().iterator();t.hasNext();){t.next().getEdges().mergeSymLabels()}},e.prototype.isCovered=function(t,e){for(var n=e.iterator();n.hasNext();){var r=n.next();if(this._ptLocator.locate(t,r)!==pl.EXTERIOR)return!0}return!1},e.prototype.replaceCollapsedEdges=function(){for(var t=new lc,e=this._edgeList.iterator();e.hasNext();){var n=e.next();n.isCollapsed()&&(e.remove(),t.add(n.getCollapsedEdge()))}this._edgeList.addAll(t)},e.prototype.updateNodeLabelling=function(){for(var t=this._graph.getNodes().iterator();t.hasNext();){var e=t.next(),n=e.getEdges().getLabel();e.getLabel().merge(n)}},e.prototype.getResultGeometry=function(t){return this.computeOverlay(t),this._resultGeom},e.prototype.insertUniqueEdges=function(t){for(var e=t.iterator();e.hasNext();){var n=e.next();this.insertUniqueEdge(n)}},e.prototype.computeOverlay=function(t){this.copyPoints(0),this.copyPoints(1),this._arg[0].computeSelfNodes(this._li,!1),this._arg[1].computeSelfNodes(this._li,!1),this._arg[0].computeEdgeIntersections(this._arg[1],this._li,!0);var e=new lc;this._arg[0].computeSplitEdges(e),this._arg[1].computeSplitEdges(e),this.insertUniqueEdges(e),this.computeLabelsFromDepths(),this.replaceCollapsedEdges(),Hf.checkValid(this._edgeList.getEdges()),this._graph.addEdges(this._edgeList.getEdges()),this.computeLabelling(),this.labelIncompleteNodes(),this.findResultAreaEdges(t),this.cancelDuplicateResultEdges();var n=new Wh(this._geomFact);n.add(this._graph),this._resultPolyList=n.getPolygons();var r=new Jf(this,this._geomFact,this._ptLocator);this._resultLineList=r.build(t);var i=new Zf(this,this._geomFact,this._ptLocator);this._resultPointList=i.build(t),this._resultGeom=this.computeGeometry(this._resultPointList,this._resultLineList,this._resultPolyList,t)},e.prototype.labelIncompleteNode=function(t,e){var n=this._ptLocator.locate(t.getCoordinate(),this._arg[e].getGeometry());t.getLabel().setLocation(e,n)},e.prototype.copyPoints=function(t){for(var e=this._arg[t].getNodeIterator();e.hasNext();){var n=e.next();this._graph.addNode(n.getCoordinate()).setLabel(t,n.getLabel().getLocation(t))}},e.prototype.findResultAreaEdges=function(t){for(var n=this._graph.getEdgeEnds().iterator();n.hasNext();){var r=n.next(),i=r.getLabel();i.isArea()&&!r.isInteriorAreaEdge()&&e.isResultOfOp(i.getLocation(0,Sh.RIGHT),i.getLocation(1,Sh.RIGHT),t)&&r.setInResult(!0)}},e.prototype.computeLabelsFromDepths=function(){for(var t=this._edgeList.iterator();t.hasNext();){var e=t.next(),n=e.getLabel(),r=e.getDepth();if(!r.isNull()){r.normalize();for(var i=0;i<2;i++)n.isNull(i)||!n.isArea()||r.isNull(i)||(0===r.getDelta(i)?n.toLine(i):(ql.isTrue(!r.isNull(i,Sh.LEFT),"depth of LEFT side has not been initialized"),n.setLocation(i,Sh.LEFT,r.getLocation(i,Sh.LEFT)),ql.isTrue(!r.isNull(i,Sh.RIGHT),"depth of RIGHT side has not been initialized"),n.setLocation(i,Sh.RIGHT,r.getLocation(i,Sh.RIGHT))))}}},e.prototype.computeLabelling=function(){for(var t=this._graph.getNodes().iterator();t.hasNext();){t.next().getEdges().computeLabelling(this._arg)}this.mergeSymLabels(),this.updateNodeLabelling()},e.prototype.labelIncompleteNodes=function(){for(var t=this._graph.getNodes().iterator();t.hasNext();){var e=t.next(),n=e.getLabel();e.isIsolated()&&(n.isNull(0)?this.labelIncompleteNode(e,0):this.labelIncompleteNode(e,1)),e.getEdges().updateLabelling(n)}},e.prototype.isCoveredByA=function(t){return!!this.isCovered(t,this._resultPolyList)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(Cg);Mg.overlayOp=function(t,e,n){return new Mg(t,e).getResultGeometry(n)},Mg.intersection=function(t,e){if(t.isEmpty()||e.isEmpty())return Mg.createEmptyResult(Mg.INTERSECTION,t,e,t.getFactory());if(t.isGeometryCollection()){var n=e;return Wf.map(t,{interfaces_:function(){return[Pg.MapOp]},map:function(t){return t.intersection(n)}})}return t.checkNotGeometryCollection(t),t.checkNotGeometryCollection(e),ug.overlayOp(t,e,Mg.INTERSECTION)},Mg.symDifference=function(t,e){if(t.isEmpty()||e.isEmpty()){if(t.isEmpty()&&e.isEmpty())return Mg.createEmptyResult(Mg.SYMDIFFERENCE,t,e,t.getFactory());if(t.isEmpty())return e.copy();if(e.isEmpty())return t.copy()}return t.checkNotGeometryCollection(t),t.checkNotGeometryCollection(e),ug.overlayOp(t,e,Mg.SYMDIFFERENCE)},Mg.resultDimension=function(t,e,n){var r=e.getDimension(),i=n.getDimension(),o=-1;switch(t){case Mg.INTERSECTION:o=Math.min(r,i);break;case Mg.UNION:o=Math.max(r,i);break;case Mg.DIFFERENCE:o=r;break;case Mg.SYMDIFFERENCE:o=Math.max(r,i)}return o},Mg.createEmptyResult=function(t,e,n,r){var i=null;switch(Mg.resultDimension(t,e,n)){case-1:i=r.createGeometryCollection(new Array(0).fill(null));break;case 0:i=r.createPoint();break;case 1:i=r.createLineString();break;case 2:i=r.createPolygon()}return i},Mg.difference=function(t,e){return t.isEmpty()?Mg.createEmptyResult(Mg.DIFFERENCE,t,e,t.getFactory()):e.isEmpty()?t.copy():(t.checkNotGeometryCollection(t),t.checkNotGeometryCollection(e),ug.overlayOp(t,e,Mg.DIFFERENCE))},Mg.isResultOfOp=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1],n=t.getLocation(0),r=t.getLocation(1);return Mg.isResultOfOp(n,r,e)}if(3===arguments.length){var i=arguments[0],o=arguments[1],s=arguments[2];switch(i===pl.BOUNDARY&&(i=pl.INTERIOR),o===pl.BOUNDARY&&(o=pl.INTERIOR),s){case Mg.INTERSECTION:return i===pl.INTERIOR&&o===pl.INTERIOR;case Mg.UNION:return i===pl.INTERIOR||o===pl.INTERIOR;case Mg.DIFFERENCE:return i===pl.INTERIOR&&o!==pl.INTERIOR;case Mg.SYMDIFFERENCE:return i===pl.INTERIOR&&o!==pl.INTERIOR||i!==pl.INTERIOR&&o===pl.INTERIOR}return!1}},Mg.INTERSECTION=1,Mg.UNION=2,Mg.DIFFERENCE=3,Mg.SYMDIFFERENCE=4;var Lg=function(){this._g=null,this._boundaryDistanceTolerance=null,this._linework=null,this._ptLocator=new Pf,this._seg=new vp;var t=arguments[0],e=arguments[1];this._g=t,this._boundaryDistanceTolerance=e,this._linework=this.extractLinework(t)};Lg.prototype.isWithinToleranceOfBoundary=function(t){for(var e=this,n=0;n<this._linework.getNumGeometries();n++)for(var r=e._linework.getGeometryN(n).getCoordinateSequence(),i=0;i<r.size()-1;i++){if(r.getCoordinate(i,e._seg.p0),r.getCoordinate(i+1,e._seg.p1),e._seg.distance(t)<=e._boundaryDistanceTolerance)return!0}return!1},Lg.prototype.getLocation=function(t){return this.isWithinToleranceOfBoundary(t)?pl.BOUNDARY:this._ptLocator.locate(t,this._g)},Lg.prototype.extractLinework=function(t){var e=new Og;t.apply(e);var n=e.getLinework(),r=_h.toLineStringArray(n);return t.getFactory().createMultiLineString(r)},Lg.prototype.interfaces_=function(){return[]},Lg.prototype.getClass=function(){return Lg};var Og=function(){this._linework=null,this._linework=new lc};Og.prototype.getLinework=function(){return this._linework},Og.prototype.filter=function(t){if(t instanceof th){var e=t;this._linework.add(e.getExteriorRing());for(var n=0;n<e.getNumInteriorRing();n++)this._linework.add(e.getInteriorRingN(n))}},Og.prototype.interfaces_=function(){return[Dc]},Og.prototype.getClass=function(){return Og};var Rg=function(){this._g=null,this._doLeft=!0,this._doRight=!0;var t=arguments[0];this._g=t};Rg.prototype.extractPoints=function(t,e,n){for(var r=t.getCoordinates(),i=0;i<r.length-1;i++)this.computeOffsetPoints(r[i],r[i+1],e,n)},Rg.prototype.setSidesToGenerate=function(t,e){this._doLeft=t,this._doRight=e},Rg.prototype.getPoints=function(t){for(var e=new lc,n=Cf.getLines(this._g).iterator();n.hasNext();){var r=n.next();this.extractPoints(r,t,e)}return e},Rg.prototype.computeOffsetPoints=function(t,e,n,r){var i=e.x-t.x,o=e.y-t.y,s=Math.sqrt(i*i+o*o),a=n*i/s,u=n*o/s,l=(e.x+t.x)/2,c=(e.y+t.y)/2;if(this._doLeft){var h=new ul(l-u,c+a);r.add(h)}if(this._doRight){var p=new ul(l+u,c-a);r.add(p)}},Rg.prototype.interfaces_=function(){return[]},Rg.prototype.getClass=function(){return Rg};var Tg=function t(){this._geom=null,this._locFinder=null,this._location=new Array(3).fill(null),this._invalidLocation=null,this._boundaryDistanceTolerance=t.TOLERANCE,this._testCoords=new lc;var e=arguments[0],n=arguments[1],r=arguments[2];this._boundaryDistanceTolerance=t.computeBoundaryDistanceTolerance(e,n),this._geom=[e,n,r],this._locFinder=[new Lg(this._geom[0],this._boundaryDistanceTolerance),new Lg(this._geom[1],this._boundaryDistanceTolerance),new Lg(this._geom[2],this._boundaryDistanceTolerance)]},Ag={TOLERANCE:{configurable:!0}};Tg.prototype.reportResult=function(t,e,n){Pl.out.println("Overlay result invalid - A:"+pl.toLocationSymbol(e[0])+" B:"+pl.toLocationSymbol(e[1])+" expected:"+(n?"i":"e")+" actual:"+pl.toLocationSymbol(e[2]))},Tg.prototype.isValid=function(t){this.addTestPts(this._geom[0]),this.addTestPts(this._geom[1]);var e=this.checkValid(t);return e},Tg.prototype.checkValid=function(){var t=this;if(1===arguments.length){for(var e=arguments[0],n=0;n<this._testCoords.size();n++){var r=t._testCoords.get(n);if(!t.checkValid(e,r))return t._invalidLocation=r,!1}return!0}if(2===arguments.length){var i=arguments[0],o=arguments[1];return this._location[0]=this._locFinder[0].getLocation(o),this._location[1]=this._locFinder[1].getLocation(o),this._location[2]=this._locFinder[2].getLocation(o),!!Tg.hasLocation(this._location,pl.BOUNDARY)||this.isValidResult(i,this._location)}},Tg.prototype.addTestPts=function(t){var e=new Rg(t);this._testCoords.addAll(e.getPoints(5*this._boundaryDistanceTolerance))},Tg.prototype.isValidResult=function(t,e){var n=Mg.isResultOfOp(e[0],e[1],t),r=!(n^e[2]===pl.INTERIOR);return r||this.reportResult(t,e,n),r},Tg.prototype.getInvalidLocation=function(){return this._invalidLocation},Tg.prototype.interfaces_=function(){return[]},Tg.prototype.getClass=function(){return Tg},Tg.hasLocation=function(t,e){for(var n=0;n<3;n++)if(t[n]===e)return!0;return!1},Tg.computeBoundaryDistanceTolerance=function(t,e){return Math.min($f.computeSizeBasedSnapTolerance(t),$f.computeSizeBasedSnapTolerance(e))},Tg.isValid=function(t,e,n,r){return new Tg(t,e,r).isValid(n)},Ag.TOLERANCE.get=function(){return 1e-6},Object.defineProperties(Tg,Ag);var Dg=function t(e){this._geomFactory=null,this._skipEmpty=!1,this._inputGeoms=null,this._geomFactory=t.extractFactory(e),this._inputGeoms=e};Dg.prototype.extractElements=function(t,e){if(null===t)return null;for(var n=0;n<t.getNumGeometries();n++){var r=t.getGeometryN(n);this._skipEmpty&&r.isEmpty()||e.add(r)}},Dg.prototype.combine=function(){for(var t=new lc,e=this._inputGeoms.iterator();e.hasNext();){var n=e.next();this.extractElements(n,t)}return 0===t.size()?null!==this._geomFactory?this._geomFactory.createGeometryCollection(null):null:this._geomFactory.buildGeometry(t)},Dg.prototype.interfaces_=function(){return[]},Dg.prototype.getClass=function(){return Dg},Dg.combine=function(){if(1===arguments.length){var t=arguments[0],e=new Dg(t);return e.combine()}if(2===arguments.length){var n=arguments[0],r=arguments[1],i=new Dg(Dg.createList(n,r));return i.combine()}if(3===arguments.length){var o=arguments[0],s=arguments[1],a=arguments[2],u=new Dg(Dg.createList(o,s,a));return u.combine()}},Dg.extractFactory=function(t){return t.isEmpty()?null:t.iterator().next().getFactory()},Dg.createList=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1],n=new lc;return n.add(t),n.add(e),n}if(3===arguments.length){var r=arguments[0],i=arguments[1],o=arguments[2],s=new lc;return s.add(r),s.add(i),s.add(o),s}};var Fg=function(){this._inputPolys=null,this._geomFactory=null;var t=arguments[0];this._inputPolys=t,null===this._inputPolys&&(this._inputPolys=new lc)},kg={STRTREE_NODE_CAPACITY:{configurable:!0}};Fg.prototype.reduceToGeometries=function(t){for(var e=new lc,n=t.iterator();n.hasNext();){var r=n.next(),i=null;gl(r,ac)?i=this.unionTree(r):r instanceof Wl&&(i=r),e.add(i)}return e},Fg.prototype.extractByEnvelope=function(t,e,n){for(var r=new lc,i=0;i<e.getNumGeometries();i++){var o=e.getGeometryN(i);o.getEnvelopeInternal().intersects(t)?r.add(o):n.add(o)}return this._geomFactory.buildGeometry(r)},Fg.prototype.unionOptimized=function(t,e){var n=t.getEnvelopeInternal(),r=e.getEnvelopeInternal();if(!n.intersects(r))return Dg.combine(t,e);if(t.getNumGeometries()<=1&&e.getNumGeometries()<=1)return this.unionActual(t,e);var i=n.intersection(r);return this.unionUsingEnvelopeIntersection(t,e,i)},Fg.prototype.union=function(){if(null===this._inputPolys)throw new Error("union() method cannot be called twice");if(this._inputPolys.isEmpty())return null;this._geomFactory=this._inputPolys.iterator().next().getFactory();for(var t=new up(Fg.STRTREE_NODE_CAPACITY),e=this._inputPolys.iterator();e.hasNext();){var n=e.next();t.insert(n.getEnvelopeInternal(),n)}this._inputPolys=null;var r=t.itemsTree();return this.unionTree(r)},Fg.prototype.binaryUnion=function(){if(1===arguments.length){var t=arguments[0];return this.binaryUnion(t,0,t.size())}if(3===arguments.length){var e=arguments[0],n=arguments[1],r=arguments[2];if(r-n<=1){var i=Fg.getGeometry(e,n);return this.unionSafe(i,null)}if(r-n==2)return this.unionSafe(Fg.getGeometry(e,n),Fg.getGeometry(e,n+1));var o=Math.trunc((r+n)/2),s=this.binaryUnion(e,n,o),a=this.binaryUnion(e,o,r);return this.unionSafe(s,a)}},Fg.prototype.repeatedUnion=function(t){for(var e=null,n=t.iterator();n.hasNext();){var r=n.next();e=null===e?r.copy():e.union(r)}return e},Fg.prototype.unionSafe=function(t,e){return null===t&&null===e?null:null===t?e.copy():null===e?t.copy():this.unionOptimized(t,e)},Fg.prototype.unionActual=function(t,e){return Fg.restrictToPolygons(t.union(e))},Fg.prototype.unionTree=function(t){var e=this.reduceToGeometries(t);return this.binaryUnion(e)},Fg.prototype.unionUsingEnvelopeIntersection=function(t,e,n){var r=new lc,i=this.extractByEnvelope(n,t,r),o=this.extractByEnvelope(n,e,r),s=this.unionActual(i,o);return r.add(s),Dg.combine(r)},Fg.prototype.bufferUnion=function(){if(1===arguments.length){var t=arguments[0],e=t.get(0).getFactory(),n=e.buildGeometry(t),r=n.buffer(0);return r}if(2===arguments.length){var i=arguments[0],o=arguments[1],s=i.getFactory(),a=s.createGeometryCollection([i,o]),u=a.buffer(0);return u}},Fg.prototype.interfaces_=function(){return[]},Fg.prototype.getClass=function(){return Fg},Fg.restrictToPolygons=function(t){if(gl(t,$c))return t;var e=Sf.getPolygons(t);return 1===e.size()?e.get(0):t.getFactory().createMultiPolygon(_h.toPolygonArray(e))},Fg.getGeometry=function(t,e){return e>=t.size()?null:t.get(e)},Fg.union=function(t){return new Fg(t).union()},kg.STRTREE_NODE_CAPACITY.get=function(){return 4},Object.defineProperties(Fg,kg);var Gg=function(){};function qg(){return new Bg}function Bg(){this.reset()}Gg.prototype.interfaces_=function(){return[]},Gg.prototype.getClass=function(){return Gg},Gg.union=function(t,e){if(t.isEmpty()||e.isEmpty()){if(t.isEmpty()&&e.isEmpty())return Mg.createEmptyResult(Mg.UNION,t,e,t.getFactory());if(t.isEmpty())return e.copy();if(e.isEmpty())return t.copy()}return t.checkNotGeometryCollection(t),t.checkNotGeometryCollection(e),ug.overlayOp(t,e,Mg.UNION)},Bg.prototype={constructor:Bg,reset:function(){this.s=this.t=0},add:function(t){jg(zg,t,this.t),jg(this,zg.s,this.s),this.s?this.t+=zg.t:this.s=zg.t},valueOf:function(){return this.s}};var zg=new Bg;function jg(t,e,n){var r=t.s=e+n,i=r-e,o=r-i;t.t=e-o+(n-i)}var Ug=1e-6,Vg=Math.PI,Xg=Vg/2,Yg=Vg/4,Hg=2*Vg,Wg=180/Vg,Jg=Vg/180,Zg=Math.abs,Kg=Math.atan,Qg=Math.atan2,$g=Math.cos,td=Math.sin,ed=Math.sqrt;function nd(t){return t>1?0:t<-1?Vg:Math.acos(t)}function rd(t){return t>1?Xg:t<-1?-Xg:Math.asin(t)}function id(){}function od(t,e){t&&ad.hasOwnProperty(t.type)&&ad[t.type](t,e)}var sd={Feature:function(t,e){od(t.geometry,e)},FeatureCollection:function(t,e){for(var n=t.features,r=-1,i=n.length;++r<i;)od(n[r].geometry,e)}},ad={Sphere:function(t,e){e.sphere()},Point:function(t,e){t=t.coordinates,e.point(t[0],t[1],t[2])},MultiPoint:function(t,e){for(var n=t.coordinates,r=-1,i=n.length;++r<i;)t=n[r],e.point(t[0],t[1],t[2])},LineString:function(t,e){ud(t.coordinates,e,0)},MultiLineString:function(t,e){for(var n=t.coordinates,r=-1,i=n.length;++r<i;)ud(n[r],e,0)},Polygon:function(t,e){ld(t.coordinates,e)},MultiPolygon:function(t,e){for(var n=t.coordinates,r=-1,i=n.length;++r<i;)ld(n[r],e)},GeometryCollection:function(t,e){for(var n=t.geometries,r=-1,i=n.length;++r<i;)od(n[r],e)}};function ud(t,e,n){var r,i=-1,o=t.length-n;for(e.lineStart();++i<o;)r=t[i],e.point(r[0],r[1],r[2]);e.lineEnd()}function ld(t,e){var n=-1,r=t.length;for(e.polygonStart();++n<r;)ud(t[n],e,1);e.polygonEnd()}qg(),qg();function cd(t){return[Qg(t[1],t[0]),rd(t[2])]}function hd(t){var e=t[0],n=t[1],r=$g(n);return[r*$g(e),r*td(e),td(n)]}function pd(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function fd(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function gd(t,e){t[0]+=e[0],t[1]+=e[1],t[2]+=e[2]}function dd(t,e){return[t[0]*e,t[1]*e,t[2]*e]}function yd(t){var e=ed(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=e,t[1]/=e,t[2]/=e}qg();function vd(t,e){function n(n,r){return n=t(n,r),e(n[0],n[1])}return t.invert&&e.invert&&(n.invert=function(n,r){return(n=e.invert(n,r))&&t.invert(n[0],n[1])}),n}function _d(t,e){return[t>Vg?t-Hg:t<-Vg?t+Hg:t,e]}function md(t){return function(e,n){return[(e+=t)>Vg?e-Hg:e<-Vg?e+Hg:e,n]}}function xd(t){var e=md(t);return e.invert=md(-t),e}function Ed(t,e){var n=$g(t),r=td(t),i=$g(e),o=td(e);function s(t,e){var s=$g(e),a=$g(t)*s,u=td(t)*s,l=td(e),c=l*n+a*r;return[Qg(u*i-c*o,a*n-l*r),rd(c*i+u*o)]}return s.invert=function(t,e){var s=$g(e),a=$g(t)*s,u=td(t)*s,l=td(e),c=l*i-u*o;return[Qg(u*i+l*o,a*n+c*r),rd(c*n-a*r)]},s}function bd(t,e){(e=hd(e))[0]-=t,yd(e);var n=nd(-e[1]);return((-e[2]<0?-n:n)+Hg-Ug)%Hg}function wd(){var t,e=[];return{point:function(e,n){t.push([e,n])},lineStart:function(){e.push(t=[])},lineEnd:id,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var n=e;return e=[],t=null,n}}}function Id(t,e){return Zg(t[0]-e[0])<Ug&&Zg(t[1]-e[1])<Ug}function Nd(t,e,n,r){this.x=t,this.z=e,this.o=n,this.e=r,this.v=!1,this.n=this.p=null}function Sd(t,e,n,r,i){var o,s,a=[],u=[];if(t.forEach((function(t){if(!((e=t.length-1)<=0)){var e,n,r=t[0],s=t[e];if(Id(r,s)){for(i.lineStart(),o=0;o<e;++o)i.point((r=t[o])[0],r[1]);i.lineEnd()}else a.push(n=new Nd(r,t,null,!0)),u.push(n.o=new Nd(r,null,n,!1)),a.push(n=new Nd(s,t,null,!1)),u.push(n.o=new Nd(s,null,n,!0))}})),a.length){for(u.sort(e),Cd(a),Cd(u),o=0,s=u.length;o<s;++o)u[o].e=n=!n;for(var l,c,h=a[0];;){for(var p=h,f=!0;p.v;)if((p=p.n)===h)return;l=p.z,i.lineStart();do{if(p.v=p.o.v=!0,p.e){if(f)for(o=0,s=l.length;o<s;++o)i.point((c=l[o])[0],c[1]);else r(p.x,p.n.x,1,i);p=p.n}else{if(f)for(l=p.p.z,o=l.length-1;o>=0;--o)i.point((c=l[o])[0],c[1]);else r(p.x,p.p.x,-1,i);p=p.p}l=(p=p.o).z,f=!f}while(!p.v);i.lineEnd()}}}function Cd(t){if(e=t.length){for(var e,n,r=0,i=t[0];++r<e;)i.n=n=t[r],n.p=i,i=n;i.n=n=t[0],n.p=i}}function Pd(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}_d.invert=_d;var Md,Ld;1===(Md=Pd).length&&(Ld=Md,Md=function(t,e){return Pd(Ld(t),e)});function Od(t){for(var e,n,r,i=t.length,o=-1,s=0;++o<i;)s+=t[o].length;for(n=new Array(s);--i>=0;)for(e=(r=t[i]).length;--e>=0;)n[--s]=r[e];return n}var Rd=1e9,Td=-Rd;function Ad(t,e,n,r){function i(i,o){return t<=i&&i<=n&&e<=o&&o<=r}function o(i,o,a,l){var c=0,h=0;if(null==i||(c=s(i,a))!==(h=s(o,a))||u(i,o)<0^a>0)do{l.point(0===c||3===c?t:n,c>1?r:e)}while((c=(c+a+4)%4)!==h);else l.point(o[0],o[1])}function s(r,i){return Zg(r[0]-t)<Ug?i>0?0:3:Zg(r[0]-n)<Ug?i>0?2:1:Zg(r[1]-e)<Ug?i>0?1:0:i>0?3:2}function a(t,e){return u(t.x,e.x)}function u(t,e){var n=s(t,1),r=s(e,1);return n!==r?n-r:0===n?e[1]-t[1]:1===n?t[0]-e[0]:2===n?t[1]-e[1]:e[0]-t[0]}return function(s){var u,l,c,h,p,f,g,d,y,v,_,m=s,x=wd(),E={point:b,lineStart:function(){E.point=w,l&&l.push(c=[]);v=!0,y=!1,g=d=NaN},lineEnd:function(){u&&(w(h,p),f&&y&&x.rejoin(),u.push(x.result()));E.point=b,y&&m.lineEnd()},polygonStart:function(){m=x,u=[],l=[],_=!0},polygonEnd:function(){var e=function(){for(var e=0,n=0,i=l.length;n<i;++n)for(var o,s,a=l[n],u=1,c=a.length,h=a[0],p=h[0],f=h[1];u<c;++u)o=p,s=f,p=(h=a[u])[0],f=h[1],s<=r?f>r&&(p-o)*(r-s)>(f-s)*(t-o)&&++e:f<=r&&(p-o)*(r-s)<(f-s)*(t-o)&&--e;return e}(),n=_&&e,i=(u=Od(u)).length;(n||i)&&(s.polygonStart(),n&&(s.lineStart(),o(null,null,1,s),s.lineEnd()),i&&Sd(u,a,e,o,s),s.polygonEnd());m=s,u=l=c=null}};function b(t,e){i(t,e)&&m.point(t,e)}function w(o,s){var a=i(o,s);if(l&&c.push([o,s]),v)h=o,p=s,f=a,v=!1,a&&(m.lineStart(),m.point(o,s));else if(a&&y)m.point(o,s);else{var u=[g=Math.max(Td,Math.min(Rd,g)),d=Math.max(Td,Math.min(Rd,d))],x=[o=Math.max(Td,Math.min(Rd,o)),s=Math.max(Td,Math.min(Rd,s))];!function(t,e,n,r,i,o){var s,a=t[0],u=t[1],l=0,c=1,h=e[0]-a,p=e[1]-u;if(s=n-a,h||!(s>0)){if(s/=h,h<0){if(s<l)return;s<c&&(c=s)}else if(h>0){if(s>c)return;s>l&&(l=s)}if(s=i-a,h||!(s<0)){if(s/=h,h<0){if(s>c)return;s>l&&(l=s)}else if(h>0){if(s<l)return;s<c&&(c=s)}if(s=r-u,p||!(s>0)){if(s/=p,p<0){if(s<l)return;s<c&&(c=s)}else if(p>0){if(s>c)return;s>l&&(l=s)}if(s=o-u,p||!(s<0)){if(s/=p,p<0){if(s>c)return;s>l&&(l=s)}else if(p>0){if(s<l)return;s<c&&(c=s)}return l>0&&(t[0]=a+l*h,t[1]=u+l*p),c<1&&(e[0]=a+c*h,e[1]=u+c*p),!0}}}}}(u,x,t,e,n,r)?a&&(m.lineStart(),m.point(o,s),_=!1):(y||(m.lineStart(),m.point(u[0],u[1])),m.point(x[0],x[1]),a||m.lineEnd(),_=!1)}g=o,d=s,y=a}return E}}var Dd=qg();qg();function Fd(t){return t}qg(),qg();var kd=1/0,Gd=kd,qd=-kd,Bd=qd,zd={point:function(t,e){t<kd&&(kd=t);t>qd&&(qd=t);e<Gd&&(Gd=e);e>Bd&&(Bd=e)},lineStart:id,lineEnd:id,polygonStart:id,polygonEnd:id,result:function(){var t=[[kd,Gd],[qd,Bd]];return qd=Bd=-(Gd=kd=1/0),t}};qg();function jd(t,e,n,r){return function(i,o){var s,a,u,l=e(o),c=i.invert(r[0],r[1]),h=wd(),p=e(h),f=!1,g={point:d,lineStart:v,lineEnd:_,polygonStart:function(){g.point=m,g.lineStart=x,g.lineEnd=E,a=[],s=[]},polygonEnd:function(){g.point=d,g.lineStart=v,g.lineEnd=_,a=Od(a);var t=function(t,e){var n=e[0],r=e[1],i=[td(n),-$g(n),0],o=0,s=0;Dd.reset();for(var a=0,u=t.length;a<u;++a)if(c=(l=t[a]).length)for(var l,c,h=l[c-1],p=h[0],f=h[1]/2+Yg,g=td(f),d=$g(f),y=0;y<c;++y,p=_,g=x,d=E,h=v){var v=l[y],_=v[0],m=v[1]/2+Yg,x=td(m),E=$g(m),b=_-p,w=b>=0?1:-1,I=w*b,N=I>Vg,S=g*x;if(Dd.add(Qg(S*w*td(I),d*E+S*$g(I))),o+=N?b+w*Hg:b,N^p>=n^_>=n){var C=fd(hd(h),hd(v));yd(C);var P=fd(i,C);yd(P);var M=(N^b>=0?-1:1)*rd(P[2]);(r>M||r===M&&(C[0]||C[1]))&&(s+=N^b>=0?1:-1)}}return(o<-1e-6||o<Ug&&Dd<-1e-6)^1&s}(s,c);a.length?(f||(o.polygonStart(),f=!0),Sd(a,Vd,t,n,o)):t&&(f||(o.polygonStart(),f=!0),o.lineStart(),n(null,null,1,o),o.lineEnd()),f&&(o.polygonEnd(),f=!1),a=s=null},sphere:function(){o.polygonStart(),o.lineStart(),n(null,null,1,o),o.lineEnd(),o.polygonEnd()}};function d(e,n){var r=i(e,n);t(e=r[0],n=r[1])&&o.point(e,n)}function y(t,e){var n=i(t,e);l.point(n[0],n[1])}function v(){g.point=y,l.lineStart()}function _(){g.point=d,l.lineEnd()}function m(t,e){u.push([t,e]);var n=i(t,e);p.point(n[0],n[1])}function x(){p.lineStart(),u=[]}function E(){m(u[0][0],u[0][1]),p.lineEnd();var t,e,n,r,i=p.clean(),l=h.result(),c=l.length;if(u.pop(),s.push(u),u=null,c)if(1&i){if((e=(n=l[0]).length-1)>0){for(f||(o.polygonStart(),f=!0),o.lineStart(),t=0;t<e;++t)o.point((r=n[t])[0],r[1]);o.lineEnd()}}else c>1&&2&i&&l.push(l.pop().concat(l.shift())),a.push(l.filter(Ud))}return g}}function Ud(t){return t.length>1}function Vd(t,e){return((t=t.x)[0]<0?t[1]-Xg-Ug:Xg-t[1])-((e=e.x)[0]<0?e[1]-Xg-Ug:Xg-e[1])}var Xd=jd((function(){return!0}),(function(t){var e,n=NaN,r=NaN,i=NaN;return{lineStart:function(){t.lineStart(),e=1},point:function(o,s){var a=o>0?Vg:-Vg,u=Zg(o-n);Zg(u-Vg)<Ug?(t.point(n,r=(r+s)/2>0?Xg:-Xg),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(a,r),t.point(o,r),e=0):i!==a&&u>=Vg&&(Zg(n-i)<Ug&&(n-=i*Ug),Zg(o-a)<Ug&&(o-=a*Ug),r=function(t,e,n,r){var i,o,s=td(t-n);return Zg(s)>Ug?Kg((td(e)*(o=$g(r))*td(n)-td(r)*(i=$g(e))*td(t))/(i*o*s)):(e+r)/2}(n,r,o,s),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(a,r),e=0),t.point(n=o,r=s),i=a},lineEnd:function(){t.lineEnd(),n=r=NaN},clean:function(){return 2-e}}}),(function(t,e,n,r){var i;if(null==t)i=n*Xg,r.point(-Vg,i),r.point(0,i),r.point(Vg,i),r.point(Vg,0),r.point(Vg,-i),r.point(0,-i),r.point(-Vg,-i),r.point(-Vg,0),r.point(-Vg,i);else if(Zg(t[0]-e[0])>Ug){var o=t[0]<e[0]?Vg:-Vg;i=n*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(e[0],e[1])}),[-Vg,-Xg]);function Yd(t,e){var n=$g(t),r=n>0,i=Zg(n)>Ug;function o(t,e){return $g(t)*$g(e)>n}function s(t,e,r){var i=[1,0,0],o=fd(hd(t),hd(e)),s=pd(o,o),a=o[0],u=s-a*a;if(!u)return!r&&t;var l=n*s/u,c=-n*a/u,h=fd(i,o),p=dd(i,l);gd(p,dd(o,c));var f=h,g=pd(p,f),d=pd(f,f),y=g*g-d*(pd(p,p)-1);if(!(y<0)){var v=ed(y),_=dd(f,(-g-v)/d);if(gd(_,p),_=cd(_),!r)return _;var m,x=t[0],E=e[0],b=t[1],w=e[1];E<x&&(m=x,x=E,E=m);var I=E-x,N=Zg(I-Vg)<Ug;if(!N&&w<b&&(m=b,b=w,w=m),N||I<Ug?N?b+w>0^_[1]<(Zg(_[0]-x)<Ug?b:w):b<=_[1]&&_[1]<=w:I>Vg^(x<=_[0]&&_[0]<=E)){var S=dd(f,(-g+v)/d);return gd(S,p),[_,cd(S)]}}}function a(e,n){var i=r?t:Vg-t,o=0;return e<-i?o|=1:e>i&&(o|=2),n<-i?o|=4:n>i&&(o|=8),o}return jd(o,(function(t){var e,n,u,l,c;return{lineStart:function(){l=u=!1,c=1},point:function(h,p){var f,g=[h,p],d=o(h,p),y=r?d?0:a(h,p):d?a(h+(h<0?Vg:-Vg),p):0;if(!e&&(l=u=d)&&t.lineStart(),d!==u&&(!(f=s(e,g))||Id(e,f)||Id(g,f))&&(g[0]+=Ug,g[1]+=Ug,d=o(g[0],g[1])),d!==u)c=0,d?(t.lineStart(),f=s(g,e),t.point(f[0],f[1])):(f=s(e,g),t.point(f[0],f[1]),t.lineEnd()),e=f;else if(i&&e&&r^d){var v;y&n||!(v=s(g,e,!0))||(c=0,r?(t.lineStart(),t.point(v[0][0],v[0][1]),t.point(v[1][0],v[1][1]),t.lineEnd()):(t.point(v[1][0],v[1][1]),t.lineEnd(),t.lineStart(),t.point(v[0][0],v[0][1])))}!d||e&&Id(e,g)||t.point(g[0],g[1]),e=g,u=d,n=y},lineEnd:function(){u&&t.lineEnd(),e=null},clean:function(){return c|(l&&u)<<1}}}),(function(n,r,i,o){!function(t,e,n,r,i,o){if(n){var s=$g(e),a=td(e),u=r*n;null==i?(i=e+r*Hg,o=e-u/2):(i=bd(s,i),o=bd(s,o),(r>0?i<o:i>o)&&(i+=r*Hg));for(var l,c=i;r>0?c>o:c<o;c-=u)l=cd([s,-a*$g(c),-a*td(c)]),t.point(l[0],l[1])}}(o,t,e,i,n,r)}),r?[0,-t]:[-Vg,t-Vg])}function Hd(t){return function(e){var n=new Wd;for(var r in t)n[r]=t[r];return n.stream=e,n}}function Wd(){}function Jd(t,e,n){var r=e[1][0]-e[0][0],i=e[1][1]-e[0][1],o=t.clipExtent&&t.clipExtent();t.scale(150).translate([0,0]),null!=o&&t.clipExtent(null),function(t,e){t&&sd.hasOwnProperty(t.type)?sd[t.type](t,e):od(t,e)}(n,t.stream(zd));var s=zd.result(),a=Math.min(r/(s[1][0]-s[0][0]),i/(s[1][1]-s[0][1])),u=+e[0][0]+(r-a*(s[1][0]+s[0][0]))/2,l=+e[0][1]+(i-a*(s[1][1]+s[0][1]))/2;return null!=o&&t.clipExtent(o),t.scale(150*a).translate([u,l])}Wd.prototype={constructor:Wd,point:function(t,e){this.stream.point(t,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var Zd=$g(30*Jg);function Kd(t,e){return+e?function(t,e){function n(r,i,o,s,a,u,l,c,h,p,f,g,d,y){var v=l-r,_=c-i,m=v*v+_*_;if(m>4*e&&d--){var x=s+p,E=a+f,b=u+g,w=ed(x*x+E*E+b*b),I=rd(b/=w),N=Zg(Zg(b)-1)<Ug||Zg(o-h)<Ug?(o+h)/2:Qg(E,x),S=t(N,I),C=S[0],P=S[1],M=C-r,L=P-i,O=_*M-v*L;(O*O/m>e||Zg((v*M+_*L)/m-.5)>.3||s*p+a*f+u*g<Zd)&&(n(r,i,o,s,a,u,C,P,N,x/=w,E/=w,b,d,y),y.point(C,P),n(C,P,N,x,E,b,l,c,h,p,f,g,d,y))}}return function(e){var r,i,o,s,a,u,l,c,h,p,f,g,d={point:y,lineStart:v,lineEnd:m,polygonStart:function(){e.polygonStart(),d.lineStart=x},polygonEnd:function(){e.polygonEnd(),d.lineStart=v}};function y(n,r){n=t(n,r),e.point(n[0],n[1])}function v(){c=NaN,d.point=_,e.lineStart()}function _(r,i){var o=hd([r,i]),s=t(r,i);n(c,h,l,p,f,g,c=s[0],h=s[1],l=r,p=o[0],f=o[1],g=o[2],16,e),e.point(c,h)}function m(){d.point=y,e.lineEnd()}function x(){v(),d.point=E,d.lineEnd=b}function E(t,e){_(r=t,e),i=c,o=h,s=p,a=f,u=g,d.point=_}function b(){n(c,h,l,p,f,g,i,o,r,s,a,u,16,e),d.lineEnd=m,m()}return d}}(t,e):function(t){return Hd({point:function(e,n){e=t(e,n),this.stream.point(e[0],e[1])}})}(t)}var Qd=Hd({point:function(t,e){this.stream.point(t*Jg,e*Jg)}});function $d(t){return function(t){var e,n,r,i,o,s,a,u,l,c,h=150,p=480,f=250,g=0,d=0,y=0,v=0,_=0,m=null,x=Xd,E=null,b=Fd,w=.5,I=Kd(C,w);function N(t){return[(t=o(t[0]*Jg,t[1]*Jg))[0]*h+n,r-t[1]*h]}function S(t){return(t=o.invert((t[0]-n)/h,(r-t[1])/h))&&[t[0]*Wg,t[1]*Wg]}function C(t,i){return[(t=e(t,i))[0]*h+n,r-t[1]*h]}function P(){o=vd(i=function(t,e,n){return(t%=Hg)?e||n?vd(xd(t),Ed(e,n)):xd(t):e||n?Ed(e,n):_d}(y,v,_),e);var t=e(g,d);return n=p-t[0]*h,r=f+t[1]*h,M()}function M(){return l=c=null,N}return N.stream=function(t){return l&&c===t?l:l=Qd(x(i,I(b(c=t))))},N.clipAngle=function(t){return arguments.length?(x=+t?Yd(m=t*Jg,6*Jg):(m=null,Xd),M()):m*Wg},N.clipExtent=function(t){return arguments.length?(b=null==t?(E=s=a=u=null,Fd):Ad(E=+t[0][0],s=+t[0][1],a=+t[1][0],u=+t[1][1]),M()):null==E?null:[[E,s],[a,u]]},N.scale=function(t){return arguments.length?(h=+t,P()):h},N.translate=function(t){return arguments.length?(p=+t[0],f=+t[1],P()):[p,f]},N.center=function(t){return arguments.length?(g=t[0]%360*Jg,d=t[1]%360*Jg,P()):[g*Wg,d*Wg]},N.rotate=function(t){return arguments.length?(y=t[0]%360*Jg,v=t[1]%360*Jg,_=t.length>2?t[2]%360*Jg:0,P()):[y*Wg,v*Wg,_*Wg]},N.precision=function(t){return arguments.length?(I=Kd(C,w=t*t),M()):ed(w)},N.fitExtent=function(t,e){return Jd(N,t,e)},N.fitSize=function(t,e){return function(t,e,n){return Jd(t,[[0,0],e],n)}(N,t,e)},function(){return e=t.apply(this,arguments),N.invert=e.invert&&S,P()}}((function(){return t}))()}var ty=function(t){return function(e,n){var r=$g(e),i=$g(n),o=t(r*i);return[o*i*td(e),o*td(n)]}}((function(t){return(t=nd(t))&&t/td(t)}));function ey(){return $d(ty).scale(79.4188).clipAngle(179.999)}function ny(t,n,r,i){var s=t.properties||{},a="Feature"===t.type?t.geometry:t;if("GeometryCollection"===a.type){var u=[];return q(t,(function(t){var e=ny(t,n,r,i);e&&u.push(e)})),f(u)}var l=function(t){var n=xn(t).geometry.coordinates,r=[-n[0],-n[1]];return ey().rotate(r).scale(e)}(a),c={type:a.type,coordinates:iy(a.coordinates,l)},h=(new Ih).read(c),p=m(x(n,r),"meters"),g=_f.bufferOp(h,p,i);if(!ry((g=(new Nh).write(g)).coordinates))return o({type:g.type,coordinates:oy(g.coordinates,l)},s)}function ry(t){return Array.isArray(t[0])?ry(t[0]):isNaN(t[0])}function iy(t,e){return"object"!=typeof t[0]?e(t):t.map((function(t){return iy(t,e)}))}function oy(t,e){return"object"!=typeof t[0]?e.invert(t):t.map((function(t){return oy(t,e)}))}function sy(t,e,n){void 0===n&&(n={});var r=rt(t),i=rt(e),o=$u.intersection(r.coordinates,i.coordinates);return 0===o.length?null:1===o.length?l(o[0],n.properties):y(o,n.properties)}function ay(t,e,n){void 0===n&&(n={});var r=JSON.stringify(n.properties||{}),i=t[0],o=t[1],s=t[2],a=t[3],u=(o+a)/2,l=(i+s)/2,c=2*e/me([i,u],[s,u],n)*(s-i),h=2*e/me([l,o],[l,a],n)*(a-o),p=c/2,g=2*p,d=Math.sqrt(3)/2*h,y=s-i,v=a-o,_=3/4*g,m=d,x=(y-g)/(g-p/2),E=Math.floor(x),b=(E*_-p/2-y)/2-p/2+_/2,w=Math.floor((v-d)/d),I=(v-w*d)/2,N=w*d-v>d/2;N&&(I-=d/4);for(var S=[],C=[],P=0;P<6;P++){var M=2*Math.PI/6*P;S.push(Math.cos(M)),C.push(Math.sin(M))}for(var L=[],O=0;O<=E;O++)for(var R=0;R<=w;R++){var T=O%2==1;if((0!==R||!T)&&(0!==R||!N)){var A=O*_+i-b,D=R*m+o+I;if(T&&(D-=d/2),!0===n.triangles)ly([A,D],c/2,h/2,JSON.parse(r),S,C).forEach((function(t){n.mask?sy(n.mask,t)&&L.push(t):L.push(t)}));else{var F=uy([A,D],c/2,h/2,JSON.parse(r),S,C);n.mask?sy(n.mask,F)&&L.push(F):L.push(F)}}}return f(L)}function uy(t,e,n,r,i,o){for(var s=[],a=0;a<6;a++){var u=t[0]+e*i[a],c=t[1]+n*o[a];s.push([u,c])}return s.push(s[0].slice()),l([s],r)}function ly(t,e,n,r,i,o){for(var s=[],a=0;a<6;a++){var u=[];u.push(t),u.push([t[0]+e*i[a],t[1]+n*o[a]]),u.push([t[0]+e*i[(a+1)%6],t[1]+n*o[(a+1)%6]]),u.push(t),s.push(l([u],r))}return s}function cy(t){return y(t)}function hy(t){return l(t&&t.geometry.coordinates||[[[180,90],[-180,90],[-180,-90],[180,-90],[180,90]]])}function py(t,e,n){return void 0===n&&(n={}),function(t,e,n,r){void 0===r&&(r={});for(var i=[],o=t[0],s=t[1],a=t[2],u=t[3],c=e/me([o,s],[a,s],r)*(a-o),h=n/me([o,s],[o,u],r)*(u-s),p=a-o,g=u-s,d=Math.floor(p/c),y=Math.floor(g/h),v=(g-y*h)/2,_=o+(p-d*c)/2,m=0;m<d;m++){for(var x=s+v,E=0;E<y;E++){var b=l([[[_,x],[_,x+h],[_+c,x+h],[_+c,x],[_,x]]],r.properties);r.mask?Ps(r.mask,b)&&i.push(b):i.push(b),x+=h}_+=c}return f(i)}(t,e,e,n)}function fy(t,e,n){void 0===n&&(n={});for(var r=[],i=e/me([t[0],t[1]],[t[2],t[1]],n)*(t[2]-t[0]),o=e/me([t[0],t[1]],[t[0],t[3]],n)*(t[3]-t[1]),s=0,a=t[0];a<=t[2];){for(var u=0,c=t[1];c<=t[3];){var h=null,p=null;s%2==0&&u%2==0?(h=l([[[a,c],[a,c+o],[a+i,c],[a,c]]],n.properties),p=l([[[a,c+o],[a+i,c+o],[a+i,c],[a,c+o]]],n.properties)):s%2==0&&u%2==1?(h=l([[[a,c],[a+i,c+o],[a+i,c],[a,c]]],n.properties),p=l([[[a,c],[a,c+o],[a+i,c+o],[a,c]]],n.properties)):u%2==0&&s%2==1?(h=l([[[a,c],[a,c+o],[a+i,c+o],[a,c]]],n.properties),p=l([[[a,c],[a+i,c+o],[a+i,c],[a,c]]],n.properties)):u%2==1&&s%2==1&&(h=l([[[a,c],[a,c+o],[a+i,c],[a,c]]],n.properties),p=l([[[a,c+o],[a+i,c+o],[a+i,c],[a,c+o]]],n.properties)),n.mask?(sy(n.mask,h)&&r.push(h),sy(n.mask,p)&&r.push(p)):(r.push(h),r.push(p)),c+=o,u++}s++,a+=i}return f(r)}ty.invert=function(t){return function(e,n){var r=ed(e*e+n*n),i=t(r),o=td(i),s=$g(i);return[Qg(e*o,r*s),rd(r&&n*o/r)]}}((function(t){return t})),t.along=function(t,e,n){void 0===n&&(n={});for(var r=rt(t).coordinates,i=0,o=0;o<r.length&&!(e>=i&&o===r.length-1);o++){if(i>=e){var s=e-i;if(s){var u=mn(r[o],r[o-1])-180;return vn(r[o],s,u,n)}return a(r[o])}i+=me(r[o],r[o+1],n)}return a(r[r.length-1])},t.angle=function(t,e,n,r){if(void 0===r&&(r={}),!P(r))throw new Error("options is invalid");if(!t)throw new Error("startPoint is required");if(!e)throw new Error("midPoint is required");if(!n)throw new Error("endPoint is required");var i=t,o=e,s=n,a=b(!0!==r.mercator?mn(i,o):Bi(i,o)),u=b(!0!==r.mercator?mn(s,o):Bi(s,o)),l=Math.abs(a-u);return!0===r.explementary?360-l:l},t.applyFilter=uu,t.area=jr,t.areaFactors=i,t.bbox=Z,t.bboxClip=function(t,e){var n=rt(t),r=n.type,i="Feature"===t.type?t.properties:{},o=n.coordinates;switch(r){case"LineString":case"MultiLineString":var s=[];return"LineString"===r&&(o=[o]),o.forEach((function(t){!function(t,e,n){var r,i,o,s,a,u=t.length,l=Ri(t[0],e),c=[];for(n||(n=[]),r=1;r<u;r++){for(s=t[r-1],i=o=Ri(a=t[r],e);;){if(!(l|i)){c.push(s),i!==o?(c.push(a),r<u-1&&(n.push(c),c=[])):r===u-1&&c.push(a);break}if(l&i)break;l?l=Ri(s=Oi(s,a,l,e),e):i=Ri(a=Oi(s,a,i,e),e)}l=o}c.length&&n.push(c)}(t,e,s)})),1===s.length?h(s[0],i):g(s,i);case"Polygon":return l(Ti(o,e),i);case"MultiPolygon":return y(o.map((function(t){return Ti(t,e)})),i);default:throw new Error("geometry "+r+" not supported")}},t.bboxPolygon=gn,t.bearing=mn,t.bearingToAngle=b,t.bearingToAzimuth=b,t.bezier=fn,t.bezierSpline=fn,t.booleanClockwise=Yi,t.booleanContains=function(t,e){var n=rt(t),r=rt(e),i=n.type,o=r.type,s=n.coordinates,a=r.coordinates;switch(i){case"Point":switch(o){case"Point":return vs(s,a);default:throw new Error("feature2 "+o+" geometry not supported")}case"MultiPoint":switch(o){case"Point":return function(t,e){var n,r=!1;for(n=0;n<t.coordinates.length;n++)if(vs(t.coordinates[n],e.coordinates)){r=!0;break}return r}(n,r);case"MultiPoint":return function(t,e){for(var n=0,r=e.coordinates;n<r.length;n++){for(var i=r[n],o=!1,s=0,a=t.coordinates;s<a.length;s++){if(vs(i,a[s])){o=!0;break}}if(!o)return!1}return!0}(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"Point":return Wr(r,n,{ignoreEndVertices:!0});case"LineString":return function(t,e){for(var n=!1,r=0,i=e.coordinates;r<i.length;r++){var o=i[r];if(Wr({type:"Point",coordinates:o},t,{ignoreEndVertices:!0})&&(n=!0),!Wr({type:"Point",coordinates:o},t,{ignoreEndVertices:!1}))return!1}return n}(n,r);case"MultiPoint":return function(t,e){for(var n=!1,r=0,i=e.coordinates;r<i.length;r++){var o=i[r];if(Wr(o,t,{ignoreEndVertices:!0})&&(n=!0),!Wr(o,t))return!1}if(n)return!0;return!1}(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"Point":return ye(r,n,{ignoreBoundary:!0});case"LineString":return function(t,e){var n=!1,r=0,i=Z(t),o=Z(e);if(!ys(i,o))return!1;for(;r<e.coordinates.length-1;r++){if(ye({type:"Point",coordinates:_s(e.coordinates[r],e.coordinates[r+1])},t,{ignoreBoundary:!0})){n=!0;break}}return n}(n,r);case"Polygon":return function(t,e){if("Feature"===t.type&&null===t.geometry)return!1;if("Feature"===e.type&&null===e.geometry)return!1;var n=Z(t),r=Z(e);if(!ys(n,r))return!1;for(var i=rt(e).coordinates,o=0,s=i;o<s.length;o++)for(var a=0,u=s[o];a<u.length;a++){if(!ye(u[a],t))return!1}return!0}(n,r);case"MultiPoint":return function(t,e){for(var n=0,r=e.coordinates;n<r.length;n++){if(!ye(r[n],t,{ignoreBoundary:!0}))return!1}return!0}(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}},t.booleanCrosses=function(t,e){var n=rt(t),r=rt(e),i=n.type,o=r.type;switch(i){case"MultiPoint":switch(o){case"LineString":return ms(n,r);case"Polygon":return Es(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"MultiPoint":return ms(r,n);case"LineString":return function(t,e){if(Or(t,e).features.length>0)for(var n=0;n<t.coordinates.length-1;n++)for(var r=0;r<e.coordinates.length-1;r++){var i=!0;if(0!==r&&r!==e.coordinates.length-2||(i=!1),bs(t.coordinates[n],t.coordinates[n+1],e.coordinates[r],i))return!0}return!1}(n,r);case"Polygon":return xs(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"MultiPoint":return Es(r,n);case"LineString":return xs(r,n);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}},t.booleanDisjoint=ps,t.booleanEqual=function(t,e){return rt(t).type===rt(e).type&&new Cs({precision:6}).compare(tn(t),tn(e))},t.booleanIntersects=Ps,t.booleanOverlap=function(t,e){var n=rt(t),r=rt(e),i=n.type,o=r.type;if("MultiPoint"===i&&"MultiPoint"!==o||("LineString"===i||"MultiLineString"===i)&&"LineString"!==o&&"MultiLineString"!==o||("Polygon"===i||"MultiPolygon"===i)&&"Polygon"!==o&&"MultiPolygon"!==o)throw new Error("features must be of the same type");if("Point"===i)throw new Error("Point geometry not supported");if(new Cs({precision:6}).compare(t,e))return!1;var s=0;switch(i){case"MultiPoint":for(var a=0;a<n.coordinates.length;a++)for(var u=0;u<r.coordinates.length;u++){var l=n.coordinates[a],c=r.coordinates[u];if(l[0]===c[0]&&l[1]===c[1])return!0}return!1;case"LineString":case"MultiLineString":U(t,(function(t){U(e,(function(e){ki(t,e).features.length&&s++}))}));break;case"Polygon":case"MultiPolygon":U(t,(function(t){U(e,(function(e){Or(t,e).features.length&&s++}))}))}return s>0},t.booleanParallel=function(t,e){if(!t)throw new Error("line1 is required");if(!e)throw new Error("line2 is required");if("LineString"!==Us(t,"line1"))throw new Error("line1 must be a LineString");if("LineString"!==Us(e,"line2"))throw new Error("line2 must be a LineString");for(var n=Zn(tn(t)).features,r=Zn(tn(e)).features,i=0;i<n.length;i++){var o=n[i].geometry.coordinates;if(!r[i])break;if(!js(o,r[i].geometry.coordinates))return!1}return!0},t.booleanPointInPolygon=ye,t.booleanPointOnLine=Wr,t.booleanWithin=Zr,t.buffer=function(t,e,n){var r=(n=n||{}).units||"kilometers",i=n.steps||8;if(!t)throw new Error("geojson is required");if("object"!=typeof n)throw new Error("options must be an object");if("number"!=typeof i)throw new Error("steps must be an number");if(void 0===e)throw new Error("radius is required");if(i<=0)throw new Error("steps must be greater than 0");var o=[];switch(t.type){case"GeometryCollection":return q(t,(function(t){var n=ny(t,e,r,i);n&&o.push(n)})),f(o);case"FeatureCollection":return F(t,(function(t){var n=ny(t,e,r,i);n&&F(n,(function(t){t&&o.push(t)}))})),f(o)}return ny(t,e,r,i)},t.center=xn,t.centerMean=Fa,t.centerMedian=function(t,e){if(void 0===e&&(e={}),!P(e=e||{}))throw new Error("options is invalid");var n=e.counter||10;if(!C(n))throw new Error("counter must be a number");var r=e.weight,i=Fa(t,{weight:e.weight}),o=f([]);F(t,(function(t){var e;o.features.push(En(t,{properties:{weight:null===(e=t.properties)||void 0===e?void 0:e[r]}}))}));var s={tolerance:e.tolerance,medianCandidates:[]};return ka(i.geometry.coordinates,[0,0],o,s,n)},t.centerOfMass=function t(e,n){switch(void 0===n&&(n={}),it(e)){case"Point":return a(K(e),n.properties);case"Polygon":var r=[];R(e,(function(t){r.push(t)}));var i,o,s,u,l,c,h,p,f=En(e,{properties:n.properties}),g=f.geometry.coordinates,d=0,y=0,v=0,_=r.map((function(t){return[t[0]-g[0],t[1]-g[1]]}));for(i=0;i<r.length-1;i++)u=(o=_[i])[0],c=o[1],l=(s=_[i+1])[0],v+=p=u*(h=s[1])-l*c,d+=(u+l)*p,y+=(c+h)*p;if(0===v)return f;var m=1/(6*(.5*v));return a([g[0]+m*d,g[1]+m*y],n.properties);default:var x=de(e);return x?t(x,{properties:n.properties}):En(e,{properties:n.properties})}},t.centroid=En,t.circle=_n,t.cleanCoords=tn,t.clone=Ie,t.clusterEach=ou,t.clusterReduce=su,t.clusters=hu,t.clustersDbscan=function(t,e,n){void 0===n&&(n={}),!0!==n.mutate&&(t=Ie(t)),n.minPoints=n.minPoints||3;var r=new Ts.DBSCAN,i=r.run(G(t),N(e,n.units),n.minPoints,me),o=-1;return i.forEach((function(e){o++,e.forEach((function(e){var n=t.features[e];n.properties||(n.properties={}),n.properties.cluster=o,n.properties.dbscan="core"}))})),r.noise.forEach((function(e){var n=t.features[e];n.properties||(n.properties={}),n.properties.cluster?n.properties.dbscan="edge":n.properties.dbscan="noise"})),t},t.clustersKmeans=function(t,e){void 0===e&&(e={});var n=t.features.length;e.numberOfClusters=e.numberOfClusters||Math.round(Math.sqrt(n/2)),e.numberOfClusters>n&&(e.numberOfClusters=n),!0!==e.mutate&&(t=Ie(t));var r=G(t),i=r.slice(0,e.numberOfClusters),o=zs(r,e.numberOfClusters,i),s={};return o.centroids.forEach((function(t,e){s[e]=t})),F(t,(function(t,e){var n=o.idxs[e];t.properties.cluster=n,t.properties.centroid=s[n]})),t},t.collect=function(t,e,n,r){var i=Nt(6),o=e.features.map((function(t){var e;return{minX:t.geometry.coordinates[0],minY:t.geometry.coordinates[1],maxX:t.geometry.coordinates[0],maxY:t.geometry.coordinates[1],property:null===(e=t.properties)||void 0===e?void 0:e[n]}}));return i.load(o),t.features.forEach((function(t){t.properties||(t.properties={});var e=Z(t),n=i.search({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}),o=[];n.forEach((function(e){ye([e.minX,e.minY],t)&&o.push(e.property)})),t.properties[r]=o})),t},t.collectionOf=nt,t.combine=function(t){var e={MultiPoint:{coordinates:[],properties:[]},MultiLineString:{coordinates:[],properties:[]},MultiPolygon:{coordinates:[],properties:[]}};return F(t,(function(t){var n,r,i,o;switch(null===(o=t.geometry)||void 0===o?void 0:o.type){case"Point":e.MultiPoint.coordinates.push(t.geometry.coordinates),e.MultiPoint.properties.push(t.properties);break;case"MultiPoint":(n=e.MultiPoint.coordinates).push.apply(n,t.geometry.coordinates),e.MultiPoint.properties.push(t.properties);break;case"LineString":e.MultiLineString.coordinates.push(t.geometry.coordinates),e.MultiLineString.properties.push(t.properties);break;case"MultiLineString":(r=e.MultiLineString.coordinates).push.apply(r,t.geometry.coordinates),e.MultiLineString.properties.push(t.properties);break;case"Polygon":e.MultiPolygon.coordinates.push(t.geometry.coordinates),e.MultiPolygon.properties.push(t.properties);break;case"MultiPolygon":(i=e.MultiPolygon.coordinates).push.apply(i,t.geometry.coordinates),e.MultiPolygon.properties.push(t.properties)}})),f(Object.keys(e).filter((function(t){return e[t].coordinates.length})).sort().map((function(t){return o({type:t,coordinates:e[t].coordinates},{collectedProperties:e[t].properties})})))},t.concave=function(t,e){void 0===e&&(e={});var n=e.maxEdge||1/0,r=xe(function(t){var e=[],n={};return F(t,(function(t){if(t.geometry){var r=t.geometry.coordinates.join("-");Object.prototype.hasOwnProperty.call(n,r)||(e.push(t),n[r]=!0)}})),f(e)}(t));if(r.features=r.features.filter((function(t){var r=t.geometry.coordinates[0][0],i=t.geometry.coordinates[0][1],o=t.geometry.coordinates[0][2],s=me(r,i,e),a=me(i,o,e),u=me(r,o,e);return s<=n&&a<=n&&u<=n})),r.features.length<1)return null;var i=$e(r);return 1===i.coordinates.length&&(i.coordinates=i.coordinates[0],i.type="Polygon"),o(i)},t.containsNumber=$,t.convertArea=S,t.convertDistance=N,t.convertLength=N,t.convex=de,t.coordAll=G,t.coordEach=R,t.coordReduce=T,t.createBins=au,t.degrees2radians=I,t.degreesToRadians=I,t.destination=vn,t.difference=function(t,e){var n=rt(t),r=rt(e),i=t.properties||{},o=$u.difference(n.coordinates,r.coordinates);return 0===o.length?null:1===o.length?l(o[0],i):y(o,i)},t.dissolve=function(t,e){if(!P(e=e||{}))throw new Error("options is invalid");var n=e.propertyName;nt(t,"Polygon","dissolve");var r=[];if(!e.propertyName)return ni(y($u.union.apply(null,t.features.map((function(t){return t.geometry.coordinates})))));var i={};F(t,(function(t){Object.prototype.hasOwnProperty.call(i,t.properties[n])||(i[t.properties[n]]=[]),i[t.properties[n]].push(t)}));for(var o=Object.keys(i),s=0;s<o.length;s++){var a=y($u.union.apply(null,i[o[s]].map((function(t){return t.geometry.coordinates}))));a.properties[n]=o[s],r.push(a)}return ni(f(r))},t.distance=me,t.distanceToDegrees=E,t.distanceToRadians=x,t.distanceWeight=ja,t.earthRadius=e,t.ellipse=Aa,t.envelope=dn,t.explode=bn,t.factors=n,t.feature=o,t.featureCollection=f,t.featureEach=F,t.featureOf=et,t.featureReduce=k,t.filterProperties=cu,t.findPoint=W,t.findSegment=H,t.flatten=ni,t.flattenEach=z,t.flattenReduce=j,t.flip=function(t,e){if(!P(e=e||{}))throw new Error("options is invalid");var n=e.mutate;if(!t)throw new Error("geojson is required");return!1!==n&&void 0!==n||(t=Ie(t)),R(t,(function(t){var e=t[0],n=t[1];t[0]=n,t[1]=e})),t},t.geojsonType=tt,t.geomEach=q,t.geomReduce=B,t.geometry=s,t.geometryCollection=v,t.getCluster=iu,t.getCoord=K,t.getCoords=Q,t.getGeom=rt,t.getType=it,t.greatCircle=function(t,e,n){if("object"!=typeof(n=n||{}))throw new Error("options is invalid");var r=n.properties,i=n.npoints,o=n.offset;return t=K(t),e=K(e),r=r||{},i=i||100,o=o||10,new vi({x:t[0],y:t[1]},{x:e[0],y:e[1]},r).Arc(i,{offset:o}).json()},t.helpers=O,t.hexGrid=ay,t.inside=ye,t.interpolate=function(t,e,n){if("object"!=typeof(n=n||{}))throw new Error("options is invalid");var r=n.gridType,i=n.property,o=n.weight;if(!t)throw new Error("points is required");if(nt(t,"Point","input must contain Points"),!e)throw new Error("cellSize is required");if(void 0!==o&&"number"!=typeof o)throw new Error("weight must be a number");i=i||"elevation",r=r||"square",o=o||1;var s,a=Z(t);switch(r){case"point":case"points":s=ti(a,e,n);break;case"square":case"squares":s=py(a,e,n);break;case"hex":case"hexes":s=ay(a,e,n);break;case"triangle":case"triangles":s=fy(a,e,n);break;default:throw new Error("invalid gridType")}var u=[];return F(s,(function(e){var s=0,a=0;F(t,(function(t){var u,l=me("point"===r?e:En(e),t,n);if(void 0!==i&&(u=t.properties[i]),void 0===u&&(u=t.geometry.coordinates[2]),void 0===u)throw new Error("zValue is missing");0===l&&(s=u);var c=1/Math.pow(l,o);a+=c,s+=c*u}));var l=Ie(e);l.properties[i]=s/a,u.push(l)})),f(u)},t.intersect=sy,t.invariant=ot,t.isNumber=C,t.isObject=P,t.isobands=function(t,e,n){if(!P(n=n||{}))throw new Error("options is invalid");var r=n.zProperty||"elevation",i=n.commonProperties||{},o=n.breaksProperties||[];if(nt(t,"Point","Input must contain Points"),!e)throw new Error("breaks is required");if(!Array.isArray(e))throw new Error("breaks is not an Array");if(!P(i))throw new Error("commonProperties is not an Object");if(!Array.isArray(o))throw new Error("breaksProperties is not an Array");var s=Zi(t,{zProperty:r,flip:!0}),a=function(t,e,n){for(var r=[],i=1;i<e.length;i++){var o=+e[i-1],s=+e[i],a=Zo(Jo($i(t,o,s-o))),u={};u.groupedRings=a,u[n]=o+"-"+s,r.push(u)}return r}(s,e,r);return f((a=function(t,e,n){var r=Z(n),i=r[2]-r[0],o=r[3]-r[1],s=r[0],a=r[1],u=e[0].length-1,l=e.length-1,c=i/u,h=o/l,p=function(t){t[0]=t[0]*c+s,t[1]=t[1]*h+a};return t.forEach((function(t){t.groupedRings.forEach((function(t){t.forEach((function(t){t.forEach(p)}))}))})),t}(a,s,t)).map((function(t,e){if(o[e]&&!P(o[e]))throw new Error("Each mappedProperty is required to be an Object");var n=ct({},i,o[e]);return n[r]=t[r],y(t.groupedRings,n)})))},t.isolines=function(t,e,n){if(!P(n=n||{}))throw new Error("options is invalid");var r=n.zProperty||"elevation",i=n.commonProperties||{},o=n.breaksProperties||[];if(nt(t,"Point","Input must contain Points"),!e)throw new Error("breaks is required");if(!Array.isArray(e))throw new Error("breaks must be an Array");if(!P(i))throw new Error("commonProperties must be an Object");if(!Array.isArray(o))throw new Error("breaksProperties must be an Array");var s=_t(t,{zProperty:r,flip:!0});return f(function(t,e,n){var r=Z(n),i=r[2]-r[0],o=r[3]-r[1],s=r[0],a=r[1],u=e[0].length-1,l=e.length-1,c=i/u,h=o/l,p=function(t){t[0]=t[0]*c+s,t[1]=t[1]*h+a};return t.forEach((function(t){R(t,p)})),t}(function(t,e,n,r,i){for(var o=[],s=1;s<e.length;s++){var a=+e[s],u=ct({},r,i[s]);u[n]=a;var l=g(ft(t,a),u);o.push(l)}return o}(s,e,r,i,o),s,t))},t.kinks=function(t){var e,n,r={type:"FeatureCollection",features:[]};if("LineString"===(n="Feature"===t.type?t.geometry:t).type)e=[n.coordinates];else if("MultiLineString"===n.type)e=n.coordinates;else if("MultiPolygon"===n.type)e=[].concat.apply([],n.coordinates);else{if("Polygon"!==n.type)throw new Error("Input must be a LineString, MultiLineString, Polygon, or MultiPolygon Feature or Geometry");e=n.coordinates}return e.forEach((function(t){e.forEach((function(e){for(var n=0;n<t.length-1;n++)for(var i=n;i<e.length-1;i++){if(t===e){if(1===Math.abs(n-i))continue;if(0===n&&i===t.length-2&&t[n][0]===t[t.length-1][0]&&t[n][1]===t[t.length-1][1])continue}var o=Gr(t[n][0],t[n][1],t[n+1][0],t[n+1][1],e[i][0],e[i][1],e[i+1][0],e[i+1][1]);o&&r.features.push(a([o[0],o[1]]))}}))})),r},t.length=Yr,t.lengthToDegrees=E,t.lengthToRadians=x,t.lineArc=bi,t.lineChunk=function(t,e,n){if(!P(n=n||{}))throw new Error("options is invalid");var r=n.units,i=n.reverse;if(!t)throw new Error("geojson is required");if(e<=0)throw new Error("segmentLength must be greater than 0");var o=[];return z(t,(function(t){i&&(t.geometry.coordinates=t.geometry.coordinates.reverse()),function(t,e,n,r){var i=Yr(t,{units:n});if(i<=e)return r(t);var o=i/e;Number.isInteger(o)||(o=Math.floor(o)+1);for(var s=0;s<o;s++){r(Hr(t,e*s,e*(s+1),{units:n}),s)}}(t,e,r,(function(t){o.push(t)}))})),f(o)},t.lineDistance=Yr,t.lineEach=X,t.lineIntersect=Or,t.lineOffset=function(t,e,n){if(!P(n=n||{}))throw new Error("options is invalid");var r=n.units;if(!t)throw new Error("geojson is required");if(null==e||isNaN(e))throw new Error("distance is required");var i=it(t),o=t.properties;switch(i){case"LineString":return os(t,e,r);case"MultiLineString":var s=[];return z(t,(function(t){s.push(os(t,e,r).geometry.coordinates)})),g(s,o);default:throw new Error("geometry "+i+" is not supported")}},t.lineOverlap=ki,t.lineReduce=Y,t.lineSegment=Zn,t.lineSlice=function(t,e,n){var r=Q(n);if("LineString"!==it(n))throw new Error("line must be a LineString");for(var i,o=Tr(n,t),s=Tr(n,e),a=[(i=o.properties.index<=s.properties.index?[o,s]:[s,o])[0].geometry.coordinates],u=i[0].properties.index+1;u<i[1].properties.index+1;u++)a.push(r[u]);return a.push(i[1].geometry.coordinates),h(a,n.properties)},t.lineSliceAlong=Hr,t.lineSplit=function(t,e){if(!t)throw new Error("line is required");if(!e)throw new Error("splitter is required");var n=it(t),r=it(e);if("LineString"!==n)throw new Error("line must be LineString");if("FeatureCollection"===r)throw new Error("splitter cannot be a FeatureCollection");if("GeometryCollection"===r)throw new Error("splitter cannot be a GeometryCollection");var i=ei(e,{precision:7});switch(r){case"Point":return mi(t,i);case"MultiPoint":return _i(t,i);case"LineString":case"MultiLineString":case"Polygon":case"MultiPolygon":return _i(t,Or(t,i))}},t.lineString=h,t.lineStringToPolygon=Ci,t.lineStrings=p,t.lineToPolygon=Ci,t.mask=function(t,e){var n,r=hy(e),i=null;return"FeatureCollection"===t.type?i=cy(2===(n=t).features.length?$u.union(n.features[0].geometry.coordinates,n.features[1].geometry.coordinates):$u.union.apply($u,n.features.map((function(t){return t.geometry.coordinates})))):i=cy($u.union(t.geometry.coordinates)),i.geometry.coordinates.forEach((function(t){r.geometry.coordinates.push(t[0])})),r},t.meta=J,t.midpoint=function(t,e){return vn(t,me(t,e)/2,mn(t,e))},t.moranIndex=function(t,e){var n=e.inputField,r=e.threshold||1e5,i=e.p||2,o=e.binary||!1,s=ja(t,{alpha:e.alpha||-1,binary:o,p:i,standardization:e.standardization||!0,threshold:r}),a=[];F(t,(function(t){var e=t.properties||{};a.push(e[n])}));for(var u=Ua(a),l=function(t){for(var e=Ua(t),n=0,r=0,i=t;r<i.length;r++){var o=i[r];n+=Math.pow(o-e,2)}return n/t.length}(a),c=0,h=0,p=0,f=0,g=s.length,d=0;d<g;d++){for(var y=0,v=0;v<g;v++)c+=s[d][v]*(a[d]-u)*(a[v]-u),h+=s[d][v],p+=Math.pow(s[d][v]+s[v][d],2),y+=s[d][v]+s[v][d];f+=Math.pow(y,2)}var _=c/h/l,m=-1/(g-1),x=(g*g*(p*=.5)-g*f+h*h*3)/((g-1)*(g+1)*(h*h))-m*m,E=Math.sqrt(x);return{expectedMoranIndex:m,moranIndex:_,stdNorm:E,zNorm:(_-m)/E}},t.multiLineString=g,t.multiPoint=d,t.multiPolygon=y,t.nearest=Jn,t.nearestPoint=Jn,t.nearestPointOnLine=Tr,t.nearestPointToLine=function(t,e,n){void 0===n&&(n={});var r=n.units,i=n.properties||{},o=function(t){var e=[];switch(t.geometry?t.geometry.type:t.type){case"GeometryCollection":return q(t,(function(t){"Point"===t.type&&e.push({type:"Feature",properties:{},geometry:t})})),{type:"FeatureCollection",features:e};case"FeatureCollection":return t.features=t.features.filter((function(t){return"Point"===t.geometry.type})),t;default:throw new Error("points must be a Point Collection")}}(t);if(!o.features.length)throw new Error("points must contain features");if(!e)throw new Error("line is required");if("LineString"!==it(e))throw new Error("line must be a LineString");var s=1/0,a=null;return F(o,(function(t){var n=Dr(t,e,{units:r});n<s&&(s=n,a=t)})),a&&(a.properties=ct({dist:s},a.properties,i)),a},t.planepoint=function(t,e){var n=K(t),r=rt(e).coordinates[0];if(r.length<4)throw new Error("OuterRing of a Polygon must have 4 or more Positions.");var i=e.properties||{},o=i.a,s=i.b,a=i.c,u=n[0],l=n[1],c=r[0][0],h=r[0][1],p=void 0!==o?o:r[0][2],f=r[1][0],g=r[1][1],d=void 0!==s?s:r[1][2],y=r[2][0],v=r[2][1],_=void 0!==a?a:r[2][2];return(_*(u-c)*(l-g)+p*(u-f)*(l-v)+d*(u-y)*(l-h)-d*(u-c)*(l-v)-_*(u-f)*(l-h)-p*(u-y)*(l-g))/((u-c)*(l-g)+(u-f)*(l-v)+(u-y)*(l-h)-(u-c)*(l-v)-(u-f)*(l-h)-(u-y)*(l-g))},t.point=a,t.pointGrid=ti,t.pointOnFeature=qr,t.pointOnLine=Tr,t.pointOnSurface=qr,t.pointToLineDistance=Dr,t.points=u,t.pointsWithinPolygon=_e,t.polygon=l,t.polygonSmooth=function(t,e){var n=[],r=e.iterations||1;if(!t)throw new Error("inputPolys is required");return q(t,(function(t,e,i){var o,s,a;switch(t.type){case"Polygon":o=[[]];for(var u=0;u<r;u++)a=[[]],s=t,u>0&&(s=l(o).geometry),qa(s,a),o=a.slice(0);n.push(l(o,i));break;case"MultiPolygon":o=[[[]]];for(var c=0;c<r;c++)a=[[[]]],s=t,c>0&&(s=y(o).geometry),Ba(s,a),o=a.slice(0);n.push(y(o,i));break;default:throw new Error("geometry is invalid, must be Polygon or MultiPolygon")}})),f(n)},t.polygonTangents=function(t,e){var n,r,i,o,s=Q(t),u=Q(e),l=Z(e),c=0,h=null;switch(s[0]>l[0]&&s[0]<l[2]&&s[1]>l[1]&&s[1]<l[3]&&(c=(h=Jn(t,bn(e))).properties.featureIndex),it(e)){case"Polygon":n=u[0][c],r=u[0][0],null!==h&&h.geometry.coordinates[1]<s[1]&&(r=u[0][c]),o=Xi(u[0][0],u[0][u[0].length-1],s);var p=Ui(u[0],s,o,i,n,r);n=p[0],r=p[1];break;case"MultiPolygon":for(var g=0,d=0,y=0,v=0;v<u[0].length;v++){g=v;for(var _=!1,m=0;m<u[0][v].length;m++){if(d=m,y===c){_=!0;break}y++}if(_)break}n=u[0][g][d],r=u[0][g][d],o=Xi(u[0][0][0],u[0][0][u[0][0].length-1],s),u.forEach((function(t){var e=Ui(t[0],s,o,i,n,r);n=e[0],r=e[1]}))}return f([a(n),a(r)])},t.polygonToLine=Ii,t.polygonToLineString=Ii,t.polygonize=function(t){var e=hs.fromGeoJson(t);e.deleteDangles(),e.deleteCutEdges();var n=[],r=[];return e.getEdgeRings().filter((function(t){return t.isValid()})).forEach((function(t){t.isHole()?n.push(t):r.push(t)})),n.forEach((function(t){cs.findEdgeRingContaining(t,r)&&r.push(t)})),f(r.map((function(t){return t.toPolygon()})))},t.polygons=c,t.projection=Ja,t.propEach=A,t.propReduce=D,t.propertiesContainsFilter=lu,t.radians2degrees=w,t.radiansToDegrees=w,t.radiansToDistance=m,t.radiansToLength=m,t.random=ru,t.randomLineString=tu,t.randomPoint=Qa,t.randomPolygon=$a,t.randomPosition=Ka,t.rewind=function(t,e){if(!P(e=e||{}))throw new Error("options is invalid");var n=e.reverse||!1,r=e.mutate||!1;if(!t)throw new Error("<geojson> is required");if("boolean"!=typeof n)throw new Error("<reverse> must be a boolean");if("boolean"!=typeof r)throw new Error("<mutate> must be a boolean");!1===r&&(t=Ie(t));var i=[];switch(t.type){case"GeometryCollection":return q(t,(function(t){Hi(t,n)})),t;case"FeatureCollection":return F(t,(function(t){F(Hi(t,n),(function(t){i.push(t)}))})),f(i)}return Hi(t,n)},t.rhumbBearing=Bi,t.rhumbDestination=ji,t.rhumbDistance=Ar,t.round=_,t.sample=function(t,e){if(!t)throw new Error("featurecollection is required");if(null==e)throw new Error("num is required");if("number"!=typeof e)throw new Error("num must be a number");return f(function(t,e){var n,r,i=t.slice(0),o=t.length,s=o-e;for(;o-- >s;)n=i[r=Math.floor((o+1)*Math.random())],i[r]=i[o],i[o]=n;return i.slice(s)}(t.features,e))},t.sector=function(t,e,n,r,i){if(!P(i=i||{}))throw new Error("options is invalid");var o=i.properties;if(!t)throw new Error("center is required");if(null==n)throw new Error("bearing1 is required");if(null==r)throw new Error("bearing2 is required");if(!e)throw new Error("radius is required");if("object"!=typeof i)throw new Error("options must be an object");if(qi(n)===qi(r))return _n(t,e,i);var s=Q(t),a=bi(t,e,n,r,i),u=[[s]];return R(a,(function(t){u[0].push(t)})),u[0].push(s),l(u,o)},t.segmentEach=U,t.segmentReduce=V,t.shortestPath=function(t,e,n){if(!P(n=n||{}))throw new Error("options is invalid");var r=n.resolution,i=n.minDistance,s=n.obstacles||f([]);if(!t)throw new Error("start is required");if(!e)throw new Error("end is required");if(r&&!C(r)||r<=0)throw new Error("options.resolution must be a number, greater than 0");if(i)throw new Error("options.minDistance is not yet implemented");var u=K(t),l=K(e);switch(t=a(u),e=a(l),it(s)){case"FeatureCollection":if(0===s.features.length)return h([u,l]);break;case"Polygon":s=f([o(rt(s))]);break;default:throw new Error("invalid obstacles")}var c=s;c.features.push(t),c.features.push(e);var p=Z(ts(gn(Z(c)),1.15));r||(r=me([p[0],p[1]],[p[2],p[1]],n)/100),c.features.pop(),c.features.pop();for(var g=p[0],d=p[1],y=p[2],v=p[3],_=r/me([g,d],[y,d],n)*(y-g),m=r/me([g,d],[g,v],n)*(v-d),x=y-g,E=v-d,b=Math.floor(x/_),w=Math.floor(E/m),I=(x-b*_)/2,N=[],S=[],M=[],L=[],O=1/0,R=1/0,T=v-(E-w*m)/2,A=0;T>=d;){for(var D=[],F=[],k=g+I,G=0;k<=y;){var q=a([k,T]),B=Js(q,s);D.push(B?0:1),F.push(k+"|"+T);var z=me(q,t);!B&&z<O&&(O=z,M={x:G,y:A});var j=me(q,e);!B&&j<R&&(R=j,L={x:G,y:A}),k+=_,G++}S.push(D),N.push(F),T-=m,A++}var U=new Ys(S,{diagonal:!0}),V=U.grid[M.y][M.x],X=U.grid[L.y][L.x],Y=Xs.search(U,V,X),H=[u];return Y.forEach((function(t){var e=N[t.x][t.y].split("|");H.push([+e[0],+e[1]])})),H.push(l),tn(h(H))},t.simplify=function(t,e){if(!P(e=e||{}))throw new Error("options is invalid");var n=void 0!==e.tolerance?e.tolerance:1,r=e.highQuality||!1,i=e.mutate||!1;if(!t)throw new Error("geojson is required");if(n&&n<0)throw new Error("invalid tolerance");return!0!==i&&(t=Ie(t)),q(t,(function(t){!function(t,e,n){var r=t.type;if("Point"===r||"MultiPoint"===r)return t;tn(t,!0);var i=t.coordinates;switch(r){case"LineString":t.coordinates=ln(i,e,n);break;case"MultiLineString":t.coordinates=i.map((function(t){return ln(t,e,n)}));break;case"Polygon":t.coordinates=cn(i,e,n);break;case"MultiPolygon":t.coordinates=i.map((function(t){return cn(t,e,n)}))}}(t,n,r)})),t},t.square=yn,t.squareGrid=py,t.standardDeviationalEllipse=function(t,e){if(!P(e=e||{}))throw new Error("options is invalid");var n=e.steps||64,r=e.weight,i=e.properties||{};if(!C(n))throw new Error("steps must be a number");if(!P(i))throw new Error("properties must be a number");var o=G(t).length,s=Fa(t,{weight:r}),a=0,u=0,l=0;F(t,(function(t){var e=t.properties[r]||1,n=Ga(Q(t),Q(s));a+=Math.pow(n.x,2)*e,u+=Math.pow(n.y,2)*e,l+=n.x*n.y*e}));var c=a-u,h=Math.sqrt(Math.pow(c,2)+4*Math.pow(l,2)),p=2*l,g=Math.atan((c+h)/p),d=180*g/Math.PI,y=0,v=0,_=0;F(t,(function(t){var e=t.properties[r]||1,n=Ga(Q(t),Q(s));y+=Math.pow(n.x*Math.cos(g)-n.y*Math.sin(g),2)*e,v+=Math.pow(n.x*Math.sin(g)+n.y*Math.cos(g),2)*e,_+=e}));var m=Math.sqrt(2*y/_),x=Math.sqrt(2*v/_),E=Aa(s,m,x,{units:"degrees",angle:d,steps:n,properties:i}),b=_e(t,f([E])),w={meanCenterCoordinates:Q(s),semiMajorAxis:m,semiMinorAxis:x,numberOfFeatures:o,angle:d,percentageWithinEllipse:100*G(b).length/o};return E.properties.standardDeviationalEllipse=w,E},t.tag=function(t,e,n,r){return t=Ie(t),e=Ie(e),F(t,(function(t){t.properties||(t.properties={}),F(e,(function(e){void 0===t.properties[r]&&ye(t,e)&&(t.properties[r]=e.properties[n])}))})),t},t.tesselate=function(t){if(!t.geometry||"Polygon"!==t.geometry.type&&"MultiPolygon"!==t.geometry.type)throw new Error("input must be a Polygon or MultiPolygon");var e={type:"FeatureCollection",features:[]};return"Polygon"===t.geometry.type?e.features=Wn(t.geometry.coordinates):t.geometry.coordinates.forEach((function(t){e.features=e.features.concat(Wn(t))})),e},t.tin=xe,t.toMercator=Va,t.toWgs84=Xa,t.transformRotate=$o,t.transformScale=ts,t.transformTranslate=function(t,e,n,r){if(!P(r=r||{}))throw new Error("options is invalid");var i=r.units,o=r.zTranslation,s=r.mutate;if(!t)throw new Error("geojson is required");if(null==e||isNaN(e))throw new Error("distance is required");if(o&&"number"!=typeof o&&isNaN(o))throw new Error("zTranslation is not a number");if(o=void 0!==o?o:0,0===e&&0===o)return t;if(null==n||isNaN(n))throw new Error("direction is required");return e<0&&(e=-e,n+=180),!1!==s&&void 0!==s||(t=Ie(t)),R(t,(function(t){var r=Q(ji(t,e,n,{units:i}));t[0]=r[0],t[1]=r[1],o&&3===t.length&&(t[2]+=o)})),t},t.triangleGrid=fy,t.truncate=ei,t.union=function(t,e,n){void 0===n&&(n={});var r=rt(t),i=rt(e),o=$u.union(r.coordinates,i.coordinates);return 0===o.length?null:1===o.length?l(o[0],n.properties):y(o,n.properties)},t.unitsFactors=r,t.unkinkPolygon=function(t){var e=[];return z(t,(function(t){"Polygon"===t.geometry.type&&F(oi(t),(function(n){e.push(l(n.geometry.coordinates,t.properties))}))})),f(e)},t.validateBBox=M,t.validateId=L,t.voronoi=function(t,e){if(!P(e=e||{}))throw new Error("options is invalid");var n=e.bbox||[-180,-85,180,85];if(!t)throw new Error("points is required");if(!Array.isArray(n))throw new Error("bbox is invalid");return nt(t,"Point","points"),f(function(){var t=Ks,e=Qs,n=null;function r(r){return new Ra(r.map((function(n,i){var o=[Math.round(t(n,i,r)/Ma)*Ma,Math.round(e(n,i,r)/Ma)*Ma];return o.index=i,o.data=n,o})),n)}return r.polygons=function(t){return r(t).polygons()},r.links=function(t){return r(t).links()},r.triangles=function(t){return r(t).triangles()},r.x=function(e){return arguments.length?(t="function"==typeof e?e:Zs(+e),r):t},r.y=function(t){return arguments.length?(e="function"==typeof t?t:Zs(+t),r):e},r.extent=function(t){return arguments.length?(n=null==t?null:[[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]],r):n&&[[n[0][0],n[0][1]],[n[1][0],n[1][1]]]},r.size=function(t){return arguments.length?(n=null==t?null:[[0,0],[+t[0],+t[1]]],r):n&&[n[1][0]-n[0][0],n[1][1]-n[0][1]]},r}().x((function(t){return t.geometry.coordinates[0]})).y((function(t){return t.geometry.coordinates[1]})).extent([[n[0],n[1]],[n[2],n[3]]]).polygons(t.features).map(Ta))},t.within=_e,Object.defineProperty(t,"__esModule",{value:!0})}));

}).call(this)}).call(this,require('_process'))
},{"_process":4}],2:[function(require,module,exports){
/*!
* sweetalert2 v11.7.20
* Released under the MIT License.
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Sweetalert2 = factory());
})(this, (function () { 'use strict';

  const RESTORE_FOCUS_TIMEOUT = 100;

  /** @type {GlobalState} */
  const globalState = {};
  const focusPreviousActiveElement = () => {
    if (globalState.previousActiveElement instanceof HTMLElement) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  };

  /**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise<void>}
   */
  const restoreActiveElement = returnFocus => {
    return new Promise(resolve => {
      if (!returnFocus) {
        return resolve();
      }
      const x = window.scrollX;
      const y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(() => {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  const swalPrefix = 'swal2-';

  /**
   * @typedef
   * { | 'container'
   *   | 'shown'
   *   | 'height-auto'
   *   | 'iosfix'
   *   | 'popup'
   *   | 'modal'
   *   | 'no-backdrop'
   *   | 'no-transition'
   *   | 'toast'
   *   | 'toast-shown'
   *   | 'show'
   *   | 'hide'
   *   | 'close'
   *   | 'title'
   *   | 'html-container'
   *   | 'actions'
   *   | 'confirm'
   *   | 'deny'
   *   | 'cancel'
   *   | 'default-outline'
   *   | 'footer'
   *   | 'icon'
   *   | 'icon-content'
   *   | 'image'
   *   | 'input'
   *   | 'file'
   *   | 'range'
   *   | 'select'
   *   | 'radio'
   *   | 'checkbox'
   *   | 'label'
   *   | 'textarea'
   *   | 'inputerror'
   *   | 'input-label'
   *   | 'validation-message'
   *   | 'progress-steps'
   *   | 'active-progress-step'
   *   | 'progress-step'
   *   | 'progress-step-line'
   *   | 'loader'
   *   | 'loading'
   *   | 'styled'
   *   | 'top'
   *   | 'top-start'
   *   | 'top-end'
   *   | 'top-left'
   *   | 'top-right'
   *   | 'center'
   *   | 'center-start'
   *   | 'center-end'
   *   | 'center-left'
   *   | 'center-right'
   *   | 'bottom'
   *   | 'bottom-start'
   *   | 'bottom-end'
   *   | 'bottom-left'
   *   | 'bottom-right'
   *   | 'grow-row'
   *   | 'grow-column'
   *   | 'grow-fullscreen'
   *   | 'rtl'
   *   | 'timer-progress-bar'
   *   | 'timer-progress-bar-container'
   *   | 'scrollbar-measure'
   *   | 'icon-success'
   *   | 'icon-warning'
   *   | 'icon-info'
   *   | 'icon-question'
   *   | 'icon-error'
   * } SwalClass
   * @typedef {Record<SwalClass, string>} SwalClasses
   */

  /**
   * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon
   * @typedef {Record<SwalIcon, string>} SwalIcons
   */

  /** @type {SwalClass[]} */
  const classNames = ['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error'];
  const swalClasses = classNames.reduce((acc, className) => {
    acc[className] = swalPrefix + className;
    return acc;
  }, /** @type {SwalClasses} */{});

  /** @type {SwalIcon[]} */
  const icons = ['success', 'warning', 'info', 'question', 'error'];
  const iconTypes = icons.reduce((acc, icon) => {
    acc[icon] = swalPrefix + icon;
    return acc;
  }, /** @type {SwalIcons} */{});

  const consolePrefix = 'SweetAlert2:';

  /**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */
  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

  /**
   * Standardize console warnings
   *
   * @param {string | string[]} message
   */
  const warn = message => {
    console.warn(`${consolePrefix} ${typeof message === 'object' ? message.join(' ') : message}`);
  };

  /**
   * Standardize console errors
   *
   * @param {string} message
   */
  const error = message => {
    console.error(`${consolePrefix} ${message}`);
  };

  /**
   * Private global state for `warnOnce`
   *
   * @type {string[]}
   * @private
   */
  const previousWarnOnceMessages = [];

  /**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */
  const warnOnce = message => {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };

  /**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string} useInstead
   */
  const warnAboutDeprecation = (deprecatedParam, useInstead) => {
    warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release. Please use "${useInstead}" instead.`);
  };

  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {Function | any} arg
   * @returns {any}
   */
  const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;

  /**
   * @param {any} arg
   * @returns {boolean}
   */
  const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';

  /**
   * @param {any} arg
   * @returns {Promise<any>}
   */
  const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);

  /**
   * @param {any} arg
   * @returns {boolean}
   */
  const isPromise = arg => arg && Promise.resolve(arg) === arg;

  /**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */
  const getContainer = () => document.body.querySelector(`.${swalClasses.container}`);

  /**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */
  const elementBySelector = selectorString => {
    const container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  /**
   * @param {string} className
   * @returns {HTMLElement | null}
   */
  const elementByClass = className => {
    return elementBySelector(`.${className}`);
  };

  /**
   * @returns {HTMLElement | null}
   */
  const getPopup = () => elementByClass(swalClasses.popup);

  /**
   * @returns {HTMLElement | null}
   */
  const getIcon = () => elementByClass(swalClasses.icon);

  /**
   * @returns {HTMLElement | null}
   */
  const getIconContent = () => elementByClass(swalClasses['icon-content']);

  /**
   * @returns {HTMLElement | null}
   */
  const getTitle = () => elementByClass(swalClasses.title);

  /**
   * @returns {HTMLElement | null}
   */
  const getHtmlContainer = () => elementByClass(swalClasses['html-container']);

  /**
   * @returns {HTMLElement | null}
   */
  const getImage = () => elementByClass(swalClasses.image);

  /**
   * @returns {HTMLElement | null}
   */
  const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);

  /**
   * @returns {HTMLElement | null}
   */
  const getValidationMessage = () => elementByClass(swalClasses['validation-message']);

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getConfirmButton = () => /** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.confirm}`);

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getCancelButton = () => /** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.cancel}`);

  /**
   * @returns {HTMLButtonElement | null}
   */
  const getDenyButton = () => /** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.deny}`);

  /**
   * @returns {HTMLElement | null}
   */
  const getInputLabel = () => elementByClass(swalClasses['input-label']);

  /**
   * @returns {HTMLElement | null}
   */
  const getLoader = () => elementBySelector(`.${swalClasses.loader}`);

  /**
   * @returns {HTMLElement | null}
   */
  const getActions = () => elementByClass(swalClasses.actions);

  /**
   * @returns {HTMLElement | null}
   */
  const getFooter = () => elementByClass(swalClasses.footer);

  /**
   * @returns {HTMLElement | null}
   */
  const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);

  /**
   * @returns {HTMLElement | null}
   */
  const getCloseButton = () => elementByClass(swalClasses.close);

  // https://github.com/jkup/focusable/blob/master/index.js
  const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`;
  /**
   * @returns {HTMLElement[]}
   */
  const getFocusableElements = () => {
    const popup = getPopup();
    if (!popup) {
      return [];
    }
    /** @type {NodeListOf<HTMLElement>} */
    const focusableElementsWithTabindex = popup.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
    const focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex)
    // sort according to tabindex
    .sort((a, b) => {
      const tabindexA = parseInt(a.getAttribute('tabindex') || '0');
      const tabindexB = parseInt(b.getAttribute('tabindex') || '0');
      if (tabindexA > tabindexB) {
        return 1;
      } else if (tabindexA < tabindexB) {
        return -1;
      }
      return 0;
    });

    /** @type {NodeListOf<HTMLElement>} */
    const otherFocusableElements = popup.querySelectorAll(focusable);
    const otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter(el => el.getAttribute('tabindex') !== '-1');
    return [...new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))].filter(el => isVisible$1(el));
  };

  /**
   * @returns {boolean}
   */
  const isModal = () => {
    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
  };

  /**
   * @returns {boolean}
   */
  const isToast = () => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    return hasClass(popup, swalClasses.toast);
  };

  /**
   * @returns {boolean}
   */
  const isLoading = () => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    return popup.hasAttribute('data-loading');
  };

  /**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */
  const setInnerHtml = (elem, html) => {
    elem.textContent = '';
    if (html) {
      const parser = new DOMParser();
      const parsed = parser.parseFromString(html, `text/html`);
      const head = parsed.querySelector('head');
      head && Array.from(head.childNodes).forEach(child => {
        elem.appendChild(child);
      });
      const body = parsed.querySelector('body');
      body && Array.from(body.childNodes).forEach(child => {
        if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
          elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507
        } else {
          elem.appendChild(child);
        }
      });
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */
  const hasClass = (elem, className) => {
    if (!className) {
      return false;
    }
    const classList = className.split(/\s+/);
    for (let i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }
    return true;
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */
  const removeCustomClasses = (elem, params) => {
    Array.from(elem.classList).forEach(className => {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass || {}).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */
  const applyCustomClass = (elem, params, className) => {
    removeCustomClasses(elem, params);
    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        warn(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof params.customClass[className]}"`);
        return;
      }
      addClass(elem, params.customClass[className]);
    }
  };

  /**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass} inputClass
   * @returns {HTMLInputElement | null}
   */
  const getInput$1 = (popup, inputClass) => {
    if (!inputClass) {
      return null;
    }
    switch (inputClass) {
      case 'select':
      case 'textarea':
      case 'file':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses[inputClass]}`);
      case 'checkbox':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.checkbox} input`);
      case 'radio':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:checked`) || popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:first-child`);
      case 'range':
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.range} input`);
      default:
        return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.input}`);
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */
  const focusInput = input => {
    input.focus();

    // place cursor at end of text in text input
    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      const val = input.value;
      input.value = '';
      input.value = val;
    }
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   * @param {boolean} condition
   */
  const toggleClass = (target, classList, condition) => {
    if (!target || !classList) {
      return;
    }
    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }
    classList.forEach(className => {
      if (Array.isArray(target)) {
        target.forEach(elem => {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */
  const addClass = (target, classList) => {
    toggleClass(target, classList, true);
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */
  const removeClass = (target, classList) => {
    toggleClass(target, classList, false);
  };

  /**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | undefined}
   */
  const getDirectChildByClass = (elem, className) => {
    const children = Array.from(elem.children);
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child instanceof HTMLElement && hasClass(child, className)) {
        return child;
      }
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */
  const applyNumericalStyle = (elem, property, value) => {
    if (value === `${parseInt(value)}`) {
      value = parseInt(value);
    }
    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? `${value}px` : value;
    } else {
      elem.style.removeProperty(property);
    }
  };

  /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */
  const show = function (elem) {
    let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem && (elem.style.display = display);
  };

  /**
   * @param {HTMLElement | null} elem
   */
  const hide = elem => {
    elem && (elem.style.display = 'none');
  };

  /**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */
  const setStyle = (parent, selector, property, value) => {
    /** @type {HTMLElement} */
    const el = parent.querySelector(selector);
    if (el) {
      el.style[property] = value;
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */
  const toggle = function (elem, condition) {
    let display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'flex';
    condition ? show(elem, display) : hide(elem);
  };

  /**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  const isVisible$1 = elem => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));

  /**
   * @returns {boolean}
   */
  const allButtonsAreHidden = () => !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());

  /**
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  const isScrollable = elem => !!(elem.scrollHeight > elem.clientHeight);

  /**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  const hasCssAnimation = elem => {
    const style = window.getComputedStyle(elem);
    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };

  /**
   * @param {number} timer
   * @param {boolean} reset
   */
  const animateTimerProgressBar = function (timer) {
    let reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const timerProgressBar = getTimerProgressBar();
    if (isVisible$1(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }
      setTimeout(() => {
        timerProgressBar.style.transition = `width ${timer / 1000}s linear`;
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  const stopTimerProgressBar = () => {
    const timerProgressBar = getTimerProgressBar();
    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
    timerProgressBar.style.width = `${timerProgressBarPercent}%`;
  };

  /**
   * Detect Node env
   *
   * @returns {boolean}
   */
  const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';

  const sweetHTML = `
 <div aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses['html-container']}" class="${swalClasses.popup}" tabindex="-1">
   <button type="button" class="${swalClasses.close}"></button>
   <ul class="${swalClasses['progress-steps']}"></ul>
   <div class="${swalClasses.icon}"></div>
   <img class="${swalClasses.image}" />
   <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
   <div class="${swalClasses['html-container']}" id="${swalClasses['html-container']}"></div>
   <input class="${swalClasses.input}" id="${swalClasses.input}" />
   <input type="file" class="${swalClasses.file}" />
   <div class="${swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${swalClasses.select}" id="${swalClasses.select}"></select>
   <div class="${swalClasses.radio}"></div>
   <label class="${swalClasses.checkbox}">
     <input type="checkbox" id="${swalClasses.checkbox}" />
     <span class="${swalClasses.label}"></span>
   </label>
   <textarea class="${swalClasses.textarea}" id="${swalClasses.textarea}"></textarea>
   <div class="${swalClasses['validation-message']}" id="${swalClasses['validation-message']}"></div>
   <div class="${swalClasses.actions}">
     <div class="${swalClasses.loader}"></div>
     <button type="button" class="${swalClasses.confirm}"></button>
     <button type="button" class="${swalClasses.deny}"></button>
     <button type="button" class="${swalClasses.cancel}"></button>
   </div>
   <div class="${swalClasses.footer}"></div>
   <div class="${swalClasses['timer-progress-bar-container']}">
     <div class="${swalClasses['timer-progress-bar']}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, '');

  /**
   * @returns {boolean}
   */
  const resetOldContainer = () => {
    const oldContainer = getContainer();
    if (!oldContainer) {
      return false;
    }
    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };
  const resetValidationMessage$1 = () => {
    globalState.currentInstance.resetValidationMessage();
  };
  const addInputChangeListeners = () => {
    const popup = getPopup();
    const input = getDirectChildByClass(popup, swalClasses.input);
    const file = getDirectChildByClass(popup, swalClasses.file);
    /** @type {HTMLInputElement} */
    const range = popup.querySelector(`.${swalClasses.range} input`);
    /** @type {HTMLOutputElement} */
    const rangeOutput = popup.querySelector(`.${swalClasses.range} output`);
    const select = getDirectChildByClass(popup, swalClasses.select);
    /** @type {HTMLInputElement} */
    const checkbox = popup.querySelector(`.${swalClasses.checkbox} input`);
    const textarea = getDirectChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage$1;
    file.onchange = resetValidationMessage$1;
    select.onchange = resetValidationMessage$1;
    checkbox.onchange = resetValidationMessage$1;
    textarea.oninput = resetValidationMessage$1;
    range.oninput = () => {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
    range.onchange = () => {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
  };

  /**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */
  const getTarget = target => typeof target === 'string' ? document.querySelector(target) : target;

  /**
   * @param {SweetAlertOptions} params
   */
  const setupAccessibility = params => {
    const popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  /**
   * @param {HTMLElement} targetElement
   */
  const setupRTL = targetElement => {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };

  /**
   * Add modal + backdrop + no-war message for Russians to DOM
   *
   * @param {SweetAlertOptions} params
   */
  const init = params => {
    // Clean up the old popup container if it exists
    const oldContainerExisted = resetOldContainer();

    /* istanbul ignore if */
    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }
    const container = document.createElement('div');
    container.className = swalClasses.container;
    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }
    setInnerHtml(container, sweetHTML);
    const targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  /**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */
  const parseHtmlToContainer = (param, target) => {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param);
    }

    // Object
    else if (typeof param === 'object') {
      handleObject(param, target);
    }

    // Plain string
    else if (param) {
      setInnerHtml(target, param);
    }
  };

  /**
   * @param {any} param
   * @param {HTMLElement} target
   */
  const handleObject = (param, target) => {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param);
    }

    // For other objects use their string representation
    else {
      setInnerHtml(target, param.toString());
    }
  };

  /**
   * @param {HTMLElement} target
   * @param {any} elem
   */
  const handleJqueryElem = (target, elem) => {
    target.textContent = '';
    if (0 in elem) {
      for (let i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  /**
   * @returns {'webkitAnimationEnd' | 'animationend' | false}
   */
  const animationEndEvent = (() => {
    // Prevent run in Node env
    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }
    const testEl = document.createElement('div');
    const transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      // Chrome, Safari and Opera
      animation: 'animationend' // Standard syntax
    };

    for (const i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }
    return false;
  })();

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderActions = (instance, params) => {
    const actions = getActions();
    const loader = getLoader();
    if (!actions || !loader) {
      return;
    }

    // Actions (buttons) wrapper
    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    }

    // Custom class
    applyCustomClass(actions, params, 'actions');

    // Render all the buttons
    renderButtons(actions, loader, params);

    // Loader
    setInnerHtml(loader, params.loaderHtml || '');
    applyCustomClass(loader, params, 'loader');
  };

  /**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */
  function renderButtons(actions, loader, params) {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();
    if (!confirmButton || !denyButton || !cancelButton) {
      return;
    }

    // Render buttons
    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
    if (params.reverseButtons) {
      if (params.toast) {
        actions.insertBefore(cancelButton, confirmButton);
        actions.insertBefore(denyButton, confirmButton);
      } else {
        actions.insertBefore(cancelButton, loader);
        actions.insertBefore(denyButton, loader);
        actions.insertBefore(confirmButton, loader);
      }
    }
  }

  /**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */
  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
      return;
    }
    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);

    // Buttons background colors
    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
      addClass(confirmButton, swalClasses['default-outline']);
    }
    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
      addClass(denyButton, swalClasses['default-outline']);
    }
    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
      addClass(cancelButton, swalClasses['default-outline']);
    }
  }

  /**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */
  function renderButton(button, buttonType, params) {
    const buttonName = /** @type {'Confirm' | 'Deny' | 'Cancel'} */capitalizeFirstLetter(buttonType);
    toggle(button, params[`show${buttonName}Button`], 'inline-block');
    setInnerHtml(button, params[`${buttonType}ButtonText`] || ''); // Set caption text
    button.setAttribute('aria-label', params[`${buttonType}ButtonAriaLabel`] || ''); // ARIA label

    // Add buttons custom classes
    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, `${buttonType}Button`);
  }

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderCloseButton = (instance, params) => {
    const closeButton = getCloseButton();
    if (!closeButton) {
      return;
    }
    setInnerHtml(closeButton, params.closeButtonHtml || '');

    // Custom class
    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel || '');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderContainer = (instance, params) => {
    const container = getContainer();
    if (!container) {
      return;
    }
    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow);

    // Custom class
    applyCustomClass(container, params, 'container');
  };

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */
  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */
  function handlePositionParam(container, position) {
    if (!position) {
      return;
    }
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */
  function handleGrowParam(container, grow) {
    if (!grow) {
      return;
    }
    addClass(container, swalClasses[`grow-${grow}`]);
  }

  /// <reference path="../../../../sweetalert2.d.ts"/>


  /** @type {InputClass[]} */
  const inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderInput = (instance, params) => {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(instance);
    const rerender = !innerParams || params.input !== innerParams.input;
    inputClasses.forEach(inputClass => {
      const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);

      // set attributes
      setAttributes(inputClass, params.inputAttributes);

      // set class
      inputContainer.className = swalClasses[inputClass];
      if (rerender) {
        hide(inputContainer);
      }
    });
    if (params.input) {
      if (rerender) {
        showInput(params);
      }
      // set custom class
      setCustomClass(params);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  const showInput = params => {
    if (!renderInputType[params.input]) {
      error(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${params.input}"`);
      return;
    }
    const inputContainer = getInputContainer(params.input);
    const input = renderInputType[params.input](inputContainer, params);
    show(inputContainer);

    // input autofocus
    if (params.inputAutoFocus) {
      setTimeout(() => {
        focusInput(input);
      });
    }
  };

  /**
   * @param {HTMLInputElement} input
   */
  const removeAttributes = input => {
    for (let i = 0; i < input.attributes.length; i++) {
      const attrName = input.attributes[i].name;
      if (!['id', 'type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };

  /**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */
  const setAttributes = (inputClass, inputAttributes) => {
    const input = getInput$1(getPopup(), inputClass);
    if (!input) {
      return;
    }
    removeAttributes(input);
    for (const attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  const setCustomClass = params => {
    const inputContainer = getInputContainer(params.input);
    if (typeof params.customClass === 'object') {
      addClass(inputContainer, params.customClass.input);
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */
  const setInputPlaceholder = (input, params) => {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  /**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */
  const setInputLabel = (input, prependTo, params) => {
    if (params.inputLabel) {
      const label = document.createElement('label');
      const labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      if (typeof params.customClass === 'object') {
        addClass(label, params.customClass.inputLabel);
      }
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  /**
   * @param {SweetAlertOptions['input']} inputType
   * @returns {HTMLElement}
   */
  const getInputContainer = inputType => {
    return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);
  };

  /**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */
  const checkAndSetInputValue = (input, inputValue) => {
    if (['string', 'number'].includes(typeof inputValue)) {
      input.value = `${inputValue}`;
    } else if (!isPromise(inputValue)) {
      warn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof inputValue}"`);
    }
  };

  /** @type {Record<string, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */
  const renderInputType = {};

  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params) => {
    checkAndSetInputValue(input, params.inputValue);
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.file = (input, params) => {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  /**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.range = (range, params) => {
    const rangeInput = range.querySelector('input');
    const rangeOutput = range.querySelector('output');
    checkAndSetInputValue(rangeInput, params.inputValue);
    rangeInput.type = params.input;
    checkAndSetInputValue(rangeOutput, params.inputValue);
    setInputLabel(rangeInput, range, params);
    return range;
  };

  /**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */
  renderInputType.select = (select, params) => {
    select.textContent = '';
    if (params.inputPlaceholder) {
      const placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }
    setInputLabel(select, select, params);
    return select;
  };

  /**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */
  renderInputType.radio = radio => {
    radio.textContent = '';
    return radio;
  };

  /**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.checkbox = (checkboxContainer, params) => {
    const checkbox = getInput$1(getPopup(), 'checkbox');
    checkbox.value = '1';
    checkbox.checked = Boolean(params.inputValue);
    const label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkbox;
  };

  /**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */
  renderInputType.textarea = (textarea, params) => {
    checkAndSetInputValue(textarea, params.inputValue);
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    /**
     * @param {HTMLElement} el
     * @returns {number}
     */
    const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);

    // https://github.com/sweetalert2/sweetalert2/issues/2291
    setTimeout(() => {
      // https://github.com/sweetalert2/sweetalert2/issues/1699
      if ('MutationObserver' in window) {
        const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
        const textareaResizeHandler = () => {
          // check if texarea is still in document (i.e. popup wasn't closed in the meantime)
          if (!document.body.contains(textarea)) {
            return;
          }
          const textareaWidth = textarea.offsetWidth + getMargin(textarea);
          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = `${textareaWidth}px`;
          } else {
            applyNumericalStyle(getPopup(), 'width', params.width);
          }
        };
        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderContent = (instance, params) => {
    const htmlContainer = getHtmlContainer();
    if (!htmlContainer) {
      return;
    }
    applyCustomClass(htmlContainer, params, 'htmlContainer');

    // Content as HTML
    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block');
    }

    // Content as plain text
    else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block');
    }

    // No content
    else {
      hide(htmlContainer);
    }
    renderInput(instance, params);
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderFooter = (instance, params) => {
    const footer = getFooter();
    if (!footer) {
      return;
    }
    toggle(footer, params.footer);
    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    }

    // Custom class
    applyCustomClass(footer, params, 'footer');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderIcon = (instance, params) => {
    const innerParams = privateProps.innerParams.get(instance);
    const icon = getIcon();
    if (!icon) {
      return;
    }

    // if the given icon already rendered, apply the styling without re-rendering the icon
    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }
    if (!params.icon && !params.iconHtml) {
      hide(icon);
      return;
    }
    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);
      hide(icon);
      return;
    }
    show(icon);

    // Custom or default content
    setContent(icon, params);
    applyStyles(icon, params);

    // Animate icon
    addClass(icon, params.showClass && params.showClass.icon);
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const applyStyles = (icon, params) => {
    for (const [iconType, iconClassName] of Object.entries(iconTypes)) {
      if (params.icon !== iconType) {
        removeClass(icon, iconClassName);
      }
    }
    addClass(icon, params.icon && iconTypes[params.icon]);

    // Icon color
    setColor(icon, params);

    // Success icon background color
    adjustSuccessIconBackgroundColor();

    // Custom class
    applyCustomClass(icon, params, 'icon');
  };

  // Adjust success icon background color to match the popup background color
  const adjustSuccessIconBackgroundColor = () => {
    const popup = getPopup();
    if (!popup) {
      return;
    }
    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    /** @type {NodeListOf<HTMLElement>} */
    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
    for (let i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };
  const successIconHtml = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`;
  const errorIconHtml = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`;

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const setContent = (icon, params) => {
    if (!params.icon && !params.iconHtml) {
      return;
    }
    let oldContent = icon.innerHTML;
    let newContent = '';
    if (params.iconHtml) {
      newContent = iconContent(params.iconHtml);
    } else if (params.icon === 'success') {
      newContent = successIconHtml;
      oldContent = oldContent.replace(/ style=".*?"/g, ''); // undo adjustSuccessIconBackgroundColor()
    } else if (params.icon === 'error') {
      newContent = errorIconHtml;
    } else if (params.icon) {
      const defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      newContent = iconContent(defaultIconHtml[params.icon]);
    }
    if (oldContent.trim() !== newContent.trim()) {
      setInnerHtml(icon, newContent);
    }
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  const setColor = (icon, params) => {
    if (!params.iconColor) {
      return;
    }
    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;
    for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }
    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };

  /**
   * @param {string} content
   * @returns {string}
   */
  const iconContent = content => `<div class="${swalClasses['icon-content']}">${content}</div>`;

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderImage = (instance, params) => {
    const image = getImage();
    if (!image) {
      return;
    }
    if (!params.imageUrl) {
      hide(image);
      return;
    }
    show(image, '');

    // Src, alt
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt || '');

    // Width, height
    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight);

    // Class
    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderPopup = (instance, params) => {
    const container = getContainer();
    const popup = getPopup();
    if (!container || !popup) {
      return;
    }

    // Width
    // https://github.com/sweetalert2/sweetalert2/issues/2170
    if (params.toast) {
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      const loader = getLoader();
      loader && popup.insertBefore(loader, getIcon());
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    }

    // Padding
    applyNumericalStyle(popup, 'padding', params.padding);

    // Color
    if (params.color) {
      popup.style.color = params.color;
    }

    // Background
    if (params.background) {
      popup.style.background = params.background;
    }
    hide(getValidationMessage());

    // Classes
    addClasses$1(popup, params);
  };

  /**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  const addClasses$1 = (popup, params) => {
    const showClass = params.showClass || {};
    // Default Class + showClass when updating Swal.update({})
    popup.className = `${swalClasses.popup} ${isVisible$1(popup) ? showClass.popup : ''}`;
    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    }

    // Custom class
    applyCustomClass(popup, params, 'popup');
    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    }

    // Icon class (#1842)
    if (params.icon) {
      addClass(popup, swalClasses[`icon-${params.icon}`]);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderProgressSteps = (instance, params) => {
    const progressStepsContainer = getProgressSteps();
    if (!progressStepsContainer) {
      return;
    }
    const {
      progressSteps,
      currentProgressStep
    } = params;
    if (!progressSteps || progressSteps.length === 0 || currentProgressStep === undefined) {
      hide(progressStepsContainer);
      return;
    }
    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    if (currentProgressStep >= progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    progressSteps.forEach((step, index) => {
      const stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);
      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }
      if (index !== progressSteps.length - 1) {
        const lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  /**
   * @param {string} step
   * @returns {HTMLLIElement}
   */
  const createStepElement = step => {
    const stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  /**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */
  const createLineElement = params => {
    const lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);
    if (params.progressStepsDistance) {
      applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
    }
    return lineEl;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const renderTitle = (instance, params) => {
    const title = getTitle();
    if (!title) {
      return;
    }
    toggle(title, params.title || params.titleText, 'block');
    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }
    if (params.titleText) {
      title.innerText = params.titleText;
    }

    // Custom class
    applyCustomClass(title, params, 'title');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const render = (instance, params) => {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);
    const popup = getPopup();
    if (typeof params.didRender === 'function' && popup) {
      params.didRender(popup);
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */
  const isVisible = () => {
    return isVisible$1(getPopup());
  };

  /*
   * Global function to click 'Confirm' button
   */
  const clickConfirm = () => getConfirmButton() && getConfirmButton().click();

  /*
   * Global function to click 'Deny' button
   */
  const clickDeny = () => getDenyButton() && getDenyButton().click();

  /*
   * Global function to click 'Cancel' button
   */
  const clickCancel = () => getCancelButton() && getCancelButton().click();

  /** @typedef {'cancel' | 'backdrop' | 'close' | 'esc' | 'timer'} DismissReason */

  /** @type {Record<DismissReason, DismissReason>} */
  const DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  /**
   * @param {GlobalState} globalState
   */
  const removeKeydownHandler = globalState => {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */
  const addKeydownHandler = (instance, globalState, innerParams, dismissWith) => {
    removeKeydownHandler(globalState);
    if (!innerParams.toast) {
      globalState.keydownHandler = e => keydownHandler(instance, e, dismissWith);
      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  };

  /**
   * @param {number} index
   * @param {number} increment
   */
  const setFocus = (index, increment) => {
    const focusableElements = getFocusableElements();
    // search for visible elements and select the next possible match
    if (focusableElements.length) {
      index = index + increment;

      // rollover to first item
      if (index === focusableElements.length) {
        index = 0;

        // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }
      focusableElements[index].focus();
      return;
    }
    // no visible focusable elements, focus the popup
    getPopup().focus();
  };
  const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

  /**
   * @param {SweetAlert} instance
   * @param {KeyboardEvent} event
   * @param {Function} dismissWith
   */
  const keydownHandler = (instance, event, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);
    if (!innerParams) {
      return; // This instance has already been destroyed
    }

    // Ignore keydown during IME composition
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
    // https://github.com/sweetalert2/sweetalert2/issues/720
    // https://github.com/sweetalert2/sweetalert2/issues/2406
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    if (innerParams.stopKeydownPropagation) {
      event.stopPropagation();
    }

    // ENTER
    if (event.key === 'Enter') {
      handleEnter(instance, event, innerParams);
    }

    // TAB
    else if (event.key === 'Tab') {
      handleTab(event);
    }

    // ARROWS - switch focus between buttons
    else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(event.key)) {
      handleArrows(event.key);
    }

    // ESC
    else if (event.key === 'Escape') {
      handleEsc(event, innerParams, dismissWith);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   */
  const handleEnter = (instance, event, innerParams) => {
    // https://github.com/sweetalert2/sweetalert2/issues/2386
    if (!callIfFunction(innerParams.allowEnterKey)) {
      return;
    }
    if (event.target && instance.getInput() && event.target instanceof HTMLElement && event.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }

      clickConfirm();
      event.preventDefault();
    }
  };

  /**
   * @param {KeyboardEvent} event
   */
  const handleTab = event => {
    const targetElement = event.target;
    const focusableElements = getFocusableElements();
    let btnIndex = -1;
    for (let i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    // Cycle to the next button
    if (!event.shiftKey) {
      setFocus(btnIndex, 1);
    }

    // Cycle to the prev button
    else {
      setFocus(btnIndex, -1);
    }
    event.stopPropagation();
    event.preventDefault();
  };

  /**
   * @param {string} key
   */
  const handleArrows = key => {
    const confirmButton = getConfirmButton();
    const denyButton = getDenyButton();
    const cancelButton = getCancelButton();
    /** @type HTMLElement[] */
    const buttons = [confirmButton, denyButton, cancelButton];
    if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
      return;
    }
    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    let buttonToFocus = document.activeElement;
    for (let i = 0; i < getActions().children.length; i++) {
      buttonToFocus = buttonToFocus[sibling];
      if (!buttonToFocus) {
        return;
      }
      if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
        break;
      }
    }
    if (buttonToFocus instanceof HTMLButtonElement) {
      buttonToFocus.focus();
    }
  };

  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */
  const handleEsc = (event, innerParams, dismissWith) => {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      event.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateMethods = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  };

  // From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  const setAriaHidden = () => {
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el === getContainer() || el.contains(getContainer())) {
        return;
      }
      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden') || '');
      }
      el.setAttribute('aria-hidden', 'true');
    });
  };
  const unsetAriaHidden = () => {
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(el => {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden') || '');
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /* istanbul ignore file */

  // @ts-ignore
  const isSafariOrIOS = typeof window !== 'undefined' && !!window.GestureEvent; // true for Safari desktop + all iOS browsers https://stackoverflow.com/a/70585394

  // Fix iOS scrolling http://stackoverflow.com/q/39626302

  const iOSfix = () => {
    if (isSafariOrIOS && !hasClass(document.body, swalClasses.iosfix)) {
      const offset = document.body.scrollTop;
      document.body.style.top = `${offset * -1}px`;
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
    }
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */
  const lockBodyScroll = () => {
    const container = getContainer();
    let preventTouchMove;
    /**
     * @param {TouchEvent} event
     */
    container.ontouchstart = event => {
      preventTouchMove = shouldPreventTouchMove(event);
    };
    /**
     * @param {TouchEvent} event
     */
    container.ontouchmove = event => {
      if (preventTouchMove) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
  };

  /**
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  const shouldPreventTouchMove = event => {
    const target = event.target;
    const container = getContainer();
    if (isStylus(event) || isZoom(event)) {
      return false;
    }
    if (target === container) {
      return true;
    }
    if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== 'INPUT' &&
    // #1603
    target.tagName !== 'TEXTAREA' &&
    // #2266
    !(isScrollable(getHtmlContainer()) &&
    // #1944
    getHtmlContainer().contains(target))) {
      return true;
    }
    return false;
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */
  const isStylus = event => {
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  const isZoom = event => {
    return event.touches && event.touches.length > 1;
  };
  const undoIOSfix = () => {
    if (hasClass(document.body, swalClasses.iosfix)) {
      const offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */
  const measureScrollbar = () => {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  /**
   * Remember state in cases where opening and handling a modal will fiddle with it.
   * @type {number | null}
   */
  let previousBodyPadding = null;
  const fixScrollbar = () => {
    // for queues, do not do this more than once
    if (previousBodyPadding !== null) {
      return;
    }
    // if the body has overflow
    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = `${previousBodyPadding + measureScrollbar()}px`;
    }
  };
  const undoScrollbar = () => {
    if (previousBodyPadding !== null) {
      document.body.style.paddingRight = `${previousBodyPadding}px`;
      previousBodyPadding = null;
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */
  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
      removeKeydownHandler(globalState);
    }

    // workaround for https://github.com/sweetalert2/sweetalert2/issues/2088
    // for some reason removing the container in Safari will scroll the document to bottom
    if (isSafariOrIOS) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }
    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      unsetAriaHidden();
    }
    removeBodyClasses();
  }

  /**
   * Remove SweetAlert2 classes from body
   */
  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  /**
   * Instance method to close sweetAlert
   *
   * @param {any} resolveValue
   */
  function close(resolveValue) {
    resolveValue = prepareResolveValue(resolveValue);
    const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    const didClose = triggerClosePopup(this);
    if (this.isAwaitingPromise) {
      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
      if (!resolveValue.isDismissed) {
        handleAwaitingPromise(this);
        swalPromiseResolve(resolveValue);
      }
    } else if (didClose) {
      // Resolve Swal promise
      swalPromiseResolve(resolveValue);
    }
  }
  const triggerClosePopup = instance => {
    const popup = getPopup();
    if (!popup) {
      return false;
    }
    const innerParams = privateProps.innerParams.get(instance);
    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return false;
    }
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    const backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(instance, popup, innerParams);
    return true;
  };

  /**
   * @param {any} error
   */
  function rejectPromise(error) {
    const rejectPromise = privateMethods.swalPromiseReject.get(this);
    handleAwaitingPromise(this);
    if (rejectPromise) {
      // Reject Swal promise
      rejectPromise(error);
    }
  }

  /**
   * @param {SweetAlert} instance
   */
  const handleAwaitingPromise = instance => {
    if (instance.isAwaitingPromise) {
      delete instance.isAwaitingPromise;
      // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335
      if (!privateProps.innerParams.get(instance)) {
        instance._destroy();
      }
    }
  };

  /**
   * @param {any} resolveValue
   * @returns {SweetAlertResult}
   */
  const prepareResolveValue = resolveValue => {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }
    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} innerParams
   */
  const handlePopupAnimation = (instance, popup, innerParams) => {
    const container = getContainer();
    // If animation is supported, animate
    const animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }
    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */
  const animatePopup = (instance, popup, container, returnFocus, didClose) => {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  /**
   * @param {SweetAlert} instance
   * @param {Function} didClose
   */
  const triggerDidCloseAndDispose = (instance, didClose) => {
    setTimeout(() => {
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      }
      // instance might have been destroyed already
      if (instance._destroy) {
        instance._destroy();
      }
    });
  };

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   *
   * @param {HTMLButtonElement} [buttonToReplace]
   */
  const showLoading = buttonToReplace => {
    let popup = getPopup();
    if (!popup) {
      new Swal(); // eslint-disable-line no-new
    }

    popup = getPopup();
    const loader = getLoader();
    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }
    show(loader);
    popup.setAttribute('data-loading', 'true');
    popup.setAttribute('aria-busy', 'true');
    popup.focus();
  };

  /**
   * @param {HTMLElement} popup
   * @param {HTMLButtonElement} [buttonToReplace]
   */
  const replaceButton = (popup, buttonToReplace) => {
    const actions = getActions();
    const loader = getLoader();
    if (!buttonToReplace && isVisible$1(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }
    show(actions);
    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }
    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
  };

  /**
   * @typedef { string | number | boolean } InputValue
   */

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputOptionsAndValue = (instance, params) => {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} innerParams
   * @returns {string | number | File | FileList | null}
   */
  const getInputValue = (instance, innerParams) => {
    const input = instance.getInput();
    if (!input) {
      return null;
    }
    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);
      case 'radio':
        return getRadioValue(input);
      case 'file':
        return getFileValue(input);
      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  /**
   * @param {HTMLInputElement} input
   * @returns {number}
   */
  const getCheckboxValue = input => input.checked ? 1 : 0;

  /**
   * @param {HTMLInputElement} input
   * @returns {string | null}
   */
  const getRadioValue = input => input.checked ? input.value : null;

  /**
   * @param {HTMLInputElement} input
   * @returns {FileList | File | null}
   */
  const getFileValue = input => input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputOptions = (instance, params) => {
    const popup = getPopup();
    /**
     * @param {Record<string, any>} inputOptions
     */
    const processInputOptions = inputOptions => {
      populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);
    };
    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(inputOptions => {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (typeof params.inputOptions === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  const handleInputValue = (instance, params) => {
    const input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(inputValue => {
      input.value = params.input === 'number' ? `${parseFloat(inputValue) || 0}` : `${inputValue}`;
      show(input);
      input.focus();
      instance.hideLoading();
    }).catch(err => {
      error(`Error in inputValue promise: ${err}`);
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };
  const populateInputOptions = {
    /**
     * @param {HTMLElement} popup
     * @param {Record<string, any>} inputOptions
     * @param {SweetAlertOptions} params
     */
    select: (popup, inputOptions, params) => {
      const select = getDirectChildByClass(popup, swalClasses.select);
      /**
       * @param {HTMLElement} parent
       * @param {string} optionLabel
       * @param {string} optionValue
       */
      const renderOption = (parent, optionLabel, optionValue) => {
        const option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };
      inputOptions.forEach(inputOption => {
        const optionValue = inputOption[0];
        const optionLabel = inputOption[1];
        // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>
        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          const optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now
          select.appendChild(optgroup);
          optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    /**
     * @param {HTMLElement} popup
     * @param {Record<string, any>} inputOptions
     * @param {SweetAlertOptions} params
     */
    radio: (popup, inputOptions, params) => {
      const radio = getDirectChildByClass(popup, swalClasses.radio);
      inputOptions.forEach(inputOption => {
        const radioValue = inputOption[0];
        const radioLabel = inputOption[1];
        const radioInput = document.createElement('input');
        const radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;
        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }
        const label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      const radios = radio.querySelectorAll('input');
      if (radios.length) {
        radios[0].focus();
      }
    }
  };

  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   *
   * @param {Record<string, any>} inputOptions
   * @returns {Array<Array<string>>}
   */
  const formatInputOptions = inputOptions => {
    const result = [];
    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach((value, key) => {
        let valueFormatted = value;
        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(key => {
        let valueFormatted = inputOptions[key];
        if (typeof valueFormatted === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    }
    return result;
  };

  /**
   * @param {string} optionValue
   * @param {InputValue | Promise<InputValue> | { toPromise: () => InputValue }} inputValue
   * @returns {boolean}
   */
  const isSelected = (optionValue, inputValue) => {
    return inputValue && inputValue.toString() === optionValue.toString();
  };

  /**
   * @param {SweetAlert} instance
   */
  const handleConfirmButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };

  /**
   * @param {SweetAlert} instance
   */
  const handleDenyButtonClick = instance => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {Function} dismissWith
   */
  const handleCancelButtonClick = (instance, dismissWith) => {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  /**
   * @param {SweetAlert} instance
   * @param {'confirm' | 'deny'} type
   */
  const handleConfirmOrDenyWithInput = (instance, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    if (!innerParams.input) {
      error(`The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter(type)}`);
      return;
    }
    const inputValue = getInputValue(instance, innerParams);
    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {string | number | File | FileList | null} inputValue
   * @param {'confirm' | 'deny'} type
   */
  const handleInputValidator = (instance, inputValue, type) => {
    const innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
    validationPromise.then(validationMessage => {
      instance.enableButtons();
      instance.enableInput();
      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };

  /**
   * @param {SweetAlert} instance
   * @param {any} value
   */
  const deny = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);
    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }
    if (innerParams.preDeny) {
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received
      const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
      preDenyPromise.then(preDenyValue => {
        if (preDenyValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          instance.close({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      }).catch(error => rejectWith(instance || undefined, error));
    } else {
      instance.close({
        isDenied: true,
        value
      });
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {any} value
   */
  const succeedWith = (instance, value) => {
    instance.close({
      isConfirmed: true,
      value
    });
  };

  /**
   *
   * @param {SweetAlert} instance
   * @param {string} error
   */
  const rejectWith = (instance, error) => {
    instance.rejectPromise(error);
  };

  /**
   *
   * @param {SweetAlert} instance
   * @param {any} value
   */
  const confirm = (instance, value) => {
    const innerParams = privateProps.innerParams.get(instance || undefined);
    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }
    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received
      const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
      preConfirmPromise.then(preConfirmValue => {
        if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      }).catch(error => rejectWith(instance || undefined, error));
    } else {
      succeedWith(instance, value);
    }
  };

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */
  function hideLoading() {
    // do nothing if popup is closed
    const innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      return;
    }
    const domCache = privateProps.domCache.get(this);
    hide(domCache.loader);
    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }
    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }
  const showRelatedButton = domCache => {
    const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));
    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };

  /**
   * Gets the input DOM node, this method works with input parameter.
   *
   * @returns {HTMLInputElement | null}
   */
  function getInput() {
    const innerParams = privateProps.innerParams.get(this);
    const domCache = privateProps.domCache.get(this);
    if (!domCache) {
      return null;
    }
    return getInput$1(domCache.popup, innerParams.input);
  }

  /**
   * @param {SweetAlert} instance
   * @param {string[]} buttons
   * @param {boolean} disabled
   */
  function setButtonsDisabled(instance, buttons, disabled) {
    const domCache = privateProps.domCache.get(instance);
    buttons.forEach(button => {
      domCache[button].disabled = disabled;
    });
  }

  /**
   * @param {HTMLInputElement} input
   * @param {boolean} disabled
   */
  function setInputDisabled(input, disabled) {
    if (!input) {
      return;
    }
    if (input.type === 'radio') {
      const radiosContainer = input.parentNode.parentNode;
      const radios = radiosContainer.querySelectorAll('input');
      for (let i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  /**
   * Enable all the buttons
   */
  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }

  /**
   * Disable all the buttons
   */
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }

  /**
   * Enable the input field
   */
  function enableInput() {
    setInputDisabled(this.getInput(), false);
  }

  /**
   * Disable the input field
   */
  function disableInput() {
    setInputDisabled(this.getInput(), true);
  }

  /**
   * Show block with validation message
   *
   * @param {string} error
   */
  function showValidationMessage(error) {
    const domCache = privateProps.domCache.get(this);
    const params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];
    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }
    show(domCache.validationMessage);
    const input = this.getInput();
    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  }

  /**
   * Hide block with validation message
   */
  function resetValidationMessage() {
    const domCache = privateProps.domCache.get(this);
    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }
    const input = this.getInput();
    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  const defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    color: undefined,
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoFocus: true,
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];

  /** @type {Record<string, string>} */
  const deprecatedParams = {};
  const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];

  /**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  const isValidParameter = paramName => {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };

  /**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  const isUpdatableParameter = paramName => {
    return updatableParams.indexOf(paramName) !== -1;
  };

  /**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */
  const isDeprecatedParameter = paramName => {
    return deprecatedParams[paramName];
  };

  /**
   * @param {string} param
   */
  const checkIfParamIsValid = param => {
    if (!isValidParameter(param)) {
      warn(`Unknown parameter "${param}"`);
    }
  };

  /**
   * @param {string} param
   */
  const checkIfToastParamIsValid = param => {
    if (toastIncompatibleParams.includes(param)) {
      warn(`The parameter "${param}" is incompatible with toasts`);
    }
  };

  /**
   * @param {string} param
   */
  const checkIfParamIsDeprecated = param => {
    const isDeprecated = isDeprecatedParameter(param);
    if (isDeprecated) {
      warnAboutDeprecation(param, isDeprecated);
    }
  };

  /**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */
  const showWarningsForParams = params => {
    if (params.backdrop === false && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }
    for (const param in params) {
      checkIfParamIsValid(param);
      if (params.toast) {
        checkIfToastParamIsValid(param);
      }
      checkIfParamIsDeprecated(param);
    }
  };

  /**
   * Updates popup parameters.
   *
   * @param {SweetAlertOptions} params
   */
  function update(params) {
    const popup = getPopup();
    const innerParams = privateProps.innerParams.get(this);
    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      warn(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);
      return;
    }
    const validUpdatableParams = filterValidParams(params);
    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  const filterValidParams = params => {
    const validUpdatableParams = {};
    Object.keys(params).forEach(param => {
      if (isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn(`Invalid parameter to update: ${param}`);
      }
    });
    return validUpdatableParams;
  };

  /**
   * Dispose the current SweetAlert2 instance
   */
  function _destroy() {
    const domCache = privateProps.domCache.get(this);
    const innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335
      return; // This instance has already been destroyed
    }

    // Check if there is another Swal closing
    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }
    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }
    disposeSwal(this);
  }

  /**
   * @param {SweetAlert} instance
   */
  const disposeSwal = instance => {
    disposeWeakMaps(instance);
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params;
    // Unset globalState props so GC will dispose globalState (#1569)
    delete globalState.keydownHandler;
    delete globalState.keydownTarget;
    // Unset currentInstance
    delete globalState.currentInstance;
  };

  /**
   * @param {SweetAlert} instance
   */
  const disposeWeakMaps = instance => {
    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
    if (instance.isAwaitingPromise) {
      unsetWeakMaps(privateProps, instance);
      instance.isAwaitingPromise = true;
    } else {
      unsetWeakMaps(privateMethods, instance);
      unsetWeakMaps(privateProps, instance);
      delete instance.isAwaitingPromise;
      // Unset instance methods
      delete instance.disableButtons;
      delete instance.enableButtons;
      delete instance.getInput;
      delete instance.disableInput;
      delete instance.enableInput;
      delete instance.hideLoading;
      delete instance.disableLoading;
      delete instance.showValidationMessage;
      delete instance.resetValidationMessage;
      delete instance.close;
      delete instance.closePopup;
      delete instance.closeModal;
      delete instance.closeToast;
      delete instance.rejectPromise;
      delete instance.update;
      delete instance._destroy;
    }
  };

  /**
   * @param {object} obj
   * @param {SweetAlert} instance
   */
  const unsetWeakMaps = (obj, instance) => {
    for (const i in obj) {
      obj[i].delete(instance);
    }
  };

  var instanceMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _destroy: _destroy,
    close: close,
    closeModal: close,
    closePopup: close,
    closeToast: close,
    disableButtons: disableButtons,
    disableInput: disableInput,
    disableLoading: hideLoading,
    enableButtons: enableButtons,
    enableInput: enableInput,
    getInput: getInput,
    handleAwaitingPromise: handleAwaitingPromise,
    hideLoading: hideLoading,
    rejectPromise: rejectPromise,
    resetValidationMessage: resetValidationMessage,
    showValidationMessage: showValidationMessage,
    update: update
  });

  const handlePopupClick = (instance, domCache, dismissWith) => {
    const innerParams = privateProps.innerParams.get(instance);
    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache);

      // Ignore click events that had mousedown on the container but mouseup on the popup
      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };
  const handleToastClick = (instance, domCache, dismissWith) => {
    // Closing toast by internal click
    domCache.popup.onclick = () => {
      const innerParams = privateProps.innerParams.get(instance);
      if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
        return;
      }
      dismissWith(DismissReason.close);
    };
  };

  /**
   * @param {*} innerParams
   * @returns {boolean}
   */
  const isAnyButtonShown = innerParams => {
    return innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton;
  };
  let ignoreOutsideClick = false;
  const handleModalMousedown = domCache => {
    domCache.popup.onmousedown = () => {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined;
        // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup
        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };
  const handleContainerMousedown = domCache => {
    domCache.container.onmousedown = () => {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined;
        // We also need to check if the mouseup target is a child of the popup
        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };
  const handleModalClick = (instance, domCache, dismissWith) => {
    domCache.container.onclick = e => {
      const innerParams = privateProps.innerParams.get(instance);
      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }
      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  const isJqueryElement = elem => typeof elem === 'object' && elem.jquery;
  const isElement = elem => elem instanceof Element || isJqueryElement(elem);
  const argsToParams = args => {
    const params = {};
    if (typeof args[0] === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach((name, index) => {
        const arg = args[index];
        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);
        }
      });
    }
    return params;
  };

  /**
   * Main method to create a new SweetAlert2 popup
   *
   * @param  {...SweetAlertOptions} args
   * @returns {Promise<SweetAlertResult>}
   */
  function fire() {
    const Swal = this; // eslint-disable-line @typescript-eslint/no-this-alias
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return new Swal(...args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlert}
   */
  function mixin(mixinParams) {
    class MixinSwal extends this {
      _main(params, priorityMixinParams) {
        return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
      }
    }
    // @ts-ignore
    return MixinSwal;
  }

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   *
   * @returns {number | undefined}
   */
  const getTimerLeft = () => {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };

  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const stopTimer = () => {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const resumeTimer = () => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  const toggleTimer = () => {
    const timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };

  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @param {number} n
   * @returns {number | undefined}
   */
  const increaseTimer = n => {
    if (globalState.timeout) {
      const remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };

  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   *
   * @returns {boolean}
   */
  const isTimerRunning = () => {
    return !!(globalState.timeout && globalState.timeout.isRunning());
  };

  let bodyClickListenerAdded = false;
  const clickHandlers = {};

  /**
   * @param {string} attr
   */
  function bindClickHandler() {
    let attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;
    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }
  const bodyClickListener = event => {
    for (let el = event.target; el && el !== document; el = el.parentNode) {
      for (const attr in clickHandlers) {
        const template = el.getAttribute(attr);
        if (template) {
          clickHandlers[attr].fire({
            template
          });
          return;
        }
      }
    }
  };

  var staticMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    argsToParams: argsToParams,
    bindClickHandler: bindClickHandler,
    clickCancel: clickCancel,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    enableLoading: showLoading,
    fire: fire,
    getActions: getActions,
    getCancelButton: getCancelButton,
    getCloseButton: getCloseButton,
    getConfirmButton: getConfirmButton,
    getContainer: getContainer,
    getDenyButton: getDenyButton,
    getFocusableElements: getFocusableElements,
    getFooter: getFooter,
    getHtmlContainer: getHtmlContainer,
    getIcon: getIcon,
    getIconContent: getIconContent,
    getImage: getImage,
    getInputLabel: getInputLabel,
    getLoader: getLoader,
    getPopup: getPopup,
    getProgressSteps: getProgressSteps,
    getTimerLeft: getTimerLeft,
    getTimerProgressBar: getTimerProgressBar,
    getTitle: getTitle,
    getValidationMessage: getValidationMessage,
    increaseTimer: increaseTimer,
    isDeprecatedParameter: isDeprecatedParameter,
    isLoading: isLoading,
    isTimerRunning: isTimerRunning,
    isUpdatableParameter: isUpdatableParameter,
    isValidParameter: isValidParameter,
    isVisible: isVisible,
    mixin: mixin,
    resumeTimer: resumeTimer,
    showLoading: showLoading,
    stopTimer: stopTimer,
    toggleTimer: toggleTimer
  });

  class Timer {
    /**
     * @param {Function} callback
     * @param {number} delay
     */
    constructor(callback, delay) {
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    /**
     * @returns {number}
     */
    start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }
      return this.remaining;
    }

    /**
     * @returns {number}
     */
    stop() {
      if (this.started && this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date().getTime() - this.started.getTime();
      }
      return this.remaining;
    }

    /**
     * @param {number} n
     * @returns {number}
     */
    increase(n) {
      const running = this.running;
      if (running) {
        this.stop();
      }
      this.remaining += n;
      if (running) {
        this.start();
      }
      return this.remaining;
    }

    /**
     * @returns {number}
     */
    getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }
      return this.remaining;
    }

    /**
     * @returns {boolean}
     */
    isRunning() {
      return this.running;
    }
  }

  const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  const getTemplateParams = params => {
    /** @type {HTMLTemplateElement} */
    const template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;
    if (!template) {
      return {};
    }
    /** @type {DocumentFragment} */
    const templateContent = template.content;
    showWarningsForElements(templateContent);
    const result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  const getSwalParams = templateContent => {
    const result = {};
    /** @type {HTMLElement[]} */
    const swalParams = Array.from(templateContent.querySelectorAll('swal-param'));
    swalParams.forEach(param => {
      showWarningsForAttributes(param, ['name', 'value']);
      const paramName = param.getAttribute('name');
      const value = param.getAttribute('value');
      if (typeof defaultParams[paramName] === 'boolean') {
        result[paramName] = value !== 'false';
      } else if (typeof defaultParams[paramName] === 'object') {
        result[paramName] = JSON.parse(value);
      } else {
        result[paramName] = value;
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  const getSwalFunctionParams = templateContent => {
    const result = {};
    /** @type {HTMLElement[]} */
    const swalFunctions = Array.from(templateContent.querySelectorAll('swal-function-param'));
    swalFunctions.forEach(param => {
      const paramName = param.getAttribute('name');
      const value = param.getAttribute('value');
      result[paramName] = new Function(`return ${value}`)();
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  const getSwalButtons = templateContent => {
    const result = {};
    /** @type {HTMLElement[]} */
    const swalButtons = Array.from(templateContent.querySelectorAll('swal-button'));
    swalButtons.forEach(button => {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      const type = button.getAttribute('type');
      result[`${type}ButtonText`] = button.innerHTML;
      result[`show${capitalizeFirstLetter(type)}Button`] = true;
      if (button.hasAttribute('color')) {
        result[`${type}ButtonColor`] = button.getAttribute('color');
      }
      if (button.hasAttribute('aria-label')) {
        result[`${type}ButtonAriaLabel`] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  const getSwalImage = templateContent => {
    const result = {};
    /** @type {HTMLElement} */
    const image = templateContent.querySelector('swal-image');
    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);
      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }
      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }
      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }
      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  const getSwalIcon = templateContent => {
    const result = {};
    /** @type {HTMLElement} */
    const icon = templateContent.querySelector('swal-icon');
    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);
      if (icon.hasAttribute('type')) {
        /** @type {SweetAlertIcon} */
        // @ts-ignore
        result.icon = icon.getAttribute('type');
      }
      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }
      result.iconHtml = icon.innerHTML;
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  const getSwalInput = templateContent => {
    const result = {};
    /** @type {HTMLElement} */
    const input = templateContent.querySelector('swal-input');
    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      /** @type {SweetAlertInput} */
      // @ts-ignore
      result.input = input.getAttribute('type') || 'text';
      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }
      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }
      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }
    /** @type {HTMLElement[]} */
    const inputOptions = Array.from(templateContent.querySelectorAll('swal-input-option'));
    if (inputOptions.length) {
      result.inputOptions = {};
      inputOptions.forEach(option => {
        showWarningsForAttributes(option, ['value']);
        const optionValue = option.getAttribute('value');
        const optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   * @returns {SweetAlertOptions}
   */
  const getSwalStringParams = (templateContent, paramNames) => {
    const result = {};
    for (const i in paramNames) {
      const paramName = paramNames[i];
      /** @type {HTMLElement} */
      const tag = templateContent.querySelector(paramName);
      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   */
  const showWarningsForElements = templateContent => {
    const allowedElements = swalStringParams.concat(['swal-param', 'swal-function-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    Array.from(templateContent.children).forEach(el => {
      const tagName = el.tagName.toLowerCase();
      if (!allowedElements.includes(tagName)) {
        warn(`Unrecognized element <${tagName}>`);
      }
    });
  };

  /**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */
  const showWarningsForAttributes = (el, allowedAttributes) => {
    Array.from(el.attributes).forEach(attribute => {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn([`Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`, `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(', ')}` : 'To set the value, use HTML within the element.'}`]);
      }
    });
  };

  const SHOW_CLASS_TIMEOUT = 10;

  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */
  const openPopup = params => {
    const container = getContainer();
    const popup = getPopup();
    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }
    const bodyStyles = window.getComputedStyle(document.body);
    const initialBodyOverflow = bodyStyles.overflowY;
    addClasses(container, popup, params);

    // scrolling is 'hidden' until animation is done, after that 'auto'
    setTimeout(() => {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);
    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }
    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }
    if (typeof params.didOpen === 'function') {
      setTimeout(() => params.didOpen(popup));
    }
    removeClass(container, swalClasses['no-transition']);
  };

  /**
   * @param {AnimationEvent} event
   */
  const swalOpenAnimationFinished = event => {
    const popup = getPopup();
    if (event.target !== popup) {
      return;
    }
    const container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */
  const setScrollingVisibility = (container, popup) => {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  /**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */
  const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
    iOSfix();
    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    }

    // sweetalert2/issues/1247
    setTimeout(() => {
      container.scrollTop = 0;
    });
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  const addClasses = (container, popup, params) => {
    addClass(container, params.showClass.backdrop);
    // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059
    popup.style.setProperty('opacity', '0', 'important');
    show(popup, 'grid');
    setTimeout(() => {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup);
      // and remove the opacity workaround
      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);
    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var defaultInputValidators = {
    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    email: (string, validationMessage) => {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    url: (string, validationMessage) => {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (params.inputValidator) {
      return;
    }
    if (params.input === 'email') {
      params.inputValidator = defaultInputValidators['email'];
    }
    if (params.input === 'url') {
      params.inputValidator = defaultInputValidators['url'];
    }
  }

  /**
   * @param {SweetAlertOptions} params
   */
  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }

  /**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */
  function setParameters(params) {
    setDefaultInputValidators(params);

    // showLoaderOnConfirm && preConfirm
    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }
    validateCustomTargetElement(params);

    // Replace newlines with <br> in title
    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }
    init(params);
  }

  /** @type {SweetAlert} */
  let currentInstance;
  class SweetAlert {
    /**
     * @param {...any} args
     * @this {SweetAlert}
     */
    constructor() {
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }
      currentInstance = this;

      // @ts-ignore
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const outerParams = Object.freeze(this.constructor.argsToParams(args));

      /** @type {Readonly<SweetAlertOptions>} */
      this.params = outerParams;

      /** @type {boolean} */
      this.isAwaitingPromise = false;
      const promise = currentInstance._main(currentInstance.params);
      privateProps.promise.set(this, promise);
    }
    _main(userParams) {
      let mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      showWarningsForParams(Object.assign({}, mixinParams, userParams));
      if (globalState.currentInstance) {
        globalState.currentInstance._destroy();
        if (isModal()) {
          unsetAriaHidden();
        }
      }
      globalState.currentInstance = currentInstance;
      const innerParams = prepareParams(userParams, mixinParams);
      setParameters(innerParams);
      Object.freeze(innerParams);

      // clear the previous timer
      if (globalState.timeout) {
        globalState.timeout.stop();
        delete globalState.timeout;
      }

      // clear the restore focus timeout
      clearTimeout(globalState.restoreFocusTimeout);
      const domCache = populateDomCache(currentInstance);
      render(currentInstance, innerParams);
      privateProps.innerParams.set(currentInstance, innerParams);
      return swalPromise(currentInstance, domCache, innerParams);
    }

    // `catch` cannot be the name of a module export, so we define our thenable methods here instead
    then(onFulfilled) {
      const promise = privateProps.promise.get(this);
      return promise.then(onFulfilled);
    }
    finally(onFinally) {
      const promise = privateProps.promise.get(this);
      return promise.finally(onFinally);
    }
  }

  /**
   * @param {SweetAlert} instance
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {Promise}
   */
  const swalPromise = (instance, domCache, innerParams) => {
    return new Promise((resolve, reject) => {
      // functions to handle all closings/dismissals
      /**
       * @param {DismissReason} dismiss
       */
      const dismissWith = dismiss => {
        instance.close({
          isDismissed: true,
          dismiss
        });
      };
      privateMethods.swalPromiseResolve.set(instance, resolve);
      privateMethods.swalPromiseReject.set(instance, reject);
      domCache.confirmButton.onclick = () => {
        handleConfirmButtonClick(instance);
      };
      domCache.denyButton.onclick = () => {
        handleDenyButtonClick(instance);
      };
      domCache.cancelButton.onclick = () => {
        handleCancelButtonClick(instance, dismissWith);
      };
      domCache.closeButton.onclick = () => {
        dismissWith(DismissReason.close);
      };
      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams);

      // Scroll container to top on open (#1247, #1946)
      setTimeout(() => {
        domCache.container.scrollTop = 0;
      });
    });
  };

  /**
   * @param {SweetAlertOptions} userParams
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlertOptions}
   */
  const prepareParams = (userParams, mixinParams) => {
    const templateParams = getTemplateParams(userParams);
    const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131
    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    return params;
  };

  /**
   * @param {SweetAlert} instance
   * @returns {DomCache}
   */
  const populateDomCache = instance => {
    const domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */
  const setupTimer = (globalState, innerParams, dismissWith) => {
    const timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);
    if (innerParams.timer) {
      globalState.timeout = new Timer(() => {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
        setTimeout(() => {
          if (globalState.timeout && globalState.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */
  const initFocus = (domCache, innerParams) => {
    if (innerParams.toast) {
      return;
    }
    if (!callIfFunction(innerParams.allowEnterKey)) {
      blurActiveElement();
      return;
    }
    if (!focusButton(domCache, innerParams)) {
      setFocus(-1, 1);
    }
  };

  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */
  const focusButton = (domCache, innerParams) => {
    if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }
    if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }
    if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }
    return false;
  };
  const blurActiveElement = () => {
    if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  // Dear russian users visiting russian sites. Let's have fun.
  if (typeof window !== 'undefined' && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
    const now = new Date();
    const initiationDate = localStorage.getItem('swal-initiation');
    if (!initiationDate) {
      localStorage.setItem('swal-initiation', `${now}`);
    } else if ((now.getTime() - Date.parse(initiationDate)) / (1000 * 60 * 60 * 24) > 3) {
      setTimeout(() => {
        document.body.style.pointerEvents = 'none';
        const ukrainianAnthem = document.createElement('audio');
        ukrainianAnthem.src = 'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3';
        ukrainianAnthem.loop = true;
        document.body.appendChild(ukrainianAnthem);
        setTimeout(() => {
          ukrainianAnthem.play().catch(() => {
            // ignore
          });
        }, 2500);
      }, 500);
    }
  }

  // Assign instance methods from src/instanceMethods/*.js to prototype
  SweetAlert.prototype.disableButtons = disableButtons;
  SweetAlert.prototype.enableButtons = enableButtons;
  SweetAlert.prototype.getInput = getInput;
  SweetAlert.prototype.disableInput = disableInput;
  SweetAlert.prototype.enableInput = enableInput;
  SweetAlert.prototype.hideLoading = hideLoading;
  SweetAlert.prototype.disableLoading = hideLoading;
  SweetAlert.prototype.showValidationMessage = showValidationMessage;
  SweetAlert.prototype.resetValidationMessage = resetValidationMessage;
  SweetAlert.prototype.close = close;
  SweetAlert.prototype.closePopup = close;
  SweetAlert.prototype.closeModal = close;
  SweetAlert.prototype.closeToast = close;
  SweetAlert.prototype.rejectPromise = rejectPromise;
  SweetAlert.prototype.update = update;
  SweetAlert.prototype._destroy = _destroy;

  // Assign static methods from src/staticMethods/*.js to constructor
  Object.assign(SweetAlert, staticMethods);

  // Proxy to instance methods to constructor, for now, for backwards compatibility
  Object.keys(instanceMethods).forEach(key => {
    /**
     * @param {...any} args
     * @returns {any | undefined}
     */
    SweetAlert[key] = function () {
      if (currentInstance && currentInstance[key]) {
        return currentInstance[key](...arguments);
      }
      return null;
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.7.20';

  const Swal = SweetAlert;
  // @ts-ignore
  Swal.default = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}");
},{}],3:[function(require,module,exports){
const turf = require("@turf/turf");
const Swal = require("sweetalert2");
var map = L.map("map", { zoomControl: false }).setView(
  [46.603354, 1.888334],
  6
);

map.doubleClickZoom.disable();
var tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var ids = 0;
var ctrlKeyPressed = false;
var shiftKeyPressed = false;
var clicked_path;

document.addEventListener("keydown", function (event) {
  if (event.key === "Control" || event.key === "Meta") {
    ctrlKeyPressed = true;
  } else if (event.key === "Shift") {
    shiftKeyPressed = true;
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "Control" || event.key === "Meta") {
    ctrlKeyPressed = false;
  } else if (event.key === "Shift") {
    shiftKeyPressed = true;
  }
});

let fileInput = document.getElementById("file_input");
fileInput.addEventListener("click", () => {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = [".json", ".geojson"]; // Specify the accepted file type(s) here

  fileInput.addEventListener("change", (event) => {
    const selectedFile = event.target.files[0];

    try {
      const reader = new FileReader();

      reader.onload = (e) => {
        const contents = e.target.result;
        console.log(e);
        processData(JSON.parse(contents));
        Swal.fire(
          "Layer loaded !",
          "Click on <kbd class = kdb_elem >Ctrl</kbd> + <kbd class = kdb_elem >Left-Click</kbd> to duplicated a shape. <br/><br/> Use <kbd class = kdb_elem >Left-Click</kbd> to move it",
          "success"
        );
        let layer_name = document.createElement("li");
        layer_name.textContent += "- " + event.target.files[0].name;
        layer_name.className = "layer_name";

        let menu_list = document.getElementById("menu_ul");

        menu_list.insertBefore(layer_name, menu_list.children[1]);
      };

      reader.readAsText(selectedFile);
    } catch {
      Swal.fire(
        "Invalid data !",
        "Please load data in a correct JSON or GeoJSON format",
        "error"
      );
    }
  });
  fileInput.click();
});

function delete_path(path) {
  map.on("contextmenu", function (event) {
    if (event.which === 3) {
      console.log("right");
      /* Right mouse button was clicked! */
    }
  });
}

function processData(data) {
  var i = 0;

  let geojsonLayer = L.geoJSON(data, {
    draggable: false,
    test: "test",
    style: {
      weight: 0.2,
      fillOpacity: 0.9,
      color: "black",
      fillColor: "white",
    },
  }).addTo(map);

  delete_path(geojsonLayer);

  geojsonLayer.eachLayer(function (path) {
    path.feature.id = i++;
    path._path.classList.add("original_path");
    console.log("geojson layer", path);
  });

  function bind_drag(feature, collection = false) {
    feature.eachLayer(function (path) {
      path.on("dragend", function (event) {
        this.setStyle({ fillColor: "white" });
        let flag = false;
        var bounds = path._bounds;

        for (let classname of path._path.classList) {
          if (classname.includes("dragged_path")) {
            flag = true;
          }
        }
        if (flag == false) {
          path._path.classList.add(`dragged_path_${path.feature.id}`);
        }
        try {
          let bouding_rectangle = document.querySelectorAll(
            `[class*="dragged_rectangle_${path.feature.id}"]`
          );
          bouding_rectangle[0].remove();
        } catch {}
        let bounds_coords = [
          [bounds._northEast.lat, bounds._northEast.lng],
          [bounds._southWest.lat, bounds._southWest.lng],
        ];
        let bouding_rectangle = L.rectangle(bounds, {
          color: "black",
          weight: 1,
          fill: false,
        }).addTo(map);
        bouding_rectangle._path.classList.add(
          `dragged_rectangle_${path.feature.id}`
        );
      });
    });
  }

  function redraw(path, scale) {
    try {
      var path_id = path._layers[Object.keys(path._layers)].feature.id;
    } catch {}
    try {
      var path_id = path.feature.id;
    } catch {}
    document
      .querySelectorAll(`[class*="dragged_rectangle_${path_id}"]`)[0]
      .remove();
    path.remove();

    if (scale == "in") {
      var rescaled_path = L.geoJSON(
        turf.transformScale(path.toGeoJSON(), 1.1),
        {
          draggable: true,
          style: {
            weight: 0.2,
            fillOpacity: 0.9,
            color: "black",
            fillColor: "white",
          },
        }
      ).addTo(map);
    } else {
      var rescaled_path = L.geoJSON(
        turf.transformScale(path.toGeoJSON(), 0.9),
        {
          draggable: true,
          style: {
            weight: 0.2,
            fillOpacity: 0.9,
            color: "black",
            fillColor: "white",
          },
        }
      ).addTo(map);
    }
    rescaled_path._layers[
      Object.keys(rescaled_path._layers)
    ]._path.classList.add(
      "dragged_path_" +
        rescaled_path._layers[Object.keys(rescaled_path._layers)].feature.id
    );
    let bounds =
      rescaled_path._layers[Object.keys(rescaled_path._layers)]._bounds;

    let bounding_rectangle = L.rectangle(bounds, {
      color: "black",
      weight: 1,
      fill: false,
    }).addTo(map);
    bounding_rectangle._path.classList.add("dragged_rectangle_" + path_id);
    bind_drag(rescaled_path, false);
    rescaled_path._layers[
      Object.keys(rescaled_path._layers)
    ]._path.classList.add("clicked");
    clicked_path = rescaled_path;
    console.log("rescaled path", rescaled_path.getLayers());

    rescaled_path.addEventListener("click", function () {
      clicked_path = rescaled_path;
      if (
        Array.from(
          rescaled_path._layers[Object.keys(rescaled_path._layers)]._path
            .classList
        ).includes("clicked")
      ) {
        rescaled_path._layers[
          Object.keys(rescaled_path._layers)
        ]._path.classList.remove("clicked");
      } else {
        map.eachLayer(function (path) {
          if (path instanceof L.Path) {
            if (Array.from(path._path.classList).includes("clicked")) {
              path._path.classList.remove("clicked");
            }
          }
        });
        rescaled_path._layers[
          Object.keys(rescaled_path._layers)
        ]._path.classList.add("clicked");
      }
    });
  }

  geojsonLayer.eachLayer(function (path) {
    path.on("click", function (event) {
      if (ctrlKeyPressed) {
        var new_path = L.geoJSON(this.toGeoJSON(), {
          draggable: true,
          style: {
            weight: 0.2,
            fillOpacity: 0.9,
            color: "black",
            fillColor: "orange",
          },
        }).addTo(map);
        bind_drag(new_path, false);
        clicked_path = new_path;
        console.log("duplicateed path", new_path);

        new_path.addEventListener("click", function () {
          clicked_path = new_path;
          if (
            Array.from(
              new_path._layers[Object.keys(new_path._layers)]._path.classList
            ).includes("clicked")
          ) {
            new_path._layers[
              Object.keys(new_path._layers)
            ]._path.classList.remove("clicked");
          } else {
            map.eachLayer(function (path) {
              if (path instanceof L.Path) {
                if (Array.from(path._path.classList).includes("clicked")) {
                  path._path.classList.remove("clicked");
                }
              }
            });
            new_path._layers[Object.keys(new_path._layers)]._path.classList.add(
              "clicked"
            );
          }
        });
      }
    });
  });
  document.getElementById("bigger").addEventListener("click", function () {
    redraw(clicked_path, "in");
  });
  document.getElementById("smaller").addEventListener("click", function () {
    console.log(map.getBounds());
    redraw(clicked_path, "out");
  });
}

fileInput.addEventListener("change", (event) => {
  const selectedFile = event.target.files[0];

  if (selectedFile) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;
      fileContents.textContent = contents;
    };

    reader.readAsText(selectedFile);
  } else {
    fileContents.textContent = "No file selected.";
  }
});

let download_btn = document.getElementById("download_btn");

download_btn.addEventListener("click", function () {
  let output_feat = {
    type: "FeatureCollection",
    features: [], // Initialize an empty array for features
  };
  map.eachLayer(function (layer) {
    if (layer instanceof L.Path) {
      output_feat.features.push(layer.feature);
    }
  });
  download_data(output_feat);
});

function download_data(data) {
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "inset_map";
  a.click();
  URL.revokeObjectURL(url);
}

},{"@turf/turf":1,"sweetalert2":2}],4:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[3]);
