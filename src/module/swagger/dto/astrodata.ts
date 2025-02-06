// src/swagger/dto/default-astrodata.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class DefaultAstrologicalData {
  @ApiProperty({ example: 6 })
  day: number;

  @ApiProperty({ example: 1 })
  month: number;

  @ApiProperty({ example: 2000 })
  year: number;

  @ApiProperty({ example: 7 })
  hour: number;

  @ApiProperty({ example: 45 })
  min: number;

  @ApiProperty({ example: 19.132 })
  lat: number;

  @ApiProperty({ example: 72.342 })
  lon: number;

  @ApiProperty({ example: 5.5 })
  tzone: number;
}
