import { TextareaHTMLAttributes } from "react";
import { IFieldProps } from "../field/field.interface";


type TypeInputPropsField = TextareaHTMLAttributes<HTMLTextAreaElement> & IFieldProps

export interface ITextArea extends TypeInputPropsField {}