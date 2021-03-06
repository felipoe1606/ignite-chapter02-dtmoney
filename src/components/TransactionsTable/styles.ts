import styled from "styled-components"

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;   // 0 = left and right / 0.5rem = top and bottom.

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;

            &:last-child {
                padding: 1rem 0;
            }
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child {
                color: var(--text-title);
            }

            &:last-child {
                padding: 1rem 0.25rem;

                button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: transparent;
                    border-style: hidden;

                    &:hover {
                        filter: brightness(0.9);
                    }

                    img {
                        width: 30px;
                        height: 30px;
                    }
                }

                
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red)
            }
        }
    }
`;