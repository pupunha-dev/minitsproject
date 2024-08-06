import { Card } from "./Card"
import { IMeta } from "../App"

interface IMetaList {
  meta: IMeta[];
}

export const MetaList = ({ meta }: IMetaList) => {

  return (
    <ul>
      {meta.map(mt => (
        <li key={mt.id}>
          <Card title={mt.title}>
            <p>{mt.description}</p>
          </Card>
        </li>
      ))}
    </ul>
  )
}