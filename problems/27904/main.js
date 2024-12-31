function W(b,u) {//그냥 정해로 풀자.. 이건 사람이 할 짓이 아니야..
    if(!A(b)[0] && b.flat(1).filter(v=>v==='.').length) {
        return W(A(b)[1])
    }
    if(u!==undefined) {
        var ar = []
        b[u[0]][u[1]] = 'X'
        ar.push(W(b))
        b[u[0]][u[1]] = 'O'
        ar.push(W(b))
        return ar.flat(1)
    }else if(b[3][0] == '.') { return W(b,[3,0]) }else if(b[3][0] == 'X') {
        if(b[0][0] == '.') { return W(b,[0,0]) }else if(b[0][0] == 'X') {
            if(b[1][2] == '.') { return W(b,[1,2]) }else if(b[1][2] == 'X') {
                if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'O') {
                    return 'O'
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                    if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                        return 'O'
                    } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
                        return 'O'
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                        return 'O'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
                    if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                        return 'O'
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                        return 'O'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    if(b[2][0] == '.') { return W(b,[2,0]) }else if(b[2][0] == 'X') {
                        return 'O'
                    } else if(b[0][3] == '.') { return W(b,[0,3]) }else if(b[0][3] == 'X') {
                        return 'O'
                    } else if(b[2][1] == '.') { return W(b,[2,1]) }else if(b[2][1] == 'X') {
                        return 'O'
                    } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                        return 'X'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                    return 'O'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[2][0] == '.') { return W(b,[2,0]) }else if(b[2][0] == 'X') {
                if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'O') {
                    if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                        return 'O'
                    } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                        return 'O'
                    } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
                        return 'O'
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                        return 'O'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
                    if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                        return 'O'
                    } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                        return 'O'
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                        return 'O'
                    } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                        return 'X'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                    if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                        return 'O'
                    } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                        if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                            return 'X'
                        } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                            return 'X'
                        } else {
                            return 'O'
                        }
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                        return 'O'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    if(b[0][3] == '.') { return W(b,[0,3]) }else if(b[0][3] == 'X') {
                        return 'O'
                    } else if(b[2][1] == '.') { return W(b,[2,1]) }else if(b[2][1] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                    if(b[0][3] == '.') { return W(b,[0,3]) }else if(b[0][3] == 'X') {
                        return 'O'
                    } else if(b[2][1] == '.') { return W(b,[2,1]) }else if(b[2][1] == 'X') {
                        return 'O'
                    } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'O') {
                    return 'O'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    return 'X'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[2][1] == '.') { return W(b,[2,1]) }else if(b[2][1] == 'X') {
                if(b[0][3] == '.') { return W(b,[0,3]) }else if(b[0][3] == 'X') {
                    if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'O') {
                        return 'O'
                    } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                        return 'O'
                    } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                        return 'O'
                    } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'O') {
                    if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                        return 'O'
                    } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
                        return 'O'
                    } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                        if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                            return 'X'
                        } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'O') {
                            return 'O'
                        } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                            return 'O'
                        } else {
                            return 'X'
                        }
                    } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                        return 'O'
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                        return 'O'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                    if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                        return 'O'
                    } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                        return 'O'
                    } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                        if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                            return 'O'
                        } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                            return 'X'
                        } else {
                            return 'O'
                        }
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                        return 'X'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                    if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'O') {
                        return 'X'
                    } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                        if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                            return 'O'
                        } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                            return 'O'
                        } else {
                            return 'X'
                        }
                    } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                        return 'X'
                    } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                    if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                        return 'X'
                    } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                        return 'O'
                    } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                        return 'X'
                    } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    return 'O'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'O'
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                    return 'O'
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[0][3] == '.') { return W(b,[0,3]) }else if(b[0][3] == 'O') {
                if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'O') {
                    if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
                        return 'X'
                    } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                        if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                            return 'X'
                        } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                            return 'X'
                        } else {
                            return 'O'
                        }
                    } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                        return 'O'
                    } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                    if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                        return 'X'
                    } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'O') {
                        return 'X'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'O') {
                        return 'X'
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                        return 'O'
                    } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
                        return 'X'
                    } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                        return 'O'
                    } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
                        if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                            return 'X'
                        } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                            return 'X'
                        } else {
                            return 'O'
                        }
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'O'
                    } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                        return 'X'
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'X'
                } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
                    if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                        return 'X'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
                    return 'O'
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'O') {
                if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
                    return 'O'
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                    if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                        return 'O'
                    } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                        return 'O'
                    } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                        return 'X'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'X'
                    } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                        return 'O'
                    } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                    return 'O'
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                    return 'O'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'X'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                    if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                        return 'X'
                    } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                        return 'X'
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                        return 'X'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                    return 'O'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'O'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                    return 'O'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'O'
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                    return 'O'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'O') {
                    return 'O'
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                return 'X'
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[1][2] == '.') { return W(b,[1,2]) }else if(b[1][2] == 'O') {
            if(b[2][0] == '.') { return W(b,[2,0]) }else if(b[2][0] == 'O') {
                if(b[0][3] == '.') { return W(b,[0,3]) }else if(b[0][3] == 'O') {
                    if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
                        return 'X'
                    } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                        return 'X'
                    } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                        return 'X'
                    } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[2][1] == '.') { return W(b,[2,1]) }else if(b[2][1] == 'O') {
                    if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
                        return 'X'
                    } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                        return 'X'
                    } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                        return 'X'
                    } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
                    if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                        return 'X'
                    } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                        return 'X'
                    } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                        if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                            return 'X'
                        } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                            return 'X'
                        } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                            return 'X'
                        } else {
                            return 'O'
                        }
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                        return 'O'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'X'
                    } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'O') {
                    if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                        return 'X'
                    } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'O') {
                        return 'X'
                    } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                        if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                            return 'O'
                        } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                            return 'O'
                        } else {
                            return 'X'
                        }
                    } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                        return 'X'
                    } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                    if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                        return 'O'
                    } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                        if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                            return 'O'
                        } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                            return 'X'
                        } else {
                            return 'O'
                        }
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                        return 'X'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                    if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                        return 'X'
                    } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'O') {
                        return 'X'
                    } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                        return 'X'
                    } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                    return 'O'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'O') {
                    return 'X'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    return 'O'
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[2][1] == '.') { return W(b,[2,1]) }else if(b[2][1] == 'X') {
                if(b[0][3] == '.') { return W(b,[0,3]) }else if(b[0][3] == 'X') {
                    if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                        return 'O'
                    } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                        return 'O'
                    } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                        if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'O') {
                            return 'O'
                        } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                            return 'O'
                        } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                            return 'X'
                        } else {
                            return 'O'
                        }
                    } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                        if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'O') {
                            return 'O'
                        } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
                            return 'O'
                        } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                            return 'X'
                        } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                            return 'X'
                        } else {
                            return 'O'
                        }
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                        return 'X'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'O') {
                        return 'X'
                    } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'O') {
                        return 'O'
                    } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
                    if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                        if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                            return 'X'
                        } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                            return 'X'
                        } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                            return 'X'
                        } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'O') {
                            return 'O'
                        } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                            return 'X'
                        } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                            return 'X'
                        } else {
                            return 'O'
                        }
                    } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                        if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                            return 'X'
                        } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                            if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                                return 'X'
                            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                                return 'O'
                            } else {
                                return 'X'
                            }
                        } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'O') {
                            return 'O'
                        } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                            return 'X'
                        } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                            return 'O'
                        } else {
                            return 'X'
                        }
                    } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                        return 'O'
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                        if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                            return 'X'
                        } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                            return 'X'
                        } else {
                            return 'O'
                        }
                    } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                        return 'O'
                    } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                        return 'O'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
                    if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                        return 'O'
                    } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                        return 'O'
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                        return 'O'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'X'
                    } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                        return 'O'
                    } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                    if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                        return 'X'
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                        if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                            return 'O'
                        } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                            return 'X'
                        } else {
                            return 'O'
                        }
                    } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'O') {
                        return 'X'
                    } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                        return 'X'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                    return 'O'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                    if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                        return 'O'
                    } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'O'
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[0][3] == '.') { return W(b,[0,3]) }else if(b[0][3] == 'O') {
                if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
                    if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                        return 'X'
                    } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                        return 'X'
                    } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                        return 'X'
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                    return 'X'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'O') {
                    return 'X'
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'O') {
                    return 'X'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                        return 'O'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                    return 'X'
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
                if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                    if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'O') {
                        return 'X'
                    } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                        if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                            return 'O'
                        } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                            return 'O'
                        } else {
                            return 'X'
                        }
                    } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                        return 'X'
                    } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                    if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                        return 'X'
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                        return 'X'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'O') {
                        return 'O'
                    } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                        return 'X'
                    } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                    if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                        return 'O'
                    } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                    if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                        return 'O'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'O') {
                    return 'X'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
                if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                    if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                        return 'O'
                    } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                        return 'O'
                    } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                    if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                        return 'O'
                    } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'O'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    return 'X'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                    if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                        return 'X'
                    } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'O') {
                    return 'O'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    return 'X'
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                return 'O'
            } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                return 'O'
            } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                return 'O'
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                return 'X'
            } else {
                return 'O'
            }
        } else if(b[2][0] == '.') { return W(b,[2,0]) }else if(b[2][0] == 'X') {
            if(b[2][1] == '.') { return W(b,[2,1]) }else if(b[2][1] == 'X') {
                return 'O'
            } else if(b[0][3] == '.') { return W(b,[0,3]) }else if(b[0][3] == 'X') {
                if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'O') {
                    return 'O'
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                    return 'O'
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                    return 'O'
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'O') {
                if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                    return 'O'
                } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                    if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                        return 'O'
                    } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                        return 'O'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'O') {
                    if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                        return 'O'
                    } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    return 'O'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
                if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                    return 'O'
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                        return 'X'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'O') {
                        return 'O'
                    } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'O'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                    return 'O'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                    if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                        return 'O'
                    } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'O') {
                    return 'X'
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'O'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                return 'O'
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                return 'O'
            } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                return 'X'
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[2][1] == '.') { return W(b,[2,1]) }else if(b[2][1] == 'X') {
            if(b[0][3] == '.') { return W(b,[0,3]) }else if(b[0][3] == 'X') {
                if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'O') {
                    return 'O'
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
                    if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                        return 'O'
                    } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                        return 'O'
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                    if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                        return 'O'
                    } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                        return 'O'
                    } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                    return 'O'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'O') {
                if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                    if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                        return 'O'
                    } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
                        return 'O'
                    } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                        if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                            return 'O'
                        } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                            return 'O'
                        } else {
                            return 'X'
                        }
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                        return 'O'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
                    if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                        return 'O'
                    } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                        return 'X'
                    } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                    if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                        return 'O'
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                        return 'O'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    return 'X'
                } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                    return 'X'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'O'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    return 'X'
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                    return 'X'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                    if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                        return 'O'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'O') {
                    return 'X'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                    return 'O'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                    return 'O'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'O'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                    return 'X'
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                return 'O'
            } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                return 'O'
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                return 'X'
            } else {
                return 'O'
            }
        } else if(b[0][3] == '.') { return W(b,[0,3]) }else if(b[0][3] == 'O') {
            if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'O') {
                return 'X'
            } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
                if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'X'
                } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                    return 'X'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'O') {
                    return 'X'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                    return 'O'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                    return 'X'
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                        return 'X'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                    return 'X'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
                return 'O'
            } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                return 'X'
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'O') {
            if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
                if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                    return 'O'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                        return 'O'
                    } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                    return 'X'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                    return 'O'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                    return 'O'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'O'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                    return 'X'
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                return 'O'
            } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                return 'O'
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                return 'X'
            } else {
                return 'O'
            }
        } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
            if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'O') {
                if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'X'
                } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                    return 'X'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    return 'X'
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'O') {
                return 'X'
            } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                return 'O'
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
            if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                return 'X'
            } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'O'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'O') {
                return 'X'
            } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                return 'X'
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                return 'X'
            } else {
                return 'O'
            }
        } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
            return 'O'
        } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
            if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                return 'O'
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
            return 'X'
        } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
            return 'O'
        } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
            return 'O'
        } else {
            return 'X'
        }
    } else if(b[0][0] == '.') { return W(b,[0,0]) }else if(b[0][0] == 'O') {
        if(b[1][2] == '.') { return W(b,[1,2]) }else if(b[1][2] == 'O') {
            if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
                return 'X'
            } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    return 'X'
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                    return 'X'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    return 'X'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                if(b[2][0] == '.') { return W(b,[2,0]) }else if(b[2][0] == 'O') {
                    return 'X'
                } else if(b[0][3] == '.') { return W(b,[0,3]) }else if(b[0][3] == 'O') {
                    return 'X'
                } else if(b[2][1] == '.') { return W(b,[2,1]) }else if(b[2][1] == 'O') {
                    return 'X'
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                return 'O'
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                return 'X'
            } else {
                return 'O'
            }
        } else if(b[2][0] == '.') { return W(b,[2,0]) }else if(b[2][0] == 'O') {
            if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
                if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    return 'X'
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                    return 'X'
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                    return 'X'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    return 'X'
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                    return 'X'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                    return 'X'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'O'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    return 'X'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                        return 'X'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                    return 'O'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                if(b[0][3] == '.') { return W(b,[0,3]) }else if(b[0][3] == 'O') {
                    return 'X'
                } else if(b[2][1] == '.') { return W(b,[2,1]) }else if(b[2][1] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'O'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[0][3] == '.') { return W(b,[0,3]) }else if(b[0][3] == 'O') {
                return 'X'
            } else if(b[2][1] == '.') { return W(b,[2,1]) }else if(b[2][1] == 'O') {
                return 'X'
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[2][1] == '.') { return W(b,[2,1]) }else if(b[2][1] == 'O') {
            if(b[0][3] == '.') { return W(b,[0,3]) }else if(b[0][3] == 'O') {
                if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
                    return 'X'
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    return 'X'
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                    return 'X'
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
                if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                    return 'X'
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                    return 'X'
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                        return 'X'
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                        return 'X'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                    return 'O'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'O') {
                if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                    return 'X'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'O') {
                    return 'X'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                        return 'O'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                    return 'X'
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'O'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                        return 'O'
                    } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'X'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'O') {
                    return 'X'
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    return 'X'
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                return 'O'
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'O') {
                return 'X'
            } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                return 'O'
            } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                return 'X'
            } else {
                return 'O'
            }
        } else if(b[0][3] == '.') { return W(b,[0,3]) }else if(b[0][3] == 'X') {
            if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'O') {
                    return 'O'
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                        return 'X'
                    } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                    return 'O'
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    return 'O'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'O'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'O'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                    return 'X'
                } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'O') {
                    return 'O'
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    return 'O'
                } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'O') {
                    if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                        return 'O'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                    return 'X'
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                    return 'O'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                return 'X'
            } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'O') {
                if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                    return 'O'
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'O') {
                return 'X'
            } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                return 'O'
            } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
            if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                return 'X'
            } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                    return 'X'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'O') {
                    return 'X'
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                    return 'X'
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'O') {
                    return 'X'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    return 'O'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                return 'O'
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'O') {
                return 'O'
            } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                return 'X'
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                return 'X'
            } else {
                return 'O'
            }
        } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
            if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                    return 'O'
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'O'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                    return 'O'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                return 'X'
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'O') {
                return 'O'
            } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                return 'X'
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                return 'X'
            } else {
                return 'O'
            }
        } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
            if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                return 'X'
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'O') {
                return 'X'
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
            if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                return 'X'
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                return 'X'
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
            if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                return 'O'
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
            return 'O'
        } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
            return 'X'
        } else {
            return 'O'
        }
    } else if(b[1][2] == '.') { return W(b,[1,2]) }else if(b[1][2] == 'X') {
        if(b[2][0] == '.') { return W(b,[2,0]) }else if(b[2][0] == 'X') {
            if(b[0][3] == '.') { return W(b,[0,3]) }else if(b[0][3] == 'X') {
                if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'O') {
                    return 'O'
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                    return 'O'
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                    return 'O'
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[2][1] == '.') { return W(b,[2,1]) }else if(b[2][1] == 'X') {
                if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'O') {
                    return 'O'
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                    return 'O'
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                    return 'O'
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'O') {
                if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                    return 'O'
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
                    return 'O'
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                        return 'X'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'O') {
                        return 'O'
                    } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'O'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                    return 'O'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                    return 'O'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'O'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                        return 'O'
                    } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'O') {
                    return 'X'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                        return 'O'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                    return 'X'
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                    return 'X'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'O'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'X'
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                return 'O'
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                return 'O'
            } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                return 'O'
            } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                return 'X'
            } else {
                return 'O'
            }
        } else if(b[2][1] == '.') { return W(b,[2,1]) }else if(b[2][1] == 'O') {
            if(b[0][3] == '.') { return W(b,[0,3]) }else if(b[0][3] == 'O') {
                if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                    return 'X'
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'O') {
                    return 'X'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'O') {
                    if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
                        return 'X'
                    } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                        return 'X'
                    } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                        return 'O'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'O'
                    } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
                        return 'X'
                    } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
                    return 'X'
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                    return 'X'
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                    return 'O'
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
                if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                    if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                        return 'X'
                    } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                        return 'X'
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                        return 'X'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'O') {
                        return 'O'
                    } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                        return 'X'
                    } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                    if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                        return 'X'
                    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                        if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                            return 'X'
                        } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                            return 'O'
                        } else {
                            return 'X'
                        }
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'O') {
                        return 'O'
                    } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                        return 'X'
                    } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                    return 'O'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                    if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                        return 'X'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                    return 'O'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'O'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
                if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                    return 'O'
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                    return 'O'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                    return 'O'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'O'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    return 'X'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                    if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                        return 'O'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'O') {
                    return 'X'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                return 'O'
            } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                    return 'O'
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                return 'X'
            } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                return 'O'
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[0][3] == '.') { return W(b,[0,3]) }else if(b[0][3] == 'X') {
            if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'O') {
                if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                    return 'O'
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                    return 'O'
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
                    return 'O'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                return 'O'
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                return 'O'
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                return 'O'
            } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                    return 'O'
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                return 'X'
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'O') {
            if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
                if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                    return 'O'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                        return 'O'
                    } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                        return 'O'
                    } else {
                        return 'X'
                    }
                } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                    return 'X'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                    return 'O'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                    return 'O'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'O'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                    return 'X'
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                return 'O'
            } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                return 'O'
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                return 'X'
            } else {
                return 'O'
            }
        } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
            if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'O') {
                if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'X'
                } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                    return 'X'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    return 'X'
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'O') {
                return 'X'
            } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                return 'O'
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
            if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                return 'X'
            } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'O'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'O') {
                return 'X'
            } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                return 'X'
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                return 'X'
            } else {
                return 'O'
            }
        } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
            return 'O'
        } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
            if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                return 'O'
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
            return 'X'
        } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
            return 'O'
        } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
            return 'O'
        } else {
            return 'X'
        }
    } else if(b[2][0] == '.') { return W(b,[2,0]) }else if(b[2][0] == 'O') {
        if(b[2][1] == '.') { return W(b,[2,1]) }else if(b[2][1] == 'O') {
            return 'X'
        } else if(b[0][3] == '.') { return W(b,[0,3]) }else if(b[0][3] == 'O') {
            if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
                return 'X'
            } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                return 'X'
            } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                return 'X'
            } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                return 'X'
            } else {
                return 'O'
            }
        } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
            if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'O') {
                return 'X'
            } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                    return 'X'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'O') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                    return 'X'
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                return 'X'
            } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                return 'O'
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
            if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                return 'X'
            } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    return 'X'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                return 'O'
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                return 'X'
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
            if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'O'
                } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'O') {
                return 'X'
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
            if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                return 'X'
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'O') {
                return 'X'
            } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                return 'O'
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
            return 'O'
        } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'O') {
            return 'O'
        } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
            return 'X'
        } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
            return 'X'
        } else {
            return 'O'
        }
    } else if(b[2][1] == '.') { return W(b,[2,1]) }else if(b[2][1] == 'O') {
        if(b[0][3] == '.') { return W(b,[0,3]) }else if(b[0][3] == 'O') {
            if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
                return 'X'
            } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    return 'X'
                } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                    return 'X'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    return 'X'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                    return 'O'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                return 'X'
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'O') {
                return 'X'
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
            if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'O') {
                if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                    return 'X'
                } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                    return 'X'
                } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                        return 'X'
                    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                        return 'X'
                    } else {
                        return 'O'
                    }
                } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                    return 'X'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                    return 'X'
                } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    return 'O'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                    return 'X'
                } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                return 'O'
            } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                return 'O'
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'O') {
                return 'X'
            } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                return 'X'
            } else {
                return 'O'
            }
        } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
            if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                return 'O'
            } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'O') {
                return 'O'
            } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                    return 'X'
                } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                    return 'X'
                } else {
                    return 'O'
                }
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                return 'O'
            } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                return 'O'
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                return 'X'
            } else {
                return 'O'
            }
        } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
            if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                return 'X'
            } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                return 'X'
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'O') {
                return 'O'
            } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                return 'X'
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                return 'X'
            } else {
                return 'O'
            }
        } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
            if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                return 'O'
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
            if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                return 'O'
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                return 'X'
            } else {
                return 'O'
            }
        } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'O') {
            return 'X'
        } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
            return 'X'
        } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
            return 'X'
        } else {
            return 'O'
        }
    } else if(b[0][3] == '.') { return W(b,[0,3]) }else if(b[0][3] == 'X') {
        if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
            return 'O'
        } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'O') {
            if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                return 'O'
            } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                return 'O'
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                return 'O'
            } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                return 'X'
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
            if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
                return 'X'
            } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                    return 'O'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
                return 'O'
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                return 'X'
            } else {
                return 'O'
            }
        } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
            return 'O'
        } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
            if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                return 'O'
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
            return 'O'
        } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
            return 'X'
        } else {
            return 'O'
        }
    } else if(b[3][1] == '.') { return W(b,[3,1]) }else if(b[3][1] == 'X') {
        if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'X') {
            if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'O') {
                return 'X'
            } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                    return 'O'
                } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                    return 'O'
                } else {
                    return 'X'
                }
            } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                return 'X'
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
            if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
                return 'X'
            } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
                return 'X'
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'O') {
                return 'O'
            } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                return 'X'
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                return 'X'
            } else {
                return 'O'
            }
        } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
            if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                return 'O'
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'O') {
            if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
                return 'O'
            } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
                return 'X'
            } else {
                return 'O'
            }
        } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'O') {
            return 'X'
        } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
            return 'X'
        } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
            return 'X'
        } else {
            return 'O'
        }
    } else if(b[1][1] == '.') { return W(b,[1,1]) }else if(b[1][1] == 'O') {
        if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
            if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
                return 'O'
            } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'X') {
                return 'O'
            } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
            if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
                return 'O'
            } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
                return 'X'
            } else {
                return 'O'
            }
        } else if(b[0][2] == '.') { return W(b,[0,2]) }else if(b[0][2] == 'X') {
            return 'O'
        } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
            return 'X'
        } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
            return 'O'
        } else {
            return 'X'
        }
    } else if(b[1][0] == '.') { return W(b,[1,0]) }else if(b[1][0] == 'X') {
        if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'X') {
            return 'X'
        } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
            if(b[2][2] == '.') { return W(b,[2,2]) }else if(b[2][2] == 'O') {
                return 'X'
            } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
                return 'O'
            } else {
                return 'X'
            }
        } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'O') {
            return 'O'
        } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
            return 'X'
        } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
            return 'O'
        } else {
            return 'X'
        }
    } else if(b[0][1] == '.') { return W(b,[0,1]) }else if(b[0][1] == 'O') {
        return 'O'
    } else if(b[3][3] == '.') { return W(b,[3,3]) }else if(b[3][3] == 'X') {
        if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'X') {
            return 'X'
        } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
            return 'X'
        } else {
            return 'O'
        }
    } else if(b[2][3] == '.') { return W(b,[2,3]) }else if(b[2][3] == 'X') {
        return 'O'
    } else if(b[1][3] == '.') { return W(b,[1,3]) }else if(b[1][3] == 'O') {
        return 'O'
    } else if(b[3][2] == '.') { return W(b,[3,2]) }else if(b[3][2] == 'X') {
        return 'X'
    } else {
        return 'O'
    }
}

function A(board) {
    var a = board.flat(1)
    var xx = 0
    var oo = 0
    a.forEach(e => {
        if(e=='X') xx++
        if(e=='O') oo++
    })
    if(xx==8&&oo==8) {
        return [0,board,1]
    }else if(xx==8) {
        for(var i = 0; i < 16; i++) {
            if(a[i]=='.') a[i]='O'
        }
        return [0,Array.from({ length: 4 }, (_, i) => a.slice(i * 4, i * 4 + 4)),0]
    }else if(oo==8) {
        for(var i = 0; i < 16; i++) {
            if(a[i]=='.') a[i]='X'
        }
        return [0,Array.from({ length: 4 }, (_, i) => a.slice(i * 4, i * 4 + 4)),0]
    }
    return [1,Array.from({ length: 4 }, (_, i) => a.slice(i * 4, i * 4 + 4)),0]
}

var [n,...input] = require('fs').readFileSync(0).toString().trim().split("\n")
var s = ''
for(var i = 0; i/4 + 1<=n; i+=4) {
    var b = [input[i].split(""),input[i+1].split(""),input[i+2].split(""),input[i+3].split("")]
    var m = W(b)
    //console.log(m)
    if(Array.isArray(m)) {
        if([...new Set(m)].length == 2) {
            m = 1
        }else {
            m = (m[0]=='O')?3:4
        }
    }else {
        if((b.flat(1)).includes('.')) {
            m = (m=='O')?3:4
        }else {
            m = (m=='O')?1:2
        }
    }
    if(m <= 1) {
        s += 'KIPA WINS\n'
    }else if(m == 2) {
        s += 'HAVANA WINS\n'
    }else if(m == 3) {
        s += 'KIPA DECLARES A WIN\n'
    }else if(m == 4) {
        s += 'HAVANA DECLARES A WIN\n'
    }
}
console.log(s)