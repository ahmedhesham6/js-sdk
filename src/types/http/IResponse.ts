import http from "http";
import Restana from "restana";

export default interface IResponse extends http.ServerResponse, Restana.ResponseExtensions { }