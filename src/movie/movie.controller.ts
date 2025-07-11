import { Body, Controller, Get, Post, Query, Headers, Req, Res, Param, Put, Delete } from '@nestjs/common';

// import type { Request, Response } from 'express';
import { MovieService } from './movie.service';
import { MovieDto } from './dto/movie.dto';


@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
   findAll() {
    return this.movieService.findAll();
    
  }

  @Get(':id')
   findById(@Param('id') id: string) {
    return this.movieService.findById(id);
    
  }
  
  
  @Post()
  create(@Body() dto: MovieDto) {
    return this.movieService.create(dto);
  }

  @Put(":id")
  update(@Param('id') id: string, @Body() dto: MovieDto) {
    return this.movieService.update(id, dto);
  }
  

  @Delete(':id')
  delete(@Param('id') id: string) {
   return this.movieService.delete(id);
   
 }
  
}
  
 




//   @Get()
//   findAll(@Query() query: any) {
//     return JSON.stringify(query)
//   }

//   @Get(':id')
//   findById(@Param('id') id: string) {
//     return {id}
//   }

//   @Post()
//   create(@Body() body: {title: string; genre: string}) {
//     return body
//   }

//   @Get('headers')
//   getHeaders(@Headers() headers: any) {
//     return headers;
//   }

//   @Get('user-agent')
//   getUserAgent(@Headers('user-agent') userAgent: string) {
//     return userAgent;
//   }

//   @Get('request')
//   getRequestDetails(@Req() req: Request) {
//     return {
//       method: req.method,
//       url: req.url,
//       headers: req.headers,
//       query: req.query,
//       params: req.params,
//     };
//   }


//   @Get('response')
//   getResponseDetails(@Res() res: Response) {
//    res.status(201).json({ message: 'Hello' })
//   }
// }


