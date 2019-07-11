import { Technolgy } from './technology';
import { Tag } from './tag';
import { Tool } from './tool';

export class Caselet {
  id: number;
  title: string;
  username: string;
  liked: boolean;
  account: string;
  vertical: string;
  domain: string;
  technologies: Technolgy[];
  tags: Tag[];
  tools: Tool[];
}
