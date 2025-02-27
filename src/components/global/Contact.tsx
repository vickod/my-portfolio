import { Card, CardContent } from "@/components/ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { GiPositionMarker } from "react-icons/gi";
import { IoEarth } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="w-full" id="contact">
      <div className="mt-36"></div>
      <div className="md:grid md:grid-cols-2 gap-10 flex flex-col items-center  ">
        <div className="flex flex-col h-[400px] lg:h-[500px] gap-8  ">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Gardons Contacte</h1>
            <p className="dark:text-zinc-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
              dicta consequatur, exercitationem, ut error architecto autem
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4 ">
              <GiPositionMarker
                size=""
                className="rounded-full  size-11 p-3 bg-zinc-200 text-black"
              />
              <div className="flex-flex-col">
                <p className="font-semibold">Localisation:</p>
                <p className="dark:text-zinc-300">Belgique</p>
              </div>
            </div>
            <div className="flex items-center gap-4 ">
              <IoEarth
                size=""
                className="rounded-full  size-11 p-3 bg-zinc-200 text-black"
              />
              <div className="flex-flex-col">
                <p className="font-semibold">Langues:</p>
                <p className="dark:text-zinc-300">Francais, English, Русский</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MdOutlineMail
                size=""
                className="rounded-full size-11 p-3 bg-zinc-200 text-black"
              />
              <div className="flex-flex-col">
                <p className="font-semibold">Email:</p>
                <p className="dark:text-zinc-300">test@mail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-md:h-[500px] h-[400px] lg:h-[500px] flex lg:justify-end justify-start ">
          <form
            action=""
            className="flex flex-col gap-4 justify-between h-full w-full "
          >
            <Card className="h-full border-none bg-transparent">
              <CardContent className="h-full">
                <div className="flex flex-col gap-4 h-full justify-between">
                  <div>
                    {/* <Label>Nom</Label> */}
                    <Input placeholder="Nom" className="dark:bg-zinc-900" />
                  </div>
                  <div>
                    {/* <Label>Email</Label> */}
                    <Input placeholder="Email" className="dark:bg-zinc-900" />
                  </div>
                  <div>
                    {/* <Label>Message</Label> */}
                    <Textarea
                      placeholder="Message"
                      className="max-md:h-48 h-32 lg:h-48 resize-none dark:bg-zinc-900"
                    />
                  </div>
                  <Button className="dark:bg-zinc-300">Envoyer</Button>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
}
