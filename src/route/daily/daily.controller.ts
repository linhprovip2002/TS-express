import DailyService from "./daily.service";
import FlightRecord from "../../model/daily.model";
import { Express } from "express";
class DailyController {
  getAllDaily(req, res): FlightRecord[] {
    const data: FlightRecord[] = DailyService.getDaily();
    return res.json(data);
  }
}

export default new DailyController();