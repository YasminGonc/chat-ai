import { AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar } from "@radix-ui/react-avatar";
import {fetchContent} from '@croct/plug-next/server';
import type {SlotContent} from '@croct/plug-next';

export default async function Home() {
  const {content} = await fetchContent('title@1', {
    fallback: fallbackContent,
  });

  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>{content.title}</CardTitle>
          <CardDescription>Using Vercel SDK to create a chatbot</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2 text-slate-600 text-sm">
            <Avatar className="h-10 p-[4px]">
              <AvatarFallback>YG</AvatarFallback>
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">Humano:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis ad unde deserunt eum iusto ab ex laboriosam molestiae quia minima modi animi voluptate enim officiis, suscipit minus libero laudantium!</p>
          </div>

          <div className="flex gap-2 text-slate-600 text-sm">
            <Avatar className="h-10 p-[4px]">
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-700">AI:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis ad unde deserunt eum iusto ab ex laboriosam molestiae quia minima modi animi voluptate enim officiis, suscipit minus libero laudantium!</p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="How can I help you?"/>
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

const fallbackContent: SlotContent<'title@1'> = {
  '_component': 'title@1', 
  'title': 'Chat AI'
};
