import chess
import chess.syzygy

# Syzygy 테이블베이스 경로 설정 (다운로드한 rtbz 파일 위치)
tablebase_path = "/Users/watson/Desktop/BOJ/syzygy"

def analyze_position(wk, bk, wp):
    """KPvK 상태를 분석하고 최적의 승진 결과를 반환"""
    board = chess.Board.empty()
    board.set_piece_at(wk, chess.Piece(chess.KING, chess.WHITE))
    board.set_piece_at(bk, chess.Piece(chess.KING, chess.BLACK))
    board.set_piece_at(wp, chess.Piece(chess.PAWN, chess.WHITE))
    board.turn = chess.WHITE  # 백 차례로 설정

    with chess.syzygy.open_tablebase(tablebase_path) as tablebase:
        try:
            # 현재 KPvK 포지션에서 WDL 계산
            wdl = tablebase.probe_wdl(board)
            if wdl == 0:  # 무승부
                return "0"
            elif wdl < 0:  # 패배
                return "Loss"
            else:
                # 승진 후 결과 계산 (퀸과 룩)
                results = {}
                for promote_to, piece_name in [(chess.QUEEN, "Q"), (chess.ROOK, "R")]:
                    board.push(chess.Move(wp, wp + 8))  # 폰 전진
                    board.set_piece_at(wp + 8, chess.Piece(promote_to, chess.WHITE))  # 승진
                    board.turn = chess.BLACK  # 흑 차례로 변경
                    results[piece_name] = tablebase.probe_dtz(board)
                    board.pop()  # 승진 후 복구

                # 승리 선택
                if "Q" in results and "R" in results:
                    best_piece = "Q" if results["Q"] <= results["R"] else "R"
                    return results[best_piece]  # 최적의 수 반환
                elif "Q" in results:
                    return results["Q"]
                elif "R" in results:
                    return results["R"]
                else:
                    return "0"
        except Exception as e:
            print(f"Error analyzing position WK: {wk}, BK: {bk}, WP: {wp} -> {e}")
            return None

# 진행 상황을 출력하며 포지션 분석
with chess.syzygy.open_tablebase(tablebase_path) as tablebase:
    with open("kpvk_positions.txt", "w") as output_file:
        total_positions = 0
        for wk in range(64):  # White King 위치
            for bk in range(64):  # Black King 위치
                if wk == bk:
                    continue  # 두 왕이 같은 위치에 있을 수 없음
                for wp in range(64):  # White Pawn 위치
                    # White Pawn은 승격된 위치에서는 고려하지 않음
                    if chess.square_rank(wp) == 0 or chess.square_rank(wp) == 7:
                        continue
                    
                    total_positions += 1
                    if total_positions % 1000 == 0:
                        print(f"진행 중: {total_positions}번째 포지션 분석 중")

                    # 포지션 분석
                    result = analyze_position(wk, bk, wp)
                    
                    # 결과를 파일에 기록
                    output_file.write(f"{wk},{bk},{wp},{result}\n")

print("모든 포지션 분석 완료")
