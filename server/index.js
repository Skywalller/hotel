import app from "./services/express.js";
import http from "http";
import axios from "axios";
import connectDb from "./services/db.js";
import Hotel from "./models/hotel.js";
import Room from "./models/room.js";

async function init() {
  const server = http.createServer(app);
  const payload = `
<OTA_HotelInvCountNotifRQ xmlns="http://www.opentravel.org/OTA/2003/05"
                          EchoToken="11122"
                          TimeStamp="2024-03-17T18:04:55.968Z"
                          Version="3.0">
  <Inventories HotelCode="10">
    <Inventory>
      <StatusApplicationControl Start="2024-03-18"
                                End="2024-03-18"
                                InvTypeCode="RoomID_2"/>
      <InvCounts>
        <InvCount Count="0" CountType="2"/>
      </InvCounts>
    </Inventory>
  </Inventories>
</OTA_HotelInvCountNotifRQ>

`;

  const fetchOptions = {
    headers: {
      "Content-Type": "application/xml",
    },
    body: payload,
  };

  app.get("/", async (req, res) => {
    try {
      const hotel = await Hotel.findById("65f752585a4280404ac0de2a");
      const room = await Room.create({
        name: "Deluxe Room",
        price: 10.99,
      });
      hotel.rooms.push(room);
      await hotel.save();
    } catch (error) {}
  });

  app.get("/get", async (req, res) => {
    try {
      const response = await axios.post(
        "https://www.google.com/travel/hotels/uploads/ota/hotel_inv_count_notif",
        payload,
        fetchOptions
      );
      console.log(response);
      return res.json(response.text());
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
  });

  const date = new Date();
  console.log(date);

  connectDb("mongodb://127.0.0.1:27017/Hotel");
  server.listen(3000, () => console.log("Example app listening on port 3000!"));
}

init();
