import data from '../../../data.json';
import FlightRecord from '../../model/daily.model';

class DailyService {
    getDaily():FlightRecord[]{
        return data;
    }
}

export default new DailyService();