import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get() //getting all the users
    findAll(@Query('role') role?: 'Intern' | 'Enginner' | 'Admin') {
        return []
    }
    @Get(':id') //geeting users through id
    findOne(@Param('id') id: string) {
        return { id }
    }
    @Post()  //post route for users
    create(@Body() user: {}){
        return user
    }
    @Patch(':id') //update users
    update(@Param('id') id: string, @Body() userUpdate: {}) {
        return { id, ...userUpdate }
    }
    @Delete(':id') //delete method for user
    delete(@Param('id') id: string) {
        return { id }
    }
}
