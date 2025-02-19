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
    <div className="w-full my-20">
      <div className="grid grid-cols-2 gap-10 ">
        <div className="flex flex-col h-[400px] justify-around  ">
          <div>
            <h1 className="text-3xl mb-2">Gardons Contacte</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
              dicta consequatur, exercitationem, ut error architecto autem
              accusamus fuga molestias assumenda totam repudiandae. Quas
              inventore voluptate id ad reiciendis, quaerat voluptas?
            </p>
          </div>
          <div className="flex items-start gap-4 ">
            <GiPositionMarker
              size=""
              className="rounded-full  size-11 p-3 bg-zinc-200 text-black"
            />
            <div className="flex-flex-col">
              <p className="font-semibold">Localisation:</p>
              <p>Belgique</p>
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <IoEarth
              size=""
              className="rounded-full  size-11 p-3 bg-zinc-200 text-black"
            />
            <div className="flex-flex-col">
              <p className="font-semibold">Langues:</p>
              <p>Francais, English, Русский</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MdOutlineMail
              size=""
              className="rounded-full size-11 p-3 bg-zinc-200 text-black"
            />
            <div className="flex-flex-col">
              <p className="font-semibold">Email:</p>
              <p>test@mail.com</p>
            </div>
          </div>
        </div>

        <div className="w-full  flex justify-end">
          <form
            action=""
            className="flex flex-col gap-4 justify-between h-full w-full"
          >
            <Card className="h-full border-none bg-transparent">
              <CardContent className="h-full">
                <div className="flex flex-col gap-4 h-full justify-between">
                  <div>
                    <Label>Nom</Label>
                    <Input className="dark:bg-zinc-900" />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input className="dark:bg-zinc-900" />
                  </div>
                  <div>
                    <Label>Message</Label>
                    <Textarea className="h-32 resize-none dark:bg-zinc-900" />
                  </div>
                  <Button>Envoyer</Button>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </div>
  );
}
